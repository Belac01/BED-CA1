// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/userModel.js");

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE USER
// ##############################################################
module.exports.createNewUser = (req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.status(400).send("Error: username or email is missing");
        return;
    }

    const userData = {
        username: req.body.username,
        email: req.body.email
    };

    // Continue with user creation
    const createUserCallback = (error, userResults, fields) => {
        if (error) {
            console.error("Error createNewUser:", error);
            res.status(500).json(error);
        } else {
            const userId = userResults.insertId;

            // Create UserWallet entry
            const userWalletData = {
                user_id: userId
            };

            const createUserWalletCallback = (walletError, walletResults, walletFields) => {
                if (walletError) {
                    console.error("Error creating UserWallet:", walletError);
                    res.status(500).json(walletError);
                } else {
                    // Return the user details and wallet details
                    const response = {
                        user_id: userId,
                        username: userData.username,
                        email: userData.email,
                    };

                    res.status(201).json(response);
                }
            };

            model.insertUserWallet(userWalletData, createUserWalletCallback);
        }
    };

    model.insertSingle(userData, createUserCallback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL USER
// ##############################################################
module.exports.readAllUser = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readAllUser:", error);
            res.status(500).json(error);
        } 
        else res.status(200).json(results);
    }

    model.selectAll(callback);
}

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ USER BY ID
// ##############################################################
module.exports.readUserById = (req, res, next) => {
    // Extracts the user ID from the request parameters and stores it in a data object.
    const data = {
        id: req.params.id
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUserById:", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                // Return error 404 as mentioned
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                // Extracts user information and response with 200 as mentioned in the brief
                const user = results[0];
                res.status(200).json({
                    user_id: user.user_id,
                    username: user.username,
                    email: user.email,
                    total_points: user.total_points || 0  // Ensure total_points is present in the response if dont have then defaults to 0
                });
            }
        }
    };

    model.selectById(data, callback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE USER BY ID
// ##############################################################
module.exports.updateUserById = (req, res, next) => {
    // Checks if the request body contains both a username and an email
    if (!req.body.username || !req.body.email) {
        res.status(400).json({
            message: "Error: Username or email is undefined"
        });
        return;
    }

    // Creates a data object containing the user ID extracted from the request parameters and the updated username, email from the request body
    const data = {
        id: req.params.id,
        username: req.body.username,
        email: req.body.email
    }

    // Proceed with the update if no conflict
    const callback = (updateError, updateResults, updateFields) => {
        if (updateError) {
            console.error("Error updateUserById:", updateError);
            res.status(500).json(updateError);
        } else {
            // Check if the user was found if not give error 404 as mentioned 
            if (updateResults.affectedRows === 0) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                // Return the updated user information as the expected response
                res.status(200).json({
                    user_id: data.id,
                    username: data.username,
                    email: data.email
                });
            }
        }
    }

    // Perform the update
    model.updateById(data, callback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE USER BY ID
// ##############################################################
module.exports.deleteUserById = (req, res, next) => {
    const data = {
        id: req.params.id
    };

    // Delete UserWallet records first
    const deleteWalletCallback = (error, walletResults, walletFields) => {
        if (error) {
            console.error("Error deleteWalletById:", error);
            res.status(500).json(error);
        } else {
            // Now, delete the user
            const deleteUserCallback = (error, results, fields) => {
                if (error) {
                    console.error("Error deleteUserById:", error);
                    res.status(500).json(error);
                } else {
                    if (results.affectedRows == 0) {
                        res.status(404).json({
                            message: "User not found"
                        });
                    } else {
                        res.status(204).send();
                    }
                }
            };

            model.deleteById(data, deleteUserCallback);
        }
    };

    model.deleteByUserId(data, deleteWalletCallback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ USER WALLET BY ID
// ##############################################################
module.exports.readUserWallets = (req, res, next) => {
    const data = {
        id: req.params.id
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUserWallets:", error);
            res.status(500).json(error);
        } else {
            if (results.length === 0) {
                res.status(404).json({
                    message: "User not found or no wallets available"
                });
            } else {
                const userWallet = {
                    user_id: data.id,
                    wallet_id: results[0].wallet_id,
                    balance: results[0].balance.toString()
                };

                res.status(200).json(userWallet);
            }
        }
    };

    model.selectWalletsByUserId(data, callback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ USER PROFILE BY ID
// ##############################################################
module.exports.readUserProfile = (req, res, next) => {
    const userId = req.params.id;

    const userCallback = (error, userResults, fields) => {
        if (error) {
            console.error("Error readUserProfile (User):", error);
            res.status(500).json(error);
        } else {
            if (userResults.length === 0) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                const user = userResults[0];

                // Fetch user wallet information
                model.selectWalletsByUserId({ id: userId }, (walletError, walletResults, walletFields) => {
                    if (walletError) {
                        console.error("Error readUserProfile (Wallet):", walletError);
                        res.status(500).json(walletError);
                    } else {
                        const userWallet = {
                            wallet_id: walletResults.length > 0 ? walletResults[0].wallet_id : null,
                            balance: walletResults.length > 0 ? walletResults[0].balance.toString() : "0"
                        };

                        // Now, get the user inventory
                        model.getUserInventoryById(userId, (inventoryError, inventoryResults, inventoryFields) => {
                            if (inventoryError) {
                                console.error("Error readUserProfile (Inventory):", inventoryError);
                                res.status(500).json(inventoryError);
                            } else {
                                // Fetch the user's guild information
                                model.getGuildByUserId(userId, (guildError, guildResults, guildFields) => {
                                    if (guildError) {
                                        console.error("Error readUserProfile (Guild):", guildError);
                                        res.status(500).json(guildError);
                                    } else {
                                        const guildName = guildResults.length > 0 ? guildResults[0].guild_name : "None";

                                        // Check if the inventory is empty
                                        const inventoryIsEmpty = inventoryResults.length === 0;

                                        // Combine user information, wallet data, inventory data, and guild data
                                        const response = {
                                            user_id: user.user_id,
                                            username: user.username,
                                            email: user.email,
                                            total_points: user.total_points || 0,
                                            ...userWallet,
                                            guild_name: guildName,  // Include the guild name in the response
                                            inventory: inventoryIsEmpty ? "Inventory is empty" : inventoryResults
                                        };

                                        res.status(200).json(response);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
    };

    model.selectById({ id: userId }, userCallback);
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ USER INVENTORY BY ID
// ##############################################################
module.exports.readUserInventory = (req, res, next) => {
    const userId = req.params.id;

    // Check if the user exists before querying the inventory
    model.getUserById(userId, (error, userResults, fields) => {
        if (error) {
            console.error("Error checking user existence:", error);
            res.status(500).json(error);
        } else {
            if (userResults.length === 0) {
                // User not found
                res.status(404).json({ message: "User not found." });
            } else {
                // User exists, proceed to fetch inventory
                const callback = (error, inventoryResults, fields) => {
                    if (error) {
                        console.error("Error readUserInventory:", error);
                        res.status(500).json(error);
                    } else {
                        if (inventoryResults.length === 0) {
                            // No items in inventory
                            res.status(200).json({ message: "There is nothing in the inventory for this user." });
                        } else {
                            // Send the inventory data
                            res.status(200).json(inventoryResults);
                        }
                    }
                };

                model.getUserInventoryById(userId, callback);
            }
        }
    });
};

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE INVENTORY ITEM BY ID
// ##############################################################
module.exports.deleteUserInventoryById = (req, res, next) => {
    const data = {
        userId: req.params.id,
        inventoryId: req.params.inventoryid
    };

    const errorCallback = (error) => {
        console.error("Error deleteUserInventoryById:", error);
        res.status(404).json(error);
    };

    const successCallback = (results) => {
        if (results.affectedRows === 0) {
            // Inventory item not found, so respond with a 404 Not Found status
            res.status(404).json({
                message: "Inventory item not found"
            });
        } else {
            // A successful deletion with no errors returns a 204 status code without any response body
            res.status(204).send(); // 204 No Content
        }
    };

    model.checkUserExistence(data.userId, errorCallback, () => {
        model.deleteUserInventoryById(data, successCallback, errorCallback);
    });
};
# Starter Repository for BED CA1 ASSIGNMENT

## Sections of the README
|Section|
|---|
|[Prerequisites or dependencies](https://github.com/ST0503-BED/bed-ca1-Belac01#prerequisites-or-dependencies)|
|[How to run](https://github.com/ST0503-BED/bed-ca1-Belac01#how-to-run)|
|[Folder structure](https://github.com/ST0503-BED/bed-ca1-Belac01#folder-structure)|
|[Dbdiagram](https://github.com/ST0503-BED/bed-ca1-Belac01#dbdiagram)|
|[Routes details](https://github.com/ST0503-BED/bed-ca1-Belac01#routes-details)|
|[MYSQL tables](https://github.com/ST0503-BED/bed-ca1-Belac01/tree/main#mysql-tables)|



## Prerequisites or dependencies
> [!WARNING]
> Before running the tests, ensure that the following prerequisites are installed:
> - Node.js
> - npm (Node Package Manager)

> [!WARNING]
>Before running the the tests, ensure that the following dependencies are installed:
> - dotenv
> - express
> - mysql2
> - nodemon

> [!TIP]
> Under integrated terminal of the root directory run the code ```npm run dotenv express mysql2 nodemon``` to install the required dependencies before continuing.

--- 

## How to run
1. To run the code, in integrated terminal use the code```npm run init_tables``` to first reset the tables.
2. Run the code ```npm run dev``` to start.

---

## Folder Structure

```
- bed-ca1-Belac01
    ├── node_modules
    ├── src
    |    ├── configs
    |    |    └── initTables.js
    |    ├── controllers
    |    |    ├── guildController.js
    |    |    ├── shopController.js 
    |    |    ├── taskController.js 
    |    |    ├── taskProgressController.js 
    |    |    └── userController.js
    |    ├── middlewares
    |    |    ├── middleware.js
    |    ├── models
    |    |    ├── guildModel.js
    |    |    ├── shopModel.js
    |    |    ├── taskModel.js
    |    |    ├── taskProgressModel.js
    |    |    └── userModel.js      
    |    ├── routes
    |    |    ├── guildRoutes.js
    |    |    ├── shopRoutes.js
    |    |    ├── taskRoutes.js
    |    |    ├── taskProgressRoutes.js
    |    |    └── userRoutes.js
    |    ├── services
    |    |    └──db.js
    |    └── app.js
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── README.md         
```
---

## Dbdiagram

![image](https://github.com/ST0503-BED/bed-ca1-Belac01/assets/148026391/f8bc23d3-992e-4490-9efb-12334d9f10d8)

---

## Routes details

|Routes|
|---|
|[Users Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#user-routes)|
|[Tasks Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#tasks-routes)|
|[TaskProgress Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#taskprogress-routes)|
|[Wallet Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#wallet-routes)|
|[Shop Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#shop-routes)|
|[Inventory Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#inventory-routes)|
|[Guild Routes](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#guild-routes)|

---

### USER ROUTES

|Section A|
|---|
|[POST /users](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-users)|
|[GET /users](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-users)|
|[GET /users/{user_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_id)|
|[PUT /users/{user_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-usersuser_id)|
|[DELETE /users/{user_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-usersuser_id)|

|Section B|
|---|
|[GET /users/{user_id}/wallet](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_idwallet)|
|[GET /users/{user_id}/profile](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_idprofile)|
|[GET /users/{user_id}/inventory](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_idinventory)|
|[DELETE /users/{user_id}/inventory/{inventory_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-usersuser_idinventoryinventory_id)|

---

#### Section A
---

##### **POST /users**

Route: router.post('/', controller.checkEmailExistence, controller.checkUsernameExistence, controller.createNewUser);<br>
Input: localhost:3000/users/<br>
Purpose: Create a new user by providing their username and email in the request body<br>
Req.params: None<br>
Example Req.body:
``` json
{
"username": "greenUser123",
"email": "user123@example.com"
}
```
Example Response:
```json
{
"user_id": 1,
"username": "greenUser123",
"email": "user123@example.com"
}
```
Status Code: 201 Created<br>
Error handling:
- If the provided email is already associated with another user, return 409 Conflict - done
- If the provided username is already associated with another user, return 409 Conflict - done
- If the request body is missing a username or email, return 400 Bad Request - done

---

##### **GET /users**

Route: router.get('/', controller.readAllUser);<br>
Input: localhost:3000/users/<br>
Purpose: Retrieve a list of all users with their respective user_id, username, and email<br>
Req.params: None<br>
Example Req.body: None<br>
Example Response:
```json
[
 {
 "user_id": 1,
 "username": "greenUser123",
 "email": "user123@example.com"
 },
 {
 "user_id": 2,
 "username": "ecoWarrior",
 "email": "warrior@example.com"
 }
]
```
Status Code: 200 OK<br>
Error handling: None

---

##### **GET /users/{user_id}**

Route: router.get('/:id', controller.readUserById);<br>
Input: localhost:3000/users/:user_id<br>
Purpose: Retrieve details of a specific user by providing their user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response:
```json 
{
 "user_id": 1,
 "username": "greenUser123",
 "email": "user123@example.com",
 "total_points": 250
}
```
Status Code: 200 OK<br>
Error handling: 
- If the requested user_id does not exist, return 404 Not Found - done

---

##### **PUT /users/{user_id}**

Route: router.put('/:id', middleware.checkUserById, middleware.checkEmailExistence, middleware.checkUsernameExistence, controller.updateUserById);<br>
Input: localhost:3000/users/:user_id<br>
Purpose: Update user details by providing user_id in the URL and updating username or email in the request body<br>
Req.params: user_id<br>
Example Req.body:
```json
{
 "username": "sustainableUser",
 "email": "user123_updated@example.com"
}
```
Example Response:
```json
{
 "user_id": 1,
 "username": "sustainableUser",
 "email": "user123_updated@example.com"
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested user_id does not exist, return 404 Not Found - done
- If the provided email is already associated with another user, return 409 Conflict - done
If the provided username is already associated with another user, return 409 Conflict - done

---

##### **DELETE /users/{user_id}**

Route: router.delete('/:id', controller.deleteUserById);<br>
Input: localhost:3000/users/:user_id<br>
Purpose: Delete a user by providing their user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If the requested user_id does not exist, return 404 Not Found - done

---

#### SECTION B

##### **GET /users/{user_id}/wallet**

Route: router.get('/:id/wallet', controller.readUserWallets);<br>
Input: localhost:3000/guilds/<br>
Purpose: Retrieve wallet details of a specific user by providing its user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response:
```json
{
    "user_id": "1",
    "wallet_id": 1,
    "balance": "60"
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested user_id does not exist, return 404 Not Found - done

---

##### **GET /users/{user_id}/profile**

Route: router.get('/:id/profile', controller.readUserProfile);<br>
Input: localhost:3000/users/:id/profile<br>
Purpose: Retrieve the whole profile of a specific user by providing its user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response:
```json
{
    "user_id": 1,
    "username": "sustainableUser",
    "email": "user123_updated@example.com",
    "total_points": "60",
    "wallet_id": 1,
    "balance": "0",
    "guild_name": "Guild1",
    "inventory": [
        {
            "inventory_id": 1,
            "user_id": 1,
            "item_name": "Tree Sapling",
            "description": "A small sapling to plant in your area.",
            "acquisition_date": "2023-12-22 19:31:31"
        },
        {
            "inventory_id": 2,
            "user_id": 1,
            "item_name": "Tree Sapling",
            "description": "A small sapling to plant in your area.",
            "acquisition_date": "2023-12-22 19:32:03"
        }
    ]
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested user_id does not exist, return 404 Not Found - done

---

##### **GET /users/{user_id}/inventory**

Route: router.get('/:id/inventory', controller.readUserInventory);<br>
Input: localhost:3000/guilds/<br>
Purpose: Retrieve the inventory of a specific user by providing its user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response:
```json
[
    {
        "inventory_id": 1,
        "user_id": 1,
        "item_name": "Tree Sapling",
        "description": "A small sapling to plant in your area.",
        "acquisition_date": "2023-12-22 19:31:31"
    },
    {
        "inventory_id": 2,
        "user_id": 1,
        "item_name": "Tree Sapling",
        "description": "A small sapling to plant in your area.",
        "acquisition_date": "2023-12-22 19:32:03"
    }
]
```
Status Code: 200 OK<br>
Error handling:
- If the requested user_id does not exist, return 404 Not Found - done
- If the inventory is empty, return 200 OK - done

---

##### **DELETE /users/{user_id}/inventory/{inventory_id}**

Route: router.delete('/:id/inventory/:inventoryid', controller.deleteUserInventoryById);<br>
Input: localhost:3000/users/:id/inventory/:inventoryid<br>
Purpose: Delete a inventory item by providing the inventory_id<br>
Req.params: user_id, inventory_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling: 
- If the requested inventory_id does not exist, return 404 Not Found - done
- If the requested user_id does not exist, return 404 Not Found - done

---

### TASKS ROUTES

|Section A|
|---|
|[POST /tasks](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-tasks)|
|[GET /tasks](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-tasks)|
|[GET /tasks/{task_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-taskstask_id)|
|[PUT /tasks/{task_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-taskstask_id)|
|[/tasks/{task_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-taskstask_id) |

---

#### SECTION A

---

##### **POST /tasks**

Route: router.post('/', controller.createNewTask);<br>
Input: localhost:3000/tasks/<br>
Purpose: Create a new task by providing title, description, and points in the request body<br>
Req.params: None<br>
Example Req.body:
```json
{
 "title": "No Plastic Bottles",
 "description": "Avoid purchasing bottled water and use a reusable water bottle instead.",
 "points": 40
}
```
Example Response:
```json
{
 "task_id": 6,
 "title": "No Plastic Bottles",
 "description": "Avoid purchasing bottled water and use a reusable water bottle instead.",
 "points": 40
}
```
Status Code: 201 Created<br>
Error handling:
- If the request body is missing title or description or points, return 400 Bad Request - done

---

##### **GET /tasks**

Route: router.get('/', controller.readAllTasks);<br>
Input: localhost:3000/tasks/<br>
Purpose: Retrieve a list of all tasks with their respective task_id, title, description, and points<br>
Req.params: None<br>
Example Req.body: None<br>
Example Response:
```json
[
 {
 "task_id": 1,
 "title": "Plant a Tree",
 "description": "Plant a tree in your neighborhood or a designated green area.",
 "points": 50
 },
 {
 "task_id": 2,
 "title": "Use Public Transportation",
 "description": "Use public transportation or carpool instead of driving alone.",
 "points": 30
 }
]
```
Status Code: 200 OK<br>
Error handling: None

---

##### **GET /tasks/{task_id}**

Route: router.get('/:id', controller.readTaskById);<br>
Input: localhost:3000/tasks/:task_id<br>
Purpose: Retrieve details of a specific task by providing its task_id<br>
Req.params: task_id<br>
Example Req.body: None<br>
Example Response:
```json
{
 "task_id": 1,
 "title": "Plant a Tree",
 "description": "Plant a tree in your neighborhood or a designated green area.",
 "points": 50
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested task_id does not exist, return 404 Not Found - done

---

##### **PUT /tasks/{task_id}**
Route: router.put('/:id', controller.updateTaskById);<br>
Input: localhost:3000/tasks/:task_id<br>
Purpose: Update task details by providing task_id in the URL and updating title, description, or points in the request body<br>
Req.params: task_id<br>
Example Req.body:
```json
{
 "title": "Plant Two Trees",
 "description": "Plant two trees in your neighborhood or a designated green area.",
"points": 60
}
```
Example Response:
```json
{
 "task_id": 1,
 "title": "Plant Two Trees",
 "description": "Plant two trees in your neighborhood or a designated green area.",
 "points": 60
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested task_id does not exist, return 404 Not Found - done
- If the request body is missing title or description or points, return 400 Bad Request - done

---

##### **DELETE /tasks/{task_id}**

Route: router.delete('/:id', controller.deleteTaskById);<br>
Input: localhost:3000/tasks/:task_id<br>
Purpose: Delete a task by providing its task_id<br>
Req.params: task_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If the requested task_id does not exist, return 404 Not Found - done

---

### TASKPROGRESS ROUTES

|Section A|
|---|
|[POST /task_progress](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-task_progress)|
|[GET /task_progress/{progress_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-task_progressprogress_id)|
|[PUT /task_progress/{progress_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-task_progressprogress_id)|
|[DELETE /task_progress/{progress_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-task_progressprogress_id)|

|Section B|
|---|
|[GET /task_progress/users/{user_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-task_progressusersuser_id)|

---

#### SECTION A

---

##### **POST /task_progress**

Route: router.post('/', controller.createNewTaskProgress);<br>
Input: localhost:3000/task_progress/<br>
Purpose: Create task progress for a user (marking a task as completed) by providing user_id, task_id, completion_date, and optional notes in the request body<br>
Req.params: None<br>
Example Req.body:
```json
{
 "user_id": 1,
 "task_id": 1,
 "completion_date": "2023-07-30",
 "notes": "Planted a tree in the park near my house."
}
```
Example Response:
```json
{
 "progress_id": 1,
 "user_id": 1,
 "task_id": 1,
 "completion_date": "2023-07-30",
 "notes": "Planted a tree in the park near my house."
}
```
Status Code: 201 Created<br>
Error handling:
- If the requested user_id or task_id does not exist, return 404 Not Found - done
- If the request body is missing completion_date, return 400 Bad Request - done

---

##### **GET /task_progress/{progress_id}**

Route: router.get('/:id', controller.readTaskById);<br>
Input: localhost:3000/task_progress/:progress_id<br>
Purpose: Retrieve details of a specific task progress by providing its progress_id<br>
Req.params: progress_id<br>
Example Req.body: None<br>
Example Response:
```json
{
 "progress_id": 1,
 "user_id": 1,
 "task_id": 1,
 "completion_date": "2023-07-30",
 "notes": "Planted a tree in the park near my house."
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested progress_id does not exist, return 404 Not Found - done

---

##### **PUT /task_progress/{progress_id}**

Route: router.put('/:id', controller.updateTaskProgressById);<br>
Input: localhost:3000/guilds/<br>
Purpose: Update task progress details by providing progress_id in the URL notes in the request body<br>
Req.params: progress_id<br>
Example Req.body:
```json
{
 "notes": "Planted two trees this time!"
}
```
Example Response:
```json
{
 "progress_id": 1,
 "user_id": 1,
 "task_id": 1,
 "completion_date": "2023-07-30",
 "notes": "Planted two trees this time!"
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested progress_id does not exist, return 404 Not Found - done
- If the request body is missing notes, return 400 Bad Request - done

---

##### **DELETE /task_progress/{progress_id}**

Route: router.delete('/:id', controller.deleteTaskProgressById);<br>
Input: localhost:3000/guilds/<br>
Purpose: Delete task progress by providing its progress_id<br>
Req.params: progress_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If the requested progress_id does not exist, return 404 Not Found - done

---

#### SECTION B

---

##### **GET /task_progress/users/{user_id}**

Route: router.get('/users/:id', controller.readTaskByUserId);<br>
Input: localhost:3000/task_progress/users/:user_id<br>
Purpose: Retrieve details of a specific user task progress by providing its user_id<br>
Req.params: user_id<br>
Example Req.body: None<br>
Example Response:
```json
[
    {
        "progress_id": 1,
        "user_id": 1,
        "task_id": 1,
        "completion_date": "2023-07-30 00:00:00",
        "notes": "Planted two trees this time!",
        "task_title": "Plant Two Trees"
    }
]
```
Status Code: 200 OK<br>
Error handling: None

---

### WALLET ROUTES

---

#### SECTION B

---

##### **POST /task_progress**

(Click [here](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-task_progress) for section A details)<br>
Additional features: There is no user input as it is made it such that whenever the user posts a new task progress, the model also automatically updates the “wallet” table with the “points” as “balance” so that the total points and amount of balance/money a user can spend is separated from each other.<br>

##### **GET /users/{user_id}/wallet**

(Click [here](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_idwallet) for the details)<br>

---

### SHOP ROUTES

|Section B|
|---|
|[POST /shop/](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-shop)|
|[POST /shop/buy/{userId}/{itemId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-shopbuyuseriditemid)|
|[GET /shop/](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-shop)|
|[GET /shop/{item_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-shopitem_id)|
|[PUT /shop/{item_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-shopitem_id)|
|[DELETE /shop/{item_id}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-shopitem_id)|

---

#### SECTION B

---

##### **POST /shop/**

Route: router.post('/', controller.createNewShop);<br>
Input: localhost:3000/shop/<br>
Purpose: Create shop entry to purchase by providing item_name, points_required, description in the request body<br>
Req.params: None<br>
Example Req.body:
```json
{
 "item_name": "solar panel",
 "points_required": 5,
 "description": "generate cleaner energy through sun power"
}
```
Example Response:
```json
{
    "shop_id": 6,
    "item_name": "solar panel",
    "points_required": 5,
    "description": "generate cleaner energy through sun power"
}
```
Status Code: 201 Created<br>
Error handling: 
- If the request body is missing item_name, points_required or description, return 400 Bad Request - done
- If the same item_name is added, return 409 Conflict - done
> [!NOTE]
> For future me: This was mostly added for me to create items to test users ability to buy or use the shop in general - not for users so lesser error handling but it is still 
present. I can possibly use this to implement users selling items in shop by using POST to shop and DELETE from the inventory in the function?

---

##### **POST /shop/buy/{userId}/{itemId}**

Route: router.post('/buy/:userId/:itemId', controller.buyItem);<br>
Input: localhost:3000/shop/buy/:userId/:itemId<br>
Purpose: Allows the user to buy the item from the shop and POST the item into their inventory<br>
Req.params: userId, itemId<br>
Example Req.body: None<br>
Example Response:
```json
{
    "message": "Purchase successful",
    "newBalance": "40"
}
```
Status Code: 200 OK<br>
Error handling: 
- If the requested item_id does not exist, return 404 Not Found - done
- If the requested user_id does not exist, return 404 Not Found - done
- If the requested user_id does not have enough balance, return 400 Bad Request - done

---

##### **GET /shop/**

Route: router.get('/', controller.readAllShop);<br>
Input: localhost:3000/shop/<br>
Purpose: Retrieve a list of all users with their respective item_id, item_name, points_required and description<br>
Req.params: None<br>
Example Req.body: None<br>
Example Response:
```json
[
    {
        "item_id": 1,
        "item_name": "Tree Sapling",
        "points_required": 20,
        "description": "A small sapling to plant in your area."
    },
    {
        "item_id": 2,
        "item_name": "Reusable Water Bottle",
        "points_required": 15,
        "description": "Help reduce plastic usage with a reusable water bottle."
    },
    {
        "item_id": 3,
        "item_name": "LED Bulbs Pack",
        "points_required": 30,
        "description": "Save energy by replacing old bulbs with energy-efficient LED bulbs."
    },
    {
        "item_id": 4,
        "item_name": "Compost Bin",
        "points_required": 25,
        "description": "A bin for composting kitchen scraps."
    },
    {
        "item_id": 5,
        "item_name": "Public Transportation Pass",
        "points_required": 40,
        "description": "Access to public transportation for a month."
    },
    {
        "item_id": 6,
        "item_name": "solar panel",
        "points_required": 5,
        "description": "generate cleaner energy through sun power"
    }
]
```
Status Code: 200 OK<br>
Error handling: None

---

##### **GET /shop/{item_id}**

Route: router.get('/:id', controller.readShopById);<br>
Input: localhost:3000/shops/:item_id<br>
Purpose: Retrieve details of a specific shop item by providing their item_id<br>
Req.params: item_id<br>
Example Req.body: None<br>
Example Response:
```json
{
    "item_id": 1,
    "item_name": "Tree Sapling",
    "points_required": 20,
    "description": "A small sapling to plant in your area."
}
```
Status Code: 200 OK<br>
Error handling: 
- If the requested item_id does not exist, return 404 Not Found - done

##### **PUT /shop/{item_id}**

Route: router.put('/:id', controller.updateShopById);<br>
Input: localhost:3000/shop/:item_id<br>
Purpose: Update user details by providing item_id in the URL and updating item_name, points_required or description in the request body<br>
Req.params: item_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 200 OK<br>
Error handling:
- If the requested item_id does not exist, return 404 Not Found - done
- If the updated item_name already exists, return 409 Conflict - done
- If the request body is missing item_name, points_required or description, return 400 Bad Request - done
> [!NOTE]
> For future me: This was mostly added for me to update items to test users ability to buy the items and see if it is different in the inventory - not for users so lesser error handling but it is still present. We can maybe use this to implement user updating their own item in the shop after they POST their item to shop?

---

##### **DELETE /shop/{item_id}**
Route: router.delete('/:id', controller.deleteShopById);<br>
Input: localhost:3000/shop/:item_id<br>
Purpose: Delete shop item by providing its item_id<br>
Req.params: item_id<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling: 
- If the requested user_id does not exist, return 404 Not Found - done 
> [!NOTE]
> For future me: This was mostly added for me to delete items to test users ability to buy the deleted items - not for users so lesser error handling but it is still present. We can maybe use this to implement user delete their own item in the shop after they POST their item to shop?

---

### INVENTORY ROUTES

---

#### SECTION B

---

##### **GET /users/{user_id}/inventory**

(Click [here](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-usersuser_idinventory) for details)<br>

##### **DELETE /users/{user_id}/inventory/{inventory_id}**

(Click [here](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-usersuser_idinventoryinventory_id) for details)<br>

---

### GUILD ROUTES

|Section B|
|---|
|[POST /guilds/create/{userId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-guildscreateuserid)|
|[POST /guilds/join/{guildId}/{userId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#post-guildsjoinguildiduserid)|
|[GET /guilds/](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-guilds)|
|[GET /guilds/{guildId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#get-guildsguildid)|
|[PUT /guilds/promoteleader/{guildId}/{currentLeaderUserId}/{newLeaderUserId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-guildspromoteleaderguildidcurrentleaderuseridnewleaderuserid)|
|[PUT /guilds/promoteofficer/{guildId}/{currentLeaderUserId}/{newOfficerUserId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-guildspromoteofficerguildidcurrentleaderuseridnewofficeruserid)|
|[PUT /guilds/demoteofficer/{guildId}/{currentLeaderUserId}/{currentOfficerUserId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#put-guildsdemoteofficerguildidcurrentleaderuseridcurrentofficeruserid)|
|[DELETE guilds/leave/{userId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-guildsleaveuserid)|
|[DELETE /guilds/kick/{guildId}/{officerUserId}/{memberUserId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-guildskickguildidofficeruseridmemberuserid)|
|[DELETE /guilds/disband/{guildId}/{userId}](https://github.com/ST0503-BED/bed-ca1-Belac01?tab=readme-ov-file#delete-guildsdisbandguildiduserid)|

---

#### SECTION B

---

##### **POST /guilds/create/{userId}**

Route: router.post('/create/:userId', controller.createGuild);<br>
Input: localhost:3000/guilds/create/:userId<br>
Purpose: Create a new guild by providing the userId in the URL and by providing the guild_name and description in the request body<br>
Req.params: userId<br>
Example Req.body:
```json
{
 "guild_name": "Guild1",
 "description": "Hello World"
}
```
Example Response:
```json
{
    "guild_id": 1,
    "guild_name": "Guild1",
    "leader_username": "greenUser123",
    "description": "Hello World"
}
```
Status Code: 201 Created<br>
Error handling:
- If the request body is missing guild_name or description, return 400 Bad Request - done
- If the current guild leader makes more than 1 guild, return 409 Conflict - done
- If a guild member tries to make a new guild, return 409 Conflict - done
- If a new guild leader makes a guild with the same name (case-sensitive) as another guild, return 409 Conflict - done
- If the requested user_id does not exist, return 404 Not Found - done
<br>Fixes:
- Guild leader could make more than 1 guild - fixed
- Guild member could make a new guild - fixed
- Guild leader could make a guild with the same name (case-sensitive) as another guild - fixed
- Guild leader could make a nameless/no description guild - fixed
- Non-existent user could make a guild - fixed

---

##### **POST /guilds/join/{guildId}/{userId}**

Route: router.post('/join/:guildId/:userId', controller.joinGuild);<br>
Input: localhost:3000/guilds/join/:guildId/:userId<br>
Purpose: Allow a user to join a guild by providing the guildId and userId in the URL<br>
Req.params: guildId, userId<br>
Example Req.body: None<br>
Example Response:
```json
{
    "membership_id": 2,
    "username": "greenUser1234",
    "guild_name": "Guild1",
    "role": "Member"
}
```
Status Code: 201 Created<br>
Error handling:
- If guild leader tries to join their own guild as a member, return 409 Conflict - done
- If guild leader tries to join another guild as a member, return 409 Conflict - done
- If guild member joins another guild as a member, return 409 Conflict  - done
- If the requested guildId does not exist, return 404 Not Found - done
- If the requested userId does not exist, return 404 Not Found - done
<br>Fixes:
- Guild leader could join their own guild as a member - fixed
- Guild leader could join another guild as a member - fixed
- Guild member could join another guild as a member - fixed
- Guild leader/member could join a non-existent guild - fixed
- Guild-less users could join a non-existent guild - fixed
- Non-existent user could join a guild - fixed

---

##### **GET /guilds/**

Route: router.get('/guilds', controller.readAllGuilds);<br>
Input: localhost:3000/guilds/<br>
Purpose: Retrieve a list of all users with their respective guild_id, guild_name, description, creation_date, leader_username and members<br>
Req.params: None<br>
Example Req.body: None<br>
Example Response:
```json
[
    {
        "guild_id": 1,
        "guild_name": "Guild1",
        "description": "Hello World",
        "creation_date": "2023-12-22 19:59:10",
        "leader_username": "greenUser123"
    },
    {
        "guild_id": 2,
        "guild_name": "Guild3",
        "description": "Hello World",
        "creation_date": "2023-12-22 20:08:59",
        "leader_username": "greenUser12345"
    }
]
```
Status Code: 200 OK<br>
Error handling: None

---

##### **GET /guilds/{guildId}**

Route: router.get('/:guildId', controller.readGuildById);<br>
Input: localhost:3000/guilds/:guildId<br>
Purpose: Retrieve a list of all users with their respective guild_id, guild_name, description, creation_date, leader_username and members<br>
Req.params: guildId<br>
Example Req.body: None<br>
Example Response:
```json
{
    "guild_id": 1,
    "guild_name": "Guild1",
    "description": "Hello World",
    "creation_date": "2023-12-22 19:59:10",
    "leader_id": 1,
    "leader_username": "greenUser123",
    "members": [
        {
            "role": "Leader",
            "user_id": 1,
            "username": "greenUser123"
        },
        {
            "role": "Member",
            "user_id": 2,
            "username": "greenUser1234"
        }
    ]
}
```
Status Code: 200 OK<br>
Error handling:
- If the requested guildId does not exist, return 404 Not Found - done

---

##### **PUT /guilds/promoteleader/{guildId}/{currentLeaderUserId}/{newLeaderUserId}**

Route: router.put('/promoteleader/:guildId/:currentLeaderUserId/:newLeaderUserId', controller.promoteUserToLeader);<br>
Input: localhost:3000/guilds/promoteleader/:guildId/:currentLeaderUserId/:newLeaderUserId<br>
Purpose: Promote the guild member into a guild leader, while demoting the original leader into a member by providing the guildId, currentLeaderUserId and newLeaderUserId 
into the URL<br>
Req.params: guildId, currentLeaderUserId, newLeaderUserId<br>
Example Req.body: None<br>
Example Response:
```json
{
    "message": "User promoted to leader successfully"
}
```
Status Code: 200 OK<br>
Error handling:
- If currentLeaderUserId requested is not a leader, returns 400 Bad Request - done
- If newLeaderUserId is not part of the same guild as the currentLeaderUserId, returns 400 Bad Request - done 
- If the requested currentLeaderUserId or newLeaderUserId does not exist within the guild, return 404 Not Found - done
- If requested currentLeaderUserId and newLeaderUserId is the same, returns 400 Bad Request - done
<br>Fixes:
- Leader name and id remained as the original leader on GET /guild/ & GET /guild/{guildId} even though the role had successfully transferred - fixed
- Members could transfer leadership of the leader - fixed
- Non-existing user could receive leadership - fixed
- Members outside of guild could be promoted - fixed 
- Somehow 2 members could be leaders - fixed
- Guild leader of another guild could transfer leadership of another guild leader in another guild - fixed
- Error appeared if non-existent guildId/userId was inputted - fixed
- Same userId could be inputted  - fixed

---

##### **PUT /guilds/promoteofficer/{guildId}/{currentLeaderUserId}/{newOfficerUserId}**

Route: router.put('/promoteofficer/:guildId/:currentLeaderUserId/:newOfficerUserId', controller.promoteMemberToOfficer);<br>
Input: localhost:3000/guilds/promoteofficer/:guildId/:currentLeaderUserId/:newOfficerUserId<br>
Purpose: Promote a existing guild member to guild officer by providing the guildId, currentLeaderUserId and newOfficerUserId into the URL<br>
Req.params: guildId, currentLeaderUserId, newOfficerUserId'<br>
Example Req.body: None<br>
Example Response:
```json
{
    "message": "User promoted to officer successfully"
}
```
Status Code: 200 OK<br>
Error handling:
- If currentLeaderUserId requested is not a leader, returns 400 Bad Request - done
- If currentLeaderUserId or newOfficerUserId does not exist within the guild, returns 404 Not Found - done
- If newOfficerUserId is not part of the same guild as the CurrentLeaderUserId, returns 403 Forbidden - done 
- If currentLeaderUserId and newOfficerUserId request is similar, returns 400 Bad Request  - done 
<br>Fixes:
- Members could make themselves or another user officer - fixed
- Non-existing user could receive officer role - fixed
- Members outside of guild could be promoted - fixed
- Guild leader of another guild could make a member of another guild officer - fixed
- Error appeared if non-existent guildId/userId was inputted - fixed
- Same userId could be inputted  - fixed

---

##### **PUT /guilds/demoteofficer/{guildId}/{currentLeaderUserId}/{currentOfficerUserId}**

Route: router.put('/demoteofficer/:guildId/:currentLeaderUserId/:currentOfficerUserId', controller.demoteOfficerToMember);<br>
Input: localhost:3000/guilds/demoteofficer/:guildId/:currentLeaderUserId/:currentOfficerUserId<br>
Purpose: Leader demotes officer to member role by providing guildId, currentLeaderUserId and currentOfficerUserId into the URL<br>
Req.params: guildId, currentLeaderUserId, currentOfficerUserId'<br>
Example Req.body: None<br>
Example Response:
```json
{
    "message": "Officer demoted to member successfully"
}
```
Status Code: 200 OK<br>
Error handling:
- If the currentLeaderUserId and currentOfficerUserId is not part of the same guild, return 403 forbidden - done
- If the currentLeaderUserId is not a leader, returns 403 forbidden  - done
- If currentLeaderUserId and currentOfficerUserId request is similar, returns 400 Bad Request  - done 
- If currentLeaderUserId or currentOfficerUserId does not exist within the guild, returns 404 Not Found - done
<br>Fixes:
- Leader could demote another officer from another guild - fixed
- Member could emote another officer - fixed
- Error when unknown guild or user - fixed

---

##### **DELETE guilds/leave/{userId}**
Route: router.delete('/leave/:userId', controller.leaveGuild);<br>
Input: localhost:3000/guilds/leave/:userId<br>
Purpose: Leaves the guild as a member by providing userId into the URL<br>
Req.params: userId<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If userId has the role Leader and tries to leave, returns 403 forbidden - done
- If userId requested does not exist within the guild, return 404 Not Found - done
<br>Fixes:
- User leaving a guild even though not a member in a guild - fixed
- Non-existent user leaving a guild - fixed
- Guild leader could leave own guild - fixed

---

##### **DELETE /guilds/kick/{guildId}/{officerUserId}/{memberUserId}**

Route: router.delete('/kick/:guildId/:officerUserId/:memberUserId', controller.kickMember);<br>
Input: localhost:3000/guilds/kick/:guildId/:officerUserId/:memberUserId<br>
Purpose: Leader/Officer kicks the guild member out of the guild by providing the officerUserId and memberUserId into the URL. Leader is considered an officer and 
also able to kick officers. Officers cannot kick officers.<br>
Req.params: guildId, officerUserId, memberUserId'<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If memberUserId requested does not exist in the guild, return 404 Not Found - done
- If officerUserId and memberUserId requested are the same, return 403 Forbidden - done
- If memberUserId requested does not exist in the guild, return 404 Not Found - done
<br>Fixes:
- Leader could not kick members from his own guild - fixed
- Officers could kick members from other guilds - fixed
- Officers could kick any officer from other guilds and its own guild - fixed
- Officers could kick the leader from other guilds and its own guild - fixed
- Leaders/Officers could kick themselves from the guild - fixed
- Error when kicking from guilds or users  that do not exist - fixed
- Guild leader could promote themselves to officer - fixed

---

##### **DELETE /guilds/disband/{guildId}/{userId}**

Route: router.delete('/disband/:guildId/:userId', controller.disbandGuild);<br>
Input: localhost:3000/guilds/disband/:guildId/:userId<br>
Purpose: Disband the guild as a group leader by providing the guildId and userId into the URL<br>
Req.params: guildId, userId<br>
Example Req.body: None<br>
Example Response: None<br>
Status Code: 204 No Content<br>
Error handling:
- If guildId or userId does not exist, returns 404 Not Found
- If userId is not a leader, returns 404 Not Found
<br>Fixes:
- Group member could disband the guild - fixed
- Error occurred when disbanding a non-existent guild - fixed
- Guild leader could disband another guild - fixed

---

## MYSQL TABLES

```sql
DROP TABLE IF EXISTS GuildMember; 

DROP TABLE IF EXISTS UserWallet;

DROP TABLE IF EXISTS Shop;

DROP TABLE IF EXISTS UserInventory;

DROP TABLE IF EXISTS User;

DROP TABLE IF EXISTS Task;

DROP TABLE IF EXISTS TaskProgress;

DROP TABLE IF EXISTS Guild;

CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username TEXT,
    email TEXT
   );

CREATE TABLE Task (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT,
    description TEXT,
    points INT
   );

CREATE TABLE TaskProgress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    task_id INT NOT NULL,
    completion_date TIMESTAMP,
    notes TEXT
   );

INSERT INTO Task (task_id, title, description, points) VALUES
(1, 'Plant a Tree', 'Plant a tree in your neighbourhood or a designated green area.', '50'),
(2, 'Use Public Transportation', 'Use public transportation or carpool instead of driving alone.', '30'),
(3, 'Reduce Plastic Usage', 'Commit to using reusable bags and containers.', '40'),
(4, 'Energy Conservation', 'Turn off lights and appliances when not in use.', '25'),
(5, 'Composting', 'Start composting kitchen scraps to create natural fertilizer.', '35');


CREATE TABLE UserWallet (
  wallet_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL UNIQUE,
  balance INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Shop (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  item_name TEXT,
  points_required INT,
  description TEXT
);

CREATE TABLE UserInventory (
  inventory_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  item_name TEXT,
  description TEXT,
  acquisition_date TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Guild (
  guild_id INT PRIMARY KEY AUTO_INCREMENT,
  guild_name TEXT,
  leader_id INT NOT NULL,
  description TEXT,
  creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE GuildMember (
  membership_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  guild_id INT NOT NULL,
  role TEXT,
  join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (guild_id) REFERENCES Guild(guild_id)
);

INSERT INTO Shop (item_id, item_name, points_required, description) VALUES
(1, 'Tree Sapling', 20, 'A small sapling to plant in your area.'),
(2, 'Reusable Water Bottle', 15, 'Help reduce plastic usage with a reusable water bottle.'),
(3, 'LED Bulbs Pack', 30, 'Save energy by replacing old bulbs with energy-efficient LED bulbs.'),
(4, 'Compost Bin', 25, 'A bin for composting kitchen scraps.'),
(5, 'Public Transportation Pass', 40, 'Access to public transportation for a month.');
```
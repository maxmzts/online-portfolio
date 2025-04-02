# Online Portfolio Backend 
Utiliza el comando *node app.js* o *npm start* para ejecutar el servidor

## Deploy
To run the backend it is required to make a connection to a MongoDB database. You can either [install and host one locally](https://www.mongodb.com/docs/manual/installation/) or use the [Atlas platform](https://www.mongodb.com/products/platform/atlas-database) which is free for personal projects.
After this, you will need to create an ```.env``` file for environment variables. Here is a template:
```
NODE_ENV = development # change to 'production' for online deploy 
PORT = 4000 # for testing, on production put the one you need
JWT_SECRET = my-secret # not safe for production
MONGO_URI = <your MongoDB URI> # use 'mongodb://localhost:27017/' for local
```
Once it is all done you need to run:
```sh
cd backend # only if you are on the repository's root folder
npm run server
```

## REST API Documentation

### Authentication
**Method:** `Bearer Token`  
To access protected endpoints, include a token in the `Authorization` header:

```
Authorization: Bearer <TOKEN_HERE>
```

---

### Endpoints

#### Authenticate user
<details>
<summary><code>POST /api/users/register</code></summary>

**Description:** Logs in a user and returns an authentication token.  
**Request Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
**Response:**  
  ```json
  {
    "token": "eyJhbGciOiJIUzI1...",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```
**Possible Errors:**
  - `400 Bad Request`: Invalid data.
  - `401 Unauthorized`: Incorrect credentials.
</details>

<details>
<summary><code>POST /api/users/login</code></summary>

**Description:** Registers a user and returns an authentication token.  
**Request Body:**  
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
**Response:**  
  ```json
  {
    "token": "eyJhbGciOiJIUzI1...",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```
**Possible Errors:**
  - `400 Bad Request`: Invalid data.
  - `401 Unauthorized`: Incorrect credentials.
</details>

#### Users

<details>
<summary><code>GET /api/users/me</code></summary>

**Description:** Retrieves the info of the current loggued user.  
**Access**: Private
**Headers:**  
  ```
  Authorization: Bearer {TOKEN}
  ```
**Response:**  
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
  ```
**Possible Errors:**
  - `401 Unauthorized`: Invalid or missing token.
</details>

#### Projects

<details>
<summary><code>GET /api/projects</code></summary>
<br>

**Description:** Gets all the projects on the database.  
**Access**: Public
**Response:**  
  ```json
  [
    {
      "_id": 1,
      "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
    }
  ]
```
</details>

<details>
<summary><code>GET /api/projects/:id</code></summary>
<br>

**Description:** Gets a single project providing its id.  
**Access**: Public
**Response:**  
  ```json
  [
    {
      "_id": 1,
      "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
    }
  ]
  ```
**Possible Errors:**
  - `404 Not found`: Invalid id.
</details>

<details>
<summary><code>GET /api/projects/:tag</code></summary>
<br>

**Description:** Gets a single project providing its id.  
**Access**: Public
**Response:**  
  ```json
  [
    {
      "_id": 1,
      "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
    }
  ]
  ```
</details>

<details>
<summary><code>POST /api/projects</code></summary>
<br>

**Description:** Creates a new project on the database. 
**Access**: Private
**Headers:**  
  ```
  Authorization: Bearer {TOKEN}
  ```
**Request Body:**  
  ```json
  {
    "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
  }
  ```
**Response:**  
  ```json
  [
    {
      "_id": 1,
      "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
    }
  ]
  ```
</details>

<details>
<summary><code>PUT /api/projects/:id</code></summary>
<br>

**Description:** Update a project providing its id and the new info.  
**Access**: Private
**Headers:**  
  ```
  Authorization: Bearer {TOKEN}
  ```
**Request Body:**  
  ```json
  {
    "title": "My first project",
      "description": "This projects is...",
      "status": "Finished",
      "visibility": "Public"
  }
  ```
**Response:**  
  ```json
  [
    {
      "_id": 1,
      "title": "My first project",
      "description": "This projects is...",
      "status": "Finished"
      "visibility": "Public"
    }
  ]
  ```
**Possible Errors:**
  - `404 Not found`: Invalid id.
</details>

<details>
<summary><code>GET /api/projects/:id</code></summary>
<br>

**Description:** Remove an existing providing its id.  
**Access**: Private
**Headers:**  
  ```
  Authorization: Bearer {TOKEN}
  ```
**Response:**  
  ```json
  [
    {
      "_id": 1
    }
  ]
  ```
**Possible Errors:**
  - `404 Not found`: Invalid id.
</details>

### Testing the API
You can test the API with Postman by importing the file named ```online_portfolio_postman_collection.json``` to your postman environment.

---

## Common Errors

| Code | Description |
|------|------------|
| 400  | Bad request (invalid data) |
| 401  | Unauthorized (invalid or missing token) |
| 403  | Forbidden (insufficient permissions) |
| 404  | Resource not found |
| 500  | Internal server error |

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Postman** (for testing)

### Libraries
- **mongoose** for interacting easily with MongoDB.
- **jsonwebtoken** fot JWT for authentication.
- **bcrypt** for password hashing.
- **dotenv** to use environment variables.
- **nodemon** to refresh the backend on changing the code.
---

## Additional Notes
- You can test the API using tools like **Postman**.


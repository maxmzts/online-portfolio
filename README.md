# Digital Portfolio Creation System

## Description
This system enables the creation and management of digital portfolios, making it useful for both non-technical users and experienced developers. 

- **For non-technical users:** The system provides a private visual interface that automates portfolio editing and management without requiring any programming knowledge.
- **For React developers:** It serves as a customizable template that can be modified to fit specific needs.

> **Note:** this is a standalone project and does not include any online hosting of the given service.

## Features

## Project Structure

- Backend: Handles the API and manages the connection to the database.

- Frontend: Contains the Single Page Application (SPA) that runs in the browser.

For more details, refer to the ```README.md``` files in their respective directories.

## Technologies Used
The system is built using the MERN stack:
- **MongoDB** - NoSQL database
- **Express.js** - Backend framework
- **React.js** - Frontend library
- **Node.js** - Runtime environment

## Installation
Firstly you will need to clone the repository by downloading the ```.zip``` file or runing:

```sh
git clone <link>
```

### Installing Node.js Dependencies
To install the necessary dependencies, navigate to the project directory and run the following commands:

```sh
cd frontend && npm install
cd ../backend && npm install
```

## Run
To run the service locally you need to follow these steps:

1. Prerequisites: 

    1.1. Firstly, it is required making a connection to a MongoDB database. You can either [install and host one locally](https://www.mongodb.com/docs/manual/installation/) or use the [Atlas platform](https://www.mongodb.com/products/platform/atlas-database) which is free for personal projects.
    1.2. After this, you will need to create an ```.env``` file on the backend directory for environment variables. Here is a template:
    ```
    NODE_ENV = development # change to 'production' for online deploy 
    PORT = 4000 # for testing, on production put the one you need
    JWT_SECRET = my-secret # not safe for production
    MONGO_URI = <your MongoDB URI> # use 'mongodb://localhost:27017/' for local
    ```

2. Run the backend:
```sh
cd backend && npm run server
```
3. Run the frontend:
```sh
cd frontend && npm start
```
4. Open http://localhost:3000 if it does not open automatically.

> ⚠ Make sure ports 3000 and 4000 are free. If not change them in the ```.env``` file or in ```/backend/app.js```.

## Usage

## License

## Contact
If you have any issues you can open an issue or contact me on maximomzts@gmail.com . I will not answer questions about hosting the service.




### Program Operation
 This repository consist of a list of services to create a Backend with basic CRUD operations. The services are:
 - ExpressJS
 - MongoDB (using mongoose)
 - NodeJS 
 All of those services are **Dockerized**

### RUN program
1. Go to ./backend folder.
2. Run `npm install`
3. Run `docker-compose build`
4. Run `docker-compose up`

### Make calls to API
The CRUD operations are defined at **routes.js** file (located at **./backend** folder).
The expressJS server is running at **port 3000**
The mongoExpress is running at** port 8081**
You can make the calls using a tool like **Postman**, via Browser or via commandline.
All api calls have prefix **/api**. E.g. `http://localhost:3000/api/posts`

### Folders
- The **./data/mongo **folder saves the data from mongo. Is a shared volume by mongo Docker container
- The folder** ./backend** contains all backend configuration.
	- **models** folder have inside the data models used. By default only contains one model named **Post.js**
	- **index.js** file contains the connections to the db and is the main file in wich runs the application.

### Considerations
- As we are using mongoose the models names should be in singular and with first letter in Uppercase. (The collection created at mongodb will be created automatically in plural).
- The prefix (/api), the port (3000) can be changed at index.js file. If change the port also change the port of the following files: Dockerfile and docker-compose.yml.
- The connection to mongoose (at index.js file) have the "mongo" name. This is because we are connecting it to mongodb docker container named "mongo". If change the name of the service, change also the name of the host to connect.
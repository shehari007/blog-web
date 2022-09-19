# Project Information:

This project was built using bootstrap 5 Blog theme example & React.Js Create React App from scratch.

## Website Main Features: 

1- Dynamic Headers.\
2- Profile Picture Functionalty.\
3- Admin and User Privilidges.\
3- Admin Dashboard with special permissions to Delete, Edit & Add Posts, Create New & Delete Users, Add new categories and change current menus and Approval Functionality.\
4- CryptoJS and AES-256bit Encryption Login and Signup Procedures.\
5- Secure Browser Encrypted Local Storage.\
6- Comments Section & Total Comments Count.\
7- Rich Text Editor for Blog Post.\
8- Comments Management (work in progress).

## Pre-Requirements:

1- Node.js package 16+ (LTS Preffered).\
2- WAMPP or XAMPP Server for accessing local SQL database.

*In the project directory, you can run find PHP CONFIG folder for all the backend php scripts accessing SQL database, copy and paste the folder contents to XAMPP htdocs directory for acccessing API

*In XAMPP PHP MyAdmin Create a new database name 'blog' and restore the SQL file in PHP Configs folder it will automatically upload all the required tables with dummy data

*if you changed the database name from 'blog' to whatever you like then make sure you edit the config_db2.php file in PHP Configs folder and change the database name accordingly

## After Pre-Requirements:

1- npm install (install all the required scripts and dependencies).\
2- npm run start:dev (to start the project on development stage).\
3- npm run start:prod (to start the project on production stage).\
4- Enjoy Coding!

## NOTE: .env-cmdrc file is included you can change the REACT_APP_AXIOS_API_PHP link according to your needs for accessing all php's from one file.



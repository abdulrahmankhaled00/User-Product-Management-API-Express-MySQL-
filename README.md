Task: Build a User & Post Management System
This project involves creating an API for managing users and their posts. It includes two database tables—user and post—and several APIs to interact with the data. Express is used as the server framework, and MySQL is the database. Below are the table structures and API functionalities:

Database Tables:
User Table

Column	Type	Description
name	String	Name of the user
email	String	Unique email of the user
password	String	User's password
age	Number	User's age
Post Table

Column	Type	Description
pName	String	Name of the post
pDescription	String	Description of the post
price	Number	Price of the product
createdBy	Number	Foreign key linking to the user table
User APIs:
Add user – Creates a new user (user must not exist before).
Update user – Updates an existing user’s information.
Delete user – Deletes an existing user (user must exist).
Search user – Finds users whose name starts with "a" and age is less than 30 (use LIKE for characters).
Search users by IDs – Retrieves users by a list of IDs (use IN clause).
Get all users – Retrieves all users.
Get users with products – Retrieves all users along with the products they created.
Post APIs:
Add product – Creates a new product (product must not exist before).
Delete product – Deletes a product (only the product owner can delete and product must exist).
Update product – Updates an existing product (only the product owner can update).
Get all products – Retrieves all products.
Search products – Finds products where the price is greater than 3000.
This system provides basic CRUD operations for users and products, with specific business rules for creating, updating, and deleting data.

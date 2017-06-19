CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(20) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price INTEGER(200),
    stock_quantity INTEGER(100),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Wives of War', 'Books', 15, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Heisenberg T-shirt', 'Clothing', 17, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bose speaker', 'Electronics', 179, 73);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Rubix Cube', 'Toys', 10.55, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kent Mountain Bike', 'Sports and Outdoor', 195.98, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Gell Cleanser', 'Beauty', 32.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kohler toiley seat', 'Home/Bathroom', 15.01, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Double Leaf pendant', 'Jewlery', 2.05, 45);

SELECT * FROM products;

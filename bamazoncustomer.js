var mysql = require('mysql');
var inquirer = require('inquirer');
var action = process.argv[2];
var value = process.argv[3];

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Mikebobo1@',
	database: 'Bamazon'
});
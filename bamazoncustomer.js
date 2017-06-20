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

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});


/*
connection.query('SELECT * FROM users WHERE id = ?', [userId], function (error, results, fields) {
  if (error) throw error;
  
});
*/
function tableLog(res) {
	var table = new Table({
		head: ['Item ID', 'Product Name', 'Department', 'Price', 'Quantity'],
	});
	for (var i = 0; i < res.length; i++) {
		table.push([res[i].item_ID, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
	}
	console.log(table.toString());
}
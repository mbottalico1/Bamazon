var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Mikebobo1@',
    database: 'Bamazon'
});

connection.connect(function(err) {
    if (err) throw err;
    search();
});

function queryAllData() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
    });
}

function search() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: [
            "Find product by id",
            "Number of units to purhase",
        ]
    }).then(function(answer) {
        switch (answer.action) {
            case "Find product by id":
                puschaseItem();
                break;

            case "Number of units to purhase":
                break;
        }
    })
}

function puschaseItem() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What do you want to do?",
        choices: [
            'List of available items',
        ]
    }).then(function(answer) {
            switch (answer.action) {
                case 'List of available items':
                    queryAllData();
                    break;

        }
    })
}
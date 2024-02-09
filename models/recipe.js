const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const recipe = sequelize.define('recipe', {
    FoodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'food',
            key: 'id'
        }
    },
    ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'products',
            key: 'id'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    unit: {  
        type: Sequelize.STRING,
        allowNull: true,
    }
}, {
    tableName: 'recipe',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "FoodId" },
                { name: "ProductId" },
            ]
        },
    ]
});

module.exports = recipe;

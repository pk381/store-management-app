const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Item = sequelize.define('Item', {

    id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },

    name:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Item;
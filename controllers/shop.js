const path = require('path');

const rootDir = require('../util/path');

const Item = require('../models/item');

exports.getIndex = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "index.html"));
}

exports.getItems = async (req, res, next)=>{

    try{
        const items = await Item.findAll();
        res.status(201).json({items: items});
    }
    catch(err){
        console.log(err);
    }
}

exports.postAddItem = async (req, res, next)=>{

    console.log(req.body);

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = parseInt(req.body.quantity);

    console.log(quantity);

    try{
        const item = await Item.create({
            name: name,
            description: description,
            price: price,
            quantity: quantity
        });

        res.status(201).json({item: item});
    }
    catch(err){
        console.log(err);
    }
}

exports.byuItem = async (req, res, next)=>{
    
    const id = req.body.id;
    const buy = req.body.buy;

    try{

        const item = await Item.findByPk(id);

        if(item.quantity >= buy){

            console.log("available");

            item.quantity -= buy;
            item.save();

            res.status(201).json({buy: buy});
        }
        else{

            res.status(201).json({buy: -1});
        }
        
    }
    catch(err){
        console.log(err);
    }
}

exports.notAvailable = (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "not_available.html"));
}
import express from 'express';
import mongoose from 'mongoose';
import Stores from '../models/stores.model.js';

const router = express.Router();

router.get('/', async(req,res)=> {
    try {
        const stores = await Stores.find({});
        res.status(200).json({success: true, data: stores});
    } catch (error) {
        console.log("Error in fetching products:",error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
})

router.post('/', async(req, res)=> {
    const store = req.body;

    if(!store.name || !store.image){
        return res.status(400).json({success:false, message: "Provide all fields"});
    }

    const newStore = new Stores(store);

    try{
        await newStore.save();
        res.status(201).json({success: true, data: newStore});
    }catch(error){
        console.error("Error in creating product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
})

router.delete('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        await Stores.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Store deleted"});
    } catch (error) {
        console.error("Error in deleting product:", error.message);
        res.status(404).json({success: false, message: "Store not found"})
    }
})

router.put('/:id', async(req,res) => {
    const {id} = req.params;
    const store = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log("Invalid Store ID:", id);
        return res.status(400).json({success: false, message: "Invalid Store ID"});
    }

    try {
        const updatedStore = await Stores.findByIdAndUpdate(id, store, {new: true});
        res.status(200).json({success: true, data: updatedStore});
    } catch (error) {
        console.error("Error in updating product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
})

export default router;
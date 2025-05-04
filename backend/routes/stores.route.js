import express from 'express';
import {deleteStore, addStore, getStores, updateStore } from '../controllers/store.controller.js';

const router = express.Router();

router.get('/', getStores)

router.post('/', addStore)

router.delete('/:id', deleteStore)

router.put('/:id', updateStore)

export default router;
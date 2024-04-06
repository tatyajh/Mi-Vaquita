import express from 'express';
import { getGroups, createGroup, updateGroup, deleteGroup } from '../controllers/groups.controller.js';  // Asegúrate de que la ruta aquí sea correcta

const router = express.Router();

router.get('/', getGroups); 
router.post('/', createGroup);  
router.put('/:id', updateGroup);  
router.delete('/:id', deleteGroup); 

export default router;

import express from "express";

import Todo from '../model/todoModel.js';

const router = express.Router();


//router.get('/',( req,res) => {
//   res.send('welcome to She Writes tutorial');
 // })

 //create a todo
 
 router.post('/todo', async ( req,res) => {

    const {title,description,date} = req.body

    try {
        const todoModel = await Todo.create ({
            title,
            description,
            date
        });
        
            res.status(200).json({
                message: "message was sent successfully",
                _data: todoModel,
            
            })
        
       
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "failed to send. Try again"
        })
    }
})
     
    
//get all todos
router.get('/', async (req,res) => {

    try{
        const  todos = await Todo.find();
        res.status(200).json({
            message: "request was successful",
            data: todos

        })
    } catch (error) {
        res.status(500).json({
            message: "server not available"

        })

    }
})

// update a todo

router.patch('/:id', async (req,res) => {

    const {title,description,date} = req.body;
    const {id} = req.params;

    try{
        const  todos = await Todo.updateOne({_id:id},{$set:{title,description,date}});
        res.status(200).json({
            message: "todo was updated",
            data: todos

        })
    } catch (error) {
        res.status(500).json({
            message: "update was not successful"

        })

    }
})
router.delete('/:id', async (req,res) => {
    const {id} = req.params;

    try{
        const  todos = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message: "todo was deleted",
            data: todos

        })
    } catch (error) {
        res.status(500).json({
            message: "todo would not delete"

        })

    }
})
     
 
 export default router

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db")
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).send(parsedPayload.error);
    }
    // put it in mongodb
    await todo.create({
        title: parsedPayload.data.title,
        description: parsedPayload.data.description,
        completed: false
    });
    console.log("todo created");
    res.json({
        msg: "Todo created"
    })

});

app.get("/todos", async (req, res) => {
    // returns all todos
    const response = await todo.find({});
    if (!response) {
        res.status(400).json({
            status: "data not found"
        });
    }
    console.log("recieved from db");
    res.json(response);
});

app.post("/completed", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).send(parsedPayload.error);
    }
    const update = await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        status: update.modifiedCount,
        message: update.modifiedCount == 0 ? "already marked as completed" : "successfully updated to completed",
        body: update
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
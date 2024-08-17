/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function TodoList({ todos }) {
    return (
        <Todo todos={todos}>
        </Todo>
    );
};

function CardWrapper({ children }) {
    //create a div which has a border "2px solid black"
    // inside the div, renders the props
    return (
        <div style={{ border: "2px solid black", padding: 20, margin: 20 }}>
            {children}
        </div>
    );
}
function Todo({ todos }) {

    async function toggleTodoStatus(id) {
        const res = await fetch("http://localhost:3000/completed", {
            method: "POST",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await res.json();
        // console.log(json);
        alert(json.message);
        if (json.status == 1) {
            // console.log(json.status == 1);
            return true;
        }
        return false;
    }

    return (
        <>
            <h1>All Todos</h1>
            {todos.map((todo) => {
                return <div key={todo._id}>
                    <CardWrapper>
                        <h2>{todo.title}</h2>
                        <h2>{todo.description}</h2>
                        <button onClick={async (e) => {
                            e.preventDefault();
                            // console.log("done/undone this todo: " + todo._id)
                            console.log(await toggleTodoStatus(todo._id) == true ? "successful updation" : "error updation")
                        }}>{todo.completed == true ? "completed" : "not done"}</button>
                    </CardWrapper>
                </div>
            })}
        </>
    );
}

export default TodoList;    
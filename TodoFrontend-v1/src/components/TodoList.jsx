/* eslint-disable react/jsx-key */
/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */


function TodoList({ todos }) {
    return (
        <div>
            <h1>All Todos</h1>
            {todos.map((todo) => {
                return <div>
                    <h2>{todo.title}</h2>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "completed" : "not done"}</button>
                </div>

            })}
        </div>
    );
};

export default TodoList;    
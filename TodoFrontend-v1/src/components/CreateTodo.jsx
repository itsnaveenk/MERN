import { useState } from "react";

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <h1>Create Todo Component</h1>
            <form action="" method="post">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="title"
                    onChange={function (e) {
                        const value = e.target.value;
                        setTitle(value);
                        console.log(value);
                    }}
                />
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    onChange={function (e) {
                        const descValue = e.target.value;
                        setDescription(descValue);
                        console.log(descValue);
                    }}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        fetch("http://localhost:3000/todo", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description,
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then(async function (res) {
                                const resjson = await res.json();
                                console.log(resjson);

                                alert("Todo Created...");
                            })
                            .catch((e) => {
                                console.log(e);
                            });
                    }}
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}
export default CreateTodo;

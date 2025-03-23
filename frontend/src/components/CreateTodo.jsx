export function CreateTodo() {
    return (
        <div>
            <h1>Create Todo</h1>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="description" />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: document.querySelector('input[placeholder="title"]').value,
                        description: document.querySelector('input[placeholder="description"]').value,
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
            }
            }>Add todo</button>
        </div>
    )
}
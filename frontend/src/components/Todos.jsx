export function Todos({todos}){
    if (!todos) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {todos.map(function(todo){
                return <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={async ()=>{
                            await fetch("http://localhost:3000/complete", {
                                method: "PUT", 
                                body: JSON.stringify({
                                    _id: todo._id
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                    }}>{todo.completed ? "Completed" : "Mark as complete"}</button>
                </div>
            })}
        </div>
    )
}
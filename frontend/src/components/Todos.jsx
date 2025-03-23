export function Todos({todos}){
    return(<div>
            {todos.map(function(todo){
                return<div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <p>{todo.completed==true?"completed":"not compelted"}</p>
                </div>
            })}
            </div>
    )
}
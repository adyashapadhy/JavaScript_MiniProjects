//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);
filterOption.addEventListener('change',filterTodo);


//functions

function addTodo(event)
{
    //prevent form from submitting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //creating Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //appending to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";


}

function deleteTodo(e)
{
    const item = e.target;
    //delete 
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        //animation
        
        todo.classList.add("fall");
        todo.addEventListener('transitioned', function(){
        todo.remove(); 
        });
   
    }

    //check mark
    if(item.classList[0] === "completed-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e)
{
    const todos = todoList.childNodes;
    todos.forEach(function(todo)
    {
        switch(e.target.value)
        {
            case "all":
                todo.style.display = "flex";
               
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display  = 'flex';
                      
                }else{
                    todo.style.display = "none";
                } 
                break;
            case "uncompleted":
                if(!todo.classList.contains("uncompleted")){
                    todo.style.display  = 'flex';
                }else{
                    todo.style.display = "none";
                } 
                break;         


        }
     
    });
}


    
  
//selectors

    
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const flag =true;

//event listener
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);

//functiosn
function addTodo(event){
   
    //prevent form from submmiting
    event.preventDefault();
    //todo div
   const todoDiv=document.createElement('div');
 todoDiv.classList.add("todo");

    //create li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
  newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   //check mark button
   const completedButton =document.createElement("button"); 
   completedButton.innerHTML='<i class="fas fa fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //check trash button
   const trashButton =document.createElement('button'); 
   trashButton.innerHTML='<i class="fas fa fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);

    todoInput.value="";

}

//delete check
function deleteCheck (e){
const item =e.target;
//delete TODO
if(item.classList[0]==="trash-btn"){
    const todo =item.parentElement;
    todo.classList.add('fall');

    todo.addEventListener('transitionend',function()  {
        todo.remove();
    });
    
}
//check mark
if(item.classList[0]==="complete-btn"){
const todo =item.parentElement;
todo.classList.toggle("completed");
}


}

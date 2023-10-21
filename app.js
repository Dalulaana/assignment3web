
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


function addTask() 
{
    const taskText = taskInput.value.trim();
    if (taskText !== "") 
    {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";

        
        li.addEventListener("click", function () 
        {
            li.classList.toggle("completed");
        });

        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑";
        li.appendChild(deleteButton);

       
        deleteButton.addEventListener("click", function () 
        {
            taskList.removeChild(li);
        });
    }
}


addTaskButton.addEventListener("click", addTask);
        

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
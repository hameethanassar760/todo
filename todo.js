document.querySelector('#add').onclick=function()
{
    if(document.querySelector('#newtask input').value.length == 0){
        alert("enter a task")
    }
    else{
        document.querySelector('#task').innerHTML
        +=`
        <div class ="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
    }
}

var currenttask=document.querySelectorAll(".delete");
for(var i=0;i<currenttask.length;i++){
    currenttask[i].onclick=function(){
        this.parentNode.remove();
    }
}
var task=document.querySelectorAll(".task");
for(var i=0;i<task.length;i++){
        task[i].onclick=function(){
        this.classList.toggle("completed");
    }
}
document.querySelector("#newtask input").value="";


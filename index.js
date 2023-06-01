let addTaskbttn = document.getElementById("addTask")
let addPrioritybttn =document.getElementById("addPriority")
let delTaskbttn = document.getElementById("delTask")
let tasklist = document.getElementById("tasks")

let taskcompletebttn = document.querySelectorAll(".completebtn");
let taskdeletebttn = document.querySelectorAll(".deletebtn");
// let taskcompletebttnclass =document.getElementsByClassName("completebtn")



addTaskbttn.addEventListener("click", () => {

    let a  = document.getElementsByClassName("completebtn")
    let b = Array.from(a)
    let taskid = b.length+1


let newtaskdiv = document.createElement("div");
newtaskdiv.setAttribute("class", "todo");

let newtaskli = document.createElement("li");
newtaskli.setAttribute("class", "todo-item");
newtaskli.innerText = document.getElementById("taskinput").value

let delbttn = document.createElement("button")
delbttn.setAttribute("class","deletebtn")
delbttn.setAttribute("id", `${taskid}`)
delbttn.innerText = "Delete"

delbttn.addEventListener("click",function(){
    this.parentElement.remove();
   
})

let completedbttn = document.createElement("button")
completedbttn.setAttribute("class", "completebtn");
completedbttn.setAttribute("id", `${taskid}`);
completedbttn.innerText = "Completed"

completedbttn.addEventListener("click", function(){
    this.parentElement.style.opacity="0.3";
    completedbttn.textContent="Completed";
})

tasklist.appendChild(newtaskdiv);
newtaskdiv.appendChild(newtaskli)
newtaskdiv.appendChild(completedbttn)
newtaskdiv.appendChild(delbttn)

document.getElementById("taskinput").value = ""
})





addPrioritybttn.addEventListener("click", () => {

    let a  = document.getElementsByClassName("completebtn")
    let b = Array.from(a)
    let taskid = b.length+1

    let newtaskdiv = document.createElement("div");
    newtaskdiv.setAttribute("class", "todo");
    
    let newtaskli = document.createElement("li");
    newtaskli.setAttribute("class", "todo-item");
    newtaskli.innerText = document.getElementById("taskinput").value
    
    let completedbttn = document.createElement("button")
    completedbttn.setAttribute("class", "completebtn");
    completedbttn.setAttribute("id", `${taskid}`);
   
    completedbttn.innerText = "Completed"
    
    let delbttn = document.createElement("button")
    delbttn.setAttribute("class","deletebtn")
    delbttn.setAttribute("id", `${taskid}`)
    delbttn.innerText = "Delete"
    
    newtaskdiv.appendChild(newtaskli)
    newtaskdiv.appendChild(completedbttn)
    newtaskdiv.appendChild(delbttn)
    tasklist.prepend(newtaskdiv);
    document.getElementById("taskinput").value = ""
})

delTaskbttn.addEventListener("click", () => {
tasklist.innerHTML=""
})


taskcompletebttn.forEach(completebttn => {
    completebttn.addEventListener('click', (e) => {
        console.log("ul tag" , taskcompletebttn)
       let j =e.target;
       console.log(j)
       let par = j.parentElement;
       par.style.opacity = "0.3"
     
    });
  });

  taskdeletebttn.forEach(deletebtn => {
    deletebtn.addEventListener('click', (e) => {
        console.log("workuing")
       let j =e.target;
       console.log(j)
       let par = j.parentElement;
       par.remove()
     
    });
  });

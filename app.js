const input = document.querySelector(".todo__childs-input");
const taksContainer = document.querySelector(".tasks__container");
let checkBg = document.querySelector(".todo__List-uncheck");
let check = document.querySelector(".check");
let count = document.querySelector(".count-taks");
const filterTask = document.querySelectorAll(".todo__childs-events span")



document.addEventListener("keyup",(event)=>{
    if(event.key =="Enter" && input.value.length > 0)
    createTask(input.value)
})


function createTask(task){
    let contentTaks = `<div id="element" class="todo__childs tasks">
                                <div class="todo__List-uncheck realizado"  ><img class="check" src="./images/icon-check.svg" alt=""></div>
                                <p class="todo__list-task">${task}</p>
                                <div class="delete-task">
                                    <img class="delete" src="./images/icon-cross.svg" alt="delete">
                                </div>
                             </div>`
    
        taksContainer.insertAdjacentHTML("beforeend", contentTaks)
        input.value="" 
        countNumTask(1)
    }

function countNumTask(number){
    count.innerText = +count.innerText + number;
}

function removeTask (elem){
    elem.remove()
    countNumTask(-1)
}

taksContainer.addEventListener("click", (event)=>{
    const element = event.target;

    if(element.classList.contains("delete")){
        removeTask(element.parentElement.parentElement)
    
    }else if(element.classList.contains("realizado")){
        realiceTask(element,element.firstChild.classList)
    }
    
})



document.querySelector(".todo__event-delete").addEventListener("click",()=>{
    document.querySelectorAll(".todo__List-uncheck.active").forEach(elem=>{
        removeTask(elem.closest(".tasks"))
       
    })
    
})

function realiceTask(element, elemChildren){
    element.classList.toggle("active")
    elemChildren.toggle("active")
    element.parentElement.querySelector(".todo__list-task").classList.toggle("lineTrought")

}


filterTask.forEach(filter=>{
    filter.addEventListener("click",()=>{
    if(filter.classList =="todo__select-all"){
        console.log(taksContainer)
    }else if(filter.classList =="todo__select-active"){
        console.log(11)
    }else if(filter.classList =="todo__select-complete"){
        console.log(12)

    }
    })

}) 

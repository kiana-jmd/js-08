type TaskListType = {
    id : string;
    taskName : string;
    taskDetail : string;

}

const taskNameInput = document.querySelector<HTMLInputElement>("#large-input")
// taskNameInput?.addEventListener("click" , () => {console.log(taskNameInput)});

const taskDetailInput = document.querySelector<HTMLInputElement>("#small-input")


const submitbutton = document.querySelector<HTMLButtonElement>("#taskButton"); 
// submitbutton?.addEventListener("click" , ()=> {taskNameInput?.value})
submitbutton?.addEventListener("click" , ()=> {console.log(taskNameInput?.value)})
submitbutton?.addEventListener("click" , ()=> {console.log(taskDetailInput?.value)})


// console.log(taskNameInput)



const submitButton = document.querySelector("#submit-button")
const responceInput = document.querySelector("#To-Do")
const listBank = document.querySelector("#todo-list")

submitButton.addEventListener('click', function () {
    if(responceInput.value === "") return
    const newToDo = document.createElement('li')
    newToDo.textContent = responceInput.value
    listBank.appendChild(newToDo)
    responceInput.value = ""
}) 

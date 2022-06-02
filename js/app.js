const submitButton = document.querySelector("#submit-button")
const responceInput = document.querySelector("#To-Do")
const listBank = document.querySelector("#todo-list")

submitButton.addEventListener('click', function () { // had the hardest time with this function i 100% need to look over eventlisteners some more
    if(responceInput.value === "") return
    const newToDo = document.createElement('li')
    newToDo.textContent = responceInput.value
    listBank.appendChild(newToDo)
    responceInput.value = ""
}) 

const submitButton = document.getElementById('floatingInput')
const input = document.getElementById('createTodo')

input.addEventListener('keypress',(e)=>{
    const value = e.currentTarget.value;
    if(value === ""){
        submitButton.disabled = true
    }else{
        submitButton.disabled = false
    }
})
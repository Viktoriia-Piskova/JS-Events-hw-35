'use strict'

const editBtn = document.getElementById('editBtn');
const saveBtn = document.getElementById('saveBtn');

const displayTextDiv = document.getElementById('displayText');
const editTextInput = document.getElementById('editText');

document.addEventListener('keydown', editText, false);
editTextInput.addEventListener('keydown', saveText, false);


function editText(e) {
    console.log(e.keyCode)
    if (e.keyCode === 69 && e.ctrlKey) {
        e.preventDefault()
        const text = displayTextDiv.innerText;
        displayTextDiv.classList.add('hide');
        displayTextDiv.classList.remove('show');
        editTextInput.classList.remove('hide');
        editTextInput.classList.add('show');
        editTextInput.innerText = text;

    } else {
        return
    }
}

function saveText(e) {
    if (e.keyCode === 83 && e.ctrlKey){
    e.preventDefault()
    const text = editTextInput.value;
    editTextInput.classList.add('hide');
    editTextInput.classList.remove('show');
    displayTextDiv.classList.add('show');
    displayTextDiv.classList.remove('hide');
    displayTextDiv.innerText = text;}
    else{
        return
    }
}



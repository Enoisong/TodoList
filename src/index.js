import './style.css';
import { loadList, addToDo } from './app.js';

const input = document.querySelector('.input-field');
const addInput = document.querySelector('.fa-arrow-left');
const refresh = document.querySelector('.fa-refresh');

let LIST = '';
let id = '';
const data = localStorage.getItem('TODO');

if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    //if data is not empty
    LIST = [];
    id = 0;
}
refresh.addEventListener('click', () => {
    localStorage.reload();
})

const pushToDo = () => {
    const data = localStorage.getItem('TODO');

    if(data) {
        LIST = JSON.parse(data);
        id = LIST.length;
        loadList(LIST);
    } else {
        LIST = [];
        id = 0;  
}
const toDo = input.value;

//if input is not empty
if (toDo) {
    addToDo(toDo, id, false, false);

    LIST.push({
        name: toDo,
        index: id,
        done: false,
        trash: false,       

    });
    loadList(LIST);
    //adding item to the local storage applicable where the LIST array is updated
    localStorage.setItem('TODO', JSON.stringify(LIST));

    id += 1;    
}
input.value = '';

};
addInput.addEventListener('click', pushToDo);

document.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        pushToDo();
    }
});
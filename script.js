const form =document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const taskList = document.querySelector('#task-list');
const li = document.getElementsByClassName('.list-group-item list-group-item-secondary');
const tumLi = document.getElementsByTagName('li');
const toast = document.getElementsByClassName('.toast');


//call event listeners
eventListeners();



function eventListeners(){
    //submit event
    form.addEventListener('submit',addNewItem);
 
    //delete an item
    taskList.addEventListener('click',deleteItem);
}



//add new item  
function addNewItem(e){

    if(input.value === ''){
        alert('Listeye Boş Ekleme Yapamazsınız!');
    }else{
        //create li
    const li = document.createElement('li');
    li.className='list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li 
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //Added LocalStorage
    var List = [];  
    if(localStorage.getItem("added-list2")!=null){
        List=JSON.parse(localStorage.getItem("added-list2"))
    }  
    
    List.push(input.value);
    localStorage.setItem('added-list2', JSON.stringify(List));
    //Added LocalStorage finish
    
    alert('Listeye eklendi')

    
    

    

    //clear input
    input.value = '';

    e.preventDefault();
    }
    
}

for(var x = 0 ; x<tumLi.length; x++){

    tumLi[x].addEventListener("click",function(){
        this.classList.toggle("tamamlanmis");
    });
}


//delete an item
function deleteItem(e){
    if(e.target.className === 'fas fa-times'){
        e.target.parentElement.parentElement.remove();
    }
}

const input=document.querySelector('input');
const button=document.querySelector('.addTask > button');

button.addEventListener('click', addList);

function addList(event){
    const notCompleted=document.querySelector('.notCompleted');
    const completed = document.querySelector('.completed');

    const newLi=document.createElement('li');
    const checkBtn=document.createElement('button');
    const delBtn=document.createElement('button');

    checkBtn.innerHTML ='<i class="fas fa-check"></i>';
    delBtn.innerHTML ='<i class="fas fa-trash">';

    if(input.value!==''){
        newLi.textContent=input.value;
        input.value='';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent=this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display='none';
    });

    delBtn.addEventListener('click', function () {
        const parent = this.parentNode;
        parent.remove();
    });
}
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter =document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
e.preventDefault();

 var newItem =document.getElementById('item').value;

 var li = document.createElement('li');

 li.className ='list-group-item';
 li.appendChild(document.createTextNode(newItem));
var deleteBtn = document.createElement('button');

deleteBtn.className='btn btn-danger btn-sm float-right delete';

deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);

var editBtn=document.createElement('button')
editBtn.className='btn btn-dark btn-sm float-right edit';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);

 itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
    // if(confirm('are you sure?')){
        var li =e.target.parentElement;
        itemList.removeChild(li);
    // }
    }
}
function filterItems(e){
var text = e.target.value.toLowerCase();
var items = itemList.getElementsByTagName('li');

Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
 if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display='block';
    } else {
        item.style.display='none';
    }
    console.log(itemName);
});
}
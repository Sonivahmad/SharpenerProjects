// console.log(document.domain);
// console.log(document.title);
// // document.title = 123
// console.log(document.head);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//getElemntsById//
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);
// headerTitle.innerHTML=<h3>Hello</h3>
// headerTitle.style.borderBottom ='solid 3px #000'
// header.style.borderBottom ='solid 3px #000'
// let main = document.getElementById('main');
// main.style.fontWeight = 'bold'
// main.style.color = 'green';

// let items =document.getElementsByClassName('list-group-item');
// console.log(items);
// // items[1].textContent='hello 3';
// for(let i =0; i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// items[2].style.backgroundColor = 'green';

// let itemLast = document.getElementsByClassName('list-group-item-last');
// console.log(itemLast);
// itemLast[0].style.color='red';
// itemLast[0].style.fontWeight='bold';

// let li =document.getElementsByTagName('li');
// console.log(li);
// li[4].style.color='red'
// li[4].style.fontWeight ='bold'

// let secondItems = document.querySelector('.list-group-item:nth-child(2)');
// secondItems.style.backgroundColor='green';


// let thirdItems = document.querySelector('.list-group-item:nth-child(3)');
// thirdItems.style.display='none';

// let items=document.querySelectorAll('.list-group-item');
// items[1].style.color='green';

// let odd=document.querySelectorAll('li:nth-child(odd)');
// let even=document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
//     even[i].style.backgroundColor='red';
// }

 let newDiv = document.createElement('div');
 newDiv.className='hello world';
 newDiv.id='hellu';
 newDiv.setAttribute=('title', 'hello div');


 let newDivText = document.createTextNode('HEllo');

 newDiv.appendChild(newDivText);
 let container = document.querySelector('.container');
 let h1 =document.querySelector('h1');
container.insertBefore(newDiv, h1 );
newDiv.style.fontSize='70px'
 console.log(newDiv);

//  let newAdd = document.querySelector('.list-group');
//  let newValue =document.querySelector('.list-group-item');
// newAdd.insertBefore(newDiv, newValue);
// newDiv.style.fontSize='70px'




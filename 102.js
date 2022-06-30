const Container = (document.querySelectorAll(".container"))
console.log(Container)

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent)

// change the style elemeent
// mainHeading.style.color = "blue";

// const inputt = document.querySelector("input")
// console.log(inputt)
// inputt.style.backgroundColor = "red"; 

// file no.107 get and set attrubutes
const link = document.querySelector("a")
console.log(link);
console.log(link.getAttribute("href").slice(2))

const inputElement = document.querySelector(".form-todo input")
console.log(inputElement.getAttribute("placeholder"))

const formGroup = document.querySelector(".form-group label")
// console.log(formGroup.getAttribute("for"))
formGroup.setAttribute("for", "myname")
console.log(formGroup.getAttribute("for")) 

// file no. 108
// get multiple elements using getElements by class Name
// const navItems = document.getElementsByClassName("nav-item")
// console.log(navItems)
// console.log(navItems[2])
// console.log(typeof navItems)
// console.log(Array.isArray(navItems))

// get multiple elements using querySelectorAll
// const navItems = document.querySelectorAll(".nav-item")
// console.log(navItems)
// console.log(navItems[0])
// console.log(typeof navItems)
// console.log(Array.isArray (navItems))

// file no.109
// const navItems = document.getElementsByTagName("a")
// console.log(navItems)
// for(let i=0; i<navItems.length; i++){
//     console.log(navItems)
//     // const navItem = navItems[i]
//     // navItem.style.color = "red"
//     // navItem.style.backgroundColor = "#fff"
// }

// for(let navItem of navItems){
//     navItem.style.color = "blue";
//     navItem.style.backgroundColor = " white"
// }

// let navItems = document.getElementsByTagName("a")
// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// navItems.forEach((navItem) => {
//     navItem.style.color = "pink"
// })

// file no. 109
// let navItems = document.querySelectorAll("a")
// console.log(navItems)
// for(let i= 0; i<navItems.length; i++){
//     const navItem = navItems[i]
//     navItem.style.color = "green"
//     navItem.style.backgroundColor = "white"
// } 

// for(let navItem of navItems){
//     navItem.style.color = "red"
// }

// navItems = Array.from(navItems)
// console.log(Array.isArray(navItems))
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "pink"
// })

// file no.110 innerHtml
// const headline = document.querySelector(".headline")
// // console.log(headline.innerHTML)
// headline.innerHTML = "<h1>Inner html changed</h1>"
// headline.innerHTML += "<button class=\"btn\"> Learn More </button>"
// console.log(headline.innerHTML)

// file no.112
// classList
// const sectionTodo = document.querySelector(".todo-section");
// //  console.log(sectionTodo.classList )
//  sectionTodo.classList.add("bg-dark")
// // sectionTodo.classList.remove("container")

// const ans = sectionTodo.classList.contains("bg-dark")
// console.log(ans)

// const sectionTodo = document.querySelector(".todo-section")
// sectionTodo.classList.toggle("container")
// sectionTodo.classList.toggle("container")

// const header = document.querySelector(".header")
// console.log(header.classList);
// header.classList.add("dark")

// file no.113
// how to creat html element by help of js and how to save web page
// Add new HTML elements to page
// innerHTML to add html element
// const todoList = document.querySelector(".todo-list")
// todoList.innerHTML += "<li> New Todo </li>"
// todoList.innerHTML += "<li> new todo 1</li>"
// console.log(todoList.innerHTML)

// file 114 document.creatElement()
// append, prepend, remove, before, after
// )const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "teach student"
// const todoList = document.querySelector(".todo-list")
// todoList.append(newTodoItem)
// console.log(newTodoItem

// const mainClassItem = document.createElement("h2")
// mainClassItem.textContent = "teach me";
// const mainClass = document.querySelector(".main-class")
// mainClass.prepend(mainClassItem)
// console.log(mainClassItem)

// const newTodolist = document.createElement("li")
// newTodolist.textContent = "teach student"
// const todoItem = document.querySelector(".todo-list")
// todoItem.before(newTodolist)
// console.log(newTodoItem)

// const todo1 = document.querySelector(".todo-list")
// todo1.remove()
// console.log(todo1)

// const todo2 = document.createElement("li")
// todo2.textContent = "teach me"
// const todo3 = document.querySelector(".todo-list")
// todo3.after("teach me")
// console.log(todo2)

// file no.116 element.insertAdjacentHtml
// beforebegin, afterbegin, beforeend, afterend

// const todoLi = document.querySelector(".todo-list")
// todoLi.insertAdjacentHTML("afterbegin", "<li> new add</li>")
// console.log(todoLi)

// const todoLis = document.querySelector(".todo-list")
// todoLis.insertAdjacentHTML("beforebegin", "<li>new element</li>")
// console.log(todoLis)

// file no.116 clone nodes
// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "Teach my student"
// const li2 = li.cloneNode(true)
// ul.append(li)
// ul.prepend(li2)
// console.log(ul)

// file no. 117 some old methods to support poor IE 
// appendChild, insertBefore, replaceChild, removeChild.

//  const uls = document.querySelector(".todo-list")
//  const li = document. createElement("li")
//  li.textContent = "new todo"
//  uls.appendChild(li)
//  console.log(uls)

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// const refrenceNode = document.querySelector(".first-todo")
// li.textContent = "my content"
// ul.insertBefore(li, refrenceNode)
// console.log(ul)

//  const listItems = document.querySelectorAll(".todo-list li")
// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "item 6"
//  ul.append(li)
// console.log(listItems)

const ul = document.querySelector(".todo-list")
const listItem = ul.getElementsByTagName("li")
const sixthLi = document.createElement("li")
sixthLi.textContent = "item 6"
ul.append(sixthLi)
console.log(listItem) 

// file no.119
// how to get dimension of element
// const todoSection = document.querySelector(".todo-section") 
// const info = todoSection.getBoundingClientRect();
// console.log(info)

const todoSection = document.querySelector(".todo-section")
const info = todoSection.getBoundingClientRect().height
console.log(info)

// file no.120 events
// const btn = document.querySelector(".btn-headline")
// btn.addEventListener("click", ()=> {
//     console.log("you clicked me")
// })

// file no.121 this keyword
const button = document.querySelector(".btn-headline")
button.addEventListener("click", function(){
    console.log("you clicked me")
    console.log("value of this")
    console.log(this)
})
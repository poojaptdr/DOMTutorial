// const rootNode = document.getRootNode();
// console.log(rootNode)

// const rootNode = document.getRootNode()
// console.log(rootNode.childNodes)

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode)
// console.dir(htmlElementNode)

// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0]
// console.log(htmlElementNode.childNodes)

const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
const headElement = htmlElementNode.childNodes[0]
console.log(headElement)
console.log(headElement.parentNode)
console.log(headElement.nextElementSibling)

const textNode = htmlElementNode.childNodes[1];
console.log(textNode)
console.log(textNode.nextSibling)                                  

const bodyNode = htmlElementNode.childNodes[2];
console.log(bodyNode)

const h1 = document.querySelector("h1")
console.log(h1.childNodes)
console.log(h1.parentNode)
const h1sParent = h1.parentNode;
h1sParent.style.backgroundColor = "#333"
h1sParent.style.color = "#fff"

// const h1 = document.querySelector("h1")
// const body = h1.parentNode.parentNode.parentNodeu
// body.style.color ="red";
// body.style.backgroundColor = "black"

const body = document.body;
console.log(body)
body.style.color = "red"

const head = document.querySelector("head")
// console.log(head)
const title = document.querySelector("title")
console.log(title)
console.log(title.parentNode)
console.log(title.childNodes)

const container = document.querySelector(".container")
console.log(container.children)
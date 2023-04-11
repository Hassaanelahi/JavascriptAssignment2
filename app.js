// #1
// function addFunc(x){
//     function checkNumber(y){
//         return x + y
//     }
//     return checkNumber
// }
// let number = addFunc(5)
// console.log( number(6) )



// #2
// function searchArray(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     } else if (arr[0] === value) {
//         return true;
//     } else {
//         return searchArray(arr.slice(1), value);
//     }
// }

// const numlist = [1, 2, 3, 4, 5];
// console.log(searchArray(numlist, 5));



// #3
// function addPara(text){
//     const newPara = document.createElement("p")
//     const bodyEl = document.querySelector("body")

//     newPara.textContent = text
//     bodyEl.append(newPara)
// }

// addPara("This is a new Paragraph")



// #4
// const bodyEl = document.querySelector("body")
// const ulEl = document.createElement("ul")
// bodyEl.append(ulEl)

// function myList(item){
//     const newItem = document.createElement("li")
//     newItem.textContent = item
//     ulEl.append(newItem)
// }
// myList("Fruit")
// myList("Vegetables")



// #5
// function changeBg(element, color){
//     const el = document.querySelector(element)
//     el.style.backgroundColor = color
// }
// changeBg("h1", "red")
// changeBg("#title", "yellow")



// #6
// function lsFunc(key, object){
//     let objString = JSON.stringify(object)
//     localStorage.setItem(key, objString)
// }

// let student = {
//     name : "Hasssaan",
//     class: "111011"
// }

// lsFunc("Student Data", student)



// #7
// function rlFunc(key){
//     const objString = localStorage.getItem(key)
//     const object = JSON.parse(objString)
//     return object
// }

// console.log( rlFunc("Student Data") )



// #8
// function objFunc(object) {
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         localStorage.setItem(key, JSON.stringify(object[key]));
//       }
//     }
//     const retrievedObject = {};
//     for (const key in object) {
//       if (object.hasOwnProperty(key)) {
//         retrievedObject[key] = JSON.parse(localStorage.getItem(key));
//       }
//     }
//     return retrievedObject;
// }
  
// const myObject = {
// name: "Hassaan Elahi",
// age: 21,
// email: "Hassaanelahi29@gmail.com"
// };
// const retrievedObject = objFunc(myObject);

// console.log(retrievedObject);
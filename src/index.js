import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//1.data show 2 types: 
//data render with the help of jsx
ReactDOM.render(<h1>Hello World!</h1>,
  document.getElementById("root"));

//pure javascript create new element
// var h1= document.createElement('h1');
// h1.innerHTML = "surbhi"
// document.getElementById("root").appendChild(h1);

//ReactDOM.render(kya dikhana hai,kaha dikhana hai,callback func);
//jyare pn render method no user karo tyare its only take one single element

//-> 2. render method in multiple jsx element use karava 
// ReactDOM.render(<div>
//   <h1>Hello World!</h1>
//   <p>THis is my first react project</p>
//   <h2>jsx element</h2>
//   </div>,
//   document.getElementById("root"));

//->3. in react v16 its possible for render () to return an array of element 
// ReactDOM.render(
//   [
//   <h1>Hello World! array</h1>,
//   <p>THis is my first react project array</p>,
//   <h2>jsx element array</h2>
//   ],
// document.getElementById("root"));

//-> 4. using react freagment
// ReactDOM.render(
//   <React.Fragment>
//   <h1>Hello World! array</h1>
//   <p>THis is my first react project array</p>
//   <h2>jsx element array</h2>
//   </React.Fragment>,
// document.getElementById("root"));

const name= "surbhi";
const surname = "sagathiya";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos/"

ReactDOM.render(
  <>
  <h1 contentEditable="true">my name is {name+" "+surname}.</h1>
  <h2 className="heading">Netflix pick</h2>
  <p>Here the list of my fav serise</p>
  <ol>
    <li>Dark</li>
    <li>lucifer</li>
    <li>my holo love</li>
    <li>robot</li>
  </ol>
  <p> js expression : add number {3+10}</p>
  <p>Currant date: {currDate} </p>
  <p>Currant Time: {currTime} </p>

  <div className="img_div">
    <img src={img1} alt="random"/> 
    <img src={img2} alt="random"/>
    <a href={link} target="_subhu">
      <img src={img3} alt="random"/>
    </a>
  </div>

 </>,
  document.getElementById("root")
);
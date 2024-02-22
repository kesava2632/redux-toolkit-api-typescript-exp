import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//   let a = ['kesava','sri','veera']


// //   function errormsg(err:string):void{
// //      console.log(err)
// //   }

// //   errormsg("hi")

// type User = {
//   name:string,
//   age:number
// }
  
// const arr:User[] = []

// arr.push({name:'kesava',age:27})
// arr.push({name:'sri',age:25})
// console.log(arr)

// //enums


// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// // Using enums
// let playerDirection: Direction = Direction.Right;
// if (playerDirection !== Direction.Right) {
//   console.log("Player is moving right",Direction.Right);
// }

// // Enums with explicit values
// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// }

// let backgroundColor: Color = Color.Blue;
// console.log("Background color:", backgroundColor);

// // Reverse mapping
// let colorName: string = Color[4]; // 'Blue'
// console.log("Color name:", colorName);



// //interface

//  interface Google {
//   name:string,
//   email:string,
//   mobileNo?:number,
//   starting:()=>string
//  }

//  const kesava:Google = {
//   name:'kedsae', email:"",starting: () =>{
//    return '4'}
//  }

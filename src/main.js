let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
  button.addEventListener('click',(e) =>{
    if(e.target.innerHTML == "="){
      string = eval (string);
      input.value = string;

    }
    else if (e.target.innerHTML == 'AC'){
      string = "";
      input.value = string;
      
    }
       else if (e.target.innerHTML == 'Del'){
      string = string.substring(0,string.length-1)
      input.value = string;
      
    }
    else {
      string += e.target.innerHTML;
     input.value = string;
    }


  });
  
});










// let input = document.getElementById('inputBox')
// let buttons = document.querySelectorAll('button')

// let string = " ";
// buttons.forEach(button => {
//   button.addEventListener('click',(e) => {
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       input.value = string;

//     }
    

//     else if(e.target.innerHTML == 'AC'){
//       string =" ";
//       input.value = string;

//     }
//     else if(e.target.innerHTML == 'Del'){
//       string = string.substring(0, string.length-1);
//       input.value = string;
//     }

//     else {
//       string += e.target.innerHTML;
//      input.value = string;
//     }
     

//   })

  
// });




//  let test = () =>{
//   console.log("MD Salah Uddin");
  
// }
// test()
// one()

// function one(){
//   console.log("Hello");
  
// }

// let kala = () => 'bala';
 
  

// console.log(kala());

// setTimeout(() => {
//   console.log(100 + " jakakkkj");
  
// }, 1000);


// let output = undefined;

// let f1 = (callback)=> {
//   console.log('f000000000001');
//   callback()

  
// };
// let f2 = (callback)=> {
//  setTimeout(() => {
//    output = [1,2,3];
//   console.log(output);
//  callback()
  
  
//  }, 1000);
  
// };

// let f3 = ()=> {
//   output.map((item)=>{
//      console.log(item);
//   })
 
  
// };

// f1(() => {
// f2(()=>{
// f3()
// });

// });


// let p1 =async ()=>{  
//   console.log('one');
  
// }

// let p2 = async()=>{  
//  return new Promise((resolve)=> {
//   setTimeout(() => {
//   console.log('tow');
//   resolve()
//   },1000);
  
// });

// }
// let p3= async()=>{  
//   console.log('tree');
  
// }

// await p1()
// await p2()
// await p3()



// let p1 = async ()=>{
//   console.log('one');
  
// }

// let p2 = async()=>{
//   re
// }
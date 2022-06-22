// const age= 15;
 
// if(age >=18){
//     console.log("sarah can start dl"); 
// }else{
//   const yearsLeft = 18-age;
//   console.log(`sarah is too young wait for ${yearsLeft} years`);
// }

// const birthYear = 1999;
// // let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);
 
// const speed = 100;
// if(speed>=60){
//     limit = "overspeed";
// }else{
//     limit = "control speed";
// }
// console.log(limit);

// const massujjwal = 75;
// const hytujjwal = 1.85;
// const massreetool = 65;
// const hytreetool = 1.65;

// const bmiujjwal = massujjwal/hytujjwal** 2;
// const bmireetool = massreetool/hytreetool ** 2;
// console.log(bmireetool,bmiujjwal);

// if(bmireetool>bmiujjwal){
//     console.log(`reetool bmi (${bmireetool}) is more than ujjwal (${bmiujjwal})`);

// }else{
//     console.log(`ujjwal bmi (${bmiujjwal}) is more than reetool (${bmireetool})`);
// }

// console.log(Boolean(0));
// console.log(Boolean (undefined));

// const money = 100;
// if(money ){
//     console.log("dont spend")
// }else{
//     console.log("you should get job");
// }

// const Age = prompt("helo tell us your age");
// console.log(`Your age is ${Age}`);

// if(Age >=18){
//     console.log(`Your age is ${Age} you are eligible now for vote`);

// }
// else if(Age >= 21){
//     console.log(`Your age is ${Age} you are eligible now for marriage`);
// }else{
//     console.log(18-Age +" "+ "years left");
// }

//logical op
// const Driver = true;
// const vision = true;
// const tired = false;
// console.log(Driver && vision);
// console.log(Driver || vision);
// console.log(!Driver);

// // const doDrive = Driver && vision;

// if(Driver&&vision && !tired){
//     console.log("able to drive car");
// }else{
//     console.log("not able to drive");
// }

// const dolphinScore = (96+108+89)/3;
// const koalasScore = (88+91+110)/3;

// console.log(  dolphinScore,koalasScore);

// if(dolphinScore > koalasScore){
//     console.log("dolphins score more and win trophy");
// }else if(dolphinScore<koalasScore){
// console.log("koalas won the trophy");
// }

// const dolphinScore = (97+112+101)/3;
// const koalasScore = (10+20+12)/3;

// console.log(  dolphinScore,koalasScore);

// if(dolphinScore > koalasScore && dolphinScore >=1000){
//     console.log("dolphins score more and win trophy");
// }else if(dolphinScore<koalasScore && koalasScore >=90){
// console.log("koalas won the trophy");
// }else{
//     console.log("no one won");
// }

//terneary 
// const age = 20;
// age >= 18 ? console.log("drink vine") : console.log("drink water");

// const drink = age >= 18 ? 'vine' : 'water';
// console.log(drink);
// console.log(`i like to drink ${age >= 18 ? 'vine' : 'water'}`);

// Strict mode

// `use strict`;

// let Driver = false;
// const test = true;

// if(test) Drivers = true;
// if(Driver)console.log("i can drive"); 

// function

// function logger(){
//     console.log('my name is prashant');

// }
//calling , running and invoking the function //
// logger();
// function fruitProcessor(apples,oranges){
//     // console.log(apples,oranges);
//     const juice = `juice with ${apples} apples and
//      ${oranges} oranges`;
//     return juice;
// }
// const applejuice =  fruitProcessor(5,3);
// console.log(applejuice);

// const appleorangejuice = fruitProcessor(2,6);
// console.log(appleorangejuice)

//function declaration - in function declaration we can//
 //call the function 
//before defining and this is called hoisting.
// var age1 = calcAge(1999);
// function calcAge(birthyear){
//     return 2022-birthyear;
// }

// console.log(age1);

//functionnexpersion - we cannot do hoisitng.
// const calAge2 = function(birthYear){
//     return 2050 - birthYear;
// }
// const age2 = calAge2(1999);
// console.log(age2);

//arrow function
//  const calcage3 = birthYear => 2050-birthYear;
//  const age3 = calcage3(1999);
//  console.log(age3);

//  const yearsuntil = (birthYear,firstName) => {
//      const age = 2050 - birthYear;
//      const retire = 65 - age;
//     //  return retire;
//     return `${firstName} retire in ${retire} years`;
    
//  }
// console.log(yearsuntil(1999,'Prashant'));

// const speed = (maxspeed,control,penalty) =>{
//     console.log(`speed is ${maxspeed} , Limit is ${control
//     }`);
//     const limit = control ;
//     const over =   maxspeed - limit ;
//     const fine = penalty ;
//     return `Your speed was ${over}kmph more than the limit 
//     ${limit}kmph and the fine is ${fine} only` 
// }
// console.log(speed(110,60,500));

//calling function from another function

// function cutFruitpices(fruits){
//     return fruits*4;
// }
// function fruitProcessor(apples,oranges){
//     const applepices = cutFruitpices(apples);
//     const orangepices = cutFruitpices(oranges);
//     // console.log(apples,oranges);
//     const juice = `juice with ${applepices} apples and
//     ${orangepices} oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//


// const calcage3 = function(birthYear){
// return 2050-birthYear;
// }

// const yearsuntil = function(birthYear,firstName){
//     const age = calcage3(birthYear);
//     const retire = 65 - age;

//     if(retire > 0){
//         console.log(`${firstName} retires in ${retire}`);
//         return retire;
//     }else{
//         console.log(`${firstName} is already retire`);
//         return -1;
//     }
    // return retire;
//    return `${firstName} retire in ${retire} years`;
   
// }
// console.log(yearsuntil(1985,'Prashant'));


//functionntask
// const avg = (team1,team2,team3) => (team1+team2+team3)/3;
// console.log(avg(3,4,5));
//
// const scoredoplhins = avg(44,23,71);
// const scorekoalas = avg(65,54,49);
// console.log(scoredoplhins,scorekoalas);
//

// const checkwinner = function(avgdol,avgkoa){
//     if(avgdol>= 2*avgkoa){
//         console.log(`dolphin win (${avgdol} vs ${avgkoa})`);
//     }else if(avgkoa >= 2*avgdol){
//         console.log(`koalas win (${avgkoa} vs ${avgdol})`);
//     }else{
//         console.log(`no one won`);
//     }
// }
// checkwinner(scoredoplhins,scorekoalas)

// checkwinner(565,111);
//function ends

//array start
// how to start array
// const friend = ['prashant',
// 'ujjwal',
// 'reetool',
// 'sumekh'];
// console.log(friend);

// // or
// const y = new Array(1999,1992,1993,1986);

// console.log(friend[0],y[0]);

// console.log(friend.length);

// console.log(friend[friend.length - 1]);

// // array mutate
// friend[2] = 'gaurav';
// console.log(friend);
// friend = ['bob','alien'] we cannot replace a array when use by const

// const middelname = 'raj';
// const prashant = ['prashant',middelname,1999-2022,friend];
// console.log(prashant);

// exe
// const calcAgearr = function(birthYear){
//     return 2022 - birthYear;
// }
// const year = [1999,1992,1993,1986];
// const agear1 = calcAgearr(year[0]);
// console.log(agear1);

// const ages = [calcAgearr(year[0]), calcAgearr(year[1]),
// calcAgearr(year[year.length-1]) ];
// console.log(ages);

//basic array operations-methods
//push method

// const frnd = ['prashant','ujjwal','reetool','sumekh']; 
//  const newLength = frnd.push('mausham');
// console.log(frnd);
// console.log(newLength);

//array challenge

// const arr1 = [5,6,7,8];
// const arr2 = [9,7,4,3];
// const diff  = (arr1 , arr2)=>{
//     const dif = [];
//     for(let i = 0; i < arr1.length; i++){
//         const res = Math.abs((arr1[i] || 0) - (arr2[i] || 0));
//         dif[i] = res;
//     };
//     return dif;
// };
// console.log(diff(arr1,arr2));
// array is not primitive
//array ends

//objects in object we can assign the
// name to keys like and order of property value doesnot matter.


// const info = {
//     firstName : 'prashant',
//     lastName : 'pandey',
//     age : 2022-1999,
//     job : 'front-end developer',
//     friends : ['ujjwal','gaurav','reetool']
// };
//  console.log(info);

//  console.log(info.age);

//  console.log(info['age']);
//  //when we need to frst compute the property name we use bracket 
//  //and in anyother use dot and it is more clearer
//  const namekey = 'Name';
//  console.log(info['first' + namekey]);
//  console.log(info['last' + namekey]);

//  const promptinfo = prompt("What do you want to know choose btw firstName,LastName,age,job and friends");
 
//  if(info[promptinfo]){
//      console.log(info[promptinfo]);
//  }else{
//      console.log('wrong req we dont have answer for that');
//  }
//  //how to use dot and brket to add new prperty

//  info.location = 'Delhi';
//  info['social'] = "fb,insta and twitter";

//  console.log(info);

//  //challenge-
//  console.log(`${info.firstName} has ${info.friends.length} friends  
//   and his best friend is called ${info.friends[2]}`);
// const info = {
//     firstName : 'prashant',
//     lastName : 'pandey',
//     birthyear : 1999,
//     job : 'front-end developer',
//     friends : ['ujjwal','gaurav','reetool'],
//     hasdl:true,
// //we use function expresssion inside an object
//     // calcage :function(birthYear){
//     //     return 2022-birthYear;
//     // }
//     // whatever appears before the dot is who is calling method 
//     // like below info is before the dot so this is info it is very useful
//     // calcage : function(){
//     //     return 2022-this.birthyear;
//     // }

//     calcage : function(){
//         this.age = 2022-this.birthyear
//         return this.age ;
//     },
//     getSummary : function(){
//         return  `${this.firstName} is a ${this.calcage()}-year old
//         ${info.job} and ${this.hasdl ? 'yes' : 'no'} driver license`;
//     }

// };

// console.log(info.calcage());
// // console.log(info.age);
// // console.log(info.age);
// // console.log(info.age);
// // console.log(info.age);
// // console.log(info.age);
// // console.log(info.age);
// //  console.log(info['calcage'](1999));
// // console.log(info);

// // get summary method

// // challenge
// console.log(info.getSummary());
// // console.log(`);

// //object challenge
// const reetool  = {
//     firstName : 'reetool',
//     lastName : 'miller',
//     mass : 55,
//     height : 1.8,

//     calcbmi : function(){
//         this.bmi = this.mass / this.height **2;
//         return this.bmi;
//     }

// };
// const prashant = {
//     firstName : 'prashant',
//     lastName : 'smith',
//     mass : 90,
//     height : 2,

//     calcbmi : function(){
//         this.bmi = this.mass / this.height **2;
//         return this.bmi;
//     }

// };
// prashant.calcbmi();
// reetool.calcbmi();
// console.log(prashant.bmi , reetool.bmi);


// if(prashant.bmi>reetool.bmi){
//     console.log(`${prashant.firstName}'s BMI (${prashant.bmi})
//      is higher than ${reetool.firstName}'s (${reetool.bmi}) !`);
// }else{
//     console.log(`${reetool.firstName}'s BMI (${reetool.bmi})
//     is higher than ${prashant.firstName}'s (${prashant.bmi}) !`);
// }

// if(prashant.bmi > 18 && prashant.bmi<24){
//     console.log(`${prashant.firstName} bmi normal`);
// }else if(prashant.bmi>24){
//     console.log(`${prashant.firstName} bmi overweight`);
// }else{
//     console.log(`${prashant.firstName} bmi underweight`);
// }

// if(reetool.bmi > 18 && reetool.bmi<24){
//     console.log(`${reetool.firstName} bmi normal`);
// }else if(reetool.bmi>24){
//     console.log(`${reetool.firstName} bmi overweight`);
// }else{
//     console.log(`${reetool.firstName} bmi underweight`);
// }


//iteration : for loop

// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');
// console.log('lifting weights');

// for loop keeps running while condition is true
// for(let rep = 1; rep <= 10 ; rep++){
//     console.log(`lifting weights  ${rep}`);
// }

// // loop through arrays
// const prparray = [
//     'prashant',
//     'pandey',
//     '2022-1999',
//     'developer',
//     ['prashant','sumekh','mausham'],
//     true,
// ];
// const type =[];
// for(let i = 0; i < prparray.length ;i++){
//     //reading from array
//     console.log(prparray[i],typeof prparray[i]);

//     //filling types array
//     // type[i]=typeof prparray[i];

//     type.push(typeof prparray[i]);
// }
// console.log(type);

// const years = [
//     1997,1969,1999,1985
// ];

// const age=[];

// for(let i = 0 ; i<years.length;i++){
//     2022-years[i];
//     age.push( 2022-years[i]);
// }
// console.log(age);

//continue and break
// for(let i = 0; i < prparray.length ;i++){
//     if(typeof prparray[i] !== 'string') continue;
//     console.log(prparray[i],typeof prparray[i]);
// }
// console.log('break');
// for(let i = 0; i < prparray.length ;i++){
//     if(typeof prparray[i] === 'string') break;
//     console.log(prparray[i],typeof prparray[i]);
// }

// const prince = [
//     'prashant',
//     'pandey',
//     '2022-1999',
//     'developer',
//     ['prashant','sumekh','mausham'],
//     true,
// ];
// //0,1...4
// //4,3,...0

// for(let i = prince.length-1;i>=0;i--){
//     console.log(i,prince[i]);
// }
// // create a loop inside a loop

// for(let exercise =1; exercise<=3;exercise++){
//     console.log(`-----starting exercise ${exercise}------`);

//     for(let rep = 1 ; rep <=5 ; rep++){
//         console.log(`Exercise ${exercise} 
//         :lifting weight rpition ${rep}`);
//     }
// }


// //challenge

// // made the function for tips and billa 
// const calcTip = function(bill){
//     //if bill is >50 and < 300 then bill * 0.15 else *0.2 
//     return bill >=50 && bill <=300 ? bill *0.15: bill*0.2;
// }
// // writing array for bills and empty for tips ,total
// const bills =[22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const total = [];

// loop for getting tips and total bill
// for(let i = 0 ; i<bills.length;i++){
//     const tip = calcTip(bills[i]);
//     // adding tips arr to bill
//     tips.push(tip);
//     //total bill
//     total.push(tip+bills[i]);
// }
// console.log(bills,tips,total);
// //calculating avg for total bill and tips
// const calavg = function(arr){
//     let sum = 0;
//     for(let i =0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calavg(total));
// console.log(calavg(tips));
// //adv js  

// //script for modal 
// const modal =document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnclosemodel = document.querySelector('.close-model');
// const btnOpenModel = document.querySelectorAll('.show-model');

// // loop for each modal button
// for(let i = 0 ; i<btnOpenModel.length;i++)
// btnOpenModel[i].addEventListener('click',openmodal );
// btnclosemodel.addEventListener('click',closemodal );
// overlay.addEventListener('click', closemodal);

// // function to add hidden class 
// function closemodal(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// // function to remove hidden class
// function openmodal(){
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// //modal close


// var age1 = calcAge(1999);
// function calcAge(birthyear){
// return 2022-birthyear;
// }                                                        
// console.log(age1);

// const Showroom = {
//   Cars : ["Audi","BMW","Ferari"],
//   class : "A-Class"
// };
// console.log(Showroom.Cars);

// const AllCars = ["Mustang","Honda"];
// console.log(...AllCars);
 
// const TArry = [...AllCars,...Showroom.Cars];
// console.log(...TArry);


// let x = "";
// const ob = {
//   name:"prp",
//   age : 23,
//   cars: [
//     {name:"ford",models :["Fiesta","Focus"]},
//     {name:"BMW",models :["X5","X3"]},
//     {name:"Audi",models :["R8","R4"]}
//   ]
// };

// for(let i in ob.cars){
// x += "<h2>" + ob.cars[i].name + "</h2>";
// for(let j in ob.cars[i].models){
//   x += ob.cars[i].models + "<br>";
// }
// }

// document.getElementById("prac").innerHTML = x;

// // basic and usefull hof is filter 
// var animals = [
//   {name : "fluffy", specis : "rabbit"},
//   {name : "carpo", specis : "cat"},
//   {name : "jimy", specis : "fish"},
//   {name : "harold", specis : "cat"},
// ]

// //filter will reduce the logic and code by using filter we dont use 
// //loop. filter is just object they slot into each other they are composible
// var cats = animals.filter((animals) => animals.specis === 'cat')

// // var iscat = function(animals){
// //   return animals.specis ==="cat";
// // }
// // var cats = animals.filter(iscat)
// // var otheranimal = animals.reject(iscat);



// // var cats = [];
// // for(let i =0 ; i<animals.length;i++){
// //   if(animals[i].specis === 'cat')
// //   cats.push(animals[i]);
// // }

// console.log(...cats);

// //map it goes through array but unlike filter it doesnot throw object
// //away instead it transform them.

// var animal = [
//   {name : "fluffy", specis : "rabbit"},
//   {name : "carpo", specis : "cat"},
//   {name : "jimy", specis : "fish"},
//   {name : "harold", specis : "cat"},
// ]

// // by using for loop
// // var names = []
// // for(let i = o ; i<animal.length;i++){
// //   names.push(animal[i].name);
// // }
// // var names = animal.map(function(animal){ return animal.name + ' is a ' + animal.specis;})
// var names = animal.map((x) => x.name+ ' is a ' +x.specis);
// console.log(names);
 
// var order =[
//   {amount : 250},
//   {amount : 400},
//   {amount : 100},
//   {amount : 352}
// ]

// //declaration
// let res = console.log(myfunction(5,6));
// function myfunction(a,b){
//  return a*b;
// }

// // expression
// const result = function(a,b){
//   return a*b;
// }
// let m = console.log(result(5,6));

// // arrow 
// const re = (a,b) => a*b;
// console.log(re(5,6));

// // iife 
// (function(a,b){console.log("prashant");})()


// //example

// console.log('a')

// // setTimeout
// const y = setTimeout(function(){
//   console.log("wwewe");
// },3000);


// // promise 
// let a  = 10
// let g = new Promise((resolve, reject) => {
//     if (a == 10) {
//       resolve();
//     } else{
//       reject();
//     }

// });
// // console.log(g);
// g.then(() => console.log("dwf"))

// // async function H(){
// //   console.log(await 'hekko');
// // }

// console.log('b');

// // function constructor
// function Hello(){
//   this.a = 'p',
//   this.b = 'e',
//   this.c = 'o',
//   this.d = 't'
// }
// const person1 = new Hello();

// console.log(person1);


// //Recursive function
// // let b = 10
// function Sum(a){
//   return function(b){
//     if (b) {
//       return Sum(a+b)
//     }
//     return a;
//   }
// }
// const z = Sum(10)(10)(10)();
// console.log(z);

var S18 = [
  {Name:"Prashant",Role:"Intern"},
  {Name:"retool",Role:"Intern"},
  {Name:"Ujjwal",Role:"Intern"},
  Senior=[
    {Name:"Lalit joshi",Role:"Tech-Lead"},
    {Name:"Akansha",Role:"HR"},
    {Nmae:"Amit",Role:"Finance"}
  ]
]

// var office = S18.filter((x)=>{return x.Role === 'Intern'});
var office = S18.map((x)=>{return x['Name'] +" is "+ x['Role']})
console.log(office);


//  reduce
const tot = 'Total money';
var order = [
  {amount : 250},
  {amount : 300},
  {amount:450}
]
 
var total = order.reduce((sum,order) => {
  return sum+order.amount ;
},0);

 console.log(total,tot);

// currying
 function volume(length){
  return function(breadth){
    return function(height){
      return length*breadth*height + " Total volume";
    }
  }
 }
 console.log(volume(6)(8)(10));

//  closures

function A(){
  Y();
  var a = "hello";
  console.log(a);
 
  Q();
  function Q(){
    var b = " bye";
    console.log(b);
  }
  function Y(){
    var l = "Prashant";
    console.log(l);
  }
}
A();

//Callback

const posts = [
  {
    title:'Post one',
    body : 'this is post one'
  },
  {
    title : 'post two',
    body: 'this is post two'
  }
]


function getPost(){
  setTimeout(()=>{
    let output = "";
    posts.forEach((post,index)=>{
      output += `<li>${post.title}</li>`

    });
    console.log(output);
  },1000)
}


// callback function 
// function createPost(Post,Callback){
//   setTimeout( () =>{
//    posts.push(Post);
//    Callback();
//   },2000)
// }

// createPost({title:'post three',body:'this is post three'},getPost);



//Promise

function createPost(Post){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      posts.push(Post);
      const error = true;
      if(!error){
        resolve();
      }else{
        reject('You have to first resolve it');
      }
    },2000)
  })
}

createPost({title:'post three',body:'this is post three'}).then(getPost).catch(err => console.log(err));



const promise2 = Promise.resolve('hello');
const promise3 = 15;
const promise4 = new  Promise((resolve,reject)=>{
  setTimeout(resolve,4000,'namaste');
});
// const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise2,promise3,promise4]).then(value=> console.log(value));

 
// Async // await // fetch

// async function Fetchu(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data =  await res.json();
//   console.log(data);
// }
// Fetchu();


function resolve25sec(){
  return new Promise(resolve =>{
    setTimeout(()=>{
    resolve('Picked');
     
    },1000)
  })
}
async function call(){
  console.log('calling');
  const result = await resolve25sec();
  console.log(result);
}
call();

(function(){
  console.log("hello");
}());


// let sum = function(a){
//   return function(b){
//     if(b){
//       return sum(a+b);
//     }
//     return a;
//   }
// }



let sum = a => b=> b ? sum(a+b):a;
console.log(sum(1)(2)(3)());

const Name ={
  firstname: "Prashant Raj",
  LastName : "Pandey"
}

let printfullName = function (homeTown,State) {
  console.log(this.firstname + " " + this.LastName + " is from " +homeTown+ "," +State);
}

const Name2 = {
  firstname: "Ujjwal",
  LastName : "Srivastva"
}

// call method

printfullName.call(Name,"New Delhi","Delhi");

// apply 
printfullName.apply(Name2,["Prayagraj","UP"]);

//bind  it binds the whole function 

let PRintName  = printfullName.bind(Name,"Sagar","MP");
// console.log(PRintName);
PRintName();

//debouncing make sure that it trigger only once per user input mainly used in button and search bars while calling api

// let counter = 0;
// const getdata = ()=>{
//   console.log("Fetching api ...", counter++);
// }

// // now we make a function to set the debounce and then anonymous for timer

// const debounce = function(db,d){
//   let timer;
//   return function(){
//     let context =  this,
//     args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       getdata.apply(context,arguments)
//     }, d)
//   }
// }

//now we use dedata  to getdata and give timeinterval frm funct above

// const dedata = debounce(getdata,300);

//throtling
//to limit the rate of api calls on clicking button or any event we use throtling

const btn = document.getElementById("clck");

let counter = 0;
const btnF = ()=>{
  console.log("Hello user",counter++);
}



const throttle = (func,limit) =>{
  let flag = true;
  return function(){
    if(flag){
      func();
      flag = false;
      setTimeout(()=>{
        flag = true;
      },limit)
    }
  }
}

const Throtlfunc = throttle(btnF,3000);
btn.addEventListener("click",Throtlfunc);

// 1. localStorage: Setting and Getting Data
localStorage.setItem('email','parimala.katasani@gmail.com');
localStorage.setItem('name','parimala')

let lsemail = localStorage.getItem('email');
let lsname = localStorage.getItem('name');
console.log("Local Storage data: ",lsemail);
console.log(localStorage['name']);

// 2. sessionStorage: Setting and Getting Data
sessionStorage.setItem('movie','Kalki');
sessionStorage.setItem('director','NagAshwin');

let ssmsg = sessionStorage.getItem('movie');
let ssdir = sessionStorage.getItem('director');
console.log("Session Storage data: ",ssmsg);
console.log("Session Storage data: ",ssdir);
// console.log(sessionStorage['ssdir']);

// 3. Removing Items from Storage
localStorage.removeItem('name');
let remdata = localStorage.getItem('name');
console.log("Removed data: ",remdata);

sessionStorage.removeItem('movie');
let remssdata = sessionStorage.getItem('movie');
console.log("Removed session data: ",remssdata);

// 4. JSON Storage
let person = {
    username: 'Srikanth',
    age:25,
    course:'FSD',
    marks: 88
};
localStorage.setItem('person',JSON.stringify(person));
let User = JSON.parse(localStorage.getItem('person'));
console.log("User obj: ",User);

sessionStorage.setItem('person',JSON.stringify(person));
let Suser = JSON.parse(sessionStorage.getItem('person'));
console.log("Session obj: ",Suser);

// 5. Clearing Storage
localStorage.clear();
localStorage.getItem('User');

sessionStorage.clear();
sessionStorage.getItem('director');

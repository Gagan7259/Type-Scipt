//when we put :  after the functions name and define the datatype which datatype u mention that data type values only accept
//ex add(a:number):number its accepts only number its not accepts string boolean

/* function  add(num:number):number{
    return num +2
}
let abc=add(20) 
console.log(abc);


//string
 function getupper(val: string) {
  return val.toLowerCase;
}
let ga=getupper("GAGAN"); 
console.log(ga);


//any
function signuser(name: string, email: string, password: boolean) {}
//signuser(1, 2, 3); // its wrong
signuser("gagan", "g@gmail", true); 

let loginuser = (name: string, email: string, ispaid: boolean) => {
  if (ispaid === void 1) {
    ispaid = true;
  }
};
loginuser("h", "g@gmail", true); */

/* function getmyval(val: number) {
  if (val > 5) {
    return "200ok";
}
}
getmyval(100); */

const getHello = (s: string): string => {
  return "ok";
};
const heros = ["NTR", "NBK", "NKR"];
//const heros=[1,2,3]
//when mappinhg a function array value are numbers type script automatically convert function as perticular datatypes in array
heros.map((hero): string => {
  return "he is ${hero}";
  //return 2
});

function consoleerror(errmsg: string): void {
  console.log(errmsg);
  return;
}

function handleerror(errmsg: string): void {
  throw new Error(errmsg);
}

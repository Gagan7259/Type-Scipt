type User = {
  //readonly is  a key word we can't change tha values in databases
  //   ? its a keyword called OPTIONAL
  readonly _id: string;
  name: string;
  email: string;
  isActive: true;
  creaditcarddetails?:number
};
//function Createuser(u:User){}
let myuser: User = {
  _id: "12345",
  name: "h",
  email: "@a",
  isActive: true,
};

type cardNumber={
 cnumber:string
}
type cdate={
    cardNumber:string
}
type carddetails=cardNumber& cdate &{
cvv:number
}
//we can change values of name values is active or not but we canty change valures of the _id because its read only
myuser.name="gagan"
//myuser._id="23"
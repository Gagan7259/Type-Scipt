/* /* /* let myscore:number|string =33
myscore=44
myscore="56" */

/* type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
}; //admin only acces
let Gagan: User | Admin = { name: "Manoj", id: 25 };

function dbid(id: number | string) {
  console.log(`Db id is:$(id)`);
  if (typeof id === "string") {
    id.toUpperCase();
  }
  if (typeof id === "number") {
    id.toUpperCase();
  }
} */

//Array
const Data: number[] = [1, 2, 3, 4];
const Da: string[] = ["1", "2", "3", "4"];
const ts: (string | number)[] = ["1", "2", "3", 4];
const t: any[] = ["1", "2", "3", 4, true];

/* 
let pi:3.14=3.14
pi=2.4 */

let seatAllotment: "front" | "middle" | "windoow";
seatAllotment = "front";
seatAllotment = "poar rey";

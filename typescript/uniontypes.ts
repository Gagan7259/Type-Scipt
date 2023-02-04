/* let myscore:number|string =33
myscore=44
myscore="56" */

type User = {
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
}

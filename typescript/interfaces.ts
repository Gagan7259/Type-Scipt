interface User {
  readonly dbid: number;
  email: string;
  Userid: number;
  gogglLogin?: string;
  //two ways of method writing
  //startTrail: () => string;
  startTrail(): string;
  getCupon(Couponname: string, values: number): number;
}
const gagan: User = {
  email: "g@gami",
  Userid: 23,
  dbid: 34,
  startTrail: () => {
    return "start";
  },
  //we should pass the name argument and assign value
  getCupon: (name: "Manoj", off = 35) => {
    return 35;
  },
};
gagan.email = "g1@gmail";
//its read only we cant change the values
//gagan.dbid=23454

//

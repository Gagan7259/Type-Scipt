const user = {
  name: "Gagan",
  email: "gagan@gmai.com",
  isactive: true,
};
function createuser({ name: string, ispaid: boolean }) {}
createuser({ name: "ga", ispaid: true });

//course-function name
//( parameter passing)
//1st {} return type
//2nd {} defination

function createcourse(): { name: string; price: number } {
  return { name: "react-js", price: 450 };
}
function createcourse1(): { name: string; price: number } {
    return { name: "react-js", price: 450 };
  }

export {};

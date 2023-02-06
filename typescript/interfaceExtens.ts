interface a {
  name: string;
}

interface b extends a {
  id: number;
  role: "admin" | "ta" | "learner";
}
const Manoj: b = {
  name: "Gagan",
  id: 23,
  role: "ta",
};

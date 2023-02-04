type User = {
  name: string;
  email: string;
  isActive: true;
};
function createuser(user: User) {
  return { name: "", email: "", isActive: true };
}
createuser({ name: "", email: "", isActive: true });

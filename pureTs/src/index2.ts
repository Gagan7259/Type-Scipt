class User1 {
  constructor(
    public email: string,
    public name: string,
    private UserId: string
  ) {}
  get getAppleEmail(): string {
    return `apple $(this.eamil)`;
  }
}
const gagan1 = new User1("g@gamil", "manoj", "23");
gagan1.name;

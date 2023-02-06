class User1 {
  private _cousercont = 1;
  constructor(
    public email: string,
    public name: string,
    private UserId: string
  ) {}
  private deleteToken() {
    console.log("token delwtwd");
  }
  get getAppleEmail(): string {
    return `apple $(this.eamil)`;
  }
  get cousercont(): number {
    return this._cousercont;
  }
  set cousercont(cnum) {
    if (cnum <= 3) {
      throw new Error("poyi saavu pora");
    }
    this._cousercont = cnum;
  }
}
const gagan1 = new User1("g@gamil", "manoj", "23");
gagan1.name;
//gagan1.deleteToken();

//

abstract class Takephoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getall(): void;
  getRealTime(): number {
    //some code
    return 0;
  }
}

//Abstract class no need t o create object
class instagram extends Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getall(): void {
    console.log("Ok bye ");
  }
}
const h = new instagram("test", "test", 4);
h.getRealTime();

interface Takephoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface Story {
  createStory(): void;
}
class Instagram implements Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
class Youtube implements Takephoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createStory(): void {
    console.log("create story successfully");
  }
}

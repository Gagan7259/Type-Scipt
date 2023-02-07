"use strict";
//
class Takephoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        //some code
        return 0;
    }
}
//Abstract class no need t o create object
class instagram extends Takephoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getall() {
        console.log("Ok bye ");
    }
}
const h = new instagram("test", "test", 4);
h.getRealTime();

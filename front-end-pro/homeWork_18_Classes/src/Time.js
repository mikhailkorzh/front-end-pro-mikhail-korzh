

export default class Time {
    constructor(startTime) {
        this.startTime = startTime;
        this.setStartTime = this.setStartTime.bind(this);
    }

    getStartTime() {
        return this.startTime;
    }

    setStartTime(newStartTime) {
        return this.startTime = newStartTime;
    }
}
class Timer {
    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(hours: number, minutes: number, seconds: number){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public set(hours: number, minutes: number, seconds: number) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    public tickDown = () => {
        this.seconds--;
        if(this.seconds < 0){
            this.seconds = 59;
            this.minutes--;
            if(this.minutes < 0){
                this.minutes = 59
                this.hours--;
                if(this.hours < 0){
                    this.seconds = 0;
                    this.minutes = 0;
                    this.hours = 0;
                }
            }
        }

        return this.display();
    }

    public display = () : string => {
        const padHours = this.pad(this.hours, 2);
        const padMinutes = this.pad(this.minutes, 2);
        const padSeconds = this.pad(this.seconds, 2);

        return padHours + ':' + padMinutes + ':' + padSeconds;
    }

    private pad(num:number, size:number): string {
        let s = num+"";
        while (s.length < size) { s = "0" + s };
        return s;
    }
}

export default Timer;
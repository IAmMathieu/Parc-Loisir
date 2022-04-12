class DateParser{
    constructor(date)
    {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.date = date;
    }
    add(date)
    {
        this.hours += date.hours;
        this.minutes += date.minutes;
        this.seconds += date.seconds;
        return this;
    }
    sub(date)
    {
        this.hours -= date.hours;
        this.minutes -= date.minutes;
        this.seconds -= date.seconds;
        return this;
    }
    convert()
    {
        if(typeof(this.date) == "string"){
            this.hours = this.date.split(':')[0];
            this.minutes = this.date.split(':')[1];
            this.seconds = this.date.split(':')[2];
        }else{
            this.hours = this.date.hours;
            this.minutes = this.date.minutes;
            this.seconds = this.date.seconds;
        }
        return this;
    }
    isSuperior(date)
    {
        if(this.hours == date.hours)
        {
            if(this.minutes == date.minutes)
            {
                if(this.seconds == date.seconds)
                {
                    return false
                }else if(this.seconds > date.seconds)
                {
                    return true;
                }else{
                    return false;
                }
            }else if (this.minutes > date.minutes){
                return true;
            }else{
                return false;
            }
        }else if(this.hours > date.hours){
            return true;
        }else{
            return false;
        }
    }
    get timeToSql()
    {
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
    get timeObject()
    {
        return {hours:this.hours,minutes:this.minutes,seconds:this.seconds};
    }

}

module.exports = DateParser;

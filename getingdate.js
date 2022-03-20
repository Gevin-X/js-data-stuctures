(function () {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const today = date.getUTCDay();
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes()
    hour = (hour >= 12) ? hour - 12 : hour;
    const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayname = daylist[today]

    console.log(year + ':' + month + ':' + dayname, hour + ':' + minutes);
    //return month;
})()
setInterval(() => {
    const d = new Date();
    const hours = d.getHours();        //returns current hour
    const minutes = d.getMinutes();    //returns current minute
    const seconds = d.getSeconds();    //returns current second
    hRotation = (30*hours + minutes/2);
    mRotation = 6*minutes;
    sRotation = 6*seconds;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    console.log(hours + ":" + minutes + ":" + seconds);  //print the current time
}, 1000)
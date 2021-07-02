setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    
    hhand.style.transform = `rotate(${hrotation}deg)`;
    mhand.style.transform = `rotate(${mrotation}deg)`;
    shand.style.transform = `rotate(${srotation}deg)`;
    if(stime<10){
        stime = `0${stime}`;
    }
    if(mtime<10){
        mtime = `0${mtime}`;
    }
    if(htime<10){
        htime = `0${htime}`;
    }
    document.getElementById("digital").innerHTML = `${htime} : ${mtime} : ${stime}` ;
}, 1000);

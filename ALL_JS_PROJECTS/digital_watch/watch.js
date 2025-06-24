function showtime(){

    let date = new Date();
    let hours = date.getHours() > 12 ? date.getHours()-12 :date.getHours();
    let minit = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let AMPM = date.getHours() < 12 ? "AM" : "PM";
    let x = hours + ":" + minit + ":" + seconds + ":" + AMPM;
    document.getElementById("displaytime").innerHTML = x;

}

setInterval(showtime, 1000);
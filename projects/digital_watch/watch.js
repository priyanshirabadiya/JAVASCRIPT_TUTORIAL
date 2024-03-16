function showtime(){

    let data = new Date();
    let hours = data.getHours()>12 ? data.getHours()-12 : data.getHours();
    let minutes = data.getMinutes()<10 ? "0"+ data.getMinutes() : data.getMinutes(); 
    let seconds = data.getSeconds()<10 ? "0"+data.getSeconds() : data.getSeconds();
    let AP = data.getHours() <= 12 ? "AM" : "PM";
    displaytime.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + AP;
}
    setInterval(showtime,1000)


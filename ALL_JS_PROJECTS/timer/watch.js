// const time_el = document.querySelector('.time');
// // const start_btn = document.getElementById('start');
// // const stop_btn = document.getElementById('stop');
// // const reset_btn = document.getElementById('reset');

// let second = 60000;
// let interval = null;

// // start_btn.addEventListener("click",start);
// // stop_btn.addEventListener("click",stop);
// // reset_btn.addEventListener("click",reset);

// function timer(){
//     second++;
//     let hrs = Math.floor(second / 3600);
//     let min = Math.floor((second - (hrs * 3600)) / 60);
//     let sec = second % 60;

//     if(hrs < 10) hrs = '0' + hrs;
//     if(min < 10) min = '0' + min;
//     if(sec < 10) sec = '0' + sec;
//     time_el.innerHTML = `${hrs}:${min}:${sec}`;
// }

// function start(){
//     if(interval){
//         return;
//     }
//     interval = setInterval(timer,1000);
// }

// function stop()
// {
//     interval = clearInterval(interval);
// }

// function reset(){
//     stop();
//     second = 0;
//     time_el.innerHTML = "00:00:00"
// }


let takeclass = document.querySelector('.time');

let second = 0;
let interval = null;
function timer(){
    second++;

    let hr = Math.floor(second / 3600);
    let min = Math.floor((second - (hr * 3600))/60);
    let sec = second % 60;

    if(hr < 10) hr = "0" + hr;
    if(min < 10) min = "0" + min;
    if( sec < 10) sec = "0" + sec ;



    takeclass.innerHTML = `${hr}:${min}:${sec}`;
}

function start(){
    if(interval){
        return;
    }
    interval = setInterval(timer , 1000);
}

function stop(){
    interval = clearInterval(interval);
}

function reset(){
    stop();
    takeclass.innerHTML = "00:00:00"
    second = 0;
}
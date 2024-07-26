// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// function mycallback(result){
//     console.log('sum is :' + result);
// }

// myCalculator(1,2,mycallback)


// -----------------------------------------------------------------------------------



function loadScript(src, callback) {
    var script = document.createElement('script'); // Define the script variable

    script.src = src;

    script.onload = function() {
        console.log('Loaded script with src ' + src);
        callback(null ,src);
    };

    script.onerror = function() {
        console.log('error is in this code');
        callback(new Error('src got an error'))
    }

    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return
    }
    alert('hello' + src)    
}

function goodmorning(error, src){
    if(error){
        console.log(error);
        setemergencymessageCEO();
        return
    }
    alert('goodmorning' + src)    
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",goodmorning)
// loadScript("https://cdn.xfgjsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)




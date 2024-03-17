function randomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let lenString = 10;
    let randomstring = '';

    for (let i = 0; i < lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
    }

    document.getElementById("randomstring").innerText = randomstring;
}
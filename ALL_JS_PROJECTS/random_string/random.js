function randomstr(length) {
    length = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let ans = '';
    for (let i = 0; i < length; i++) {
      ans += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('randomString').innerHTML = ans;
  }
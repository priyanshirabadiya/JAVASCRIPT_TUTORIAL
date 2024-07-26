function myFun() {
    let chars = [
        'TheLaughFactory',
        '@TheLaughFactor',
        'I told my girlfriend she drew her eyebrows too high. She seemed surprised.',

        '0 Laugh',
        'Shar',
        'TheLaughFactor',
        '@TheLaughFactor',
        'How do you make a tissue dance? Put a little boogie in it',

        '0 Laugh',
        'Shar',
        'TheLaughFactor',
        '@TheLaughFactor',
        'President Lincoln was approached by a woman after a political speech… If you were my husband I would poison your tea. Lincoln replied...if you are',

        '0 Laugh',
        'Shar',
        'TheLaughFactor',
        '@TheLaughFactor',
        'My grandfather has the heart of a lion and a lifetime ban at the zoo',

        'Shar',
        'TheLaughFactor',
        '@TheLaughFactor',
        'Have you heard the joke about yoga. Nevermind its a bit of a stretch',

        '0 Laugh',
        'Shar',
        'TheLaughFactor',
        '@TheLaughFactor',
        'Why should you never play poker at the zoo? Too many cheetah']


    let len = chars.length;
    let str = "";
    for (let i = 0; i < 5; i++) {
        let rendom = Math.floor(Math.random() * len)
        str += chars[rendom];
    }

    // console.log(str);
    document.getElementById('id1').value = str;
}

myFun();

// document.getElementById('id1').value = str;

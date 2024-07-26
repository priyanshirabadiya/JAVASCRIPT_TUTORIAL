const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'The';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);


//give number from this code

// const str ="Amount is 15000";
// let amt = Number.parseInt(str.slice ("Amount is:".length));
// console.log (amt);
// console.log(typeof(amt));


// change strung character

const str = "Deepika";
let rela = str.replace('e','l');
console.log(rela);

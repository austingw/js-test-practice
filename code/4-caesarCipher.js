function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isPuncuation(str) {
  let punctuation = ",";
  return str === str.match(punctuation);
}

let caesar = (str, key) => {
  let decipher = "";

  for (let i = 0; i < str.length; i++) {
    if (isPuncuation(str[i])) {
      decipher += str;
    } else if (isUpperCase(str[i])) {
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 65) % 26) + 65
      );
    } else {
      decipher += String.fromCharCode(
        ((str.charCodeAt(i) + key - 97) % 26) + 97
      );
    }
  }

  return decipher;
};

export default caesar;

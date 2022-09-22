function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  const map = new Map();

  str = str.toLowerCase();

  for (let char of str) {
    if (isVowel(char)) {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }
  return map;
}

console.log(vowelCount("Hii my name is Jay Thakare!"));

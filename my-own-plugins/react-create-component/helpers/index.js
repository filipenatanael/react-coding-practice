const capitalize = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

const titleize = (text) => {
  let words = text.toLowerCase().split(" ");
  for(let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
};

module.exports = {
  capitalize,
  titleize
}

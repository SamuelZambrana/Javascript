let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let longWord = '';

let storyWords = story.split(' ');
console.log(storyWords);
console.log(storyWords.join(' '));

/*
 Con el metodo split separamos cada elemento por separado y entre '' y lo almacenamos en la variable storyWords.
  Con el metodo join juntamos cada elemento por separado en una sola frase asignanle el espacio de cada elemento.
 */


let count = 0;

const forEachWords = storyWords.forEach(word => {
  console.log(count);
  count += word.length;
});

const filteredWords = storyWords.filter(word => word !== unnecessaryWord);
console.log(filteredWords);

const correctedWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return misspelledWord;
  } else {
    return word;
  }
});
console.log(correctedWords);

const badWordIndex = storyWords.findIndex(word => word === badWord);
console.log(badWordIndex);
storyWords[80] = 'really';
console.log(storyWords[80]);

const lengthCheck = storyWords.every(word => {
  return word.lenght <= 10;
});
console.log(lengthCheck);

const lengthCheck2 = storyWords.forEach(word => {
  if (word.length > 10) {
    longWord = word;
  }
});
story = story.replace(longWord, "hermosa");
console.log(story);

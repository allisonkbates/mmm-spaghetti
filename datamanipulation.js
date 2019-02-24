var wikiData = [
"hello",
[
"Hello",
"Hello, Dolly! (musical)",
"Hello Kitty",
"Hello (Adele song)",
"Hello Venus",
"Hello My Love",
"Hello Counselor",
"Helloween",
"Hello, Dolly! (film)",
"Hellogoodbye"
],
[
"Hello is a salutation or greeting in the English language. It is first attested in writing from 1826.",
"Hello, Dolly! is a 1964 musical with lyrics and music by Jerry Herman and a book by Michael Stewart, based on Thornton Wilder's 1938 farce The Merchant of Yonkers, which Wilder revised and retitled The Matchmaker in 1955. The musical follows the story of Dolly Gallagher Levi, a strong-willed matchmaker, as she travels to Yonkers, New York to find a match for the miserly \"well-known unmarried half-a-millionaire\" Horace Vandergelder.",
"Hello Kitty (Japanese: ハロー・キティ, Hepburn: Harō Kiti), also known by her full name Kitty White (キティ・ホワイト, Kiti Howaito), is a fictional cartoon character produced by the Japanese company Sanrio, created by Yuko Shimizu and currently designed by Yuko Yamaguchi.",
"\"Hello\" is a song by British singer-songwriter Adele, released on 23 October 2015 by XL Recordings as the lead single from her third studio album, 25 (2015).",
"Hello Venus (Hangul: 헬로비너스; often stylized as HELLOVENUS) is a South Korean girl group formed by Tricell Media (formerly a joint venture between Pledis Entertainment and Fantagio).",
"\"Hello My Love\" is a song by Irish pop vocal band Westlife. It was released on 10 January 2019 the lead single from Westlife's eleventh studio album, and is their first single to be released under Universal Music Group and Virgin EMI Records.",
"Hello Counselor (Hangul: 안녕하세요; RR: Annyeonghaseyo; lit. Hello) is a South Korean reality show that debuted in November 22, 2010. It is hosted by Shin Dong-yup, Lee Young-ja, and Cultwo (Jung Chan-woo, Kim Tae-gyun).",
"Helloween is a German power metal band founded in 1984 in Hamburg, Northern Germany by members of bands Iron Fist and Gentry.",
"Hello, Dolly! is a 1969 American romantic comedy musical film based on the Broadway production of the same name.",
"Hellogoodbye (sometimes styled as hellogoodbye) is a pop rock band that was formed in Huntington Beach, California in 2001 by singer Forrest Kline."
],
[
"https://en.wikipedia.org/wiki/Hello",
"https://en.wikipedia.org/wiki/Hello,_Dolly!_(musical)",
"https://en.wikipedia.org/wiki/Hello_Kitty",
"https://en.wikipedia.org/wiki/Hello_(Adele_song)",
"https://en.wikipedia.org/wiki/Hello_Venus",
"https://en.wikipedia.org/wiki/Hello_My_Love",
"https://en.wikipedia.org/wiki/Hello_Counselor",
"https://en.wikipedia.org/wiki/Helloween",
"https://en.wikipedia.org/wiki/Hello,_Dolly!_(film)",
"https://en.wikipedia.org/wiki/Hellogoodbye"
]
]

var newData = [];
let resultA = wikiData[1];
resultA.map(title => {
  newData.push({});
  return newData[resultA.indexOf(title)].title = title;
});

console.log(newData);

/*function createData(title, index) {
  return newData[index].title = title;
}*/
//const obj = yourArray.reduce((o, key) => Object.assign(o, {[key]: whatever}), {});

console.log(resultA);
resultA.reduce((acc, cur) => Object.assign({...acc, [resultA.indexOf(cur)]: cur}), {});
console.log(resultA);
var array1 =[
    { id: 10, color: "red" },
    { id: 20, color: "blue" },
    { id: 30, color: "green" }
  ];
array1.reduce((acc, cur) => ({ ...acc, [array1.indexOf(cur)]: cur }), {});

const resultB = resultA.reduce(
  (acc, cur) =>
    Object.assign({ ...acc, [resultA.indexOf(cur)]: cur + "hello" }),
  {}

let icao = prompt('Введите значение ИКАО');



let arrIcao = [{ codeNameTitle: "Alfa", letter: "A"},
{ codeNameTitle: "Bravo", letter: "B"},
{ codeNameTitle: "Charlie", letter: "C"},
{ codeNameTitle: "Delta", letter: "D"},
{ codeNameTitle: "Echo", letter: "E"},
{ codeNameTitle: "Foxtrot", letter: "F"},
{ codeNameTitle: "Golf", letter: "G"},
{ codeNameTitle: "Hotel", letter: "H"},
{ codeNameTitle: "India", letter: "I"},
{ codeNameTitle: "Juliett", letter: "J"},
{ codeNameTitle: "Kilo", letter: "K"},
{ codeNameTitle: "Lima", letter: "L"},
{ codeNameTitle: "Mike", letter: "M"},
{ codeNameTitle: "November", letter: "N"},
{ codeNameTitle: "Oscar", letter: "O"},
{ codeNameTitle: "Papa", letter: "P"},
{ codeNameTitle: "Quebec", letter: "Q"},
{ codeNameTitle: "Romeo", letter: "R"},
{ codeNameTitle: "Sierra", letter: "S"},
{ codeNameTitle: "Tango", letter: "T"},
{ codeNameTitle: "Uniform", letter: "U"},
{ codeNameTitle: "Victor", letter: "V"},
{ codeNameTitle: "Whiskey", letter: "W"},
{ codeNameTitle: "X-ray", letter: "X"},
{ codeNameTitle: "Yankee", letter: "Y"},
{ codeNameTitle: "Zulu", letter: "Z"},
{ codeNameTitle: "One", letter: "1"},
{ codeNameTitle: "Two", letter: "2"},
{ codeNameTitle: "Three", letter: "3"},
{ codeNameTitle: "Four", letter: "4"},
{ codeNameTitle: "Five", letter: "5"},
{ codeNameTitle: "Six", letter: "6"},
{ codeNameTitle: "Seven", letter: "7"},
{ codeNameTitle: "Eight", letter: "8"},
{ codeNameTitle: "Niner", letter: "9"}];

let arrInput = icao.toUpperCase().split("");
console.log(arrInput);


let arrResult = [];

arrInput.forEach((j) => {
    arrIcao.forEach((i) => {
        if (i.letter == j) {
            arrResult.push(i.codeNameTitle);
            console.log(i.codeNameTitle);
            return;
        }
    });
});

console.log(arrResult);

let str = arrResult.join(" ");

alert(str);













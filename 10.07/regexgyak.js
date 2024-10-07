// numberLength2Or3 - Olyan számok, melyek 2 vagy 3 számjegyet tartalmaznak
// startsWithEven - Olyan számok, melyek páros számmal kezdődnek
// startsWithNumber - Olyan szavak, melyek számmal kezdődnek és betűvel végződnek
// capitalized - Olyan szabak, melyek nagybetűből állnak
// capitalizedLengthMin3 - Olyan szavak, melyek nagybetűvel kezdődnek és legalább 3 betűsek
// startsWithVowel - Olyan szavak, melyek magánhangzóval kezdődnek
let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result
console.log(numberLength2Or3(text))
function numberLength2Or3(text){
regex = /\b\w{2,3}\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek 2 vagy 3 karakterből állnak: ${regex}`)
console.log(result)
}

function startsWithEven(text){

}

function startsWithNumber(text){

}

function capitalized(text){

}

function capitalizedLengthMin3(text){

}

function startsWithVowel(text){

}
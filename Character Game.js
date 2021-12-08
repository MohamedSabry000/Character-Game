const inputText = prompt("Enter The Text:");
const delimiter = prompt("Enter The Delimiter:");

const charGame = (text, del) => {
    let output = [];
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        element == del && output.push(index+1);
    }
    return output;
}

console.log(charGame(inputText, delimiter));
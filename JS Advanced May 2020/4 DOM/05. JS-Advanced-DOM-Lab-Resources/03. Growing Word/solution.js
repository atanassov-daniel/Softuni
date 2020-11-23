function growingWord() {

    let pArray = document.getElementsByTagName('p');

    let indexGrowingWord;
    for (const index in pArray) {
        if (pArray[index].innerText.includes('Growing Word')) {
            indexGrowingWord = Number(index);
            break;
        }
    }
    let growingWord = pArray[indexGrowingWord];

    if (!growingWord.hasAttribute('style')) {
        growingWord.setAttribute('style', 'color: blue; font-size: 2px');
    } else {
        let oldStyle = growingWord.getAttribute('style');
        let oldColour = oldStyle.split('; ')[0].split(': ')[1];
        let oldFontSize = oldStyle.split('; ')[1].split(': ')[1].split('px')[0];
        console.log(oldFontSize);
        oldFontSize = Number(oldFontSize);

        let newColour;

        if (oldColour === "blue") {
            newColour = "green";
        } else if (oldColour === "green") {
            newColour = "red";
        } else if (oldColour === "red") {
            newColour = "blue";
        }

        growingWord.setAttribute('style', `color: ${newColour}; font-size: ${oldFontSize*2}px`);

    }
}
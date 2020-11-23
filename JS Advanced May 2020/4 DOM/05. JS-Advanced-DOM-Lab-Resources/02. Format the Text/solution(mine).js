function solve() {
	let text = document.getElementById('input').innerText;
	let sentencesArr = text.split('.');


	let paragraphText = "";

	let currentParagraphIndex = 0;

	for (let i = 0; i < sentencesArr.length; i += 3) {
		if (i + 1 >= sentencesArr.length) {
			paragraphText += sentencesArr[i];
		} else {
			if (i + 2 >= sentencesArr.length) {
				paragraphText += sentencesArr[i] + '.';
				paragraphText += sentencesArr[i + 1];
			} else {
				paragraphText += sentencesArr[i] + '.';
				paragraphText += sentencesArr[i + 1] + '.';
				paragraphText += sentencesArr[i + 2] + '.';
			}
		}


		document.getElementById('output').appendChild(document.createElement('p'));
		document.getElementById('output').getElementsByTagName('p')[currentParagraphIndex].innerText = paragraphText;

		paragraphText = "";
		currentParagraphIndex++;
	}


}
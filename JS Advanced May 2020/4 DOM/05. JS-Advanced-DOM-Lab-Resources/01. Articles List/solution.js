function createArticle() {
	let articlesSection = document.getElementById('articles');

	let newArticle = document.createElement("article");

	newArticle.appendChild(document.createElement('h3'));
	if (document.getElementById('createTitle').value !== "" && document.getElementById('createContent').value !== "") {
		newArticle.getElementsByTagName('h3')[0].innerHTML = document.getElementById('createTitle').value;

		newArticle.appendChild(document.createElement('p'));
		newArticle.getElementsByTagName('p')[0].innerHTML = document.getElementById('createContent').value;

		articlesSection.appendChild(newArticle);

		document.getElementById('createTitle').value = "";
		document.getElementById('createContent').value = "";
	}

}
// първо се опитах по долния начин, но нищо не стана, след доста пробване на неща и правене на всичко стъпка по стъпка на принципа проба грешка в конзолата на браузъра и известно търсене на неща в интернат, най-накрая успях да направя горната изцяло работеща функция

/*function createArticle() {
	const input = document.getElementById('createTitle'); // getting elements form DOM
	console.log(input);

		let currentArticle;

		let title = document.getElementById('createTitle');
		let text = document.getElementById('createContent');

		currentArticle.innerHTML += `<article><h3>${title}</h3>	<p>${text}</p></article>`;

		let section = document.getElementById('articles');
		console.log(section);
		section.appendChild(currentArticle);
		*/
//}

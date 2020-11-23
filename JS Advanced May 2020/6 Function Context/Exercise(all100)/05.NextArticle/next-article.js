function getArticleGenerator(articles) {
    let content = document.getElementById("content");

    return function showNext() {
        if (articles.length > 0) {
            let article = document.createElement("article");
            article.innerText = articles.shift();
            content.appendChild(article);
        }
    };
}
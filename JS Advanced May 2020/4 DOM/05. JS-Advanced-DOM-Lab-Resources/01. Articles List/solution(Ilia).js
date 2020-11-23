function createArticle() {
    // това е решението на Илия Идакиев от лекцията:
    const createTitleInput = document.getElementById('createTitle');
    const createContentInput = document.getElementById('createContent');
    const articlesSection = document.getElementById('articles');

    titleInputValue = createTitleInput.value;
    contentInputValue = createContentInput.value;

    if (!titleInputValue || !contentInputValue) {
        return;
    }

    const newArticle = document.createElement("article");
    const heading = document.createElement('h3');
    const paragraph = document.createElement('p');

    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);

    articlesSection.appendChild(newArticle);

    heading.innerText = titleInputValue;
    paragraph.innerText = contentInputValue;

    createTitleInput.value = '';
    createContentInput.value = '';
}
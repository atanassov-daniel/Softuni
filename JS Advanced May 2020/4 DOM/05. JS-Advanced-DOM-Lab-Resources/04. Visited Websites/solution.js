function solve() {
    let sites = document.getElementsByClassName('link-1');
    const softuni = sites[0];
    const google = sites[1];
    const youtube = sites[2];
    const wikipedia = sites[3];
    const gmail = sites[4];
    const stackoverflow = sites[5];


    function handler() {
        let siteInvokedUpon = this; // returns the element the EventListener was put on
        /*It is often desirable to reference the element on which the event handler was fired, such as when using a generic handler for a set of similar elements.

        If attaching a handler function to an element using addEventListener(), the value of this inside the handler is a reference to the element.*/

        let paragraph = siteInvokedUpon.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    }

    softuni.addEventListener("click", handler);
    google.addEventListener("click", handler);
    youtube.addEventListener("click", handler);
    wikipedia.addEventListener("click", handler);
    gmail.addEventListener("click", handler);
    stackoverflow.addEventListener("click", handler);

    /*
    тук още не бях намерил как да взема нещото, на което е извикана функцията, и трябваше да копирам същото нещо за всички сайтове и да сменям името им при вземането на параграфа

    softuni.addEventListener("click", function () {
        let paragraph = softuni.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });
    google.addEventListener("click", function () {
        let paragraph = google.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });
    youtube.addEventListener("click", function () {
        let paragraph = youtube.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });
    wikipedia.addEventListener("click", function () {
        let paragraph = wikipedia.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });
    gmail.addEventListener("click", function () {
        let paragraph = gmail.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });
    stackoverflow.addEventListener("click", function () {
        let paragraph = stackoverflow.getElementsByTagName('p')[0];
        let oldVisits = Number(paragraph.innerText.split(' ')[1]);
        paragraph.innerText = `visited ${oldVisits + 1} times`;
    });*/
}
function solve() {
    let sections = Array.from(document.getElementsByTagName("section"));
    let buttons = Array.from(document.querySelectorAll('p.answer-text'));
    let answers = [];

    sections[0].addEventListener("click", (e) => {
        answers.push(e.target.innerText);

        sections[0].style.display = "none";

        sections[1].style.display = "block";

        sections[1].addEventListener("click", (e) => {
            answers.push(e.target.innerText);

            sections[1].style.display = "none";

            sections[2].style.display = "block";

            sections[2].addEventListener("click", (e) => {
                answers.push(e.target.innerText);

                sections[2].style.display = "none";

                document.getElementById("results").style.display = "block";

                let rightAnswers = 0;
                if (answers[0] === "onclick") {
                    rightAnswers++;
                }
                if (answers[1] === "JSON.stringify()") {
                    rightAnswers++;
                }
                if (answers[2] === "A programming API for HTML and XML documents") {
                    rightAnswers++;
                }

                if (rightAnswers === 3){
                    document.querySelectorAll("ul#results")[0].querySelectorAll("li.results-inner")[0].querySelectorAll("h1")[0].innerText="You are recognized as top JavaScript fan!";
                }else{
                    document.querySelectorAll("ul#results")[0].querySelectorAll("li.results-inner")[0].querySelectorAll("h1")[0].innerText=`You have ${rightAnswers} right answers`;
                }
            });
        });
    });
    
//     function solve() {
//     let sections = document.getElementsByTagName("section");

//     let buttons = document.querySelectorAll('p.answer-text');
//     let buttonIndex = 0;

//     index = 0;
//     while (index < sections.length) {
//         sections[index].style.display = "block";
//         [...sections].forEach((element, i) => {
//             if (i !== index) {
//                 sections[i].style.display = "none";
//             }
//         });

//         let indexPlus = () => {
//             index++;
//         };

//         let i = index;
//         console.log(Array.from(document.querySelectorAll('p.answer-text')));
//         Array.from(document.getElementsByClassName('quiz-answer low-value'))[i].addEventListener("click", (e) => {
//             console.log('clicked');
//             console.log(e.target);
//             ++index;
//         });

//         /*console.log(buttons[buttonIndex + 1]);
//         buttons[buttonIndex].addEventListener("click", () => {
//             index++;
//         });
//         buttons[buttonIndex + 1].addEventListener("click", () => {
//             index++;
//         });

//         buttonIndex += 2;
//         continue;*/

//         index++;
//     }
// }
    
}
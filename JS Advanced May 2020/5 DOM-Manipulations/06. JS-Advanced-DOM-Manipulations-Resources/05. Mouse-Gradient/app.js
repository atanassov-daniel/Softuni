function attachGradientEvents() {
    document.getElementById("gradient").addEventListener("mouseover", function (e) {
        let offsetX = e.offsetX;

        let percentage = Math.floor(clientX / 300 * 100);
        //let percentage = Math.floor(100 - ((300 - clientX) / 300 * 100));
        document.getElementById("result").textContent = percentage + "%";
    });
    //start of gradient box->   clientX = 9
    //end of gradient box->   clientX = 309
    // на теста в Judge се ползва offsetX, иначе на работи, а и така или иначе той е по-добрия вариант, защото е реалните размери на самия елемент, а не като другото къде почва при клиента и да трябва да смятам

    document.getElementById("gradient").addEventListener("mousemove", function (e) {
        let clientX = e.offsetX;
        
        let percentage = Math.floor(clientX / 300 * 100);
        //let percentage = Math.floor(100 - ((300 - clientX) / 300 * 100));
        document.getElementById("result").textContent = percentage + "%";
    });
}
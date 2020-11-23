function encodeAndDecodeMessages() {
    let senderTextarea = document.querySelector('textarea[placeholder="Write your message here..."]');
    let receiverTextarea = document.querySelector('textarea[placeholder="No messages..."]');

    document.querySelectorAll("button")[0].addEventListener("click", (e) => {
        let message = senderTextarea.value.split("");
        for (const index in message) {
            message[index] = String.fromCharCode(message[index].charCodeAt(0) + 1);
        }

        senderTextarea.value = "";
        receiverTextarea.value = message.join("");
    });

    document.querySelectorAll("button")[1].addEventListener("click", (e) => {
        let encodedMessage = receiverTextarea.value.split("");
        for (const index in encodedMessage) {
            encodedMessage[index] = String.fromCharCode(encodedMessage[index].charCodeAt(0) - 1);
        }

        receiverTextarea.value = encodedMessage.join("");
    });
}
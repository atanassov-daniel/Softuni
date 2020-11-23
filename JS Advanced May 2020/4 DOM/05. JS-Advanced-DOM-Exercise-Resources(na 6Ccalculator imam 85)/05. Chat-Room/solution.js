function solve() {
   let buttonSend = document.querySelectorAll("button#send")[0];

   buttonSend.addEventListener("click", () => {
      let textAreaInput = document.querySelectorAll("textarea#chat_input")[0];
      let currentMessage = textAreaInput.value;

      let divMyMessage = document.createElement("div");
      divMyMessage.className = "message my-message";
      divMyMessage.innerText = currentMessage;

      document.querySelectorAll("div#chat_messages")[0].appendChild(divMyMessage);

      textAreaInput.value = "";
   });
}
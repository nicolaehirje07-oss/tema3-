const form = document.getElementById("chat-form");

const input = document.getElementById("user-input");

const chatBox = document.getElementById("chat-box");



const questionBank = [

  {
    question: "hello",
    answer: "Hi! Nice to meet you."
  },

  {
    question: "services",
    answer: "I create simple websites."
  },

  {
    question: "price",
    answer: "Prices depend on the project."
  },

  {
    question: "more",
    answer: "Soon, i have a lot of work rn."
  },

  {
    question: "bye",
    answer: "Goodbye!"
  }

];



form.addEventListener("submit", function(event) {

  event.preventDefault();



  const userText = input.value.toLowerCase();



  const userMessage = document.createElement("div");

  userMessage.classList.add("message", "user");

  userMessage.textContent = "You: " + userText;

  chatBox.appendChild(userMessage);



  let botReply = "I don't understand.";



  questionBank.forEach(function(item) {

    if(userText.includes(item.question)) {
      botReply = item.answer;
    }

  });



  const botMessage = document.createElement("div");

  botMessage.classList.add("message", "bot");

  botMessage.textContent = "Bot: " + botReply;

  chatBox.appendChild(botMessage);



  chatBox.scrollTop = chatBox.scrollHeight;



  input.value = "";

});
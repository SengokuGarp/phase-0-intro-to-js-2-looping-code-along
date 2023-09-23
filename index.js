// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Glen", "Sophie", "Jeff"];
  const event = "birthday";
  const messages = writeCards(names, event);
  
  console.log(messages);
  

  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(10);
  
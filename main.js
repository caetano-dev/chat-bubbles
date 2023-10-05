let messageArray = []
const chatContainer = document.getElementById("chatContainer")

function sendMessage(){
    const userInput = document.getElementById("userInput").value

    messageArray.push(userInput)
    document.getElementById("userInput").value = ""

    displayMessages()

    setTimeout(()=> {
        if (messageArray.length > 0){
            messageArray.shift();
            displayMessages();
        }
    }, 10000)
}

function displayMessages(){
    chatContainer.innerHTML = ""
    messageArray.forEach((message) => {
        const chatBubble = document.createElement("div")
        chatBubble.textContent = message
        chatBubble.className = "chat-bubble"
        chatContainer.appendChild(chatBubble)
        setTimeout(()=>{
            chatContainer.removeChild(chatBubble)
        }, 10000)
        
    });
}
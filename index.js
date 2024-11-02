let chatItems = document.querySelectorAll(".chat-item");
let chats = document.querySelector(".chats");
let closeBtn = document.getElementById("close-btn");
let chatBody = document.querySelector(".chat-body");
let searchBox = document.querySelector('.search-bar input')

let chatHistory = [
  [
    {
      sender: "Daxton Valdez",
      timestamp: "09:45 am",
      message: "Hi there! How are you?",
    },
    {
      sender: "you",
      timestamp: "09:50 am",
      message: "Hey! I'm good, thanks. How about you?",
    },
    {
      sender: "Daxton Valdez",
      timestamp: "10:30 am",
      message: "I get that. Anything interesting going on?",
    },
  ],
  [
    {
      sender: "Simone Eaton",
      timestamp: "13:34 pm",
      message: "Hey! Are we still going hiking tomorrow?",
    },
    {
      sender: "you",
      timestamp: "14:50 pm",
      message: "Definitely! Weather looks good. Meet at 8?",
    },
    {
      sender: "Simone Eaton",
      timestamp: "14:55 pm",
      message: "Perfect. I'll bring snacks!",
    },
    {
      sender: "SImone Eaton",
      timestamp: "15:30 pm",
      message: "Awesome, looking forward to it! 🏞️",
    },
  ],
  [
    {
      sender: "Cara Noble",
      timestamp: "08:08 am",
      message: "Good morning! Did you finish the report?",
    },
    {
      sender: "you",
      timestamp: "08:20 am",
      message: "Good morning! Yes, I sent it to you last night.",
    },
    {
      sender: "Cara Noble",
      timestamp: "08:34 am",
      message: "Oh, great! Let me check. Thanks!",
    },
  ],
  [
    {
      sender: "Idris McGee",
      timestamp: "00:22 am",
      message: "Hey! Are we still on for dinner tonight?",
    },
    {
      sender: "you",
      timestamp: "00:30 am",
      message: "Yes! What time works best for you?",
    },
    {
      sender: "Idris McGee",
      timestamp: "01:35 am",
      message: "How about 7:30? There’s a new Italian place I’d love to try.",
    },
  ],
  [
    {
      sender: "Della Barajas",
      timestamp: "09:15 am",
      message: "Morning! Any update on the project timeline?",
    },
    {
      sender: "you",
      timestamp: "09:17 am",
      message: "Good morning! We're on track to finish by the end of the week.",
    },
    {
      sender: "Della Barajas",
      timestamp: "09:18 am",
      message:
        "That's great! Let me know if you need any additional resources.",
    },
    {
      sender: "you",
      timestamp: "09:19 am",
      message: "Will do! Thanks for the support.",
    },
    {
      sender: "you",
      timestamp:"09:20 am",
      messageType: "image",
      message: "image-asset.jpeg",
    },{
      sender: "Della Barajas",
      timestamp: "09:25 am",
      messageType:"image",
      message:"Chefchaouen-1-1024x740.webp"
    }
  ],
];

chatItems.forEach((item, index) => {
  item.addEventListener("click", function () {
    item.classList.add('seen')
    chatBody.innerHTML = "";
    chats.classList.add("show");
    chats.querySelector(".chat-details img").src =
      item.querySelector(".image img").src;
    chats.querySelector(".chat-details .chat-text h3").innerHTML =
      item.querySelector(".details .text h2").innerHTML;
      if (item.classList.contains('online')) {
        chats.querySelector(".chat-details .chat-text span").innerHTML="Online"
        chats.querySelector(".chat-details .chat-text span").style.color="#25f113"
      }else{
        chats.querySelector(".chat-details .chat-text span").innerHTML="Offline"
        chats.querySelector(".chat-details .chat-text span").style.color="#a8a8a8"
      }

    chatHistory[index].forEach((data) => {
      let messageElement = document.createElement("div");
      messageElement.className = "message";

      if (data.messageType) {
        let messageImage = document.createElement("div");
        let messageTime = document.createElement('div')
    messageTime.className="message-time"
    messageTime.innerHTML=data.timestamp
        messageImage.className = "message-image";
        let img = document.createElement("img");
        img.src = data.message;
        messageImage.appendChild(img);
        messageElement.appendChild(messageImage);
        messageElement.appendChild(messageTime);
      } else {
        let messageText = document.createElement("div");
        let messageTime = document.createElement('div')
        messageTime.className="message-time"
        messageTime.innerHTML=data.timestamp
        messageText.className = "message-text";
        messageText.innerHTML = data.message;
        messageElement.appendChild(messageText);
        messageElement.appendChild(messageTime);
      }
      if (data.sender == "you") {
        messageElement.classList.add("you");
      } else {
        messageElement.classList.add("sender");
      }
      chatBody.appendChild(messageElement);
    });
  });
});

closeBtn.addEventListener("click", () => {
  chats.classList.remove("show");
});


searchBox.addEventListener('keyup',()=>{
  chatItems.forEach(item=>{
    item.classList.add('hide')
    if (item.querySelector('.text h2').innerHTML.toLowerCase().startsWith(searchBox.value)) {
      item.classList.remove('hide')
    }
  })
})
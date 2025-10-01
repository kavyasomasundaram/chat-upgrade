const form =document.querySelector(".typing-area"),
inputField =form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault();
}

sendBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = ""; //once message inserted into datbase then leave blank the input field
                scrollToBottom();
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave =()=>{
    chatBox.classList.remove("acitve");
}


setInterval(()=>{
    //start Ajax
    let xhr = new XMLHttpRequest();   //creating XML object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;    
                if(!chatBox.classList.contains("acitve")){          //if active class not caontins in chatbox the scroll to bottom
                    scrollToBottom();
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);      
},500);    //function will run frequently after 500ms


function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}
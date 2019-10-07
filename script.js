function toCreateElement(element){ //function to create element
    return document.createElement(element);
}
function setAttributes(el, attrs) { //function to set multiple attributes
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  
function createText(){
    const textToSend=document.getElementsByClassName("text")[0].value;
    
if(textToSend==""){
    console.log("no text in input");
}else{
    //create element

    const p=toCreateElement('p');
    const timeTag=toCreateElement('p');
    const img=toCreateElement('img');

    //set attribute to p and img
    p.setAttribute('class','message');
    timeTag.setAttribute('class','time');
    setAttributes(img,{'src':'./img/profile.jpg','class':'user-profile'});

    //create text node from input text
    const text=document.createTextNode(textToSend);

    //get current time
    const currentDate=new Date();
    var hour=currentDate.getHours();
    var minute=currentDate.getMinutes();
    var session="am";
    if(hour>12){
        hour=hour-12;
        session="pm";
    }
    if(minute<10){
        minute="0"+minute;
    }
    const currentTime=hour+":"+minute+" "+session;
    //create textNode for current time
    const time=document.createTextNode(currentTime);

    //append text to <p>
    p.append(text,timeTag);
    timeTag.appendChild(time);
    
    const content=document.getElementsByClassName('message-content')[0];
    //apeend <p> <img> to content
    content.append(p,img);

    //partenar reply
    const replyList=["Hi","Yeah everything is fine","I'm kinda messaging app created by Min Thu Kyaw","Thanks it gonna be secure your privacy.","As you wish I love you","Good night too","See you","Sorry! I can't catch your message"];
    switch (textToSend){
        case 'Hi':
        case 'hi':
        case 'hello':
        case 'Hello':
        case 'hey':
        case 'Hey':
            paternar_reply(0);
        break;
        case 'how are you today':
        case 'How are you today':
        case 'How are you':
        case 'how are you':
            paternar_reply(1);
        break;
        case 'i don\'t know who are you':
        case 'who are you':
            paternar_reply(2);
        break; 
        case 'Oh!! it\'s sound great':
            paternar_reply(3);
        break;
        case 'So can you say i love you for me':
            paternar_reply(4);
        break;
        case 'Oh you amaze me Ok good night':
            paternar_reply(5);
        break;
        case 'See you tomorrow':
            paternar_reply(6);
        break;
        default:
            paternar_reply(7);
        break;
        
    }
    function paternar_reply(value){
        const pat_rp=toCreateElement('p');
        const pat_img=toCreateElement('img');
        pat_rp.setAttribute('class','pat-message');
        setAttributes(pat_img,{'src':'./img/pat.jpg','class':'pat-profile'});
        const pat_text=document.createTextNode(replyList[value]);
        pat_rp.appendChild(pat_text);
        content.append(pat_rp,pat_img);
        
    }
       //function to remove text after sending
       removeText();
}
 }



function removeText(){
    document.getElementsByTagName('input')[0].value="";
}


window.addEventListener('load',()=>{
    var ok=document.getElementById('ok');
    var popup=document.getElementById('popup');
    const sound=document.querySelectorAll('.sounds');
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const nm=document.querySelector(".name");
    var count=0;
    const color=[
        "#FF0E03",
        "#EECB1A",
        "#44FF03",
        "#03FFBA",
        "#3103FF",
        "#FF03C2",
    ];
    const name=[
        "More Plastic - Razor [NCS Release]",
        "Cartoon - On & On (feat. Daniel Levi) [NCS Release]",
        "Disfigure - Blank [NCS Release]",
        "Julius Dreisig & Zeus X Crona - Invisible [NCS Release]",
        "NEFFEX - Grateful [Copyright Free]",
        "Robin Hustin x TobiMorrow - Light It Up (feat. Jex) [NCS Release]",
    ];
    console.log(color);
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
        if(sound[index].paused)
        {count++;
        sound[index].currentTime=0;
        sound[index].play();
        createText(index," playing!");
        }
        else
        {count--;
            sound[index].pause();
            createText(index," paused!");
        }
        UpdateStatus(count);
        createBubbles(index);   
    })
    });
    const createBubbles = (index) =>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=color[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    }
    const createText= (index,playing) =>{
        const text=document.createElement("p");
        text.style.fontFamily="'Dancing Script', cursive";
        text.style.fontsize="30px";
        text.innerHTML=name[index]+playing;
        text.style.color=color[index];
        text.style.textShadow="1px 1px 1px purple";
        nm.appendChild(text);
        setTimeout(()=>nm.removeChild(text),1000);
    }
    const UpdateStatus=(cnt)=>{
        const status=document.querySelector(".status");
        console.log("count=",cnt);
        switch(cnt)
        {
            case 0:status.innerHTML="Nothing Playing!";
            break;
            case 1:status.innerHTML="Single Track Playing!";
            break;
            case 2:status.innerHTML="Mixed Track Playing!";
            break;
            default:status.innerHTML="Mixed Track Playing!";
        }
    }
});
const toggle = ()=>{  
    ok.classList.toggle('active');   
    popup.classList.toggle('active');
};
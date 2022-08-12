function estiloPlaya(){
document.querySelector("header").style.backgroundColor="#C8E3D4";
document.querySelector("header h1").style.color="#87AAAA";
document.querySelector("main").style.backgroundColor="#F6D7A7";
document.querySelector("main h2").style.color="white";
document.querySelector(".container1").style.backgroundColor="#87AAAA";
let buttons=document.querySelectorAll("button");
for (const button of buttons) {
    button.style.backgroundColor="#F6EABE";
    button.style.color="black";
}
document.querySelector("main p").innerHTML="Background cabecera:#C8E3D4 </br> Texto cabecera:#87AAAA </br> Background body: #F6D7A7 </br> Texto body:#ffffff </br> Contenedor body:#87AAAA </br> Background botones:#F6EABE";
}

function estiloJamaica(){
    document.querySelector("header").style.backgroundColor="#3FA796";
    document.querySelector("header h1").style.color="#A10035";
    document.querySelector("main").style.backgroundColor="#FEC260";
    document.querySelector("main h2").style.color="#2A0944";
    document.querySelector(".container1").style.backgroundColor="#2A0944";
    let buttons=document.querySelectorAll("button");
    for (const button of buttons) {
        button.style.backgroundColor="#A10035";
        button.style.color="white";
    }
    document.querySelector("main p").innerHTML="Background cabecera:#3FA796 </br> Texto cabecera:#A10035 </br> Background body: #FEC260 </br> Texto body:#2A0944 </br> Contenedor body:#2A0944 </br> Background botones:#A10035";
    }

 function estiloBosque(){
        document.querySelector("header").style.backgroundColor="#362706";
        document.querySelector("header h1").style.color="#E9E5D6";
        document.querySelector("main").style.backgroundColor="#ACB992";
        document.querySelector("main h2").style.color="#464E2E";
        document.querySelector(".container1").style.backgroundColor="#464E2E";
        let buttons=document.querySelectorAll("button");
        for (const button of buttons) {
            button.style.backgroundColor="#E9E5D6";
            button.style.color="black";
        }
        document.querySelector("main p").innerHTML="Background cabecera:#362706</br> Texto cabecera:#E9E5D6 </br> Background body: #ACB992 </br> Texto body:#464E2E </br> Contenedor body:#464E2E </br> Background botones:#E9E5D6";
}
function estiloModerna(){
    document.querySelector("header").style.backgroundColor="#F15412";
    document.querySelector("header h1").style.color="#E9E5D6";
    document.querySelector("main").style.backgroundColor="#34B3F1";
    document.querySelector("main h2").style.color="#000000";
    document.querySelector(".container1").style.backgroundColor="#000000";
    let buttons=document.querySelectorAll("button");
    for (const button of buttons) {
        button.style.backgroundColor="#F15412";
        button.style.color="white";
    }
    document.querySelector("main p").innerHTML="Background cabecera:#F15412 </br> Texto cabecera:#E9E5D6 </br> Background body: #34B3F1 </br> Texto body:#000000 </br> Contenedor body:#000000 </br> Background botones:#F15412";
}

function estiloFantasia(){
    document.querySelector("header").style.backgroundColor="#FBB454";
    document.querySelector("header h1").style.color="#ffffff";
    document.querySelector("main").style.backgroundColor="#FAEA48";
    document.querySelector("main h2").style.color="#F637EC";
    document.querySelector(".container1").style.backgroundColor="#F637EC";
    let buttons=document.querySelectorAll("button");
    for (const button of buttons) {
        button.style.backgroundColor="#3330E4";
        button.style.color="white";
    }
    document.querySelector("main p").innerHTML="Background cabecera:#FBB454 </br> Texto cabecera:#ffffff </br> Background body: #FAEA48 </br> Texto body:#F637EC </br> Contenedor body:#F637EC </br> Background botones:#3330E4";
}


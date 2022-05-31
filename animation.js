/* Frames */
let frame = 0; /* Nuværende frame */
let lastFrame = 3; /* Sidste frame*/

/* Animationsfunktion */
function animation()
{
    /* Afspilning af frames */
    if (frame == 0)
    {
        document.querySelector("#animationsObjekt").src = "img/p1.svg"; /*Linker til animeret objekt og udskifter den nuværende frame*/
        frame++; /*Skifter til næste frame*/
    }
    else if (frame == 1)
    {
        document.querySelector("#animationsObjekt").src = "img/p2.svg"; /*Linker til animeret objekt og udskifter den nuværende frame*/
        frame++; /*Skifter til næste frame*/
    }
    else if (frame == 2)
    {
        document.querySelector("#animationsObjekt").src = "img/p3.svg"; /*Linker til animeret objekt og udskifter den nuværende frame*/
        frame++; /*Skifter til næste frame*/
    }
    else if (frame == lastFrame)
    {
        document.querySelector("#animationsObjekt").src = "img/p4.svg"; /*Linker til animeret objekt og udskifter den nuværende frame*/
        frame = 0; /*Skifter til første frame*/
    }
}

/* Tidsinterval pr. frame */
setInterval(animation, 1000); /* Metoden setInterval() */


/* Komprimering af JavaScript*/
let frame = 0;
let lastFrame = 3;
let animationsObjekt = document.querySelector("#animationsObjekt"); /*Animationsobjekt*/

function animation()
{
    if (frame == 0)
    {
        animationsObjekt.src = "img/p1.svg";
        frame++;
    }
    else if (frame == 1)
    {
        animationsObjekt.src = "img/p2.svg";
        frame++;
    }
    else if (frame == 2)
    {
        animationsObjekt.src = "img/p3.svg";
        frame++;
    }
    else if (frame == lastFrame)
    {
        animationsObjekt.src = "img/p4.svg";
        frame = 0;
    }
}

setInterval(animation, 1000);

/* Indlæsning af frames */
window.addEventListener("load", animation); /*Metoden addEventListener()*/
const twtBtn = document.querySelector(".fa-twitter");
const fbBtn = document.querySelector(".fa-facebook-f");
const instBtn = document.querySelector(".fa-instagram");
const waBtn = document.querySelector(".fa-whatsapp");

/* Links for Sharing the Webpage */

function init() {
    let postURL = encodeURI(document.location.href);
    console.log(document.location.href)
    let postTitle = encodeURI("Hi, check out our website about Malaysia!:");

    twtBtn.setAttribute("href", `https://twitter.com/share?url=${postURL}&text=${postTitle}`);

    fbBtn.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postURL}`);

    instBtn.setAttribute("href", `https://www.instagram.com/p/${postURL}`);

    waBtn.setAttribute("href", `https://api.whatsapp.com/send?text${postTitle} ${postURL}`);
}

init();
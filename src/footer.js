import './css/footer_style.css';

function loadFooter() {

    const footer = document.createElement("div");
    footer.classList.add("footer");

    footer.textContent = 'Copyright @ The Odin Project 2022';

    const body = document.querySelector("body");
    body.appendChild(footer);

}


export {loadFooter};
import './css/contact_style.css';

function addInfo(parent, text, title, info) {
    const section = document.createElement("div");
    section.classList.add(text);

    const header = document.createElement("div")
    header.classList.add("header");
    header.textContent = title + ":";

    const data = document.createElement("div");
    data.classList.add("text");
    data.textContent = info;

    section.appendChild(header);
    section.appendChild(data);

    parent.appendChild(section);
}

function loadContact() {

    const content = document.querySelector(".content");

    const contactHeader = document.createElement("div");
    contactHeader.classList.add("cHeader");
    contactHeader.textContent = "Contact Us";

    content.appendChild(contactHeader);

    const infoSection = document.createElement("div")
    infoSection.classList.add("contactInfo");

    addInfo(infoSection, "email", "Email", "goodrestaurant@notrealemail.com");
    addInfo(infoSection, "phone", "Phone", 123);
    addInfo(infoSection, "address", "Address", "123 Real Street, CA 99999");

    content.appendChild(infoSection);

}


export {
    loadContact
 }
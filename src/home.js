import HeaderOne from './images/header.jpg';
import HeaderTwo from './images/header_2.jpg';
import HeaderThree from './images/header_3.jpg';

function loadHeaderImages() {

    const element = document.querySelector("#content")

    const upperBody = document.createElement("div");
    upperBody.classList.add("upperBody");

    const imageSrcArr = [HeaderOne, HeaderTwo, HeaderThree];
    let myIcon;
    for (let i = 0; i < 3; i++) {
        myIcon = new Image();
        myIcon.src = imageSrcArr[i];
        upperBody.appendChild(myIcon);
    }

    element.appendChild(upperBody);
}

function loadText(section) {
    const textSection = document.createElement("div")
    textSection.classList.add("text");
    textSection.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vero pariatur omnis dolor repellendus excepturi.";

    section.appendChild(textSection);
}

function loadHours(section) {
    const week = {
        "Sunday": "closed",
        "Monday": "9AM - 5PM",
        "Tuesday": "9AM - 5PM",
        "Wednesday": "9AM - 5PM",
        "Thursday": "9AM - 5PM",
        "Friday": "10AM - 8PM",
        "Saturday": "10AM - 7PM"
    }

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hours");

    const hoursHeader = document.createElement("div");
    hoursHeader.classList.add("hoursHeader");
    hoursHeader.textContent = "Hours";
    hoursSection.appendChild(hoursHeader);

    for (const day in week) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day")
        dayDiv.textContent = `${day}: ${week[day]}`;
        hoursSection.appendChild(dayDiv);
    }

    section.append(hoursSection);

}

function loadLocation(section) {
    const locationSection = document.createElement("div");
    locationSection.classList.add("location");
    const locationHeader = document.createElement("div");
    locationHeader.classList.add("locationHeader");
    locationHeader.textContent = "Location";
    locationSection.appendChild(locationHeader);

    const locationText = document.createElement("div");
    locationText.classList.add("locationText");
    locationText.textContent = "123 Real Street, CA 99999"
    locationSection.appendChild(locationText);

    section.appendChild(locationSection);
}

function loadInfo() {
    const element = document.querySelector("#content");
    const infoSection = document.createElement("div")
    infoSection.classList.add("info");

    loadText(infoSection);
    loadHours(infoSection);
    loadLocation(infoSection);

    element.appendChild(infoSection);
}

function loadHome() {
    loadHeaderImages();
    loadInfo();
}

export { loadHome }
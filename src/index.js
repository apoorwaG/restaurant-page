import './style.css';
import HeaderOne from './images/header.jpg';
import HeaderTwo from './images/header_2.jpg';
import HeaderThree from './images/header_3.jpg';

import {loadHome} from './home';

const displayController = (() => {

    function loadTitle() {
        const element = document.querySelector('#content');
    
        const headerSection = document.createElement("div");
        headerSection.classList.add("header");
    
        const logo = document.createElement("div");
        logo.classList.add("logo");
        logo.textContent = "The Good Restaurant";
    
        headerSection.appendChild(logo);
        element.appendChild(headerSection);
    
    }

    function loadNavigation() {
        const element = document.querySelector('#content');
    
        const navBar = document.createElement("div");
        navBar.classList.add("navbar");
    
        const sections = ['Home', 'Menu', 'Contact']
    
        for(let i = 0; i < 3; i++){
            const section = document.createElement('div')
            section.textContent = sections[i];
            section.classList.add('tab');
            navBar.append(section);
        }
    
        element.append(navBar);
    }

    loadTitle();
    loadNavigation();

    loadHome();

})();

loadHome();

// const element = document.querySelector("#content");

// const upperBody = element.querySelector(".upperBody");

// const imageSrcArr = [HeaderOne, HeaderTwo, HeaderThree];
// for(let i = 0; i < 3; i++){
//     const myIcon = new Image();
//     myIcon.src = imageSrcArr[i];
//     upperBody.appendChild(myIcon);
// }


// const infoText = document.querySelector(".info .text");
// infoText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vero pariatur omnis dolor repellendus excepturi."

// const week = {
//     "Sunday": "closed",
//     "Monday": "9AM - 5PM",
//     "Tuesday": "9AM - 5PM",
//     "Wednesday": "9AM - 5PM",
//     "Thursday": "9AM - 5PM",
//     "Friday": "10AM - 8PM",
//     "Saturday": "10AM - 7PM"
// }

// const hoursSection = document.querySelector(".info .hours");
// const hoursHeader = document.createElement("div");
// hoursHeader.classList.add("hoursHeader");
// hoursHeader.textContent = "Hours";
// hoursSection.appendChild(hoursHeader);

// for (const day in week){
//     const dayDiv = document.createElement("div");
//     dayDiv.classList.add("day")
//     dayDiv.textContent = `${day}: ${week[day]}`;
//     hoursSection.appendChild(dayDiv);
// }

// const locationSection = document.querySelector(".info .location");
// const locationHeader = document.createElement("div");
// locationHeader.classList.add("locationHeader");
// locationHeader.textContent = "Location";
// locationSection.appendChild(locationHeader);

// const locationText = document.createElement("div");
// locationText.classList.add("locationText");
// locationText.textContent = "123 Real Street, CA 99999"
// locationSection.appendChild(locationText);

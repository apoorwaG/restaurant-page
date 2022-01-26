import './style.css';

import {loadHome} from './home';

const displayController = (() => {

    function loadTitle() {
        const body = document.querySelector("body");
        const element = document.querySelector('#content');
    
        const headerSection = document.createElement("div");
        headerSection.classList.add("header");
    
        const logo = document.createElement("div");
        logo.classList.add("logo");
        logo.textContent = "The Good Restaurant";
    
        headerSection.appendChild(logo);
        body.insertBefore(headerSection, element);
    }

    function loadNavigation() {
        const body = document.querySelector("body");
        const element = document.querySelector('#content');
    
        const navBar = document.createElement("div");
        navBar.classList.add("navbar");
    
        const sections = ['Home', 'Menu', 'Contact']
    
        for(let i = 0; i < 3; i++){
            const section = document.createElement('div')
            section.textContent = sections[i];
            section.classList.add('tab');
            section.addEventListener('click', () => {
                console.log("I've been clicked!");
            });
            navBar.append(section);
        }
        
        body.insertBefore(navBar, element);
    }

    loadTitle();
    loadNavigation();
    loadHome();

})();

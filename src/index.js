import './style.css';

import {loadHome} from './home';
import {loadMenu} from './menu';

const displayController = (() => {

    let currentTab = 'Home';

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
            section.setAttribute('data-tab', `${sections[i]}`);
            section.addEventListener('click', (event) => {
                changeTabs(event);
            });
            navBar.append(section);
        }
        
        body.insertBefore(navBar, element);
    }

    function clearContent() {
        const content = document.querySelector("#content");
        while (content.firstChild){
            content.removeChild(content.firstChild);
        }
    }

    function changeTabs(event) {
        const newTab = event.target.getAttribute("data-tab");
        // if current tab is clicked
        if(newTab === currentTab) return;
        
        clearContent();

        if(newTab === "Menu"){
            loadMenu();
        } else {
            // loadContact();
        }

    }

    loadTitle();
    loadNavigation();
    loadHome();

})();

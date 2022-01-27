import './css/menu_style.css';
import DrinkImg from './images/drink.jpg';

class Item {
    constructor(name, price, desc) {
        this.name = name;
        this.price = price;
        this.desc = desc;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set price(value) {
        this._price = value;
    }

    get price() {
        return this._price;
    }

    set desc(value) {
        this._desc = value;
    }

    get desc() {
        return this._desc;
    }
}

function addDrinks(section) {
    const drinks = [
        new Item("Mojito", 2.99, "The mint and lime give it a cool, refreshing flavor, and the soda lightens it up with a fizzy crispness."),
        new Item("Manhattan", 3.99, "This delightful mix of rye or bourbon whiskey, sweet vermouth, and bitters has been adored for hundreds of years."),
        new Item("Daiquiri", 5.99, "Just three ingredients with no fruit (other than lime) and no blender. Proper balance, fresh lime juice, and a an excelent white rum."),
        new Item("Dry Martini", 8.99, "A cocktail made with gin and vermouth, and garnished with an olive or a lemon twist."),
        new Item("Old Fashioned", 6.99, "A cocktail made by muddling sugar with bitters and water, adding whiskey, and garnishing with orange slice or zest and a cocktail cherry.")
    ]

    drinks.forEach((drink) => {
        console.log(drink);

        const item = document.createElement("div");
        item.classList.add("item");

        const left = document.createElement("div")
        left.classList.add("left");

        const drinkName = document.createElement("div");
        drinkName.classList.add("dName");
        drinkName.textContent = drink.name;

        const drinkDesc = document.createElement("div");
        drinkDesc.classList.add("desc");
        drinkDesc.textContent = drink.desc;

        left.appendChild(drinkName);
        left.appendChild(drinkDesc);

        const right = document.createElement("div");
        right.classList.add("right");

        const drinkPrice = document.createElement("div");
        drinkPrice.classList.add("price")
        drinkPrice.textContent = drink.price;

        right.appendChild(drinkPrice);

        item.appendChild(left);
        item.appendChild(right);

        section.appendChild(item);
    });

}

function loadDrinks(section) {
    const drinksHeader = document.createElement("div");
    drinksHeader.classList.add("header");
    drinksHeader.textContent = "Drinks";
    const dImage = new Image()
    dImage.src = DrinkImg;
    drinksHeader.appendChild(dImage);
    section.appendChild(drinksHeader);

    const dItems = document.createElement("div")
    dItems.classList.add("items");
    // add drinks
    addDrinks(dItems);
    section.appendChild(dItems);

}

function loadBreakfast(section) {
    const breakfastHeader = document.createElement("div");
    breakfastHeader.classList.add("header");
    breakfastHeader.textContent = "Breakfast";
    const bImage = new Image()
    bImage.src = DrinkImg;
    breakfastHeader.appendChild(bImage);
    section.appendChild(breakfastHeader);
}


function loadMenu() {
    // console.log("Loading Menu!");
    const content = document.querySelector("#content");
    const drinksSection = document.createElement("div");
    drinksSection.classList.add("drinks");
    loadDrinks(drinksSection);


    const breakfastSection = document.createElement("div");
    breakfastSection.classList.add("breakfast");
    loadBreakfast(breakfastSection);
    // fill

    const lunchSection = document.createElement("div");
    lunchSection.classList.add("lunch");
    // fill

    const dinnerSection = document.createElement("div");
    dinnerSection.classList.add("dinner");
    // fill

    const subSections = [drinksSection, breakfastSection, lunchSection, dinnerSection];
    subSections.forEach((section) => {
        content.appendChild(section);
    });

}

export {
    loadMenu
}


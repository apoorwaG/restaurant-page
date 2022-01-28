import './css/menu_style.css';
import DrinkImg from './images/drink.jpg';
import BreakfastImg from './images/breakfast.png';
import LunchImg from './images/lunch.png';

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

function addFood(section, items) {

    const itemsSection = document.createElement("div");
    itemsSection.classList.add("items");

    items.forEach((item) => {
        const itemContent = document.createElement("div");
        itemContent.classList.add("item");

        const left = document.createElement("div");
        left.classList.add("left");

        const itemName = document.createElement("div");
        itemName.classList.add("name");
        itemName.textContent = item.name;

        const itemDesc = document.createElement("div");
        itemDesc.classList.add("desc");
        itemDesc.textContent = item.desc;

        const right = document.createElement("div");
        right.classList.add("right");

        const itemPrice = document.createElement("div");
        itemPrice.classList.add("price")
        itemPrice.textContent = item.price;

        left.appendChild(itemName);
        left.append(itemDesc);
        right.appendChild(itemPrice);
        itemContent.appendChild(left);
        itemContent.appendChild(right);

        itemsSection.appendChild(itemContent);
        section.appendChild(itemsSection);
    });

}

// add text and Image to provided header node
function addToHeader(section, text, Img) {
    const header = document.createElement("div")
    header.classList.add("header");

    header.textContent = text;
    const img = new Image();
    img.src = Img;
    header.appendChild(img);

    section.appendChild(header);
}

function loadDrinks(section) {

    addToHeader(section, "Drinks", DrinkImg);

    // add drinks
    const drinks = [
        new Item("Mojito", 2.99, "The mint and lime give it a cool, refreshing flavor, and the soda lightens it up with a fizzy crispness."),
        new Item("Manhattan", 3.99, "This delightful mix of rye or bourbon whiskey, sweet vermouth, and bitters has been adored for hundreds of years."),
        new Item("Daiquiri", 5.99, "Just three ingredients with no fruit (other than lime) and no blender. Proper balance, fresh lime juice, and an excelent white rum."),
        new Item("Dry Martini", 8.99, "A cocktail made with gin and vermouth, and garnished with an olive or a lemon twist."),
        new Item("Old Fashioned", 6.99, "A cocktail made by muddling sugar with bitters and water, adding whiskey, and garnishing with orange slice or zest and a cocktail cherry.")
    ]
    addFood(section, drinks);

}

function loadBreakfast(section) {

    addToHeader(section, "Breakfast", BreakfastImg);

    const breakfastItems = [
        new Item("Eggs-Sausage-Hashbrowns (EGGSH)", 9.99, "Enjoy your morning with this delicious staple, fresh."),
        new Item("Turkey Sandwich with Sweet Peppers", 5.99, "Simple and tasty turkey sandwich with some amazing peppers."),
        new Item("Breakfast Burrito with Bacon & Mushrooms", 12.99, "Best breafast burrito in the world. No question."),
        new Item("Oats with Fruits, Peanut Butter, and Honey", 8.99, "For my veggie fellows. This is one heavy meal!")
    ];

    addFood(section, breakfastItems);  
}

function loadLunch(section) {

    addToHeader(section, "Lunch", LunchImg);

    const lunchItems = [
        new Item("Spicy Chorizo Rice with Onions and Peppers", 12.99, "Premium chorizo and rice with onions and bell peppers."),
        new Item("Double Decker Bison Burger", 11.99, "Delicious bison burger with two patties. Fries and drinks included!"),
        new Item("Rice with Salmon and Asparagus", 14.99, "A delicious plate that is also good for your health."),
        new Item("Fried Noodles with Teriyaki Chicken", 11.99, "The best chicken noodles in town. Sweet and spicy. Have a taste!"),
    ];

    addFood(section, lunchItems);
}


function loadMenu() {
    // console.log("Loading Menu!");
    const content = document.querySelector(".content");
    const drinksSection = document.createElement("div");
    drinksSection.classList.add("drinks");
    loadDrinks(drinksSection);


    const breakfastSection = document.createElement("div");
    breakfastSection.classList.add("breakfast");
    loadBreakfast(breakfastSection);

    const lunchSection = document.createElement("div");
    lunchSection.classList.add("lunch");
    loadLunch(lunchSection);

    const subSections = [drinksSection, breakfastSection, lunchSection];
    subSections.forEach((section) => {
        content.appendChild(section);
    });

}

export {
    loadMenu
}


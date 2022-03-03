let elements = [];

let element = {
    tagName: "",
    className: "",
    id: '',
    innerText: "",
    parent: "",
    appendToParent: false
};



function createNewHTMLElement(para) {
    let newElement;

    for (const prop in para) {
        if (prop == 'tagName') {
            newElement = document.createElement(para[prop]);
        }

        if (para[prop] != "") {
            newElement[prop] = para[prop];
        } else {
            continue;
        }
    }

    if (para.appendToParent && para.parentId != "") {
        let parent = document.getElementById(para.parentId);
        parent.appendChild(newElement);
    } else {
        return newElement;
    }

}

// Creating the list of elements we need to display on the page:
// Creating the nav bar:
let nav = {
    tagName: "nav",
    className: "nav",
    id: 'nav',
    parentId: 'output',
    innerText: "",
    appendToParent: true,
    src: "",
    alt: "",
    href: "",
}

// Creating the nav's logo image:
let img = {
    tagName: "img",
    className: "nav__logo",
    id: 'logo',
    parentId: 'nav',
    innerText: "",
    appendToParent: true,
    src: "https://www.pngkit.com/png/full/14-141880_grilled-chicken-sandwich-cocktails-logo-png.png",
    alt: "logo",
}


// Creating the nav's logo image:
let navMenu = {
    tagName: "div",
    className: "nav__menu",
    id: 'menu',
    parentId: 'nav',
    appendToParent: true,
}

// Creating the nav's logo image:
let navItem1 = {
    tagName: "a",
    className: "nav__items",
    parentId: 'menu',
    innerText: "Vodka",
    appendToParent: true,
    href: "#",
}


// Creating the nav's logo image:
let navItem2 = {
    tagName: "a",
    className: "nav__items",
    parentId: 'menu',
    innerText: "Rum",
    appendToParent: true,
    href: "#",
}


// Creating the nav's logo image:
let navItem3 = {
    tagName: "a",
    className: "nav__items",
    parentId: 'menu',
    innerText: "Gin",
    appendToParent: true,
    href: "#",
}


// Creating the nav's logo image:
let navItem4 = {
    tagName: "a",
    className: "nav__items",
    parentId: 'menu',
    innerText: "Whisky",
    appendToParent: true,
    href: "#",
}


// Creating the nav's logo image:
let header = {
    tagName: "header",
    className: "header-container",
    id: 'header',
    parentId: 'output',
    appendToParent: true,
}


// Creating the nav's logo image:
let itemRandomizerDiv = {
    tagName: "div",
    className: "item-randomizer",
    id: 'item-randomizer',
    parentId: 'header',
    appendToParent: true,
}


let mainContent = {
    tagName: "div",
    className: "main-content",
    id: 'main-content',
    parentId: 'header',
    appendToParent: true,
}

let form = {
    tagName: "form",
    className: "body-content",
    id: 'form',
    parentId: "output",
    appendToParent: true
}

let row = {
    tagName: "div",
    className: "row",
    id: 'row',
    parentId: "form",
    appendToParent: true
}

let ILike = {
    tagName: "div",
    className: "i-like",
    id: 'i-like',
    parentId: 'row',
    appendToParent: true,
}

let IHave = {
    tagName: "div",
    className: "i-have",
    id: 'i-have',
    parentId: 'row',
    appendToParent: true,
}


let iHaveTitle = {
    tagName: "h2",
    className: "i-have__title",
    parentId: 'i-have',
    innerText: 'What I Have',
    appendToParent: true,
}


let iLikeTitle = {
    tagName: "h2",
    className: "i-like__title",
    parentId: 'i-like',
    innerText: 'What I Like',
    appendToParent: true,
}


let iHaveinput1 = {
    tagName: "input",
    type: 'text',
    parentId: 'i-have',
    appendToParent: true,
    value: 'value 1'
}


let iHaveinput2 = {
    tagName: "input",
    type: 'text',
    parentId: 'i-have',
    appendToParent: true,
    value: 'value 1'
}


let iHaveinput3 = {
    tagName: "input",
    type: 'text',
    parentId: 'i-have',
    appendToParent: true,
    value: 'value 1'
}


let iHaveinput4 = {
    tagName: "input",
    type: 'text',
    parentId: 'i-have',
    appendToParent: true,
    value: 'value 1'
}

let inputdiv1 = {
    tagName: "div",
    id: 'inputdiv1',
    className: "input",
    parentId: 'i-like',
    appendToParent: true,
}


let inputdiv1Label = {
    tagName: "label",
    id: 'banana',
    innerText: "Banana",
    parentId: 'inputdiv1',
    appendToParent: true,
}


let inputdiv1Input = {
    tagName: "input",
    type: 'checkbox',
    parentId: 'inputdiv1',
    appendToParent: true,
    value: 'value 1'
}


let inputdiv2 = {
    tagName: "div",
    className: 'input',
    id: 'inputdiv2',
    parentId: 'i-like',
    appendToParent: true,

}


let inputdiv2Label = {
    tagName: "label",
    innerText: "label",
    parentId: 'inputdiv2',
    appendToParent: true,
}


let inputdiv2Input = {
    tagName: "input",
    type: 'checkbox',
    parentId: 'inputdiv2',
    appendToParent: true,
    value: 'value 1'
}

// ===

let inputdiv3 = {
    tagName: "div",
    className: 'input',
    id: 'inputdiv3',
    parentId: 'i-like',
    appendToParent: true,

}


let inputdiv3Label = {
    tagName: "label",
    innerText: "label",
    parentId: 'inputdiv3',
    appendToParent: true,
}


let inputdiv3Input = {
    tagName: "input",
    type: 'checkbox',
    parentId: 'inputdiv3',
    appendToParent: true,
    value: 'value 1'
}



let inputdiv4 = {
    tagName: "div",
    className: 'input',
    id: 'inputdiv4',
    parentId: 'i-like',
    appendToParent: true,
}


let inputdiv4Label = {
    tagName: "label",
    innerText: "label",
    parentId: 'inputdiv4',
    appendToParent: true,
}


let inputdiv4Input = {
    tagName: "input",
    type: 'checkbox',
    parentId: 'inputdiv4',
    appendToParent: true,
    value: 'value 1'
}



let formBtn = {
    tagName: "button",
    className: 'cocktail-submit',
    type: 'submit',
    parentId: 'form',
    appendToParent: true,
    innerText: 'Submit Cocktail'
}








let waseem = {
    tagName: "input",
    id: 'waseem',
    placeholder: "Waseem",
    parentId: 'output',
    onchange: () => {
        const label = document.getElementById('banana')
        const myInput = document.getElementById('waseem')
        label.innerText = myInput.value
    },
    onclick: () => {
        alert("This is react!")
    },
    appendToParent: true,
}







elements.push(nav);
elements.push(img);
elements.push(navMenu);
elements.push(navItem1);
elements.push(navItem2);
elements.push(navItem3);
elements.push(navItem4);

elements.push(header);
elements.push(itemRandomizerDiv);
elements.push(mainContent);

elements.push(form);
elements.push(row);
elements.push(IHave);
elements.push(iHaveTitle);
elements.push(iHaveinput1);
elements.push(iHaveinput2);
elements.push(iHaveinput3);
elements.push(iHaveinput4);
elements.push(ILike);
elements.push(iLikeTitle);
elements.push(inputdiv1);
elements.push(inputdiv1Input);
elements.push(inputdiv1Label);
elements.push(inputdiv2);
elements.push(inputdiv2Input);
elements.push(inputdiv2Label);
elements.push(inputdiv3);
elements.push(inputdiv3Input);
elements.push(inputdiv3Label);
elements.push(inputdiv4);
elements.push(inputdiv4Input);
elements.push(inputdiv4Label);
elements.push(formBtn);


elements.push(waseem);







for (const element of elements) {
    createNewHTMLElement(element);
}


let formElement = document.getElementById('form');

formElement.addEventListener('submit', e => {
    e.preventDefault();
    console.log("Submitted successfully");
});




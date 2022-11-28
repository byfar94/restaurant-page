

export function MenuPage(){
    let content = document.querySelector(".content");
    content.innerHTML = "";
    let menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");

    //header
    let menuHeader = document.createElement("h2");
    menuHeader.innerText = "Menu"

    //menu container
    let menuContain = document.createElement("div");
    menuContain.classList.add("menu-contain");

    // menu
    let menu = document.createElement("div");
    menu.classList.add("menu");
    menu.innerHTML = `
        <div>
            <img src="images/chicken-burrito.jpg" alt="Chicken Burrito">
            <h3>Chicken Burrito</h3>
            <p>$11</p>
        </div>
        <div>
            <img src="images/pork-burrito.jpg" alt="Pork Burrito">
            <h3>Pork Burrito</h3>
            <p>$12</p>
        </div>
        <div>
            <img src="images/chicken-taco.jpg" alt="Chicken Tacos">
            <h3>Chicken Tacos x3</h3>
            <p>$9</p>
        </div>
        <div>
            <img src="images/fish-taco.jpg" alt="fish Tacos">
            <h3>fish Tacos x3</h3>
            <p>$13</p>
        </div>
        <div>
            <img src="images/black-bean-salad.jpg" alt="Black Bean Salad">
            <h3>Black Bean Salad</h3>
            <p>$10</p>
        </div>
        <div>
            <img src="images/nachos.jpg" alt="nachos">
            <h3>Loaded Nachos</h3>
            <p>$11</p>
        </div>
    
    `



    content.appendChild(menuSection);
    menuSection.appendChild(menuHeader);
    content.appendChild(menuContain);
    menuContain.appendChild(menu);
}
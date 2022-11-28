import { HomePage } from './home';
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";

//header
function createHeader(){
    
    const header = document.querySelector(".head");

    //icon
    const icon = document.createElement("h1");
    icon.innerHTML = "FDT"

    //nav
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    const homeBtn = document.createElement("li");
    const menuBtn = document.createElement("li");
    const contactBtn = document.createElement("li");
    homeBtn.innerHTML = "<a>Home</a>";
    menuBtn.innerHTML = "<a>Menu</a>";
    contactBtn.innerHTML = "<a>Contact</a>";

    header.appendChild(icon);
    header.appendChild(nav);
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    homeBtn.addEventListener("click", HomePage);
    menuBtn.addEventListener("click", MenuPage);
    contactBtn.addEventListener("click", ContactPage);
}

//footer




//page output
createHeader();
HomePage();



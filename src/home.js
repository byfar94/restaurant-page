import { MenuPage } from "./menu";

export function HomePage(){
    let content = document.querySelector(".content");
    content.innerHTML = "";

    //hero
    let heroDiv = document.createElement("div");
    heroDiv.classList.add("hero-div");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");
    heroTitle.innerText = "Fat Daddy Taco";

    const heroPara = document.createElement("p");
    heroPara.classList.add("hero-para");
    heroPara.innerText = "The fattest, daddiest Tex-Mex in Brooklyn";

    const heroBtn = document.createElement("button");
    heroBtn.classList.add("btn");
    heroBtn.innerText = "Order Now";
    heroBtn.addEventListener("click", MenuPage);
    

    //article contianer
    let artSection = document.createElement("section");
    artSection.classList.add("article-contain");

    //articles

    let articleOne = document.createElement("div");
    let articleTwo = document.createElement("div");
    let articleThree = document.createElement("div");

    let artOneHead = document.createElement("h2");
    artOneHead.innerHTML = "Tex-Mex";
    let artTwoHead = document.createElement("h2");
    artTwoHead.innerHTML = "Service";
    let artThreeHead = document.createElement("h2");
    artThreeHead.innerHTML = "Low Prices"

    let artOnePara = document.createElement("p");
    artOnePara.innerHTML = "Burritos, Tacos, salads, rice & beans, chips & salsa"
    let artTwoPara = document.createElement("p");
    artTwoPara.innerHTML = "Walk-in, pick up, and delivery"
    let artThreePara = document.createElement("p");
    artThreePara.innerHTML = "Cheaper than chipotl with grade A meat and fresh produce"




    content.appendChild(heroDiv);
    heroDiv.appendChild(heroTitle);
    heroDiv.appendChild(heroPara);
    heroDiv.appendChild(heroBtn);

    heroDiv.appendChild(artSection);
    artSection.appendChild(articleOne);
    artSection.appendChild(articleTwo);
    artSection.appendChild(articleThree);

    articleOne.appendChild(artOneHead);
    articleOne.appendChild(artOnePara);

    articleTwo.appendChild(artTwoHead);
    articleTwo.appendChild(artTwoPara);

    articleThree.appendChild(artThreeHead);
    articleThree.appendChild(artThreePara);
}

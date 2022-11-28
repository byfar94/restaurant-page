
export function ContactPage(){
    let content = document.querySelector(".content");
    content.innerHTML = "";
    let contactSection = document.createElement("section");
    contactSection.classList.add("contact");
    contactSection.innerHTML = `
<section>
    <div>
        <h3>Phone Number:</h3>
        <p>(555)555-5555</p>
    </div>
    <div>
        <h3>E-mail:</h3>
        <p>tacos@somemail.com</p>
    </div>
    <div>
        <h3>Location:</h3>
        <p>123 thisplace ave. </p>
    </div>
<section>

    `

    content.appendChild(contactSection);
}
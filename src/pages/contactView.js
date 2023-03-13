const renderMarkupContact = function () {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.innerHTML = `
    <p>921-999-9999</p>
    <p> 2424 Highland Drive Milwaukee, WI 53202</p>
    <img src="/src/images/png/restaurant-map.png" >
  `;

  return contact;
};

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(renderMarkupContact());
}

export default loadContact;

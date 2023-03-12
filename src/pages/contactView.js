const renderMarkupContact = function () {
  const contact = document.createElement("div");

  contact.innerHTML = `
  
  <div class="order">
          <h2 class="order-text">Arise, ye Tarnished!</h2>
          <h2 class="order-text">For a delicious meal at your nearest grace!</h2>
          <h3 class="sub-heading">Tasty and affordable</h3>
          <button class="btn-order btn">Order Now</button>
        </div>
  `;

  return contact;
};

function renderContactInfo() {
  const info = document.createElement("div");

  info.innerHTML = `TEST MENU INFO`;

  return info;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(renderMarkupContact());
  main.appendChild(renderContactInfo());
}

export default loadContact;

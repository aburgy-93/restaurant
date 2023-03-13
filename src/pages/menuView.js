const renderMarkupMenu = function () {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.innerHTML = `
  <div class="order">
    <h2 class="order-text">Menu</h2>
  </div>
`;

  const menu_container = document.createElement("div");
  menu_container.classList.add("menu-container");

  menu_container.innerHTML = `
    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Gold-Pickled Fowl Foot: <span>600 runes</span></h4>
        <ul class="ingredients">
          <li> <span> Rowa Fruit </span> x3</li>
          <li> <span> Rowa Four-Toed Fowl Foot </span> x1</li>
          <li> <span> Gold Firefly </span> x1</li>
        </ul>
      </div>
    </div>

    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Sleeping Pot: <span>1310 runes</span></h4>
        <ul class="ingredients">
          <li> <span> Mushroom </span> x1</li>
          <li> <span> Trina's Lily </span> x1</li>
          <li> <span> Empty Cracked Pot </span> x1</li>
        </ul>
      </div>
    </div>

    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Bewitching Branch: <span>1600 runes</span></h4>
        <ul class="ingredients">
          <li> <span> Sacramental Bud </span> x1</li>
          <li> <span> Miquella's Lily </span> x1</li>
        </ul>
      </div>
    </div>

    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Preserving Boluses: <span>200 runes</span></h4>
        <ul class="ingredients">
          <li> <span> Dewkissed Herba </span> x2</li>
          <li> <span> Crystal Cave Moss </span> x1</li>
          <li> <span> Sacramental Bud </span> x1</li>
        </ul>
      </div>
    </div>

    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Fire Pot: <span>320 runes</span></h4>
        <ul class="ingredients">
        <li> <span> Mushroom </span> x1</li>
        <li> <span> Smoldering Butterfly </span> x1</li>
        <li> <span> Empty Cracked Pot </span> x1</li>
      </ul>
      </div>
    </div>

    <div class="menu-item">
      <img src="/src/images/png/hamburger.png" alt="" />
      <div class="item-content">
        <h4>Bloodboil Aromatic: <span>1130 runes</span></h4>
        <ul class="ingredients">
          <li> <span> Altus Bloom </span> x2</li>
          <li> <span> Budding Cave Moss </span> x1</li>
          <li> <span> Land Octopus Ovary </span> x1</li>
          <li> <span> Arteria Leaf </span> x1</li>
        </ul>
      </div>
    </div>
  `;

  menu.appendChild(menu_container);

  return menu;
};

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(renderMarkupMenu());
}

export default loadMenu;

const renderMarkupMenu = function () {
  const bodyEl = document.getElementById("content");

  bodyEl.innerHTML = "";

  const markup = `
    <nav class="nav">
        <h1 class="restaurant-name">Tarnished Tastes</h1>
        <ul class="list">
            <li class="list-item nav-link home">Home</li>
            <li class="list-item nav-link menu">Menu</li>
            <li class="list-item nav-link contact">Contact</li>
        </ul>
    </nav>
      `;

  bodyEl.insertAdjacentHTML("afterbegin", markup);
};

export { renderMarkupMenu };

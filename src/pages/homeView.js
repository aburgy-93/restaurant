const renderMarkupHome = function () {
  const home = document.createElement("div");

  home.innerHTML = `
  
  <div class="order">
          <h2 class="order-text">Arise, ye Tarnished!</h2>
          <h2 class="order-text">For a delicious meal at your nearest grace!</h2>
          <h3 class="sub-heading">Tasty and affordable</h3>
          <button class="btn-order btn">Order Now</button>
        </div>
  `;

  return home;
};

function renderRestaurantInfo() {
  const info = document.createElement("div");

  info.innerHTML = `
    <div class="resturant-info">
        <div class="address-column">
          <ion-icon class="icon" name="location-outline"></ion-icon>
          <div class="address">
              <p>2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>
          </div>
      </div>

      <div class="hours-column">
            <ion-icon class="icon" name="time-outline"></ion-icon>
            <div class="hours">
                <p>Mon-Thurs: 8am-8pm</p>
                <p>Fri-Sun: 8am-11pm</p>
            </div>
        </div>
    </div>
  `;
  return info;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(renderMarkupHome());
  main.appendChild(renderRestaurantInfo());
}

export default loadHome;

/*
 <div class="body">
        <div class="order">
          <h2 class="order-text">Arise, ye Tarnished!</h2>
          <h2 class="order-text">For a delicious meal at your nearest grace!</h2>
          <h3 class="sub-heading">Tasty and affordable</h3>
          <button class="btn-order btn">Order Now</button>
        </div>
        
        <div class="resturant-info">
          <div class="address-column">
            <ion-icon class="icon" name="location-outline"></ion-icon>
            <div class="address">
              2424 Highland Drive <br>Milwaukee, WI 53202</br> </p>
            </div>
          </div>

          <div class="hours-column">
            <ion-icon class="icon" name="time-outline"></ion-icon>
            <div class="hours">
              <p>Mon-Thurs: 8am-8pm</p>
              <p>Fri-Sun: 8am-11pm</p>
            </div>
          </div>

        </div>
      </div>


*/

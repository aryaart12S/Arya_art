
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const diwaliProducts = [
  {
    id: "dryfruit-hamper",
    name: "Special Dry Fruit Diwali Hamper",
    description: "Premium Diwali gifting hamper. Corporate gifting and bulk orders available.",
    image: "images/diwali/special-dryfruit-hamper.jpg",
    variants: [
      { label: "Without Dry Fruits", price: 180 },
      { label: "With Dry Fruits", price: 300 }
    ]
  },
  {
    id: "shubh-labh-hanging",
    name: "Resin Shubh Labh Hanging",
    description: "Beautiful handcrafted resin Shubh Labh hanging pair.",
    image: "images/diwali/resin-shubh-labh-hanging.jpg",
    variants: [
      { label: "Pair", price: 200 }
    ]
  },
  {
    id: "personalised-box",
    name: "Personalised Dry Fruit Gift Box",
    description: "Custom name festive gift with optional dry fruits.",
    image: "images/diwali/personalised-dry-fruit-gift-box.jpg",
    variants: [
      { label: "Without Dry Fruits", price: 220 },
      { label: "With Dry Fruits", price: 520 }
    ]
  },
  {
    id: "personalised-tray",
    name: "Personalised Festive Tray",
    description: "Custom name festive gift tray.",
    image: "images/diwali/personalised-festive-tray.jpg",
    variants: [
      { label: "Without Dry Fruits", price: 300 },
      { label: "With Dry Fruits", price: 500 }
    ]
  },
  {
    id: "custom-name-gift",
    name: "Custom Name Festive Gift",
    description: "Personalised Diwali gift made to order.",
    image: "images/diwali/custom-name-gift.jpg",
    variants: [
      { label: "Single Piece", price: 250 }
    ]
  },
  {
    id: "lotus-diya",
    name: "Lotus Diya Candle Holder",
    description: "Decorative lotus candle holder. Bulk orders available.",
    image: "images/diwali/royal-lotus-diya-candle-holder.jpg",
    variants: [
      { label: "Single Piece with Candle", price: 100 },
      { label: "Bulk Order - Per Piece", price: 75 }
    ]
  },
  {
    id: "hanging-set",
    name: "Shubh Labh Hanging Set",
    description: "Festive hanging set for home decoration.",
    image: "images/diwali/shubh-labh-resin-hanging-set.jpg",
    variants: [
      { label: "Set", price: 120 }
    ]
  },
  {
    id: "royal-hamper",
    name: "Royal Festive Dry Fruit Hamper",
    description: "Premium festive hamper for gifting.",
    image: "images/diwali/royal-festive-dry-fruit-hamper.jpg",
    variants: [
      { label: "Without Dry Fruits", price: 220 },
      { label: "With Dry Fruits", price: 500 }
    ]
  },
  {
    id: "floral-shubh-labh",
    name: "Handcrafted Resin Shubh Labh Floral Hangings",
    description: "Ruby-red resin petals with golden Shubh Labh lettering.",
    image: "images/shubh-labh-resin-hangings.jpg",
    variants: [
      { label: "Hanging Set", price: 149 }
    ]
  },
  {
    id: "lotus-tealight",
    name: "Lotus Glow Tealight Holders",
    description: "Elegant lotus-inspired festive tealight holders.",
    image: "images/lotus-glow-tealight-holders.jpg",
    variants: [
      { label: "Set", price: 249 }
    ]
  },
  {
    id: "floral-tealight",
    name: "Floral Resin Tealight Holders",
    description: "Beautiful floral resin holders for Diwali decoration.",
    image: "images/floral-resin-tealight-holders.jpg",
    variants: [
      { label: "Set", price: 299 }
    ]
  }
];

function renderDiwaliProducts() {
  const grid = document.getElementById("diwaliGrid");

  if (!grid) {
    console.error("diwaliGrid not found in diwali.html");
    return;
  }

  grid.innerHTML = diwaliProducts.map(product => {
    const firstVariant = product.variants[0];

    return `
      <article class="diwali-product-card">
        <img
          class="diwali-product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <div class="diwali-product-info">
          <h3>${product.name}</h3>

          <p class="diwali-product-price">
            ₹${firstVariant.price}
            ${product.variants.length > 1 ? " onwards" : ""}
          </p>

          <button
            type="button"
            class="diwali-details-btn"
            onclick="openDiwaliDetails('${product.id}')">
            View Details
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function openDiwaliDetails(id) {
  const product = diwaliProducts.find(item => item.id === id);
  if (!product) return;

  const options = product.variants.map((variant, index) =>
    `<option value="${index}">
      ${variant.label} - ₹${variant.price}
    </option>`
  ).join("");

  let modal = document.getElementById("diwaliModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "diwaliModal";
    modal.className = "diwali-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="diwali-modal-content">
      <button type="button"
        class="diwali-modal-close"
        onclick="document.getElementById('diwaliModal').style.display='none'">
        ×
      </button>

      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>

      <label for="diwaliVariant">Choose option:</label>
      <select id="diwaliVariant" onchange="updateDiwaliPrice('${product.id}')">
        ${options}
      </select>

      <p id="diwaliSelectedPrice">
        ₹${product.variants[0].price}
      </p>

      <button type="button"
        class="diwali-order-btn"
        onclick="orderDiwaliProduct('${product.id}')">
        Order on WhatsApp
      </button>
    </div>
  `;

  modal.style.display = "flex";
}

function updateDiwaliPrice(id) {
  const product = diwaliProducts.find(item => item.id === id);
  const select = document.getElementById("diwaliVariant");

  if (product && select) {
    document.getElementById("diwaliSelectedPrice").textContent =
      "₹" + product.variants[Number(select.value)].price;
  }
}

function orderDiwaliProduct(id) {
  const product = diwaliProducts.find(item => item.id === id);
  if (!product) return;

  const select = document.getElementById("diwaliVariant");
  const variant = product.variants[Number(select.value)];

  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("diwali.js mein apna WhatsApp number add karo.");
    return;
  }

  const message =
    `Hello Arya Art!\nProduct: ${product.name}\n` +
    `Option: ${variant.label}\nPrice: ₹${variant.price}`;

  window.open(
    "https://wa.me/" + WHATSAPP_NUMBER +
    "?text=" + encodeURIComponent(message),
    "_blank"
  );
}

function searchDiwaliProducts() {
  const input = document.getElementById("diwaliSearch");
  const query = input ? input.value.toLowerCase().trim() : "";
  const grid = document.getElementById("diwaliGrid");

  if (!grid) return;

  const filtered = diwaliProducts.filter(product =>
    (product.name + " " + product.description)
      .toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(product => `
    <article class="diwali-product-card">
      <img class="diwali-product-image"
        src="${product.image}" alt="${product.name}" loading="lazy">

      <div class="diwali-product-info">
        <h3>${product.name}</h3>
        <p class="diwali-product-price">
          ₹${product.variants[0].price}
        </p>
        <button class="diwali-details-btn" type="button"
          onclick="openDiwaliDetails('${product.id}')">
          View Details
        </button>
      </div>
    </article>
  `).join("");

  if (!filtered.length) {
    grid.innerHTML = "<p>No Diwali products found.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderDiwaliProducts();

  const search = document.getElementById("diwaliSearch");
  if (search) {
    search.addEventListener("input", searchDiwaliProducts);
  }
});
          

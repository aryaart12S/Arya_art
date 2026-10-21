/* Arya Art Diwali Collection — edit product data below to update names, prices and descriptions. */
(() => {
  "use strict";
  const BASE = "https://aryaart12s.github.io/Arya_art/";
  const WHATSAPP_NUMBER = "919243498424";

  const products = [
    {
      id:"special-dry-fruit-diwali-hamper",
      name:"Special Dry Fruit Diwali Hamper",
      category:"hampers", categoryLabel:"Gift hamper",
      description:"A floral festive gift box with a clear display window. Great for family gifting, client gifts and corporate celebrations. Bulk orders available.",
      image:"images/special-dry-fruit-diwali-hamper.jpg",
      tag:"CORPORATE GIFTING",
      variants:[
        {id:"without",label:"Without dry fruits",description:"Decorative gift packaging",price:180},
        {id:"with",label:"With dry fruits",description:"Gift hamper with dry fruits",price:300}
      ],
      defaultVariant:"with", bulk:true
    },
    {
      id:"resin-shubh-labh-hanging",
      name:"Resin Shubh Labh Hanging",
      category:"decor", categoryLabel:"Festive decor",
      description:"Blue resin Shubh Labh hangings with pearl detailing and lotus artwork — a festive touch for your home entrance.",
      image:"images/resin-shubh-labh-hanging.jpg",
      tag:"FESTIVE DECOR",
      variants:[{id:"pair",label:"Pair of hangings",description:"Two matching hangings",price:200}],
      defaultVariant:"pair"
    },
    {
      id:"personalised-dry-fruit-gift-box",
      name:"Personalised Dry Fruit Gift Box",
      category:"personalised", categoryLabel:"Personalised gift",
      description:"A floral gift box with a custom name or message. A thoughtful option for festive gifting and celebrations.",
      image:"images/personalised-dry-fruit-gift-box.jpg",
      tag:"CUSTOM NAME",
      variants:[
        {id:"without",label:"Without dry fruits",description:"Personalised decorative box",price:220},
        {id:"with",label:"With dry fruits",description:"Personalised box with dry fruits",price:520}
      ],
      defaultVariant:"with", customName:true
    },
    {
      id:"personalised-festive-dry-fruit-tray",
      name:"Personalised Festive Dry Fruit Tray",
      category:"personalised", categoryLabel:"Personalised gift",
      description:"A handled festive tray decorated with flowers and elegant netting. Personalise the name to make the gift your own.",
      image:"images/personalised-festive-dry-fruit-tray.jpg",
      tag:"PERSONALISED",
      variants:[
        {id:"without",label:"Without dry fruits",description:"Decorative tray",price:300},
        {id:"with",label:"With dry fruits",description:"Tray with dry fruits",price:500}
      ],
      defaultVariant:"with", customName:true
    },
    {
      id:"shubh-labh-floral-hanging",
      name:"Shubh Labh Floral Earrings",
      category:"accessories", categoryLabel:"Festive accessories",
      description:"Lavender floral earrings with gold detailing and pearl drops — a festive accessory or thoughtful little gift.",
      image:"images/shubh-labh-floral-earrings.jpg",
      tag:"FESTIVE ACCESSORY",
      variants:[{id:"pair",label:"One pair",description:"Pair of earrings",price:250}],
      defaultVariant:"pair"
    }
    ,
  {
    id: "royal-lotus-diya",
    name: "Royal Lotus Diya Candle Holder",
    category: "decor",
    categoryLabel: "Festive decor",
    description: "Elegant lotus-shaped candle holder with golden detailing and pearl accents. Perfect for Diwali decoration and festive gifting.",
    image: "images/royal-lotus-diya.jpg",
    tag: "DIWALI SPECIAL",
    variants: [
      {
        id: "single",
        label: "Single Piece",
        description: "One decorative diya holder with candle",
        price: 100
      },
      {
        id: "bulk",
        label: "Bulk Order",
        description: "₹75 per piece for bulk orders",
        price: 75
      }
    ],
    defaultVariant: "single",
    bulk: true
  },
  {
    id: "shubh-labh-set",
    name: "Shubh Labh Resin Hanging Set",
    category: "decor",
    categoryLabel: "Festive decor",
    description: "Beautiful resin Shubh and Labh hangings with sparkling embellishments, golden details and pearl accents. Perfect for decorating your entrance during Diwali.",
    image: "images/shubh-labh-set.jpg",
    tag: "FESTIVE FAVOURITE",
    variants: [
      {
        id: "pair",
        label: "Set of 2",
        description: "One Shubh and one Labh hanging",
        price: 120
      }
    ],
    defaultVariant: "pair"
  },
  {
    id: "royal-dryfruit-hamper",
    name: "Royal Festive Dry Fruit Hamper",
    category: "hampers",
    categoryLabel: "Gift hamper",
    description: "A premium wooden festive tray decorated with elegant sky-blue organza pouches, blue bows and golden accents. Choose with or without dry fruits for your Diwali gifting.",
    image: "images/royal-dryfruit-hamper.jpg",
    tag: "DIWALI GIFTING",
    variants: [
      {
        id: "without",
        label: "Without Dry Fruits",
        description: "Decorative gift tray without dry fruits",
        price: 220
      },
      {
        id: "with",
        label: "With Dry Fruits",
        description: "Gift tray with dry fruits",
        price: 500
      }
    ],
    defaultVariant: "without",
    customName: false
  },
    {
  title: "Handcrafted Resin Shubh Labh Hangings ✨",
  image: "images/shubh-labh-resin-hangings.jpg",
  category: "decor",
  price: "₹149",
  description: "Handcrafted ruby-red resin floral hangings with golden Shubh Labh lettering, pearl embellishments and gold detailing. Perfect for doors, pooja rooms and Diwali gifting. Price is for 1 pair."
},
{
  title: "Lotus Glow Tealight Holders 🌸",
  image: "images/lotus-glow-tealight-holders.jpg",
  category: "decor",
  price: "₹249",
  description: "Beautiful handcrafted lotus-inspired tealight holders with festive pink and gold detailing. Perfect for Diwali decoration and gifting. Price is for a set of 4."
},
{
  title: "Floral Resin Tealight Holders ✨",
  image: "images/floral-resin-tealight-holders.jpg",
  category: "decor",
  price: "₹299",
  description: "Glossy handcrafted resin floral holders with pearl embellishments and ornate golden candle cups. A stylish choice for festive home decor and gifting. Price is for a set of 4."
},
  ];

  const grid = document.getElementById("diwaliGrid");
  const search = document.getElementById("diwaliSearch");
  const clearSearch = document.getElementById("clearSearch");
  const emptyState = document.getElementById("emptyState");
  const chips = document.getElementById("categoryChips");
  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("modalContent");
  const closeModalButton = document.getElementById("closeModal");
  let activeCategory = "all";
  let activeProduct = null;
  let activeVariantId = null;
  let previousFocus = null;

  const money = amount => new Intl.NumberFormat("en-IN", {
    style:"currency", currency:"INR", maximumFractionDigits:0
  }).format(amount);

  const productUrl = product => `${BASE}diwali.html?product=${encodeURIComponent(product.id)}`;
  const getVariant = (product, variantId) => product.variants.find(v => v.id === variantId) || product.variants[0];

  function card(product) {
    const start = getVariant(product, product.defaultVariant);
    const orderMessage = `Hi Arya Art! I would like to order ${product.name} (${start.label}) for ${money(start.price)}. Please confirm availability. ${productUrl(product)}`;
    return `<article class="diwali-card">
      <button class="card-image-button" type="button" data-details="${product.id}" aria-label="View details for ${product.name}">
        <img class="card-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-tag">${product.tag}</span>
      </button>
      <div class="card-content">
        <p class="card-category">${product.categoryLabel}</p>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-description">${product.description}</p>
        <div class="price-line"><span class="price-current">${product.variants.length > 1 ? "From " : ""}${money(Math.min(...product.variants.map(v => v.price)))}</span>${product.variants.length > 1 ? `<span class="price-note">${product.variants.length} options</span>` : ""}</div>
        <div class="card-actions">
          <a class="order-button" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}" target="_blank" rel="noopener">Order on WhatsApp</a>
          <button class="share-button" type="button" data-share="${product.id}" aria-label="Share ${product.name}" title="Share product">↗</button>
        </div>
        <button class="details-button" type="button" data-details="${product.id}">View Details ↓</button>
      </div>
    </article>`;
  }

  function render() {
    const term = search.value.trim().toLowerCase();
    const filtered = products.filter(p =>
      (activeCategory === "all" || p.category === activeCategory) &&
      `${p.name} ${p.categoryLabel} ${p.description} ${p.tag}`.toLowerCase().includes(term)
    );
    grid.innerHTML = filtered.map(card).join("");
    emptyState.hidden = filtered.length > 0;
    clearSearch.hidden = !search.value;
  }

  function openProduct(product) {
    activeProduct = product;
    activeVariantId = product.defaultVariant;
    previousFocus = document.activeElement;
    renderModal();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeModalButton.focus();
  }

  function renderModal() {
    const product = activeProduct;
    const selected = getVariant(product, activeVariantId);
    const variantOptions = product.variants.map(variant => `
      <label class="variant-option ${variant.id === selected.id ? "selected" : ""}">
        <input type="radio" name="diwaliVariant" value="${variant.id}" ${variant.id === selected.id ? "checked" : ""}>
        <span><b>${variant.label}</b><br><small>${variant.description}</small></span>
        <strong>${money(variant.price)}</strong>
      </label>`).join("");
    const message = `Hi Arya Art! I would like to order ${product.name} — ${selected.label} (${money(selected.price)}).${product.customName ? " I would like to discuss my custom name/message." : ""}${product.bulk ? " Please share bulk/corporate order details if available." : ""} Please confirm availability. ${productUrl(product)}`;
    modalContent.innerHTML = `
      <div class="modal-layout">
        <div><img class="modal-photo" src="${product.image}" alt="${product.name}"></div>
        <div class="modal-copy">
          <p class="eyebrow">ARYA ART · ${product.categoryLabel.toUpperCase()}</p>
          <h2 id="modalTitle">${product.name}</h2>
          <p class="modal-description">${product.description}</p>
          ${product.customName ? `<p class="modal-description"><b>Personalisation:</b> Share your preferred name or message on WhatsApp.</p>` : ""}
          ${product.bulk ? `<p class="modal-description"><b>Corporate gifting:</b> Bulk orders available. Contact us to discuss quantities.</p>` : ""}
          <p class="variant-label">${product.variants.length > 1 ? "CHOOSE YOUR OPTION" : "PRODUCT PRICE"}</p>
          <div id="variantOptions">${variantOptions}</div>
          <div class="modal-price-panel"><div class="modal-price-label">YOUR SELECTED PRICE</div><div class="modal-price" id="selectedPrice">${money(selected.price)}</div><div class="modal-price-note" id="selectedDescription">${selected.description}</div></div>
          <a class="dark-button modal-order" id="modalOrder" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}" target="_blank" rel="noopener">Order on WhatsApp ↗</a>
          <button class="modal-share" id="modalShare" type="button">↗ Share this product</button>
          <p class="modal-footnote">Please confirm product availability, final price and delivery details before ordering.</p>
        </div>
      </div>`;
    modalContent.querySelectorAll('input[name="diwaliVariant"]').forEach(input => {
      input.addEventListener("change", () => {
        activeVariantId = input.value;
        renderModal();
      });
    });
    document.getElementById("modalShare").addEventListener("click", () => shareProduct(product));
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  async function shareProduct(product) {
    const url = productUrl(product);
    const data = {title:`${product.name} | Arya Art`,text:`Explore ${product.name} from Arya Art's Diwali Collection.`,url};
    try {
      if (navigator.share) await navigator.share(data);
      else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(`${data.text}\n${url}`);
        alert("Product link copied! Share it with your friends.");
      } else window.prompt("Copy this product link:", url);
    } catch (error) {
      if (error && error.name !== "AbortError") window.prompt("Copy this product link:", url);
    }
  }

  chips.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    chips.querySelectorAll(".chip").forEach(chip => chip.classList.toggle("active", chip === button));
    render();
  });
  search.addEventListener("input", render);
  clearSearch.addEventListener("click", () => { search.value = ""; render(); search.focus(); });
  grid.addEventListener("click", event => {
    const detailButton = event.target.closest("[data-details]");
    const shareButton = event.target.closest("[data-share]");
    if (detailButton) {
      const product = products.find(p => p.id === detailButton.dataset.details);
      if (product) openProduct(product);
    } else if (shareButton) {
      const product = products.find(p => p.id === shareButton.dataset.share);
      if (product) shareProduct(product);
    }
  });
  closeModalButton.addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && !modal.hidden) closeModal(); });

  const generalMessage = encodeURIComponent("Hi Arya Art! I'd like to enquire about Diwali gifts and bulk/corporate gifting.");
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMessage}`;
  document.getElementById("customWhatsApp").href = waUrl;
  document.getElementById("floatingWhatsApp").href = waUrl;

  // Allow product links to open the relevant popup directly.
  const requestedProductId = new URLSearchParams(location.search).get("product");
  render();
  if (requestedProductId) {
    const product = products.find(p => p.id === requestedProductId);
    if (product) openProduct(product);
  }
})();


/* Arya Art Diwali Collection */
(() => {
  "use strict";

  const BASE = "https://aryaart12s.github.io/Arya_art/";
  const WHATSAPP_NUMBER = "919243498424";

  const products = [
    {
      id: "special-dry-fruit-diwali-hamper",
      name: "Special Dry Fruit Diwali Hamper",
      category: "hampers",
      categoryLabel: "Gift hamper",
      description: "A floral festive gift box with a clear display window. Great for family gifting, client gifts and corporate celebrations. Bulk orders available.",
      image: "images/special-dry-fruit-diwali-hamper.jpg",
      tag: "CORPORATE GIFTING",
      variants: [
        { id: "without", label: "Without dry fruits", description: "Decorative gift packaging", price: 180 },
        { id: "with", label: "With dry fruits", description: "Gift hamper with dry fruits", price: 300 }
      ],
      defaultVariant: "with",
      bulk: true
    },
    {
      id: "resin-shubh-labh-hanging",
      name: "Resin Shubh Labh Hanging",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "Blue resin Shubh Labh hangings with pearl detailing and lotus artwork — a festive touch for your home entrance.",
      image: "images/resin-shubh-labh-hanging.jpg",
      tag: "FESTIVE DECOR",
      variants: [
        { id: "pair", label: "Pair of hangings", description: "Two matching hangings", price: 200 }
      ],
      defaultVariant: "pair"
    },
    {
      id: "personalised-dry-fruit-gift-box",
      name: "Personalised Dry Fruit Gift Box",
      category: "personalised",
      categoryLabel: "Personalised gift",
      description: "A floral gift box with a custom name or message. A thoughtful option for festive gifting and celebrations.",
      image: "images/personalised-dry-fruit-gift-box.jpg",
      tag: "CUSTOM NAME",
      variants: [
        { id: "without", label: "Without dry fruits", description: "Personalised decorative box", price: 220 },
        { id: "with", label: "With dry fruits", description: "Personalised box with dry fruits", price: 520 }
      ],
      defaultVariant: "with",
      customName: true
    },
    {
      id: "personalised-festive-dry-fruit-tray",
      name: "Personalised Festive Dry Fruit Tray",
      category: "personalised",
      categoryLabel: "Personalised gift",
      description: "A handled festive tray decorated with flowers and elegant netting. Personalise the name to make the gift your own.",
      image: "images/personalised-festive-dry-fruit-tray.jpg",
      tag: "PERSONALISED",
      variants: [
        { id: "without", label: "Without dry fruits", description: "Decorative tray", price: 300 },
        { id: "with", label: "With dry fruits", description: "Tray with dry fruits", price: 500 }
      ],
      defaultVariant: "with",
      customName: true
    },
    {
      id: "shubh-labh-floral-earrings",
      name: "Shubh Labh Floral Earrings",
      category: "accessories",
      categoryLabel: "Festive accessories",
      description: "Lavender floral earrings with gold detailing and pearl drops — a festive accessory or thoughtful little gift.",
      image: "images/shubh-labh-floral-earrings.jpg",
      tag: "FESTIVE ACCESSORY",
      variants: [
        { id: "pair", label: "One pair", description: "Pair of earrings", price: 250 }
      ],
      defaultVariant: "pair"
    },
    {
      id: "shubh-labh-blue-wall-hangings",
      name: "Blue Shubh Labh Wall Hangings",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A decorative Shubh Labh hanging set in a blue festive design, perfect for doors, walls and Diwali home styling.",
      image: "images/shubh-labh-blue-wall-hangings.jpg",
      tag: "DIWALI DECOR",
      variants: [
        { id: "pair", label: "Pair of hangings", description: "Two matching wall hangings", price: 180 }
      ],
      defaultVariant: "pair"
    },
    {
      id: "premium-dry-fruit-gift-tray",
      name: "Premium Dry Fruit Gift Tray",
      category: "hampers",
      categoryLabel: "Gift hamper",
      description: "A festive gift tray with an elegant handcrafted presentation. Choose the decorative tray on its own or add dry fruits for a ready-to-gift hamper.",
      image: "images/premium-dry-fruit-gift-tray.jpg",
      tag: "FESTIVE GIFTING",
      variants: [
        { id: "without", label: "Without dry fruits", description: "Decorative gift tray only", price: 220 },
        { id: "with", label: "With dry fruits", description: "Gift tray filled with dry fruits", price: 500 }
      ],
      defaultVariant: "with"
    },
    {
      id: "floral-resin-tealight-holder",
      name: "Floral Resin Tealight Holder",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A handcrafted floral resin tealight holder with a candle, made to add a warm festive glow to your Diwali decor. Bulk-order pricing is available.",
      image: "images/floral-resin-tealight-holder.jpg",
      tag: "CANDLE INCLUDED",
      variants: [
        { id: "single", label: "Single piece with candle", description: "One tealight holder with candle", price: 100 },
        { id: "bulk", label: "Bulk order price", description: "Per piece for bulk orders", price: 75 }
      ],
      defaultVariant: "single",
      bulk: true
    },
    {
      id: "shubh-labh-hanging-set",
      name: "Shubh Labh Hanging Set",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A festive Shubh Labh hanging set for decorating your entrance, pooja area or home during Diwali.",
      image: "images/shubh-labh-hanging-set.jpg",
      tag: "FESTIVE FAVOURITE",
      variants: [
        { id: "set", label: "One set", description: "Decorative Shubh Labh hanging set", price: 120 }
      ],
      defaultVariant: "set"
    },
    {
      id: "resin-shubh-labh-floral-hangings",
      name: "Handcrafted Resin Shubh Labh Floral Hangings",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "Handcrafted resin Shubh Labh floral hangings with a festive finish — a beautiful accent for your doorway or Diwali display.",
      image: "images/resin-shubh-labh-floral-hangings.jpg",
      tag: "HANDCRAFTED",
      variants: [
        { id: "pair", label: "Pair of hangings", description: "Two matching floral hangings", price: 149 }
      ],
      defaultVariant: "pair"
    },
    {
      id: "floral-resin-tealight-holders-set-of-4",
      name: "Floral Resin Tealight Holders — Set of 4",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A coordinated set of four floral resin tealight holders to style your festive table, pooja corner or Diwali gift hamper.",
      image: "images/floral-resin-tealight-holders-set-of-4.jpg",
      tag: "SET OF 4",
      variants: [
        { id: "set4", label: "Set of 4", description: "Four floral resin tealight holders", price: 299 }
      ],
      defaultVariant: "set4"
    },
    {
      id: "handcrafted-lotus-tealight-diya-set",
      name: "Handcrafted Lotus Tealight Diya Set",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A handcrafted lotus-inspired tealight diya set that brings a traditional festive touch to your home or pooja space.",
      image: "images/handcrafted-lotus-tealight-diya-set.jpg",
      tag: "LOTUS DESIGN",
      variants: [
        { id: "set4", label: "Set of 4", description: "Four lotus-style tealight diyas", price: 249 }
      ],
      defaultVariant: "set4"
    },
    {
      id: "candle-light-rangoli",
      name: "Candle Light Rangoli",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A beautiful candle-light rangoli decoration for your entrance, pooja corner or festive table. Adds a warm and colourful Diwali glow.",
      image: "images/candle-light-rangoli.jpg",
      tag: "DIWALI SPECIAL",
      variants: [
        { id: "standard", label: "Candle Light Rangoli", description: "One decorative rangoli", price: 250 }
      ],
      defaultVariant: "standard"
    },
    {
      id: "floral-diya-set-of-2",
      name: "Handcrafted Floral Diya Set",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A lovely set of two decorative floral diyas, ideal for pooja, festive home decoration and Diwali gifting.",
      image: "images/floral-diya-set-of-2.jpg",
      tag: "SET OF 2",
      variants: [
        { id: "set2", label: "Set of 2", description: "Two decorative diyas", price: 200 }
      ],
      defaultVariant: "set2"
    },
    {
      id: "pearl-diamond-diya ",
      name: "PEARL DIAMOND DIYA",
      category: "decor",
      categoryLabel: "Festive decor",
      description: "A decorative designer diya to brighten your pooja space or festive arrangement. A thoughtful small gift for Diwali.",
      image: "images/designer-festive-diya.jpg",
      tag: "FESTIVE PICK",
      variants: [
        { id: "single", label: "Single piece", description: "One designer diya", price: 130 }
      ],
      defaultVariant: "single"
    },
    {
      id: "personalised-diwali-gift-with-dry-fruits",
      name: "Personalised Diwali Gift Hamper",
      category: "personalised",
      categoryLabel: "Personalised gift",
      description: "A personalised festive gift with a name of your choice. Select the version with or without dry fruits to suit your gifting needs.",
      image: "images/personalised-diwali-gift-hamper.jpg",
      tag: "CUSTOM NAME",
      variants: [
        { id: "without", label: "Without dry fruits", description: "Personalised decorative gift", price: 220 },
        { id: "with", label: "With dry fruits", description: "Personalised gift with dry fruits", price: 500 }
      ],
      defaultVariant: "without",
      customName: true
    }
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
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

  const productUrl = product =>
    `${BASE}diwali.html?product=${encodeURIComponent(product.id)}`;

  const getVariant = (product, variantId) =>
    product.variants.find(v => v.id === variantId) || product.variants[0];

  function card(product) {
    const start = getVariant(product, product.defaultVariant);

    const orderMessage =
      `Hi Arya Art! I would like to order ${product.name} (${start.label}) for ${money(start.price)}. Please confirm availability. ${productUrl(product)}`;

    return `
      <article class="diwali-card">
        <button class="card-image-button" type="button"
          data-details="${product.id}"
          aria-label="View details for ${product.name}">
          <img class="card-image" src="${product.image}"
            alt="${product.name}" loading="lazy">
          <span class="product-tag">${product.tag}</span>
        </button>

        <div class="card-content">
          <p class="card-category">${product.categoryLabel}</p>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-description">${product.description}</p>

          <div class="price-line">
            <span class="price-current">
              ${product.variants.length > 1 ? "From " : ""}
              ${money(Math.min(...product.variants.map(v => v.price)))}
            </span>
            ${product.variants.length > 1
              ? `<span class="price-note">${product.variants.length} options</span>`
              : ""}
          </div>

          <div class="card-actions">
            <a class="order-button"
              href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}"
              target="_blank" rel="noopener">Order on WhatsApp</a>

            <button class="share-button" type="button"
              data-share="${product.id}"
              aria-label="Share ${product.name}"
              title="Share product">↗</button>
          </div>

          <button class="details-button" type="button"
            data-details="${product.id}">View Details ↓</button>
        </div>
      </article>`;
  }

  function render() {
    const term = search.value.trim().toLowerCase();

    const filtered = products.filter(p =>
      (activeCategory === "all" || p.category === activeCategory) &&
      `${p.name} ${p.categoryLabel} ${p.description} ${p.tag}`
        .toLowerCase().includes(term)
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
        <input type="radio" name="diwaliVariant"
          value="${variant.id}" ${variant.id === selected.id ? "checked" : ""}>
        <span>
          <b>${variant.label}</b><br>
          <small>${variant.description}</small>
        </span>
        <strong>${money(variant.price)}</strong>
      </label>
    `).join("");

    const message =
      `Hi Arya Art! I would like to order ${product.name} — ${selected.label} (${money(selected.price)}).` +
      `${product.customName ? " I would like to discuss my custom name/message." : ""}` +
      `${product.bulk ? " Please share bulk/corporate order details if available." : ""}` +
      ` Please confirm availability. ${productUrl(product)}`;

    modalContent.innerHTML = `
      <div class="modal-layout">
        <div>
          <img class="modal-photo" src="${product.image}" alt="${product.name}">
        </div>

        <div class="modal-copy">
          <p class="eyebrow">ARYA ART · ${product.categoryLabel.toUpperCase()}</p>
          <h2 id="modalTitle">${product.name}</h2>
          <p class="modal-description">${product.description}</p>

          ${product.customName ? `
            <p class="modal-description">
              <b>Personalisation:</b>
              Share your preferred name or message on WhatsApp.
            </p>` : ""}

          ${product.bulk ? `
            <p class="modal-description">
              <b>Corporate gifting:</b>
              Bulk orders available. Contact us to discuss quantities.
            </p>` : ""}

          <p class="variant-label">
            ${product.variants.length > 1 ? "CHOOSE YOUR OPTION" : "PRODUCT PRICE"}
          </p>

          <div id="variantOptions">${variantOptions}</div>

          <div class="modal-price-panel">
            <div class="modal-price-label">YOUR SELECTED PRICE</div>
            <div class="modal-price" id="selectedPrice">${money(selected.price)}</div>
            <div class="modal-price-note" id="selectedDescription">${selected.description}</div>
          </div>

          <a class="dark-button modal-order" id="modalOrder"
            href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}"
            target="_blank" rel="noopener">Order on WhatsApp ↗</a>

          <button class="modal-share" id="modalShare" type="button">
            ↗ Share this product
          </button>

          <p class="modal-footnote">
            Please confirm product availability, final price and delivery details before ordering.
          </p>
        </div>
      </div>`;

    modalContent.querySelectorAll('input[name="diwaliVariant"]').forEach(input => {
      input.addEventListener("change", () => {
        activeVariantId = input.value;
        renderModal();
      });
    });

    document.getElementById("modalShare")
      .addEventListener("click", () => shareProduct(product));
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  async function shareProduct(product) {
    const url = productUrl(product);

    const data = {
      title: `${product.name} | Arya Art`,
      text: `Explore ${product.name} from Arya Art's Diwali Collection.`,
      url
    };

    try {
      if (navigator.share) {
        await navigator.share(data);
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(`${data.text}\n${url}`);
        alert("Product link copied! Share it with your friends.");
      } else {
        window.prompt("Copy this product link:", url);
      }
    } catch (error) {
      if (error && error.name !== "AbortError") {
        window.prompt("Copy this product link:", url);
      }
    }
  }

  chips.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    chips.querySelectorAll(".chip").forEach(chip => {
      chip.classList.toggle("active", chip === button);
    });

    render();
  });

  search.addEventListener("input", render);

  clearSearch.addEventListener("click", () => {
    search.value = "";
    render();
    search.focus();
  });

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

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  const generalMessage = encodeURIComponent(
    "Hi Arya Art! I'd like to enquire about Diwali gifts and bulk/corporate gifting."
  );

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMessage}`;

  document.getElementById("customWhatsApp").href = waUrl;
  document.getElementById("floatingWhatsApp").href = waUrl;

  // Open the relevant product popup from a shared product link.
  const requestedProductId = new URLSearchParams(location.search).get("product");

  render();

  if (requestedProductId) {
    const product = products.find(p => p.id === requestedProductId);
    if (product) openProduct(product);
  }
})();
         

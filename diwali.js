/* Arya Art Diwali Collection */
(() => {
  "use strict";


const products = [
  {
    id: "special-dry-fruit-diwali-hamper",
    name: "Special Dry Fruit Diwali Hamper",
    category: "hampers",
    categoryLabel: "Gift Hampers",
    description: "A beautiful festive hamper, perfect for Diwali gifting, family celebrations and corporate gifting. Bulk orders are available.",
    image: "images/diwali/special-dry-fruit-diwali-hamper.jpg",
    tag: "Corporate Gifting",
    bulk: true,
    variants: [
      { id: "without-dry-fruits", label: "Without Dry Fruits", description: "Decorative hamper without dry fruits", price: 180 },
      { id: "with-dry-fruits", label: "With Dry Fruits", description: "Festive hamper with dry fruits", price: 300 }
    ],
    defaultVariant: "without-dry-fruits"
  },

  {
    id: "resin-shubh-labh-hanging",
    name: "Resin Shubh Labh Hanging",
    category: "hangings",
    categoryLabel: "Wall Hangings",
    description: "Beautiful handcrafted Shubh Labh hangings to welcome prosperity and positivity into your home this Diwali.",
    image: "images/diwali/resin-shubh-labh-hanging.jpg",
    tag: "Festive Special",
    variants: [
      { id: "pair", label: "Pair of 2", description: "One complete pair", price: 200 }
    ],
    defaultVariant: "pair"
  },

  {
    id: "personalised-dry-fruit-gift-box",
    name: "Personalised Dry Fruit Gift Box",
    category: "hampers",
    categoryLabel: "Personalised Gifts",
    description: "Make your Diwali gifting special with a personalised gift box. Your preferred name can be added to make it memorable.",
    image: "images/diwali/personalised-dry-fruit-gift-box.jpg",
    tag: "Personalised",
    customName: true,
    variants: [
      { id: "without-dry-fruits", label: "Without Dry Fruits", description: "Personalised gift box", price: 220 },
      { id: "with-dry-fruits", label: "With Dry Fruits", description: "Personalised box with dry fruits", price: 520 }
    ],
    defaultVariant: "without-dry-fruits"
  },

  {
    id: "personalised-festive-dry-fruit-tray",
    name: "Personalised Festive Dry Fruit Tray",
    category: "hampers",
    categoryLabel: "Personalised Gifts",
    description: "An elegant festive tray with a personalised name option, perfect for gifting loved ones and celebrating Diwali.",
    image: "images/diwali/personalised-festive-dry-fruit-tray.jpg",
    tag: "Custom Name",
    customName: true,
    variants: [
      { id: "without-dry-fruits", label: "Without Dry Fruits", description: "Personalised decorative tray", price: 300 },
      { id: "with-dry-fruits", label: "With Dry Fruits", description: "Personalised tray with dry fruits", price: 500 }
    ],
    defaultVariant: "without-dry-fruits"
  },

  {
    id: "custom-name-gift",
    name: "Custom Name Diwali Gift",
    category: "personalised",
    categoryLabel: "Personalised Gifts",
    description: "A thoughtful handmade Diwali gift with a name of your choice. A special keepsake for festive gifting.",
    image: "images/diwali/custom-name-gift.jpg",
    tag: "Made to Order",
    customName: true,
    variants: [
      { id: "standard", label: "Standard Design", description: "Custom name gift", price: 250 }
    ],
    defaultVariant: "standard"
  },

  {
    id: "blue-shubh-labh-wall-hangings",
    name: "Blue Shubh Labh Wall Hangings",
    category: "hangings",
    categoryLabel: "Wall Hangings",
    description: "Decorative blue-themed Shubh Labh hangings that add a colourful traditional touch to your festive home decor.",
    image: "images/diwali/shubh-labh-blue-wall-hangings.jpg",
    tag: "Festive Decor",
    variants: [
      { id: "pair", label: "Pair of 2", description: "Complete hanging pair", price: 180 }
    ],
    defaultVariant: "pair"
  },

  {
    id: "premium-dry-fruit-gift-tray",
    name: "Premium Dry Fruit Gift Tray",
    category: "hampers",
    categoryLabel: "Gift Hampers",
    description: "A premium-looking festive tray for Diwali gifting, celebrations and special occasions.",
    image: "images/diwali/premium-dry-fruit-gift-tray.jpg",
    tag: "Premium Gift",
    variants: [
      { id: "without-dry-fruits", label: "Without Dry Fruits", description: "Decorative gift tray", price: 220 },
      { id: "with-dry-fruits", label: "With Dry Fruits", description: "Gift tray with dry fruits", price: 500 }
    ],
    defaultVariant: "without-dry-fruits"
  },

  {
    id: "floral-resin-tealight-holder",
    name: "Floral Resin Tealight Holder",
    category: "diyas",
    categoryLabel: "Diyas & Candle Holders",
    description: "A handmade floral resin candle holder to create a warm and elegant festive ambience. Bulk orders are available.",
    image: "images/diwali/floral-resin-tealight-holder.jpg",
    tag: "Bulk Orders",
    bulk: true,
    variants: [
      { id: "single", label: "Single Piece", description: "One holder with candle", price: 100 },
      { id: "bulk", label: "Bulk Order", description: "Per-piece price for bulk orders", price: 75 }
    ],
    defaultVariant: "single"
  },

  {
    id: "shubh-labh-hanging-set",
    name: "Shubh Labh Hanging Set",
    category: "hangings",
    categoryLabel: "Wall Hangings",
    description: "A traditional Shubh Labh decorative hanging set to make your entrance and festive decor more beautiful.",
    image: "images/diwali/shubh-labh-hanging-set.jpg",
    tag: "Festive Pick",
    variants: [
      { id: "set", label: "Complete Set", description: "One decorative set", price: 120 }
    ],
    defaultVariant: "set"
  },

  {
    id: "handcrafted-resin-shubh-labh-floral-hangings",
    name: "Handcrafted Resin Shubh Labh Floral Hangings",
    category: "hangings",
    categoryLabel: "Wall Hangings",
    description: "Handcrafted floral resin hangings with traditional Shubh Labh detailing for a beautiful festive entrance.",
    image: "images/diwali/resin-shubh-labh-floral-hangings.jpg",
    tag: "Handcrafted",
    variants: [
      { id: "pair", label: "Pair of 2", description: "One complete pair", price: 149 }
    ],
    defaultVariant: "pair"
  },

  {
    id: "floral-resin-tealight-holders-set",
    name: "Floral Resin Tealight Holders Set",
    category: "diyas",
    categoryLabel: "Diyas & Candle Holders",
    description: "A coordinated set of four floral resin tealight holders for festive tables, home decor and gifting.",
    image: "images/diwali/floral-resin-tealight-holders-set-of-4.jpg",
    tag: "Set of 4",
    variants: [
      { id: "set-of-4", label: "Set of 4", description: "Four floral resin holders", price: 299 }
    ],
    defaultVariant: "set-of-4"
  },

  {
    id: "handcrafted-lotus-tealight-diya-set",
    name: "Handcrafted Lotus Tealight Diya Set",
    category: "diyas",
    categoryLabel: "Diyas & Candle Holders",
    description: "Elegant lotus-inspired tealight diyas that add a graceful glow to your Diwali decorations.",
    image: "images/diwali/lotus-tealight-diya-set.jpg",
    tag: "Set of 4",
    variants: [
      { id: "set-of-4", label: "Set of 4", description: "Four lotus tealight holders", price: 249 }
    ],
    defaultVariant: "set-of-4"
  },

  {
    id: "candle-light-rangoli",
    name: "Candle Light Rangoli",
    category: "diyas",
    categoryLabel: "Diwali Decor",
    description: "A beautiful candle-lit rangoli decoration to brighten your festive entrance, pooja corner or celebration table.",
    image: "images/diwali/candle-light-rangoli.jpg",
    tag: "Diwali Special",
    variants: [
      { id: "standard", label: "Standard Design", description: "Candle light rangoli", price: 250 }
    ],
    defaultVariant: "standard"
  },

  {
    id: "handcrafted-floral-diya-set",
    name: "Handcrafted Floral Diya Set",
    category: "diyas",
    categoryLabel: "Diyas & Candle Holders",
    description: "A lovely set of two handcrafted floral diyas, perfect for pooja, festive decoration and gifting.",
    image: "images/diwali/floral-diya-set.jpg",
    tag: "Set of 2",
    variants: [
      { id: "set-of-2", label: "Set of 2", description: "Two handcrafted floral diyas", price: 200 }
    ],
    defaultVariant: "set-of-2"
  },

  {
    id: "pearl-diamond-designer-diya",
    name: "Pearl Diamond Designer Diya",
    category: "diyas",
    categoryLabel: "Diyas & Candle Holders",
    description: "A decorative designer diya with a pearl-inspired finish for an elegant festive look and thoughtful gifting.",
    image: "images/diwali/pearl-diamond-diya.jpg",
    tag: "Designer Pick",
    variants: [
      { id: "single", label: "Single Piece", description: "One designer diya", price: 130 }
    ],
    defaultVariant: "single"
  },

  {
    id: "diwali-special-snack-hamper",
    name: "Diwali Special Snack Hamper",
    category: "hampers",
    categoryLabel: "Gift Hampers",
    description: "A festive snack hamper for sharing happiness with friends, family and loved ones. Personalise it with your preferred name.",
    image: "images/diwali/diwali-snack-hamper.jpg",
    tag: "Festive Gifting",
    customName: true,
    variants: [
      { id: "standard", label: "Standard Hamper", description: "Diwali snack hamper", price: 450 }
    ],
    defaultVariant: "standard"
  },

  {
    id: "premium-diwali-dry-fruit-gift-hamper",
    name: "Premium Diwali Dry Fruit Gift Hamper",
    category: "hampers",
    categoryLabel: "Gift Hampers",
    description: "A festive premium gift hamper suitable for family gifting, celebrations and special Diwali occasions.",
    image: "images/diwali/diwali-dry-fruit-hamper.jpg",
    tag: "Premium",
    variants: [
      { id: "without-dry-fruits", label: "Without Dry Fruits", description: "Decorative festive hamper", price: 220 },
      { id: "with-dry-fruits", label: "With Dry Fruits", description: "Festive hamper with dry fruits", price: 500 }
    ],
    defaultVariant: "without-dry-fruits"
  }
];

// Export for use in other JavaScript files, if needed.
if (typeof module !== "undefined" && module.exports) {
  module.exports = products;
       }
  
  
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

  const money = amount =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);

  const productUrl = product =>
    `${BASE}diwali.html?product=${encodeURIComponent(product.id)}`;

  const getVariant = (product, variantId) =>
    product.variants.find(v => v.id === variantId) ||
    product.variants[0];

  function card(product) {
    const start = getVariant(product, product.defaultVariant);

    const orderMessage =
      `Hi Arya Art! I would like to order ${product.name} ` +
      `(${start.label}) for ${money(start.price)}. ` +
      `Please confirm availability. ${productUrl(product)}`;

    const lowestPrice = Math.min(
      ...product.variants.map(v => v.price)
    );

    return `
      <article class="diwali-card">

        <button
          class="card-image-button"
          type="button"
          data-details="${product.id}"
          aria-label="View details for ${product.name}"
        >
          <img
            class="card-image"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
          <span class="product-tag">${product.tag}</span>
        </button>

        <div class="card-content">

          <p class="card-category">${product.categoryLabel}</p>

          <h3 class="card-title">${product.name}</h3>

          <p class="card-description">
            ${product.description}
          </p>

          <div class="price-line">
            <span class="price-current">
              ${product.variants.length > 1 ? "From " : ""}
              ${money(lowestPrice)}
            </span>

            ${
              product.variants.length > 1
                ? `<span class="price-note">
                     ${product.variants.length} options
                   </span>`
                : ""
            }
          </div>

          <div class="card-actions">
            <a
              class="order-button"
              href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderMessage)}"
              target="_blank"
              rel="noopener"
            >
              Order on WhatsApp
            </a>

            <button
              class="share-button"
              type="button"
              data-share="${product.id}"
              aria-label="Share ${product.name}"
              title="Share product"
            >↗</button>
          </div>

          <button
            class="details-button"
            type="button"
            data-details="${product.id}"
          >
            View Details ↓
          </button>

        </div>
      </article>
    `;
  }

  function render() {
    const term = search.value.trim().toLowerCase();

    const filtered = products.filter(product =>
      (activeCategory === "all" ||
        product.category === activeCategory) &&
      (
        `${product.name} ${product.categoryLabel} ` +
        `${product.description} ${product.tag}`
      ).toLowerCase().includes(term)
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
      <label class="variant-option ${
        variant.id === selected.id ? "selected" : ""
      }">

        <input
          type="radio"
          name="diwaliVariant"
          value="${variant.id}"
          ${variant.id === selected.id ? "checked" : ""}
        >

        <span>
          <b>${variant.label}</b><br>
          <small>${variant.description}</small>
        </span>

        <strong>${money(variant.price)}</strong>

      </label>
    `).join("");

    const message =
      `Hi Arya Art! I would like to order ${product.name} — ` +
      `${selected.label} (${money(selected.price)}).` +
      (product.customName
        ? " I would like to discuss my custom name/message."
        : "") +
      (product.bulk
        ? " Please share bulk/corporate order details if available."
        : "") +
      ` Please confirm availability. ${productUrl(product)}`;

    modalContent.innerHTML = `
      <div class="modal-layout">

        <div>
          <img
            class="modal-photo"
            src="${product.image}"
            alt="${product.name}"
          >
        </div>

        <div class="modal-copy">

          <p class="eyebrow">
            ARYA ART · ${product.categoryLabel.toUpperCase()}
          </p>

          <h2 id="modalTitle">${product.name}</h2>

          <p class="modal-description">
            ${product.description}
          </p>

          ${
            product.customName
              ? `<p class="modal-description">
                   <b>Personalisation:</b>
                   Share your preferred name or message on WhatsApp.
                 </p>`
              : ""
          }

          ${
            product.bulk
              ? `<p class="modal-description">
                   <b>Bulk orders:</b>
                   Contact us to discuss quantities and pricing.
                 </p>`
              : ""
          }

          <p class="variant-label">
            ${
              product.variants.length > 1
                ? "CHOOSE YOUR OPTION"
                : "PRODUCT PRICE"
            }
          </p>

          <div id="variantOptions">
            ${variantOptions}
          </div>

          <div class="modal-price-panel">

            <div class="modal-price-label">
              YOUR SELECTED PRICE
            </div>

            <div class="modal-price" id="selectedPrice">
              ${money(selected.price)}
            </div>

            <div
              class="modal-price-note"
              id="selectedDescription"
            >
              ${selected.description}
            </div>

          </div>

          <a
            class="dark-button modal-order"
            id="modalOrder"
            href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}"
            target="_blank"
            rel="noopener"
          >
            Order on WhatsApp ↗
          </a>

          <button
            class="modal-share"
            id="modalShare"
            type="button"
          >
            ↗ Share this product
          </button>

          <p class="modal-footnote">
            Please confirm product availability, final price
            and delivery details before ordering.
          </p>

        </div>
      </div>
    `;

    modalContent
      .querySelectorAll('input[name="diwaliVariant"]')
      .forEach(input => {
        input.addEventListener("change", () => {
          activeVariantId = input.value;
          renderModal();
        });
      });

    document
      .getElementById("modalShare")
      .addEventListener("click", () => shareProduct(product));
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";

    if (previousFocus &&
        typeof previousFocus.focus === "function") {
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
        await navigator.clipboard.writeText(
          `${data.text}\n${url}`
        );
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

  // Category filters
  chips.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;

    chips.querySelectorAll(".chip").forEach(chip => {
      chip.classList.toggle("active", chip === button);
    });

    render();
  });

  // Search products
  search.addEventListener("input", render);

  clearSearch.addEventListener("click", () => {
    search.value = "";
    render();
    search.focus();
  });

  // Product details and sharing
  grid.addEventListener("click", event => {
    const detailButton = event.target.closest("[data-details]");
    const shareButton = event.target.closest("[data-share]");

    if (detailButton) {
      const product = products.find(
        p => p.id === detailButton.dataset.details
      );

      if (product) openProduct(product);

    } else if (shareButton) {
      const product = products.find(
        p => p.id === shareButton.dataset.share
      );

      if (product) shareProduct(product);
    }
  });

  // Close popup
  closeModalButton.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  // General WhatsApp enquiry buttons
  const generalMessage = encodeURIComponent(
    "Hi Arya Art! I'd like to enquire about Diwali gifts and bulk/corporate gifting."
  );

  const waUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMessage}`;

  document.getElementById("customWhatsApp").href = waUrl;
  document.getElementById("floatingWhatsApp").href = waUrl;

  // Open a product popup directly from its URL
  const requestedProductId =
    new URLSearchParams(location.search).get("product");

  render();

  if (requestedProductId) {
    const product = products.find(
      p => p.id === requestedProductId
    );

    if (product) openProduct(product);
  }

})();

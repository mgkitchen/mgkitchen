/**
 * MG's Kitchen — The Flavour Specialist | Langley, BC
 * Main Application & Interactive Functionality (app.js - v2)
 */

// Application State
const appState = {
  cart: {}, // { dishId: quantity }
  isParkingServed: false,
  socialUrls: {
    instagram: 'https://www.instagram.com/mgkitchentheflavourspecialist/',
    facebook: 'https://www.facebook.com/profile.php?id=61593743134117',
    youtube: 'https://www.youtube.com/@ManasaKitchenG'
  },
  deliveryUrls: {
    doordash: 'https://www.doordash.com/en-CA/store/mgs-kitchen-the-flavour-specialist-langley-52160213',
    ubereats: 'https://www.ubereats.com/ca/store/mgs-kitchen/HFiaQzQsVcqayH8lZ3Nr7A',
    skipthedishes: 'https://www.skipthedishes.com/mgs-kitchen-the-flavour-specialist'
  }
};

// Menu Item Dataset
const menuItems = [
  {
    id: "ghee-podi-idli",
    name: "Ghee Podi Idli",
    tag: "South Indian Classic",
    spice: "Medium",
    price: 12.99,
    description: "Steamed fermented rice & lentil cakes tossed in aromatic spiced podi and melted ghee.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false
  },
  {
    id: "masala-dosa",
    name: "Classic Masala Dosa",
    tag: "Dosa Specialty",
    spice: "Mild",
    price: 14.50,
    description: "Crispy golden fermented crepe stuffed with savory spiced potato masala, served with coconut chutney & sambar.",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false
  },
  {
    id: "masala-vada",
    name: "Crunchy Masala Vada (3 pcs)",
    tag: "Fritters",
    spice: "Medium",
    price: 9.99,
    description: "Traditional chana dal fritters seasoned with fresh curry leaves, onions, and coarse herbs.",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false
  },
  {
    id: "cashew-pulao",
    name: "Royal Cashew Pulao",
    tag: "Chef Special",
    spice: "Mild",
    price: 15.99,
    description: "Fragrant basmati rice slow-cooked with ghee, roasted cashews, whole spices, and caramelized herbs.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: true
  },
  {
    id: "degree-filter-coffee",
    name: "South Indian Degree Filter Coffee",
    tag: "Beverage",
    spice: "None",
    price: 4.50,
    description: "Traditional dark roast coffee brewed with chicory and frothed hot milk.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false
  }
];

// 1. Navigation & External Link Handlers
function openSocialLink(platform) {
  const url = appState.socialUrls[platform.toLowerCase()];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

function openDeliveryLink(platform) {
  const url = appState.deliveryUrls[platform.toLowerCase()];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

// 2. Menu Filtering & Rendering
function renderMenu(filterCategory = 'all') {
  const grid = document.getElementById('menu-grid-container');
  if (!grid) return;

  const filtered = menuItems.filter(dish => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'vegan') return dish.isVegan;
    if (filterCategory === 'gf') return dish.isGlutenFree;
    if (filterCategory === 'nuts') return dish.containsNuts;
    return true;
  });

  grid.innerHTML = filtered.map(dish => {
    const qty = appState.cart[dish.id] || 0;
    const priceHtml = `<span class="dish-price">$${dish.price.toFixed(2)}</span>`;

    const veganBadge = dish.isVegan ? `<span class="badge-vegan">🌱 Vegan</span>` : ``;
    const gfBadge = dish.isGlutenFree ? `<span class="badge-gf">🌾 GF</span>` : ``;
    const nutBadge = dish.containsNuts 
      ? `<span class="badge-nuts">🥜 Contains Nuts</span>`
      : `<span class="badge-nutfree">🥜 Nut-Free</span>`;

    return `
      <article class="dish-card">
        <div class="dish-photo-frame">
          <div class="dish-photo-badges">
            <span class="badge-brass">${dish.tag}</span>
            <span class="badge-emerald">Spice: ${dish.spice}</span>
            ${veganBadge}
            ${gfBadge}
            ${nutBadge}
          </div>
        </div>
        <div class="dish-body">
          <div class="dish-header-row">
            <h3 class="dish-name">${dish.name}</h3>
            ${priceHtml}
          </div>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-controls">
            <div class="qty-stepper" aria-label="Quantity for ${dish.name}">
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', -1)">−</button>
              <span class="qty-value" id="qty-badge-${dish.id}">${qty}</span>
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', 1)">+</button>
            </div>
            <button type="button" class="btn btn-primary btn-sm" onclick="addDishToCart('${dish.id}')">
              ${qty > 0 ? `Added (${qty})` : `Add to Cart`}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function filterMenu(category) {
  document.querySelectorAll('.filter-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (window.event && window.event.target) window.event.target.classList.add('active');
  renderMenu(category);
}

// 3. Cart & Stepper Logic
function changeDishQty(dishId, delta) {
  const current = appState.cart[dishId] || 0;
  const next = Math.max(0, current + delta);
  if (next === 0) {
    delete appState.cart[dishId];
  } else {
    appState.cart[dishId] = next;
  }
  updateCartUI();
}

function addDishToCart(dishId) {
  if (!appState.cart[dishId]) {
    appState.cart[dishId] = 1;
  }
  updateCartUI();
  toggleCartDrawer(true);
}

function updateCartUI() {
  const totalCount = Object.values(appState.cart).reduce((sum, q) => sum + q, 0);
  
  // Update header cart badge counter
  const badge = document.getElementById('cart-counter-badge');
  if (badge) badge.innerText = totalCount;

  // Re-render menu cards stepper values
  menuItems.forEach(dish => {
    const qtyElem = document.getElementById(`qty-badge-${dish.id}`);
    if (qtyElem) qtyElem.innerText = appState.cart[dish.id] || 0;
  });

  // Render Side Cart Drawer list
  const cartList = document.getElementById('cart-items-list');
  const subtotalElem = document.getElementById('cart-subtotal-val');
  const taxElem = document.getElementById('cart-tax-val');
  const totalElem = document.getElementById('cart-total-val');

  let subtotal = 0;
  let itemsHtml = '';

  for (const [id, qty] of Object.entries(appState.cart)) {
    const dish = menuItems.find(d => d.id === id);
    if (dish) {
      const lineTotal = dish.price * qty;
      subtotal += lineTotal;
      itemsHtml += `
        <div class="cart-item-row">
          <div class="cart-item-details">
            <strong>${dish.name}</strong>
            <span>$${dish.price.toFixed(2)} x ${qty}</span>
          </div>
          <div class="cart-item-actions">
            <span>$${lineTotal.toFixed(2)}</span>
            <button onclick="changeDishQty('${dish.id}', -1)" class="btn-remove">✕</button>
          </div>
        </div>
      `;
    }
  }

  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  if (cartList) cartList.innerHTML = itemsHtml || '<p class="empty-cart-msg">Your cart is empty.</p>';
  if (subtotalElem) subtotalElem.innerText = `$${subtotal.toFixed(2)}`;
  if (taxElem) taxElem.innerText = `$${gst.toFixed(2)}`;
  if (totalElem) totalElem.innerText = `$${grandTotal.toFixed(2)}`;
}

function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById('side-cart-drawer');
  if (drawer) {
    if (forceOpen) {
      drawer.classList.add('is-open');
    } else {
      drawer.classList.toggle('is-open');
    }
  }
}

// 4. Interac e-Transfer Email Order Submission
function submitETransferOrder() {
  const cartEntries = Object.entries(appState.cart);
  if (cartEntries.length === 0) {
    alert("Your cart is empty! Please add menu items before proceeding.");
    return;
  }

  let subtotal = 0;
  let itemListText = '';

  cartEntries.forEach(([id, qty]) => {
    const dish = menuItems.find(d => d.id === id);
    if (dish) {
      const itemCost = dish.price * qty;
      subtotal += itemCost;
      itemListText += `- ${qty}x ${dish.name} ($${itemCost.toFixed(2)})\n`;
    }
  });

  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  const parkInfo = appState.isParkingServed ? `
PARKING-SERVED / CAR EXPRESS DETAILS:
- Vehicle Model & Color: ${document.getElementById('car-desc-input')?.value || 'Not specified'}
- Spot / Location: ${document.getElementById('car-spot-input')?.value || 'Not specified'}
` : '';

  const emailSubject = encodeURIComponent("New Order Request — MG's Kitchen");
  const emailBody = encodeURIComponent(
`MG'S KITCHEN DIRECT ORDER SUMMARY
-----------------------------------
${itemListText}
Subtotal: $${subtotal.toFixed(2)}
GST (5% BC Tax): $${tax.toFixed(2)}
GRAND TOTAL: $${grandTotal.toFixed(2)}
-----------------------------------
${parkInfo}
PAYMENT INSTRUCTION:
Please send Interac e-Transfer of $${grandTotal.toFixed(2)} to: manasagkitchen@gmail.com
Memo: [Your Name & Phone Number]

CUSTOMER INFORMATION:
Name: [Enter Your Name]
Phone Number: [Enter Your Phone]
Preferred Pickup Time: [Specify Pickup Time]
`
  );

  navigator.clipboard.writeText("manasagkitchen@gmail.com");
  alert("Payment email 'manasagkitchen@gmail.com' copied to clipboard!\nOpening your email application to send your order.");

  window.location.href = `mailto:manasagkitchen@gmail.com?subject=${emailSubject}&body=${emailBody}`;
}

// 5. Park & Dine (Parking-Served) Express Mode
function enableParkingServedMode() {
  appState.isParkingServed = true;
  const container = document.getElementById('parking-served-fields');
  if (container) container.style.display = 'block';
  alert("Park & Dine Mode Enabled! Please select your items from the menu and enter vehicle details in the cart.");
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
}

// 6. Promotion Gallery Modal
function togglePromotionGallery(show = true) {
  const modal = document.getElementById('promotion-gallery-modal');
  if (modal) {
    modal.style.display = show ? 'flex' : 'none';
  }
}

// 7. Kitchen Live Status Banner Clock
function updateKitchenStatus() {
  const now = new Date();
  const day = now.getDay();
  const hourDecimal = now.getHours() + (now.getMinutes() / 60);

  const isOpenDay = (day === 0 || day === 4 || day === 5 || day === 6);
  const isOpenTime = (hourDecimal >= 9.5 && hourDecimal <= 14.5);

  const statusText = document.getElementById('live-status-text');
  const statusDot = document.getElementById('live-status-dot');

  if (statusText && statusDot) {
    if (isOpenDay && isOpenTime) {
      statusDot.className = "dot open";
      statusText.innerHTML = "<strong>OPEN NOW:</strong> Accepting Takeout & Delivery Orders!";
    } else {
      statusDot.className = "dot closed";
      statusText.innerHTML = "<strong>KITCHEN CLOSED FOR TAKEOUT:</strong> Accepting 24/7 Catering Requests";
    }
  }
}

// Initialize Application on Load
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateCartUI();
  updateKitchenStatus();
});

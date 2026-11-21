/**
 * MG's Kitchen — The Flavour Specialist
 * Main Application Logic (app.js)
 * Includes: Menu State, Cart Management, Dietary Filters, Park & Dine (Car Express),
 * e-Transfer Email Checkout, Catering Email Generator, Social/Delivery Link Handlers,
 * Live Kitchen Status Banner, and Promotion Gallery Popup.
 */

// ==========================================
// 1. DATA MODELS & STATE MANAGEMENT
// ==========================================

const appState = {
  cart: {}, // Format: { "dish-id": quantity }
  currentFilter: 'all',
  
  // External URLs
  socialUrls: {
    instagram: 'https://www.instagram.com/mgkitchentheflavourspecialist/',
    facebook: 'https://www.facebook.com/profile.php?id=61593743134117',
    youtube: 'https://www.youtube.com/@ManasaKitchenG'
  },
  
  deliveryUrls: {
    doordash: 'https://www.doordash.com/en-CA/store/mgs-kitchen-the-flavour-specialist-langley-52160213',
    doordashMerchant: 'https://merchant-portal.doordash.com/merchant/storefront?intl=en-CA&store_id=52160213',
    ubereats: 'https://www.ubereats.com/ca/store/mgs-kitchen/HFiaQzQsVcqayH8lZ3Nr7A',
    skipthedishes: 'https://www.skipthedishes.com/mgs-kitchen-the-flavour-specialist'
  },

  // Promotion Gallery Image URLs (Replaceable)
  promotionImages: [
    { url: './promotions/weekend-special.jpg', caption: 'Weekend Special: Ghee Podi Idli Combo' },
    { url: './promotions/catering-discount.jpg', caption: '10% Off Advance Catering Orders over $300' },
    { url: './promotions/filter-coffee.jpg', caption: 'Complimentary Filter Kaapi with Dosa Platter' }
  ]
};

// Menu Items Dataset (South Indian Specialties & Catering Options)
const menuItems = [
  {
    id: "ghee-podi-idli",
    name: "Ghee Podi Idli",
    tag: "South Indian Classic",
    spice: "Medium",
    price: 12.99,
    description: "Steamed fermented rice & lentil cakes tossed in aromatic homemade podi spice mix and warm ghee.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false,
    image: "./images/ghee-podi-idli.jpg"
  },
  {
    id: "masala-dosa",
    name: "Traditional Masala Dosa",
    tag: "Signature Crepe",
    spice: "Mild",
    price: 14.50,
    description: "Crispy fermented crepe stuffed with spiced potato masala, served with sambar and coconut chutney.",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    image: "./images/masala-dosa.jpg"
  },
  {
    id: "masala-vada",
    name: "Crispy Masala Vada (4 pcs)",
    tag: "Fritters",
    spice: "Medium",
    price: 9.99,
    description: "Crunchy chana dal fritters infused with fresh curry leaves, onions, and coarse spices.",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    image: "./images/masala-vada.jpg"
  },
  {
    id: "cashew-pulao",
    name: "Special Cashew Pulao",
    tag: "Specialty Rice",
    spice: "Mild",
    price: 15.99,
    description: "Fragrant basmati rice cooked with golden roasted cashews, whole spices, and herbs.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: true,
    image: "./images/cashew-pulao.jpg"
  },
  {
    id: "mysore-masala-dosa",
    name: "Mysore Masala Dosa",
    tag: "Signature Crepe",
    spice: "Spicy",
    price: 15.50,
    description: "Crispy dosa smeared with spicy red garlic chutney and stuffed with seasoned potato filling.",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    image: "./images/mysore-dosa.jpg"
  },
  {
    id: "filter-kaapi",
    name: "Degree Filter Coffee",
    tag: "Beverage",
    spice: "None",
    price: 4.50,
    description: "Traditional South Indian chicory-brewed filter coffee frothed with hot milk.",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false,
    image: "./images/filter-coffee.jpg"
  }
];

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  alert('Tara');
  updateKitchenStatus();
  updateCartUI();
  setupEventListeners();
});

// Initialize Lucide icons
    lucide.createIcons();

    // Copy Link functionality
    document.getElementById('copyLinkBtn').addEventListener('click', function () {
      const urlToCopy = 'https://www.mgkitchen.ca/';
      navigator.clipboard.writeText(urlToCopy).then(() => {
        alert('Link copied to clipboard!');
      });
    });

// ==========================================
// 3. MENU RENDERING & DIETARY FILTERS
// ==========================================

function renderMenu() {
  const menuGrid = document.getElementById('menu-grid');
  if (!menuGrid) return;

  const filtered = menuItems.filter(item => {
    if (appState.currentFilter === 'all') return true;
    if (appState.currentFilter === 'vegan') return item.isVegan;
    if (appState.currentFilter === 'gf') return item.isGlutenFree;
    if (appState.currentFilter === 'nuts') return item.containsNuts;
    if (appState.currentFilter === 'nutfree') return !item.containsNuts;
    return true;
  });

  menuGrid.innerHTML = filtered.map(dish => {
    const qty = appState.cart[dish.id] || 0;
    
    // Badges
    const veganBadge = dish.isVegan ? `<span class="badge-vegan" title="100% Vegan">🌱 Vegan</span>` : '';
    const gfBadge = dish.isGlutenFree ? `<span class="badge-gf" title="Gluten-Free">🌾 GF</span>` : '';
    const nutBadge = dish.containsNuts 
      ? `<span class="badge-nuts" title="Contains Cashews / Nuts">🥜 Contains Nuts</span>`
      : `<span class="badge-nutfree" title="Nut-Free Recipe">🥜 Nut-Free</span>`;

    return `
      <article class="dish-card" data-dish-id="${dish.id}">
        <div class="dish-photo-frame">
          <img src="${dish.image}" alt="${dish.name}" class="dish-img" onerror="this.src='./logo.jpg';">
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
            <span class="dish-price">$${dish.price.toFixed(2)} CAD</span>
          </div>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-controls">
            <div class="qty-stepper" aria-label="Quantity for ${dish.name}">
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', -1)" aria-label="Decrease quantity">−</button>
              <span class="qty-value" id="qty-val-${dish.id}">${qty}</span>
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', 1)" aria-label="Increase quantity">+</button>
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

function filterMenu(category, event) {
  appState.currentFilter = category;
  
  // Highlight active button
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) {
    event.target.classList.add('active');
  }

  renderMenu();
}

// ==========================================
// 4. CART & STEPPER LOGIC
// ==========================================

function changeDishQty(dishId, delta) {
  const currentQty = appState.cart[dishId] || 0;
  const newQty = Math.max(0, currentQty + delta);
  
  if (newQty === 0) {
    delete appState.cart[dishId];
  } else {
    appState.cart[dishId] = newQty;
  }
  
  updateCartUI();
  renderMenu();
}

function addDishToCart(dishId) {
  const currentQty = appState.cart[dishId] || 0;
  appState.cart[dishId] = currentQty + 1;
  
  updateCartUI();
  renderMenu();
  openCartDrawer();
}

function updateCartUI() {
  const cartCounter = document.getElementById('cart-counter-badge');
  const cartItemsContainer = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const taxEl = document.getElementById('cart-tax');
  const grandTotalEl = document.getElementById('cart-total');

  let totalItems = 0;
  let subtotal = 0;
  let itemsHtml = '';

  for (const [dishId, qty] of Object.entries(appState.cart)) {
    const dish = menuItems.find(item => item.id === dishId);
    if (dish && qty > 0) {
      totalItems += qty;
      const itemCost = dish.price * qty;
      subtotal += itemCost;

      itemsHtml += `
        <div class="cart-item-row">
          <div class="cart-item-info">
            <strong>${dish.name}</strong>
            <div class="cart-item-price">$${dish.price.toFixed(2)} x ${qty} = $${itemCost.toFixed(2)}</div>
          </div>
          <div class="qty-stepper sm">
            <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', -1)">−</button>
            <span class="qty-value">${qty}</span>
            <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', 1)">+</button>
          </div>
        </div>
      `;
    }
  }

  // Update DOM elements
  if (cartCounter) cartCounter.innerText = totalItems;
  if (cartItemsContainer) {
    cartItemsContainer.innerHTML = itemsHtml || `<p class="empty-cart-msg">Your shopping cart is currently empty.</p>`;
  }

  const tax = subtotal * 0.05; // 5% GST
  const grandTotal = subtotal + tax;

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)} CAD`;
  if (taxEl) taxEl.innerText = `$${tax.toFixed(2)} CAD`;
  if (grandTotalEl) grandTotalEl.innerText = `$${grandTotal.toFixed(2)} CAD`;
}

// ==========================================
// 5. SIDE CART DRAWER CONTROLLER
// ==========================================

function toggleCartDrawer() {
  const drawer = document.getElementById('side-cart-drawer');
  if (drawer) drawer.classList.toggle('is-open');
}

function openCartDrawer() {
  const drawer = document.getElementById('side-cart-drawer');
  if (drawer) drawer.classList.add('is-open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('side-cart-drawer');
  if (drawer) drawer.classList.remove('is-open');
}

// ==========================================
// 6. E-TRANSFER ORDER & EMAIL SUBMISSION
// ==========================================

function submitETransferOrder() {
  const keys = Object.keys(appState.cart);
  if (keys.length === 0) {
    alert("Your cart is empty! Please add menu items before proceeding.");
    return;
  }

  let subtotal = 0;
  let itemListText = '';

  keys.forEach(id => {
    const dish = menuItems.find(m => m.id === id);
    const qty = appState.cart[id];
    if (dish && qty > 0) {
      const lineCost = dish.price * qty;
      subtotal += lineCost;
      itemListText += `- ${qty}x ${dish.name} ($${lineCost.toFixed(2)})\n`;
    }
  });

  const tax = subtotal * 0.05;
  const grandTotal = subtotal + tax;

  // Check Park & Dine Details
  const isParkAndDine = document.getElementById('park-dine-checkbox')?.checked;
  const carDesc = document.getElementById('car-desc-input')?.value || 'N/A';
  const parkSpot = document.getElementById('park-spot-input')?.value || 'N/A';

  let serviceTypeHeader = "STANDARD TAKEOUT / PICKUP";
  if (isParkAndDine) {
    serviceTypeHeader = `PARK & DINE (PARKING-SERVED)\nVehicle Details: ${carDesc}\nParking Location/Spot: ${parkSpot}`;
  }

  const emailSubject = encodeURIComponent("New Order Request — MG's Kitchen");
  const emailBody = encodeURIComponent(
`MG'S KITCHEN — ORDER DETAILS
-----------------------------------
SERVICE TYPE:
${serviceTypeHeader}

ITEMS ORDERED:
${itemListText}
-----------------------------------
Subtotal: $${subtotal.toFixed(2)} CAD
GST (5% BC Tax): $${tax.toFixed(2)} CAD
NET TOTAL AMOUNT: $${grandTotal.toFixed(2)} CAD
-----------------------------------

IMPORTANT PAYMENT INSTRUCTIONS:
Please complete Interac e-Transfer of $${grandTotal.toFixed(2)} CAD to: manasagkitchen@gmail.com
(Include your Name and Phone Number in the e-Transfer Memo)

CUSTOMER CONTACT INFO:
Name: [Enter Full Name]
Phone: [Enter Phone Number]
Requested Time: [Immediate / Preferred Time]
`
  );

  // Copy e-Transfer email to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText("manasagkitchen@gmail.com");
  }

  alert(
    `Interac e-Transfer Email (manasagkitchen@gmail.com) copied to clipboard!\n\n` +
    `Total Amount: $${grandTotal.toFixed(2)} CAD\n` +
    `Your email application will now open to send your order details.`
  );

  window.location.href = `mailto:manasagkitchen@gmail.com?subject=${emailSubject}&body=${emailBody}`;
}

// ==========================================
// 7. PARK & DINE (CAR EXPRESS) CONTROLLER
// ==========================================

function toggleParkAndDineMode() {
  const fields = document.getElementById('park-dine-fields');
  const checkbox = document.getElementById('park-dine-checkbox');
  
  if (fields) {
    fields.style.display = checkbox && checkbox.checked ? 'block' : 'none';
  }
}

function enableParkingServedMode() {
  const checkbox = document.getElementById('park-dine-checkbox');
  if (checkbox) checkbox.checked = true;
  toggleParkAndDineMode();
  openCartDrawer();
  
  // Smooth scroll to menu
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 8. CATERING AGREEMENT EMAIL GENERATOR
// ==========================================

function submitCateringEmail(event) {
  if (event) event.preventDefault();

  const name = document.getElementById('cat-client-name')?.value || '[Client Name]';
  const email = document.getElementById('cat-client-email')?.value || '[Client Email]';
  const phone = document.getElementById('cat-client-phone')?.value || '[Client Phone]';
  const date = document.getElementById('cat-event-date')?.value || '[Event Date]';
  const address = document.getElementById('cat-delivery-addr')?.value || '[Delivery Address]';
  const guests = document.getElementById('cat-headcount')?.value || '25';
  const spice = document.getElementById('cat-spice-pref')?.value || 'Medium';

  const estTotal = (parseFloat(guests) * 15.00).toFixed(2);
  const deposit = (estTotal * 0.50).toFixed(2);

  const subject = encodeURIComponent(`Catering Inquiry & Agreement Details — ${name} — ${date}`);
  const body = encodeURIComponent(
`CATERING INQUIRY & AGREEMENT DETAILS
========================================

1. EVENT & HOST DETAILS
----------------------------------------
- Client / Host Name: ${name}
- Contact Email: ${email}
- Contact Phone: ${phone}
- Event Date: ${date}
- Delivery Address: ${address}
- Estimated Headcount: ${guests} guests (Final guarantee due 5-10 business days prior)
- Specified Spice Profile: ${spice}

2. ESTIMATED COST & DEPOSIT SCHEDULING
----------------------------------------
- Estimated Total Cost: $${estTotal} CAD
- Initial Deposit (50% Non-Refundable): $${deposit} CAD (Due upon contract execution)
- Second Installment (25%): Due 7 business days prior to event date
- Final Balance (25%): Due day of event prior to order dispatch

3. OPERATIONAL ACKNOWLEDGMENTS
----------------------------------------
- Email-Only Modifications: All order adjustments must be submitted strictly via email at least 3 business days prior.
- Prepaid Courier Dispatch: 100% of balance and Uber courier fees must be settled in full prior to kitchen dispatch.
- Food Safety Window: Physical liability for food temperature transfers to client 2 hours post-delivery.
`
  );

  window.location.href = `mailto:manasagkitchen@gmail.com?subject=${subject}&body=${body}`;
}

// ==========================================
// 9. PROMOTION GALLERY POPUP CONTROLLER
// ==========================================

function togglePromotionGallery() {
  const modal = document.getElementById('promo-gallery-modal');
  if (modal) {
    modal.classList.toggle('is-open');
    renderPromoGalleryImages();
  }
}

function renderPromoGalleryImages() {
  const galleryContainer = document.getElementById('promo-gallery-list');
  if (!galleryContainer) return;

  galleryContainer.innerHTML = appState.promotionImages.map(img => `
    <div class="promo-img-card">
      <img src="${img.url}" alt="${img.caption}" class="promo-img" onerror="this.src='./logo.jpg';">
      <p class="promo-caption">${img.caption}</p>
    </div>
  `).join('');
}

// ==========================================
// 10. SOCIAL & DELIVERY EXTERNAL LINK HANDLERS
// ==========================================

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

// ==========================================
// 11. LIVE KITCHEN OPERATING HOURS BANNER
// ==========================================

function updateKitchenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 4 = Thu, 5 = Fri, 6 = Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInDecimal = hours + (minutes / 60);

  const isOpenDay = (day === 0 || day === 4 || day === 5 || day === 6); // Thu-Sun
  const isOpenTime = (timeInDecimal >= 9.5 && timeInDecimal <= 14.5); // 9:30 AM - 2:30 PM

  const dot = document.getElementById("status-indicator-dot");
  const text = document.getElementById("status-text");

  if (!dot || !text) return;

  if (isOpenDay && isOpenTime) {
    dot.className = "dot open";
    text.innerHTML = "<strong>OPEN NOW:</strong> Accepting Direct Takeout & Park & Dine Orders!";
  } else {
    dot.className = "dot closed";
    text.innerHTML = "<strong>KITCHEN CLOSED FOR TAKEOUT:</strong> Accepting 24/7 Advance Catering Orders";
  }
}

// ==========================================
// 12. EVENT LISTENERS SETUP
// ==========================================

function setupEventListeners() {
  // Close drawer on backdrop click
  document.getElementById('side-cart-backdrop')?.addEventListener('click', closeCartDrawer);
}
 
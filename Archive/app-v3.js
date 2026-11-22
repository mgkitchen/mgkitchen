/**
 * MG's Kitchen — The Flavour Specialist | Langley, BC
 * Main Application Script (app-v3.js)
 */

const appState = {
  cart: {},
  isParkingServed: false,
  socialUrls: [
    {
      id: "instagram",
      name: "Instagram",
      icon: "instagram",
      handle: "@mgs_kitchen_langley",
      description: "Small-batch morning tempering reels, weekend tiffin drops, and seasonal South Indian specials from Langley, BC.",
      plainDomain: "www.instagram.com (Search: MG's Kitchen The Flavour Specialist Langley)",
      url: "https://www.instagram.com/mgkitchentheflavourspecialist/",
      actionLabel: "Instagram"
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: "facebook",
      handle: "MG's Kitchen — The Flavour Specialist",
      description: "Community event announcements, festive tray updates, and Langley kitchen holiday notices.",
      plainDomain: "www.facebook.com (Search: MG's Kitchen Langley BC)",
      url: "https://www.facebook.com/profile.php?id=61593743134117",
      actionLabel: "Facebook"
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "youtube",
      handle: "MG's Kitchen Culinary Craft",
      description: "Behind-the-scenes stories on hand-roasted podi, fermented dosa batter, and traditional Bengaluru-style cooking.",
      plainDomain: "www.youtube.com (Search: MG's Kitchen The Flavour Specialist)",
      url: "https://www.youtube.com/@ManasaKitchenG",
      actionLabel: "YouTube"
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      icon: "message-circle",
      handle: "MG's Kitchen Direct Support",
      description: "Instant catering inquiries, bulk tiffin orders, and direct kitchen support on WhatsApp.",
      plainDomain: "wa.me (Direct Catering & Order Inquiries)",
      url: "https://wa.me/16040000000",
      actionLabel: "WhatsApp"
    }
  ],
  deliveryUrls: {
    doordash: 'https://www.doordash.com/en-CA/store/mgs-kitchen-the-flavour-specialist-langley-52160213',
    ubereats: 'https://www.ubereats.com/ca/store/mgs-kitchen/HFiaQzQsVcqayH8lZ3Nr7A',
    skipthedishes: 'https://www.skipthedishes.com/mgs-kitchen-the-flavour-specialist'
  }
};

const PROMO_SLIDES = [
  {
    id: "promo-1",
    title: "Weekend Special: Davangere Benne Dosa",
    description: "Authentic butter dosa served with fresh 8 oz Vegetable Saagu every Saturday & Sunday.",
    code: "BENNE2026",
    imageUrl: "./images/promo-benne-dosa.jpg"
  },
  {
    id: "promo-2",
    title: "Bengaluru Car Oota Experience",
    description: "Order via Park & Dine and get piping-hot tiffins served directly to your car window!",
    code: "PARKNDINE",
    imageUrl: "./images/promo-car-express.jpg"
  }
];

const MENU_ITEMS = [
  // --- RICE OF THE DAY ---
  {
    id: "tomato-bath",
    name: "Tomato Bath (Friday Special)",
    category: "Rice of the Day",
    tags: ["Friday Special", "Featured"],
    price: 19.13,
    description: "Aromatic South Indian spiced tomato rice prepared fresh every Friday.",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "ghee-rice",
    name: "Ghee Rice (Saturday Special)",
    category: "Rice of the Day",
    tags: ["Saturday Special", "Popular"],
    price: 23.73,
    description: "Rich, fragrant rice cooked with pure ghee and whole spices.",
    spice: "Mild",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: true,
    isActive: true
  },
  {
    id: "veg-pulao",
    name: "Veg Pulao (Sunday Special)",
    category: "Rice of the Day",
    tags: ["Sunday Special", "Featured"],
    price: 23.73,
    description: "Mildly spiced basmati rice cooked with fresh seasonal garden vegetables.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },

  // --- RICE SPECIALITIES ---
  {
    id: "lemon-rice",
    name: "Lemon Rice",
    category: "Rice Specialities",
    tags: ["Popular", "Tangy"],
    price: 18.93,
    description: "Tangy rice tempered with mustard seeds, curry leaves, turmeric, and roasted peanuts.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: true,
    isActive: true
  },
  {
    id: "mango-rice",
    name: "Mango Rice",
    category: "Rice Specialities",
    tags: ["Seasonal", "Specialty"],
    price: 18.93,
    description: "Traditional raw mango rice with fresh grated mango and South Indian tempering.",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: true,
    isActive: true
  },
  {
    id: "curry-leaves-rice",
    name: "Curry Leaves Rice",
    category: "Rice Specialities",
    tags: ["Traditional", "Karuveppilai"],
    price: 18.93,
    description: "Healthful rice tossed in house-roasted curry leaf spice blend (Karuveppilai Sadam).",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },

  // --- BREAKFAST SPECIALS ---
  {
    id: "idli-coconut-chutney",
    name: "Idli & Coconut Chutney (3 pcs)",
    category: "Breakfast Specials",
    tags: ["Featured", "Popular", "Steamed"],
    price: 16.72,
    description: "Soft, fluffy steamed fermented rice & lentil cakes served with freshly ground coconut chutney.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "ghee-podi-idli",
    name: "Ghee Podi Idli & Chutney",
    category: "Breakfast Specials",
    tags: ["Popular", "House Special", "Podi"],
    price: 17.72,
    description: "Steamed idlis tossed in aromatic house podi spice blend and melted ghee.",
    spice: "Medium",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "masala-vada",
    name: "Masala Vada (3 pcs)",
    category: "Breakfast Specials",
    tags: ["Featured", "Popular", "Crisp Fritters"],
    price: 9.99,
    description: "Crunchy chana dal fritters tempered with fresh curry leaves, onions, and aromatic spices.",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "kharabath",
    name: "Kharabath",
    category: "Breakfast Specials",
    tags: ["Bengaluru Classic", "Savory"],
    price: 11.99,
    description: "Bengaluru-style savory semolina dish tempered with vegetables, ghee, and roasted cashews.",
    spice: "Medium",
    isVegan: false,
    isGlutenFree: false,
    containsNuts: true,
    isActive: true
  },
  {
    id: "chow-chow-bath",
    name: "Kharabath + Kesaribath (Chow Chow Bath)",
    category: "Breakfast Specials",
    tags: ["Featured", "Popular", "Sweet & Savory Combo"],
    price: 16.73,
    description: "Classic South Indian combo of savory Kharabath and sweet saffron Kesaribath.",
    spice: "Mild",
    isVegan: false,
    isGlutenFree: false,
    containsNuts: true,
    isActive: true
  },
  {
    id: "benne-dosa-saagu",
    name: "Benne Dosa (2 pcs) + Veg Saagu (8 oz)",
    category: "Breakfast Specials",
    tags: ["Weekend Only", "Featured", "Davangere Style"],
    price: 26.53,
    description: "Davangere-style butter dosas served with 8 oz authentic vegetable saagu (Weekend Only).",
    spice: "Medium",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "extra-idli",
    name: "Extra Idli (1 pc)",
    category: "Add-ons",
    tags: ["Add-on"],
    price: 3.00,
    description: "Single additional steamed idli.",
    spice: "None",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "extra-chutney",
    name: "Extra Chutney (Side)",
    category: "Add-ons",
    tags: ["Add-on"],
    price: 2.00,
    description: "Side portion of freshly ground coconut chutney.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },

  // --- DOSA ---
  {
    id: "masala-dosa",
    name: "Masala Dosa",
    category: "Dosa",
    tags: ["Popular", "Crisp", "Classic"],
    price: 15.95,
    description: "Crispy fermented rice & lentil crepe filled with spiced potato masala.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "set-dosa",
    name: "Set Dosa (2 pieces)",
    category: "Dosa",
    tags: ["Soft & Spongy", "Popular"],
    price: 13.95,
    description: "Soft, spongy set of 2 dosas served with fresh coconut chutney.",
    spice: "Mild",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "onion-dosa",
    name: "Onion Dosa",
    category: "Dosa",
    tags: ["Crisp", "Onion"],
    price: 14.95,
    description: "Crispy dosa topped with finely chopped onions and green chillies.",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },
  {
    id: "adai-dosa",
    name: "Adai Dosa (2 pieces)",
    category: "Dosa",
    tags: ["Multi-Lentil", "High Protein"],
    price: 16.95,
    description: "Protein-rich multi-lentil & rice crepes seasoned with South Indian herbs.",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },

  // --- MEALS ---
  {
    id: "ragi-balls-meal",
    name: "Ragi Balls Meal",
    category: "Meals",
    tags: ["Scheduled Orders Only", "Traditional", "Healthy"],
    price: 32.00,
    description: "2 medium ragi (finger millet) balls, 24 oz sambar, and 12 oz rice (Scheduled orders only).",
    spice: "Medium",
    isVegan: true,
    isGlutenFree: true,
    containsNuts: false,
    isActive: true
  },

  // --- DESSERTS ---
  {
    id: "pink-blossom",
    name: "Pink Blossom",
    category: "Desserts",
    tags: ["Sweet", "Specialty"],
    price: 12.95,
    description: "Signature sweet dessert delicacy.",
    spice: "None",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: true,
    isActive: true
  },
  {
    id: "velvet-sapodilla",
    name: "Velvet Sapodilla",
    category: "Desserts",
    tags: ["Sweet", "Chiku", "Signature"],
    price: 12.95,
    description: "Rich and creamy Sapodilla (Chiku) sweet dessert.",
    spice: "None",
    isVegan: false,
    isGlutenFree: true,
    containsNuts: true,
    isActive: true
  }
];

// External Links
function openSocialLink(url) {
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}

function openDeliveryLink(platform) {
  const url = appState.deliveryUrls[platform.toLowerCase()];
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}

// Rendering Menu & Filtering
function renderMenu(filterCategory = 'all') {
  const grid = document.getElementById('menu-grid-container');
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(dish => {
    // Hide inactive items
    if (dish.isActive === false) return false;

    if (filterCategory === 'all') return true;
    if (filterCategory === 'vegan') return dish.isVegan;
    if (filterCategory === 'gf') return dish.isGlutenFree;
    if (filterCategory === 'nuts') return dish.containsNuts;
    if (filterCategory === dish.category) return true;
    return true;
  });

  grid.innerHTML = filtered.map(dish => {
    const qty = appState.cart[dish.id] || 0;
    const veganBadge = dish.isVegan ? `<span class="badge-vegan">🌱 Vegan</span>` : ``;
    const gfBadge = dish.isGlutenFree ? `<span class="badge-gf">🌾 GF</span>` : ``;
    const nutBadge = dish.containsNuts ? `<span class="badge-nuts">🥜 Contains Nuts</span>` : `<span class="badge-nutfree">🥜 Nut-Free</span>`;
    
    // Tag chips HTML
    const tagsHtml = (dish.tags && dish.tags.length > 0)
      ? dish.tags.map(t => `<span class="badge-tag">${t}</span>`).join(' ')
      : ``;

    return `
      <article class="dish-card">
        <div class="dish-photo-frame">
          <div class="dish-photo-badges">
            <span class="badge-category">${dish.category}</span>
            ${veganBadge} ${gfBadge} ${nutBadge}
          </div>
        </div>
        <div class="dish-body">
          <div class="dish-header-row">
            <h3 class="dish-name">${dish.name}</h3>
            <span class="dish-price">$${dish.price.toFixed(2)}</span>
          </div>
          <div class="dish-tags-row">${tagsHtml}</div>
          <p class="dish-desc">${dish.description}</p>
          <div class="dish-controls">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', -1)">−</button>
              <span class="qty-value" id="qty-badge-${dish.id}">${qty}</span>
              <button type="button" class="qty-btn" onclick="changeDishQty('${dish.id}', 1)">+</button>
            </div>
            <button type="button" class="btn btn-primary btn-sm" onclick="addDishToCart('${dish.id}')">
              ${qty > 0 ? `Added (${qty})` : `Add to Cart`}
            </button>
          </div>
        </div>
      </article>`;
  }).join('');
}

function filterMenu(category) {
  document.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  renderMenu(category);
}

// Render Social Links with Lucide icons
function renderSocialLinks() {
  const container = document.getElementById('social-list-container');
  if (!container) return;

  container.innerHTML = appState.socialUrls.map(item => `
    <div class="social-item-card">
      <div class="social-header">
        <i data-lucide="${item.icon}" class="social-icon"></i>
        <strong>${item.name}</strong>
      </div>
      <p class="social-handle">${item.handle}</p>
      <p class="social-desc">${item.description}</p>
      <button type="button" onclick="openSocialLink('${item.url}')" class="btn-social">
        Connect on ${item.actionLabel}
      </button>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Cart Management
function changeDishQty(dishId, delta) {
  const current = appState.cart[dishId] || 0;
  const next = Math.max(0, current + delta);
  if (next === 0) delete appState.cart[dishId];
  else appState.cart[dishId] = next;
  updateCartUI();
}

function addDishToCart(dishId) {
  if (!appState.cart[dishId]) appState.cart[dishId] = 1;
  updateCartUI();
  toggleCartDrawer(true);
}

function updateCartUI() {
  const totalCount = Object.values(appState.cart).reduce((sum, q) => sum + q, 0);
  const badge = document.getElementById('cart-counter-badge');
  if (badge) badge.innerText = totalCount;

  let subtotal = 0;
  let itemsHtml = '';

  for (const [id, qty] of Object.entries(appState.cart)) {
    const dish = MENU_ITEMS.find(d => d.id === id);
    if (dish) {
      const lineTotal = dish.price * qty;
      subtotal += lineTotal;
      itemsHtml += `<div class="cart-row"><span>${qty}x ${dish.name}</span> <strong>$${lineTotal.toFixed(2)}</strong></div>`;
    }
  }

  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  document.getElementById('cart-items-list').innerHTML = itemsHtml || '<p>Your cart is empty.</p>';
  document.getElementById('cart-subtotal-val').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-tax-val').innerText = `$${gst.toFixed(2)}`;
  document.getElementById('cart-total-val').innerText = `$${grandTotal.toFixed(2)}`;
}

function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById('side-cart-drawer');
  if (drawer) {
    if (forceOpen) drawer.classList.add('is-open');
    else drawer.classList.toggle('is-open');
  }
}

// e-Transfer Mailto Submission
function submitETransferOrder() {
  const cartEntries = Object.entries(appState.cart);
  if (cartEntries.length === 0) return alert("Your cart is empty!");

  let subtotal = 0;
  let itemListText = '';
  cartEntries.forEach(([id, qty]) => {
    const dish = MENU_ITEMS.find(d => d.id === id);
    if (dish) {
      const cost = dish.price * qty;
      subtotal += cost;
      itemListText += `- ${qty}x ${dish.name} ($${cost.toFixed(2)})\n`;
    }
  });

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const parkInfo = appState.isParkingServed ? `\nPARK & DINE: Vehicle Details: ${document.getElementById('car-desc-input')?.value || 'N/A'} (Location: ${document.getElementById('car-spot-input')?.value || 'N/A'})\n` : '';

  const subject = encodeURIComponent("New Order Request — MG's Kitchen");
  const body = encodeURIComponent(
`ORDER SUMMARY:\n${itemListText}\nSubtotal: $${subtotal.toFixed(2)}\nGST (5%): $${tax.toFixed(2)}\nGRAND TOTAL: $${total.toFixed(2)}\n${parkInfo}\nPlease e-Transfer $${total.toFixed(2)} to: mgskitchen@gmail.com`
  );

  navigator.clipboard.writeText("mgskitchen@gmail.com");
  alert("e-Transfer email (mgskitchen@gmail.com) copied to clipboard! Opening your mail client...");
  window.location.href = `mailto:mgskitchen@gmail.com?subject=${subject}&body=${body}`;
}

function enableParkingServedMode() {
  appState.isParkingServed = true;
  document.getElementById('parking-served-fields').style.display = 'block';
  alert("Park & Dine Mode Enabled! Select items from the menu and add your vehicle details.");
}

// Live Kitchen Status Check
function updateKitchenStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 4 = Thu, 5 = Fri, 6 = Sat
  const hours = now.getHours() + (now.getMinutes() / 60);

  const isOpenDay = (day === 0 || day === 4 || day === 5 || day === 6);
  const isOpenTime = (hours >= 9.5 && hours <= 14.5);

  const dot = document.getElementById('live-status-dot');
  const text = document.getElementById('live-status-text');

  if (dot && text) {
    if (isOpenDay && isOpenTime) {
      dot.className = "dot open";
      text.innerHTML = "<strong>OPEN NOW:</strong> Accepting Takeout & Delivery Orders!";
    } else {
      dot.className = "dot closed";
      text.innerHTML = "<strong>KITCHEN CLOSED FOR TAKEOUT:</strong> Accepting 24/7 Advance Catering Orders";
    }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderLiveKitchenStatus();
  renderSocialLinks();
  updateCartUI();
  updateKitchenStatus();
});
     
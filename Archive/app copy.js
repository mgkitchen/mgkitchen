    const GST_RATE = 0.05;
    const BUSINESS_EMAIL = `manasagkitchen@gmail.com`;
    const INQUIRY_EMAIL = `manasagkitchen@gmail.comm`;
    const KITCHEN_ADDRESS = `20381 62 Ave #301, Langley, BC V3A 5E6, Canada`;
    const KITCHEN_PHONE = `+1 (672) 975-1664`;

const MENU_ITEMS = [
      {
        id: `lemon-rice`,
        name: `Lemon Rice`,
        category: `Rice of the Day`,
        secondaryCategory: `Rice Specialities`,
        price: 12.95,
        spice: `Mild`,
        tags: [`Rice of the Day`, `Featured`],
        dietary: [`vegan`, `gluten-free`, `contains-nuts`],
        allergenNote: `Contains roasted peanuts`,
        description: `Light and bright aromatic basmati rice tempered with fresh lemon juice, mustard seeds, curry leaves, turmeric, and crunchy roasted peanuts.`
      },
      {
        id: `mango-rice`,
        name: `Mango Rice`,
        category: `Rice of the Day`,
        secondaryCategory: `Rice Specialities`,
        price: 12.95,
        spice: `Mild–Medium`,
        tags: [`Friday Special`, `Rice of the Day`, `Seasonal`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Zesty seasonal rice tossed with freshly grated tangy raw mango, split lentils, green chilies, and aromatic oil tempering.`
      },
      {
        id: `curry-leaves-rice`,
        name: `Curry Leaves Rice`,
        category: `Rice of the Day`,
        secondaryCategory: `Rice Specialities`,
        price: 12.95,
        spice: `Medium`,
        tags: [`Popular`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Fluffy white rice sautéed in a deeply flavorful, earthy paste of slow-roasted curry leaves, aromatic garlic, black pepper, and toasted lentils.`
      },
      {
        id: `tomato-bath`,
        name: `Tomato Bath`,
        category: `Rice Specialities`,
        price: 11.95,
        spice: `Medium`,
        tags: [`Featured`, `Most Ordered`],
        dietary: [`contains-nuts`],
        allergenNote: `Contains roasted cashews & semolina (gluten)`,
        description: `Fragrant South Indian spiced rice and semolina simmered with vine-ripened tomatoes, roasted cashews, green peas, mustard seeds, and curry leaves.`
      },
      {
        id: `veg-pulao`,
        name: `Vegetable Pulao`,
        category: `Rice Specialities`,
        price: 14.95,
        spice: `Mild–Medium`,
        tags: [`Rice of the Day`, `Popular`],
        dietary: [`gluten-free`],
        allergenNote: `Served with cooling yogurt raita (dairy)`,
        description: `Fragrant short-grain rice slow-cooked with a vibrant paste of fresh mint, cilantro, and seasonal garden vegetables. Served with cooling yogurt raita.`
      },
      {
        id: `ghee-rice-kurma`,
        name: `Ghee Rice + Veg Kurma`,
        category: `Rice Specialities`,
        price: 18.95,
        spice: `Mild`,
        tags: [`Signature`, `Darshini Style`],
        dietary: [`gluten-free`, `contains-nuts`],
        allergenNote: `Contains pure ghee & cashews`,
        description: `Fragrant rice delicately tossed in pure golden ghee, seasoned with mild whole spices, curry leaves, and crunchy cashews, paired with vegetable kurma.`
      },
      {
        id: `mushroom-biryani`,
        name: `Mushroom Biryani`,
        category: `Rice Specialities`,
        price: null,
        spice: `Medium`,
        tags: [`Daily Batch`, `Dum Cooked`],
        dietary: [`gluten-free`],
        allergenNote: `Quote confirmed on order`,
        description: `Aromatic basmati rice slow-layered and dum-cooked with earthy button mushrooms, fresh mint, and whole ground South Indian spices.`
      },
      {
        id: `ghee-podi-idli`,
        name: `Ghee Podi Idli`,
        category: `Breakfast Specials`,
        price: 12.95,
        spice: `Spiced`,
        tags: [`Featured`, `Popular`],
        dietary: [`gluten-free`],
        allergenNote: `Prepared with pure golden ghee`,
        description: `Mini steamed rice cakes tossed in authentic pure ghee and a robust, house-blended roasted lentil gunpowder spice mix (podi) with crispy curry leaves.`
      },
      {
        id: `masala-vada`,
        name: `Masala Vada`,
        category: `Breakfast Specials`,
        price: 8.95,
        spice: `Mild–Medium`,
        tags: [`Popular`, `Crisp Fritters`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Deep-fried, coarsely ground split chickpea patties infused with onions, fresh green chilies, ginger, fennel, and regional herbs. Served with house chutneys.`
      },
      {
        id: `kharabath-kesari`,
        name: `Kharabath + Kesari Bath`,
        category: `Breakfast Specials`,
        price: 12.50,
        spice: `Mild & Sweet`,
        tags: [`Featured`, `#1 Most Liked`],
        dietary: [`contains-nuts`],
        allergenNote: `Contains semolina (gluten), ghee & cashews`,
        description: `The ultimate sweet-and-savory breakfast duo pairing a rich, spiced vegetable semolina upma with a sweet, aromatic ghee-laden pineapple halwa.`
      },
      {
        id: `khara-sweet-pongal`,
        name: `Khara Pongal + Sweet Pongal`,
        category: `Breakfast Specials`,
        price: 11.95,
        spice: `Mild & Sweet`,
        tags: [`Heritage Pair`],
        dietary: [`gluten-free`, `contains-nuts`],
        allergenNote: `Contains pure ghee & cashews`,
        description: `A comforting combo featuring a savory ghee-cooked peppercorn rice dish paired with a sweet jaggery and cardamom-infused dessert pudding.`
      },
      {
        id: `kharabath-upma`,
        name: `Kharabath (Upma)`,
        category: `Breakfast Specials`,
        price: 7.99,
        spice: `Mild`,
        tags: [`Breakfast Classic`],
        dietary: [`contains-nuts`],
        allergenNote: `Contains semolina (gluten), ghee & cashews`,
        description: `Warm, comforting roasted semolina slow-cooked with pure ghee, tempered mustard seeds, toasted cashews, garden vegetables, and fresh cilantro.`
      },
      {
        id: `rava-idly-saagu`,
        name: `Rava Idly + Bombay Saagu`,
        category: `Breakfast Specials`,
        price: 11.95,
        spice: `Mild`,
        tags: [`House Special`, `Bengaluru Style`],
        dietary: [`contains-nuts`],
        allergenNote: `Contains semolina (gluten) & cashews`,
        description: `Steamed semolina cakes infused with premium cashews, carrots, and light spices in iconic Bengaluru style. Paired with aromatic chickpea and lentil sambar.`
      },
      {
        id: `idli-chutney`,
        name: `Idli + Coconut Chutney`,
        category: `Breakfast Specials`,
        price: 11.95,
        spice: `Mild`,
        tags: [`Popular`, `Breakfast Classic`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Soft, fluffy fermented rice and lentil cakes steamed to perfection. Served fresh alongside creamy, cooling freshly grated coconut chutney.`
      },
      {
        id: `medu-vada`,
        name: `Medu Vada`,
        category: `Breakfast Specials`,
        price: null,
        spice: `Mild`,
        tags: [`Crisp Fritters`, `Daily Batch`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: `Quote confirmed on order`,
        description: `Golden-brown, crispy split black gram (urad dal) donuts flavored with peppercorns, ginger, and fresh curry leaves. Crisp outside, soft inside.`
      },
      {
        id: `benne-dose`,
        name: `Benne Dose + Veg Saagu`,
        category: `Dosa`,
        price: 13.95,
        spice: `Mild–Medium`,
        tags: [`Davangere Style`, `Featured`],
        dietary: [`gluten-free`],
        allergenNote: `Roasted in pure creamery butter (dairy)`,
        description: `A distinct regional crepe roasted in generous amounts of pure creamery butter for a crispy exterior and spongy center. Served with coconut-based mixed veg gravy.`
      },
      {
        id: `masala-dose`,
        name: `Masala Dose (Dosa + Red Chutney + Aloo)`,
        category: `Dosa`,
        price: 14.95,
        spice: `Medium`,
        tags: [`Popular`, `Iconic Dosa`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Golden-brown crispy fermented rice crepe lined with a fiery garlic-chili red chutney paste and stuffed with seasoned mashed potato masala.`
      },
      {
        id: `onion-dose`,
        name: `Onion Dose`,
        category: `Dosa`,
        price: 14.95,
        spice: `Mild–Medium`,
        tags: [`Crispy Crepe`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `A large, golden fermented rice crepe generously sprinkled with finely chopped sweet red onions and fresh cilantro before searing.`
      },
      {
        id: `adai-dose`,
        name: `Adai Dose`,
        category: `Dosa`,
        price: 15.95,
        spice: `Medium`,
        tags: [`Protein Rich`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `Savory, hearty regional crepe crafted from a thick, nutrition-rich batter of blended lentils and traditional aromatic spices, cooked to a golden crisp.`
      },
      {
        id: `traditional-meals`,
        name: `Meals (Rice + Ragi Balls + Sambar + Rasam)`,
        category: `Meals`,
        price: 19.95,
        spice: `Medium`,
        tags: [`Featured`, `Traditional Platter`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: ``,
        description: `A traditional, highly nutritious platter featuring a steamed finger millet (ragi) ball, fluffy rice, hearty vegetable sambar, and tangy pepper-tomato rasam.`
      },
      {
        id: `kesari-bath`,
        name: `Kesari Bath`,
        category: `Desserts`,
        price: 7.99,
        spice: `Sweet`,
        tags: [`No Pre-Tasting`, `Popular`],
        dietary: [`contains-nuts`],
        allergenNote: `Contains semolina (gluten), ghee & nuts · Sweets cannot be pre-sampled`,
        description: `Rich South Indian semolina pudding slow-roasted in pure ghee, infused with fragrant cardamom, garnished with crunchy nuts and juicy pineapple pieces.`
      },
      {
        id: `pink-blossom`,
        name: `Pink Blossom`,
        category: `Desserts`,
        price: 8.95,
        spice: `Sweet`,
        tags: [`No Pre-Tasting`, `Chilled Dessert`],
        dietary: [`gluten-free`, `contains-nuts`],
        allergenNote: `Contains milk solids & nut slivers · Sweets cannot be pre-sampled`,
        description: `A chilled, creamy dessert delicately infused with fragrant rose flower extract, sweet milk solids, and topped with premium nut slivers.`
      },
      {
        id: `velvet-sapodilla`,
        name: `Velvet Sapodilla`,
        category: `Desserts`,
        price: 8.00,
        spice: `Sweet`,
        tags: [`No Pre-Tasting`, `Warm Confection`],
        dietary: [`gluten-free`],
        allergenNote: `Contains ghee & milk solids · Sweets cannot be pre-sampled`,
        description: `A rich, warm, slow-simmered dessert confection crafted from the sweet, caramel-like pulp of fresh sapodilla fruit, pure ghee, and milk solids.`
      },
      {
        id: `place-settings`,
        name: `Place Settings (Utensils & Napkins)`,
        category: `Add-ons`,
        price: 0.00,
        spice: `None`,
        tags: [`Add-on`, `Complimentary`],
        dietary: [`vegan`, `gluten-free`],
        allergenNote: `Specify number of place settings needed`,
        description: `Please select the number of place settings you would like included with your Park & Dine, pickup, or delivery order.`
      },
      {
        id: `extra-chutney-podi`,
        name: `Extra House Coconut Chutney / Ghee Podi Side`,
        category: `Add-ons`,
        price: null,
        spice: `Mild–Spiced`,
        tags: [`Add-on`, `Daily Batch`],
        dietary: [`gluten-free`],
        allergenNote: `Specify chutney (Vegan) or ghee podi in order notes`,
        description: `Add extra freshly grated coconut chutney, fiery garlic-chili red chutney, or house-roasted lentil podi to pair with your idlis and dosas.`
      }
    ];

    let appState = {
      cart: {},
      category: `all`,
      dietary: [],
      search: ``,
      serviceMode: `car-oota`,
      previewOpenWindow: false,
      customerName: ``,
      customerContact: ``,
      spiceLevel: `Traditional Medium`,
      vehicleNote: ``,
      orderNotes: ``
    };

    function formatCurrency(val) {
      return `$` + Number(val || 0).toFixed(2);
    }

    function escapeHtml(str) {
      return String(str || ``)
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`)
        .replace(/"/g, `&quot;`);
    }

    async function persistCurrentState() {
      const nameEl = document.getElementById(`cart-customer-name`);
      const contactEl = document.getElementById(`cart-customer-contact`);
      const spiceEl = document.getElementById(`cart-spice-level`);
      const vehicleEl = document.getElementById(`cart-vehicle-note`);
      const notesEl = document.getElementById(`cart-notes`);

      if (nameEl) appState.customerName = nameEl.value;
      if (contactEl) appState.customerContact = contactEl.value;
      if (spiceEl) appState.spiceLevel = spiceEl.value;
      if (vehicleEl) appState.vehicleNote = vehicleEl.value;
      if (notesEl) appState.orderNotes = notesEl.value;

      if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
        try {
          await window.notebookAppApi.setAppState(appState);
        } catch (err) {
          // Ignore persistence write error in preview
        }
      }
    }

    function updateLiveKitchenStatus() {
      const banner = document.getElementById(`live-status-banner`);
      const pill = document.getElementById(`status-pill`);
      const pillText = document.getElementById(`status-pill-text`);
      const detailText = document.getElementById(`status-detail-text`);
      const clockLabel = document.getElementById(`pacific-clock-label`);
      const simBtn = document.getElementById(`sim-toggle-btn`);

      if (!banner || !pill || !pillText || !detailText) return;

      const now = new Date();
      let weekday = ``;
      let hour = 0;
      let minute = 0;
      let clockStr = ``;

      try {
        const parts = new Intl.DateTimeFormat(`en-CA`, {
          timeZone: `America/Vancouver`,
          weekday: `short`,
          hour: `numeric`,
          minute: `2-digit`,
          hour12: false
        }).formatToParts(now);
        const getPart = (t) => (parts.find((p) => p.type === t) || {}).value || ``;
        weekday = getPart(`weekday`);
        hour = parseInt(getPart(`hour`), 10) || 0;
        minute = parseInt(getPart(`minute`), 10) || 0;
        clockStr = new Intl.DateTimeFormat(`en-CA`, {
          timeZone: `America/Vancouver`,
          weekday: `short`,
          hour: `numeric`,
          minute: `2-digit`,
          hour12: true
        }).format(now);
      } catch (e) {
        clockStr = now.toLocaleTimeString();
      }

      if (clockLabel) {
        clockLabel.textContent = appState.previewOpenWindow ? `Simulated Open Window` : `${clockStr} PT`;
      }

      const openDays = [`Thu`, `Fri`, `Sat`, `Sun`];
      const totalMins = hour * 60 + minute;
      const isCurrentlyOpen = openDays.includes(weekday) && totalMins >= (9 * 60 + 30) && totalMins <= (14 * 60 + 30);
      const showOpen = appState.previewOpenWindow || isCurrentlyOpen;

      banner.classList.remove(`is-open`, `is-closed`);
      pill.classList.remove(`open`, `closed`);

      if (showOpen) {
        banner.classList.add(`is-open`);
        pill.classList.add(`open`);
        pillText.textContent = `Kitchen Open · Park & Dine Active`;
        detailText.textContent = `Live Tiffin, Pickup & Bengaluru Car Oota Window Open (Thu–Sun, 9:30 AM – 2:30 PM PT) · Delivery Apps until 3:00 PM.`;
      } else {
        banner.classList.add(`is-closed`);
        pill.classList.add(`closed`);
        pillText.textContent = `Kitchen Closed for Walk-In · Catering Open 24/7`;
        detailText.textContent = `Tiffin & Car Oota Window runs Thu–Sun, 9:30 AM – 2:30 PM PT. Catering bookings & Interac orders accepted 24/7.`;
      }

      if (simBtn) {
        simBtn.textContent = appState.previewOpenWindow ? `Use Live Clock` : `Preview Open Window`;
      }
    }

    function toggleStatusPreview() {
      appState.previewOpenWindow = !appState.previewOpenWindow;
      updateLiveKitchenStatus();
      persistCurrentState();
    }

    function setServiceMode(mode) {
      appState.serviceMode = mode;

      const modes = [`car-oota`, `pickup`, `catering`];
      modes.forEach((m) => {
        const btn = document.getElementById(`mode-btn-${m}`);
        if (btn) btn.classList.toggle(`is-active`, m === mode);
      });

      const selectEl = document.getElementById(`cart-fulfillment-select`);
      if (selectEl && selectEl.value !== mode) selectEl.value = mode;

      const badge = document.getElementById(`active-mode-badge`);
      const heading = document.getElementById(`active-mode-heading`);
      const steps = document.getElementById(`active-mode-steps`);
      const vehicleField = document.getElementById(`cart-vehicle-field`);

      if (vehicleField) {
        vehicleField.style.display = mode === `car-oota` ? `flex` : `none`;
      }

      if (badge && heading && steps) {
        if (mode === `car-oota`) {
          badge.textContent = `Bengaluru Car Oota Active`;
          heading.textContent = `How Bengaluru Car Oota Works at #301`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Build &amp; Submit Order:</strong> Add dishes below, select <em>Park &amp; Dine</em> in the Cart Drawer, and note your vehicle make/color.</span></li>
            <li><span class="step-num">2</span><span><strong>Interac e-Transfer:</strong> Send total with 5% BC GST to <strong>mgskitchen@gmail.com</strong> before arriving.</span></li>
            <li><span class="step-num">3</span><span><strong>Pull Up &amp; Dine:</strong> Park outside 20381 62 Ave #301 (Thu–Sun, 9:30 AM – 2:30 PM) and text/call <strong>+1 (672) 975-1664</strong> for car-window service.</span></li>
          `;
        } else if (mode === `pickup`) {
          badge.textContent = `Kitchen Pickup Active`;
          heading.textContent = `Direct Pickup at 20381 62 Ave #301`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Select Dishes:</strong> Choose from Rice of the Day, Breakfast Specials, Dosas, Meals, and Desserts.</span></li>
            <li><span class="step-num">2</span><span><strong>Settle via Interac:</strong> Send total + 5% BC GST to <strong>mgskitchen@gmail.com</strong>.</span></li>
            <li><span class="step-num">3</span><span><strong>Collect Fresh:</strong> Pick up at Unit #301 during Thu–Sun, 9:30 AM – 2:30 PM PT.</span></li>
          `;
        } else {
          badge.textContent = `24/7 Catering Mode Active`;
          heading.textContent = `Prepaid Uber Drop-Off Catering`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Written Email Booking:</strong> All catering menu, headcount, and spice details must be emailed to <strong>mgskitchen@gmail.com</strong>.</span></li>
            <li><span class="step-num">2</span><span><strong>Milestone Payments:</strong> 50% non-refundable deposit at signing, 25% 7 days prior, 25% + round-trip Uber prior to dispatch.</span></li>
            <li><span class="step-num">3</span><span><strong>Handover &amp; 2-Hr Rule:</strong> Dispatched via prepaid Uber courier; optional door setup billed at <strong>$20.00/hr</strong>.</span></li>
          `;
        }
      }

      persistCurrentState();
    }

    function setMenuCategory(category) {
      appState.category = category;
      const catMap = {
        'all': `cat-btn-all`,
        'Rice of the Day': `cat-btn-rice-day`,
        'Rice Specialities': `cat-btn-rice-spec`,
        'Breakfast Specials': `cat-btn-breakfast`,
        'Dosa': `cat-btn-dosa`,
        'Meals': `cat-btn-meals`,
        'Desserts': `cat-btn-desserts`,
        'Add-ons': `cat-btn-addons`
      };
      Object.keys(catMap).forEach((key) => {
        const el = document.getElementById(catMap[key]);
        if (el) el.classList.toggle(`is-active`, key === category);
      });
      renderMenu();
      persistCurrentState();
    }

    function toggleDietaryFilter(tag) {
      const idx = appState.dietary.indexOf(tag);
      if (idx === -1) {
        appState.dietary.push(tag);
      } else {
        appState.dietary.splice(idx, 1);
      }
      const btnMap = {
        'vegan': `diet-btn-vegan`,
        'gluten-free': `diet-btn-gf`,
        'contains-nuts': `diet-btn-nuts`
      };
      Object.keys(btnMap).forEach((k) => {
        const el = document.getElementById(btnMap[k]);
        if (el) el.classList.toggle(`is-diet-active`, appState.dietary.includes(k));
      });
      renderMenu();
      persistCurrentState();
    }

    function handleMenuSearch(val) {
      appState.search = String(val || ``).trim().toLowerCase();
      renderMenu();
    }

    function resetMenuFilters() {
      appState.category = `all`;
      appState.dietary = [];
      appState.search = ``;
      const searchEl = document.getElementById(`menu-search-input`);
      if (searchEl) searchEl.value = ``;
      [`diet-btn-vegan`, `diet-btn-gf`, `diet-btn-nuts`].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.remove(`is-diet-active`);
      });
      setMenuCategory(`all`);
    }

    function getFilteredMenu() {
      return MENU_ITEMS.filter((item) => {
        const matchesCat = appState.category === `all` ||
          item.category === appState.category ||
          item.secondaryCategory === appState.category;

        const matchesDiet = appState.dietary.every((d) => item.dietary.includes(d));

        const q = appState.search;
        const matchesSearch = !q ||
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCat && matchesDiet && matchesSearch;
      });
    }

    function renderMenu() {
      const grid = document.getElementById(`menu-grid`);
      const meta = document.getElementById(`menu-results-meta`);
      if (!grid) return;

      const filtered = getFilteredMenu();
      if (meta) {
        meta.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} dishes` +
          (appState.category !== `all` ? ` in ${appState.category}` : ``) +
          (appState.dietary.length ? ` · Filtered by: ${appState.dietary.join(`, `)}` : ``);
      }

      if (!filtered.length) {
        grid.innerHTML = `
          <div class="empty-state">
            <h3 style="font-size: 1.5rem;">No dishes match your active filters</h3>
            <p style="margin: 0; color: var(--on-surface-variant);">Try clearing a dietary tag or switching back to All Categories.</p>
            <button type="button" class="btn btn-primary" onclick="resetMenuFilters()">Show All Menu Dishes</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map((item) => {
        const qty = appState.cart[item.id] || 0;
        const priceHtml = item.price === null
          ? `<span class="menu-card-price is-quote">Daily Batch · Quote</span>`
          : item.price === 0
            ? `<span class="menu-card-price is-quote">Complimentary</span>`
            : `<span class="menu-card-price">${formatCurrency(item.price)}</span>`;

        const tagBadges = item.tags.map((t) => {
          const cls = (t === `Friday Special` || t === `Featured` || t === `Davangere Style`) ? `badge-terracotta` : `badge-brass`;
          return `<span class="${cls}">${escapeHtml(t)}</span>`;
        }).join(``);

        const dietBadges = [
          item.dietary.includes(`vegan`) ? `<span class="badge-emerald">Vegan</span>` : ``,
          item.dietary.includes(`gluten-free`) ? `<span class="badge-emerald">Gluten-Free</span>` : ``,
          item.dietary.includes(`contains-nuts`) ? `<span class="badge-nut">Contains Nuts</span>` : ``
        ].join(``);

        return `
          <div class="menu-card-wrapper">
            <article class="menu-card ${qty > 0 ? `is-in-cart` : ``}">
              <div style="display: grid; gap: var(--space-sm);">
                <div class="menu-card-head">
                  <h3 class="menu-card-title">${escapeHtml(item.name)}</h3>
                  ${priceHtml}
                </div>
                <div class="menu-tag-row">
                  ${tagBadges}
                  ${dietBadges}
                </div>
                <p class="menu-card-desc">${escapeHtml(item.description)}</p>
              </div>

              <div style="display: grid; gap: var(--space-sm);">
                <div class="menu-card-meta">
                  <span>Category: <strong>${escapeHtml(item.category)}</strong></span>
                  <span>Spice: <strong>${escapeHtml(item.spice)}</strong></span>
                </div>
                ${item.allergenNote ? `<div style="font-size: 0.78rem; color: var(--secondary); font-weight: 600;">${escapeHtml(item.allergenNote)}</div>` : ``}
                <div class="menu-card-actions">
                  <div class="stepper" aria-label="Quantity selector for ${escapeHtml(item.name)}">
                    <button type="button" class="stepper-btn" onclick="updateCartQty('${item.id}', -1)" aria-label="Decrease quantity of ${escapeHtml(item.name)}">
                      <i data-lucide="minus" width="15" height="15" aria-hidden="true"></i>
                    </button>
                    <span class="stepper-qty">${qty}</span>
                    <button type="button" class="stepper-btn" onclick="updateCartQty('${item.id}', 1)" aria-label="Increase quantity of ${escapeHtml(item.name)}">
                      <i data-lucide="plus" width="15" height="15" aria-hidden="true"></i>
                    </button>
                  </div>
                  <button type="button" class="btn ${qty > 0 ? `btn-emerald` : `btn-primary`}" style="flex: 1;" onclick="updateCartQty('${item.id}', 1)">
                    <span>${qty > 0 ? `Added (${qty})` : `Add to Cart`}</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        `;
      }).join(``);

      if (window.lucide && typeof window.lucide.createIcons === `function`) {
        window.lucide.createIcons();
      }
    }

    function updateCartQty(itemId, delta) {
      const current = appState.cart[itemId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        delete appState.cart[itemId];
      } else {
        appState.cart[itemId] = next;
      }
      renderMenu();
      renderCart();
      persistCurrentState();
    }

    function getCartTotals() {
      let itemCount = 0;
      let subtotal = 0;
      let hasQuoteItems = false;
      const lines = [];

      Object.keys(appState.cart).forEach((id) => {
        const qty = appState.cart[id];
        if (!qty || qty <= 0) return;
        const item = MENU_ITEMS.find((m) => m.id === id);
        if (!item) return;
        itemCount += qty;
        if (item.price === null) {
          hasQuoteItems = true;
          lines.push({ item, qty, lineTotal: null });
        } else {
          const lineTotal = item.price * qty;
          subtotal += lineTotal;
          lines.push({ item, qty, lineTotal });
        }
      });

      const gst = subtotal * 0.05;
      const total = subtotal + gst;
      return { itemCount, subtotal, gst, total, lines, hasQuoteItems };
    }

    function renderCart() {
      const { itemCount, subtotal, gst, total, lines, hasQuoteItems } = getCartTotals();

      const headerCountEl = document.getElementById(`header-cart-count`);
      if (headerCountEl) headerCountEl.textContent = String(itemCount);

      const listEl = document.getElementById(`cart-items-list`);
      if (listEl) {
        if (!lines.length) {
          listEl.innerHTML = `
            <div class="empty-state" style="padding: var(--space-lg);">
              <strong>Your cart is currently empty</strong>
              <span style="font-size: 0.85rem; color: var(--on-surface-variant);">Use the + buttons on the menu to build your Park &amp; Dine, Pickup, or Catering order.</span>
            </div>
          `;
        } else {
          listEl.innerHTML = lines.map(({ item, qty, lineTotal }) => `
            <div class="cart-item-row">
              <div style="flex: 1;">
                <div style="font-weight: 700; font-size: 0.92rem;">${escapeHtml(item.name)}</div>
                <div style="font-size: 0.8rem; color: var(--on-surface-variant);">
                  ${lineTotal === null ? `Daily Batch · Quote Confirmed` : `${formatCurrency(item.price)} each · ${formatCurrency(lineTotal)}`}
                </div>
              </div>
              <div class="stepper">
                <button type="button" class="stepper-btn" onclick="updateCartQty('${item.id}', -1)" aria-label="Remove one ${escapeHtml(item.name)}">
                  <i data-lucide="minus" width="14" height="14" aria-hidden="true"></i>
                </button>
                <span class="stepper-qty">${qty}</span>
                <button type="button" class="stepper-btn" onclick="updateCartQty('${item.id}', 1)" aria-label="Add one ${escapeHtml(item.name)}">
                  <i data-lucide="plus" width="14" height="14" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          `).join(``);
        }
      }

      const subEl = document.getElementById(`cart-subtotal`);
      const gstEl = document.getElementById(`cart-gst`);
      const totEl = document.getElementById(`cart-total`);
      if (subEl) subEl.textContent = formatCurrency(subtotal) + (hasQuoteItems ? ` + Quote` : ``);
      if (gstEl) gstEl.textContent = formatCurrency(gst);
      if (totEl) totEl.textContent = formatCurrency(total) + (hasQuoteItems ? ` + Quote` : ``);

      if (window.lucide && typeof window.lucide.createIcons === `function`) {
        window.lucide.createIcons();
      }
    }

    function openCartDrawer() {
      const backdrop = document.getElementById(`cart-backdrop`);
      const drawer = document.getElementById(`cart-drawer`);
      if (backdrop) backdrop.classList.add(`is-open`);
      if (drawer) {
        drawer.classList.add(`is-open`);
        drawer.setAttribute(`aria-hidden`, `false`);
      }
    }

    function closeCartDrawer() {
      const backdrop = document.getElementById(`cart-backdrop`);
      const drawer = document.getElementById(`cart-drawer`);
      if (backdrop) backdrop.classList.remove(`is-open`);
      if (drawer) {
        drawer.classList.remove(`is-open`);
        drawer.setAttribute(`aria-hidden`, `true`);
      }
    }

    function buildOrderSummaryText() {
      const { subtotal, gst, total, lines, hasQuoteItems } = getCartTotals();
      const name = (document.getElementById(`cart-customer-name`) || {}).value || `Guest`;
      const contact = (document.getElementById(`cart-customer-contact`) || {}).value || `Not specified`;
      const spice = (document.getElementById(`cart-spice-level`) || {}).value || `Traditional Medium`;
      const vehicle = (document.getElementById(`cart-vehicle-note`) || {}).value || ``;
      const notes = (document.getElementById(`cart-notes`) || {}).value || `None`;

      const modeNames = {
        'car-oota': `Park & Dine (Bengaluru Car Oota — 20381 62 Ave #301)`,
        'pickup': `Langley Kitchen Pickup (20381 62 Ave #301)`,
        'catering': `Prepaid Uber Drop-Off Catering Inquiry`
      };

      const itemLines = lines.map(({ item, qty, lineTotal }) => {
        const priceLabel = lineTotal === null ? `Quote Confirmed` : formatCurrency(lineTotal);
        return `- ${qty}x ${item.name} (${priceLabel})`;
      }).join(`\n`);

      return [
        `MG's Kitchen — Order & Interac e-Transfer Summary`,
        `=================================================`,
        `Customer: ${name}`,
        `Contact: ${contact}`,
        `Service Mode: ${modeNames[appState.serviceMode] || appState.serviceMode}`,
        appState.serviceMode === `car-oota` && vehicle ? `Car Oota Vehicle: ${vehicle}` : ``,
        `Spice Level: ${spice}`,
        `Notes / Place Settings: ${notes}`,
        ``,
        `Items Ordered:`,
        itemLines || `(No items selected)`,
        ``,
        `Subtotal: ${formatCurrency(subtotal)}${hasQuoteItems ? ` + Quote items` : ``}`,
        `BC GST (5%): ${formatCurrency(gst)}`,
        `Total Due (CAD): ${formatCurrency(total)}${hasQuoteItems ? ` + Quote items` : ``}`,
        ``,
        `Payment: Interac e-Transfer to mgskitchen@gmail.com prior to dispatch/pickup.`
      ].filter(Boolean).join(`\n`);
    }

    function prepareCartMailto(ev) {
      const { lines } = getCartTotals();
      const msgEl = document.getElementById(`cart-validation-msg`);
      const previewEl = document.getElementById(`cart-email-preview`);
      const mailBtn = document.getElementById(`cart-mailto-btn`);

      if (!lines.length) {
        if (ev) ev.preventDefault();
        if (msgEl) {
          msgEl.style.display = `block`;
          msgEl.textContent = `Your cart is empty. Add at least one dish from the menu before submitting your Interac order.`;
        }
        return false;
      }

      if (msgEl) msgEl.style.display = `none`;
      const bodyText = buildOrderSummaryText();
      const subject = encodeURIComponent(`MG's Kitchen Order (${appState.serviceMode === `car-oota` ? `Park & Dine Car Oota` : appState.serviceMode})`);
      const body = encodeURIComponent(bodyText);

      if (mailBtn) {
        mailBtn.setAttribute(`href`, `mailto:mgskitchen@gmail.com?subject=${subject}&body=${body}`);
      }
      if (previewEl) {
        previewEl.style.display = `block`;
        previewEl.textContent = `Email prepared for mgskitchen@gmail.com! Send your Interac e-Transfer to mgskitchen@gmail.com to confirm dispatch.`;
      }
      return true;
    }

    function copyOrderToClipboard() {
      const text = buildOrderSummaryText();
      copyTextWithFeedback(text, `cart-email-preview`, `Order summary copied! Paste it into an email to mgskitchen@gmail.com along with your Interac e-Transfer.`);
    }

    function clearCart(btn) {
      const { lines } = getCartTotals();
      if (!lines.length) return;
      if (btn && btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Confirm Clear`;
        return;
      }
      if (btn) {
        btn.dataset.armed = `false`;
        btn.textContent = `Clear Cart`;
      }
      appState.cart = {};
      renderMenu();
      renderCart();
      persistCurrentState();
    }

    function copyTextWithFeedback(text, targetId, customMessage) {
      const el = document.getElementById(targetId);
      if (navigator.clipboard && typeof navigator.clipboard.writeText === `function`) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      if (el) {
        el.style.display = `block`;
        el.textContent = customMessage || `Copied to clipboard: ${text}`;
      }
    }

    const PLATFORM_DESTINATIONS = {
      doordash: { name: `DoorDash`, details: `doordash.com · Search MG'S KITCHEN THE FLAVOUR SPECIALIST — Langley, BC` },
      ubereats: { name: `UberEats`, details: `ubereats.com · Search MG'S KITCHEN (20381 62 Ave #301, Langley Twp)` },
      skipthedishes: { name: `SkipTheDishes`, details: `skipthedishes.com · Search MG'S KITCHEN THE FLAVOUR SPECIALIST (20381 62 Ave Unit 301)` },
      instagram: { name: `Instagram`, details: `instagram.com · MG's Kitchen — The Flavour Specialist (@mgskitchen)` },
      facebook: { name: `Facebook`, details: `facebook.com · MG's Kitchen — The Flavour Specialist (Langley, BC)` },
      youtube: { name: `YouTube`, details: `youtube.com · MG's Kitchen — The Flavour Specialist` },
      whatsapp: { name: `WhatsApp`, details: `+1 (672) 975-1664 · WhatsApp check-in for Park & Dine Car Oota arrival (Catering modifications must be emailed to mgskitchen@gmail.com)` }
    };

    function showPlatformDestination(key) {
      const info = PLATFORM_DESTINATIONS[key];
      if (!info) return;
      const banner = document.getElementById(`platform-destination-banner`);
      if (banner) {
        banner.style.display = `block`;
        banner.innerHTML = `<strong>${escapeHtml(info.name)} Storefront / Channel:</strong> ${escapeHtml(info.details)}. (External links open outside this viewer; storefront details copied for quick search.)`;
      }
      if (navigator.clipboard && typeof navigator.clipboard.writeText === `function`) {
        navigator.clipboard.writeText(info.details).catch(() => {});
      }
    }

    function updateCateringCalc() {
      const guests = Math.max(1, parseInt((document.getElementById(`cat-guests`) || {}).value || `40`, 10));
      const perGuest = Math.max(0, parseFloat((document.getElementById(`cat-per-guest`) || {}).value || `0`));
      const uber = Math.max(0, parseFloat((document.getElementById(`cat-uber`) || {}).value || `0`));
      const laborHrs = Math.max(0, parseFloat((document.getElementById(`cat-labor-hrs`) || {}).value || `0`));
      const dateStr = (document.getElementById(`cat-event-date`) || {}).value || `2026-12-20`;

      const foodSub = guests * perGuest;
      const laborCost = laborHrs * 20;
      const gst = (foodSub + laborCost) * 0.05;
      const total = foodSub + laborCost + gst + uber;

      const refDate = new Date(`2026-11-22T12:00:00`);
      const evDate = new Date(`${dateStr}T12:00:00`);
      const daysOut = Math.round((evDate - refDate) / (1000 * 60 * 60 * 24));

      const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };

      setTxt(`cat-guests-label`, String(guests));
      setTxt(`cat-food-sub`, formatCurrency(foodSub));
      setTxt(`cat-gst-out`, formatCurrency(gst));
      setTxt(`cat-uber-out`, formatCurrency(uber));
      setTxt(`cat-labor-out`, formatCurrency(laborCost));
      setTxt(`cat-total-out`, formatCurrency(total));
      setTxt(`cat-per-guest-out`, `${formatCurrency(total / guests)} per guest`);
      setTxt(`cat-days-out`, `${daysOut} days`);

      let tierText = `30+ Days: Full refund less admin fees`;
      if (daysOut < 7) {
        tierText = `Rush Order (<7 Days): 100% upfront · 0% refund`;
      } else if (daysOut <= 29) {
        tierText = `7–29 Days: 50% refund or reschedule`;
      }
      setTxt(`cat-tier-out`, tierText);

      const formatShortDate = (d) => d.toLocaleDateString(`en-CA`, { month: `short`, day: `numeric`, year: `numeric` });
      const minusDays = (d, n) => {
        const copy = new Date(d.getTime());
        copy.setDate(copy.getDate() - n);
        return copy;
      };

      const milestonesEl = document.getElementById(`cat-milestones-body`);
      if (milestonesEl) {
        if (daysOut < 7) {
          milestonesEl.innerHTML = `
            <tr>
              <td><strong>Immediate Rush Settlement (100%)</strong></td>
              <td>Upon confirmation</td>
              <td class="num">${formatCurrency(total)}</td>
            </tr>
          `;
        } else {
          milestonesEl.innerHTML = `
            <tr>
              <td><strong>Initial Deposit (50% Non-Refundable)</strong></td>
              <td>Upon contract execution</td>
              <td class="num">${formatCurrency(total * 0.5)}</td>
            </tr>
            <tr>
              <td><strong>Second Installment (25%)</strong></td>
              <td>${formatShortDate(minusDays(evDate, 7))} (7 days prior)</td>
              <td class="num">${formatCurrency(total * 0.25)}</td>
            </tr>
            <tr>
              <td><strong>Final Balance (25%)</strong></td>
              <td>${formatShortDate(evDate)} (Prior to dispatch)</td>
              <td class="num">${formatCurrency(total * 0.25)}</td>
            </tr>
          `;
        }
      }

      const noticeEl = document.getElementById(`cat-cutoff-notice`);
      if (noticeEl) {
        const rsvpEarly = formatShortDate(minusDays(evDate, 14));
        const rsvpLate = formatShortDate(minusDays(evDate, 7));
        const modCutoff = formatShortDate(minusDays(evDate, 3));
        noticeEl.innerHTML = `<strong>Key Email Deadlines:</strong> RSVP guaranteed headcount window: <strong>${rsvpEarly} – ${rsvpLate}</strong> (5–10 business days prior). Written email-only modifications &amp; reductions cutoff: <strong>${modCutoff}</strong> (3 days prior). 2-hour post-delivery food safety liability applies.`;
      }
    }

    function buildCateringSummaryText() {
      const client = (document.getElementById(`cat-client-name`) || {}).value || `To be entered`;
      const evDate = (document.getElementById(`cat-event-date`) || {}).value || `2026-12-20`;
      const addr = (document.getElementById(`cat-address`) || {}).value || `To be entered`;
      const guests = (document.getElementById(`cat-guests`) || {}).value || `40`;
      const spice = (document.getElementById(`cat-spice`) || {}).value || `Traditional Medium`;
      const split = (document.getElementById(`cat-dietary-split`) || {}).value || `Entire Order Uniform`;
      const payment = (document.getElementById(`cat-payment`) || {}).value || `Interac e-Transfer`;
      const total = (document.getElementById(`cat-total-out`) || {}).textContent || `$0.00`;

      return [
        `MG's Kitchen — Catering Service Agreement Summary`,
        `===================================================`,
        `Caterer: MG's Kitchen — The Flavour Specialist (20381 62 Ave #301, Langley, BC V3A 5E6)`,
        `Client / Host: ${client}`,
        `Event Date: ${evDate}`,
        `Delivery Address (Prepaid Round-Trip Uber): ${addr}`,
        `Guaranteed Headcount: ${guests} guests`,
        `Specified Spice Level: ${spice}`,
        `Dietary / Allergen Structure: ${split}`,
        `Payment Method: ${payment}`,
        `Estimated Total (incl. 5% BC GST & Uber): ${total}`,
        ``,
        `Key Governing Clauses:`,
        `- Drop-off service only; optional door setup billed at $20.00/hr.`,
        `- Strictly non-negotiable pricing (No Discounts Policy).`,
        `- Email-only modifications to mgskitchen@gmail.com at least 3 days prior (no phone/text/verbal).`,
        `- 50% Non-Refundable Deposit upon signing; 25% 7 days prior; 25% day of event prior to dispatch.`,
        `- Sweets cannot be pre-sampled; non-sweet items available for advance tasting.`,
        `- Client assumes food safety & temperature liability 2 hours after delivery handover.`
      ].join(`\n`);
    }

    function downloadAgreementSummary() {
      const content = buildCateringSummaryText();
      const msgEl = document.getElementById(`cat-action-msg`);
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content,
          contentType: `text/plain`,
          encoding: `UTF-8`,
          filename: `MGs-Kitchen-Catering-Summary.txt`
        });
      }
      if (msgEl) {
        msgEl.style.display = `block`;
        msgEl.textContent = `Catering contract summary downloaded as MGs-Kitchen-Catering-Summary.txt.`;
      }
    }

    function emailCateringInquiry() {
      const summary = buildCateringSummaryText();
      const msgEl = document.getElementById(`cat-action-msg`);
      if (navigator.clipboard && typeof navigator.clipboard.writeText === `function`) {
        navigator.clipboard.writeText(summary).catch(() => {});
      }
      if (msgEl) {
        msgEl.style.display = `block`;
        msgEl.innerHTML = `Catering summary copied to clipboard. Email it directly to <a href="mailto:mgskitchen@gmail.com?subject=${encodeURIComponent(`MG's Kitchen Catering Booking Inquiry`)}" style="color: var(--primary); font-weight: 700;">mgskitchen@gmail.com</a> (email-only policy).`;
      }
    }

    async function initApp() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === `object`) {
            appState = Object.assign({}, appState, saved);
          }
        } catch (err) {
          // Proceed with defaults
        }
      }

      const nameEl = document.getElementById(`cart-customer-name`);
      const contactEl = document.getElementById(`cart-customer-contact`);
      const spiceEl = document.getElementById(`cart-spice-level`);
      const vehicleEl = document.getElementById(`cart-vehicle-note`);
      const notesEl = document.getElementById(`cart-notes`);

      if (nameEl) nameEl.value = appState.customerName || ``;
      if (contactEl) contactEl.value = appState.customerContact || ``;
      if (spiceEl && appState.spiceLevel) spiceEl.value = appState.spiceLevel;
      if (vehicleEl) vehicleEl.value = appState.vehicleNote || ``;
      if (notesEl) notesEl.value = appState.orderNotes || ``;

      [`diet-btn-vegan`, `diet-btn-gf`, `diet-btn-nuts`].forEach((id, idx) => {
        const key = [`vegan`, `gluten-free`, `contains-nuts`][idx];
        const el = document.getElementById(id);
        if (el) el.classList.toggle(`is-diet-active`, appState.dietary.includes(key));
      });

      setServiceMode(appState.serviceMode || `car-oota`);
      setMenuCategory(appState.category || `all`);
      updateLiveKitchenStatus();
      renderCart();
      updateCateringCalc();

      document.addEventListener(`keydown`, (e) => {
        if (e.key === `Escape`) closeCartDrawer();
      });

      if (window.lucide && typeof window.lucide.createIcons === `function`) {
        window.lucide.createIcons();
      }

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initApp);
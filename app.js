/* =========================================================================
       1. DATA ARRAYS & CONFIGURATION (ALL CONTENT CENTRALIZED IN JAVASCRIPT)
       ========================================================================= */

    const GST_RATE = 0.05;
    const BUSINESS_EMAIL = `manasagkitchen@gmail.com`;
    const INQUIRY_EMAIL = `manasagkitchen@gmail.comm`;
    const KITCHEN_ADDRESS = `20381 62 Ave #301, Langley, BC V3A 5E6, Canada`;
    const KITCHEN_PHONE = `+1 (672) 975-1664`;

    const MENU_ITEMS = [
      {
        id: `tomato-bath`,
        name: `Tomato Bath`,
        category: `Rice Specialties`,
        tags: [`Featured`, `Most Ordered`, `Catering Favorite`],
        description: `Fragrant South Indian spiced rice and semolina simmered with vine-ripened tomatoes, roasted cashews, green peas, mustard seeds, and aromatic curry leaves.`,
        price: 19.13,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: false,
        containsNuts: true,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `ghee-podi-idli`,
        name: `Ghee Podi Idli & Chatney`,
        category: `Breakfast Specials`,
        tags: [`Featured`, `Signature Tiffin`, `Catering Favorite`],
        description: `Mini steamed rice cakes tossed in authentic pure golden ghee and a robust, house-blended roasted lentil gunpowder spice mix (podi) with crispy curry leaves.`,
        price: 17.72,
        spiceLevel: `Spiced`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
        
      },
      {
        id: `kharabath-upma`,
        name: `Kharabath (Upma)`,
        category: `Breakfast Specials`,
        tags: [`Featured`, `Breakfast Classic`],
        description: `Warm, comforting roasted semolina slow-cooked with pure ghee, tempered mustard seeds, toasted cashews, garden vegetables, and fresh cilantro.`,
        price: 11.99,
        spiceLevel: `Mild`,
        isVegan: false,
        isGlutenFree: false,
        containsNuts: true,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `kharabath-kesari-duo`,
        name: `Kharabath + Kesari Bath`,
        category: `Breakfast Specials`,
        tags: [`Featured`, `#1 Most Liked`],
        description: `The ultimate sweet-and-savory breakfast duo pairing a rich, spiced vegetable semolina upma with a sweet, aromatic ghee-laden pineapple kesari halwa.`,
        price: 16.73,
        spiceLevel: `Mild & Sweet`,
        isVegan: false,
        isGlutenFree: false,
        containsNuts: true,
        noPreTasting: true,
        isActive: true
      },
      {
        id: `khara-sweet-pongal`,
        name: `Khara Pongal + Sweet Pongal`,
        category: `Breakfast Specials`,
        tags: [`Heritage Pair`],
        description: `A comforting combo featuring a savory ghee-cooked peppercorn rice dish paired with a sweet jaggery and cardamom-infused dessert pudding.`,
        price: 11.95,
        spiceLevel: `Mild & Sweet`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: true,
        noPreTasting: true,
        isActive: false
      },
      {
        id: `rava-idly-saagu`,
        name: `Rava Idly + Bombay Saagu`,
        category: `Breakfast Specials`,
        tags: [`House Special`],
        description: `Steamed semolina cakes infused with premium cashews, carrots, and light spices in the iconic Bengaluru style, paired with aromatic chickpea and lentil sambar.`,
        price: 11.95,
        spiceLevel: `Mild`,
        isVegan: false,
        isGlutenFree: false,
        containsNuts: true,
        noPreTasting: false,
        isActive: false
      },
      {
        id: `idli-coconut-chutney`,
        name: `Idli + Coconut Chutney`,
        category: `Breakfast Specials`,
        tags: [`Featured`, `Popular`],
        description: `Soft, fluffy fermented rice and lentil cakes steamed to perfection, served fresh alongside a creamy, cooling freshly grated coconut chutney.`,
        price: 16.72,
        spiceLevel: `Mild`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `medu-vada`,
        name: `Medu Vada`,
        category: `Breakfast Specials`,
        tags: [`Daily Batch`, `Crispy Delight`],
        description: `Golden-brown, crispy split black gram (urad dal) donuts flavored with peppercorns, ginger, and fresh curry leaves. Crisp outside, soft inside.`,
        price: null,
        spiceLevel: `Mild`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: false
      },
      {
        id: `lemon-rice`,
        name: `Lemon Rice`,
        category: `Rice Specialties`,
        tags: [`Featured`, `Zesty Delight`],
        description: `Light and bright aromatic basmati rice tempered with fresh lemon juice, mustard seeds, curry leaves, turmeric, and crunchy roasted peanuts.`,
        price: 18.93,
        spiceLevel: `Mild`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: true,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `mango-rice`,
        name: `Mango Rice`,
        category: `Rice Specialties`,
        tags: [`Featured`, `Seasonal Special`],
        description: `Zesty seasonal rice tossed with freshly grated tangy raw mango, split lentils, green chilies, and aromatic oil tempering.`,
        price: 18.93,
        spiceLevel: `Mild–Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `curry-leaves-rice`,
        name: `Curry Leaves Rice`,
        category: `Rice Specialties`,
        tags: [`Aromatic & Earthy`],
        description: `Fluffy white rice sautéed in a deeply flavorful, earthy paste of slow-roasted curry leaves, aromatic garlic, black pepper, and toasted lentils.`,
        price: 18.93,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `meals-ragi-platter`,
        name: `Meals (Ragi Balls + Rice + Sambar)`,
        category: `Meals`,
        tags: [`Traditional Platter`],
        description: `2 medium ragi (finger millet) balls, 24 oz sambar, and 12 oz rice (Scheduled orders only). A traditional, highly nutritious platter featuring a steamed finger millet ball, fluffy rice, a hearty vegetable sambar, and a tangy pepper-tomato rasam broth.`,
        price: 32.00,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `mushroom-biryani`,
        name: `Mushroom Biryani`,
        category: `Rice Specialties`,
        tags: [`Daily Batch`, `Dum Cooked`],
        description: `Aromatic basmati rice slow-layered and dum-cooked with earthy button mushrooms, fresh mint, and whole ground South Indian spices.`,
        price: null,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: false
      },
      {
        id: `benne-dose-saagu`,
        name: `Benne Dose + Veg Saagu`,
        category: `Signature Specials`,
        tags: [`Featured`, `Signature`],
        description: `A distinct regional crepe roasted in generous amounts of pure creamery butter for a crispy exterior and spongy center, served with coconut-based mixed veg gravy.`,
        price: 26.53,
        spiceLevel: `Mild`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `ghee-rice-kurma`,
        name: `Ghee Rice + Veg Kurma`,
        category: `Signature Specials`,
        tags: [`Darshini Style`],
        description: `Fragrant rice delicately tossed in pure golden ghee, seasoned with mild whole spices, curry leaves, and crunchy cashews, paired with vegetable kurma.`,
        price: 23.73,
        spiceLevel: `Mild`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: true,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `vegetable-pulao`,
        name: `Vegetable Pulao`,
        category: `Signature Specials`,
        tags: [`Featured`, `#3 Most Liked`],
        description: `Fragrant short-grain rice slow-cooked with a vibrant paste of fresh mint, cilantro, and seasonal garden vegetables. Served with cooling yogurt raita.`,
        price: 23.73,
        spiceLevel: `Mild–Medium`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `masala-dose`,
        name: `Masala Dose (Dose + Red Chutney + Aloo)`,
        category: `Dose & Crepes`,
        tags: [`Featured`, `Popular`, `Iconic Dose`],
        description: `Golden-brown crispy fermented rice crepe lined with a fiery garlic-chili red chutney paste and stuffed with seasoned mashed potato masala.`,
        price: 15.95,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `onion-dose`,
        name: `Onion Dose`,
        category: `Dose & Crepes`,
        tags: [`Featured`, `Crispy Crepe`],
        description: `A large, golden fermented rice crepe generously sprinkled with finely chopped sweet red onions and fresh cilantro before searing.`,
        price: 14.95,
        spiceLevel: `Mild–Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `adai-dose`,
        name: `Adai Dose`,
        category: `Dose & Crepes`,
        tags: [`Protein Rich`],
        description: `Savory, hearty regional crepe crafted from a thick, nutrition-rich batter of blended lentils and traditional aromatic spices, cooked to a golden crisp.`,
        price: 16.95,
        spiceLevel: `Medium`,
        isVegan: true,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: false,
        isActive: true
      },
      {
        id: `kesari-bath`,
        name: `Kesari Bath`,
        category: `Desserts`,
        tags: [`Sweet Dessert`],
        description: `Rich South Indian semolina pudding slow-roasted in pure ghee, infused with cardamom, crunchy nuts, and pineapple. Sweets cannot be pre-sampled.`,
        price: 7.99,
        spiceLevel: `Sweet`,
        isVegan: false,
        isGlutenFree: false,
        containsNuts: true,
        noPreTasting: true,
        isActive: true
      },
      {
        id: `pink-blossom`,
        name: `Pink Blossom`,
        category: `Desserts`,
        tags: [`Chilled Dessert`],
        description: `A chilled, creamy dessert delicately infused with fragrant rose flower extract, sweet milk solids, and topped with premium nut slivers.`,
        price: 12.95,
        spiceLevel: `Sweet`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: true,
        noPreTasting: true,
        isActive: true
      },
      {
        id: `velvet-sapodilla`,
        name: `Velvet Sapodilla`,
        category: `Desserts`,
        tags: [`Warm Dessert`],
        description: `A rich, warm, slow-simmered dessert confection crafted from the sweet, caramel-like pulp of fresh sapodilla fruit, pure ghee, and milk solids.`,
        price: 12.95,
        spiceLevel: `Sweet`,
        isVegan: false,
        isGlutenFree: true,
        containsNuts: false,
        noPreTasting: true,
        isActive: true
      }
    ];

    function escapeSvgText(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function makePromoSvgDataUri(title, bgColor = '#b84a24', textColor = '#f3e9dc', badgeText = '') {
  const safeTitle = escapeSvgText(title);
  const safeBg = escapeSvgText(bgColor);
  const safeText = escapeSvgText(textColor);
  const safeBadge = escapeSvgText(badgeText);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="320" viewBox="0 0 600 320">
      <rect width="600" height="320" rx="16" fill="${safeBg}" />
      <text x="40" y="135" fill="${safeText}" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700">
        ${safeTitle}
      </text>
      ${
        safeBadge
          ? `<rect x="40" y="168" rx="8" width="220" height="44" fill="${safeText}" />
             <text x="150" y="197" text-anchor="middle" fill="${safeBg}" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700">
               ${safeBadge}
             </text>`
          : ''
      }
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
function initMobileMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburgerBtn || !navLinks) {
    return;
  }

  const setMenuState = (isOpen) => {
    navLinks.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  };

  hamburgerBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = !navLinks.classList.contains('open');
    setMenuState(isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.classList.contains('open')) {
      return;
    }
    const clickedInside =
      navLinks.contains(event.target) || hamburgerBtn.contains(event.target);
    if (!clickedInside) {
      setMenuState(false);
    }
  });
}
 
    const PROMO_SLIDES = [
      {
        id: `promo-tiffin`,
        badge: `Weekend Tiffin`,
        title: `10% Off Direct Pickup Tiffins`,
        description: `Order two or more Breakfast or Rice Specialties directly via Interac e-Transfer for Thursday–Sunday pickup or Park & Dine curbside service at our Langley kitchen.`,
        discountCode: `TIFFIN10`,
        discountRate: 0.10,
        validWindow: `Thu–Sun · Direct Pickup & Park & Dine only (excludes formal catering)`,
        imageUrl: makePromoSvgDataUri(`Weekend Tiffin Special`, `#b84a24`, `#f3e9dc`, `CODE: TIFFIN10`)
      },
      {
        id: `promo-park-dine`,
        badge: `Park & Dine - Bengaluru Car Oota`,
        title: `Curbside Parking-Served Hot Dose`,
        description: `Bengaluru Car Oota: Arrive at 20381 62 Ave and enter your vehicle make, color, and plate in the Cart drawer. Freshly seared Masala Dose or Benne Dose brought hot to your car.`,
        discountCode: `PARKDINE5`,
        discountRate: 0.10,
        validWindow: `Thu–Sun 11:30 AM – 3:00 PM · Langley Kitchen Lot`,
        imageUrl: makePromoSvgDataUri(`Park & Dine Curbside`, `#1d6356`, `#e1efe9`, `CODE: PARKDINE5`)
      },
      {
        id: `promo-catering`,
        badge: `Catering Note`,
        title: `Pre-Event Non-Sweet Tasting Box`,
        description: `Planning an event? Non-sweet menu items can be ordered for pre-event tasting and spice calibration. Formal catering remains strictly under our No Discounts Policy.`,
        discountCode: `TASTINGNOTE`,
        discountRate: 0,
        validWindow: `Submit tasting requests via email at least 7 days before event`,
        imageUrl: makePromoSvgDataUri(`Pre-Event Tasting Box`, `#8f6524`, `#ede0d0`, `CUSTOM SPICE`)
      }
    ];

    const deliveryUrls = [
      {
        id: `doordash`,
        name: `DoorDash`,
        tag: `Featured Partner · Virtual Brand`,
        description: `Storefront: MG'S KITCHEN THE FLAVOUR SPECIALIST — Langley, BC. Supports Delivery, Pickup, and Group Orders across Featured Items, Breakfast Specials, Rice Specialties, and Doses. Prices on DoorDash are set directly by the Merchant.`,
        plainDomain: `https://www.doordash.com/en-CA/store/mgs-kitchen-the-flavour-specialist-langley-52160213`,
        plainSecondDomain: `https://merchant-portal.doordash.com/merchant/storefront?intl=en-CA&store_id=52160213`,
        actionLabel: `DoorDash Storefront`,actionLabel2: `DoorDash Online`
      },
      {
        id: `ubereats`,
        name: `UberEats`,
        tag: `Courier & Catering Dispatch`,
        description: `Order individual small-batch South Indian meals during operating hours, or schedule formal drop-off catering dispatched exclusively via prepaid round-trip Uber courier from our Langley kitchen.`,
        plainDomain: `https://www.ubereats.com/ca/store/mgs-kitchen/HFiaQzQsVcqayH8lZ3Nr7A`,
        actionLabel: `UberEats Storefront`
      },
      {
        id: `skipthedishes`,
        name: `SkipTheDishes`,
        tag: `Canadian Delivery Network`,
        description: `Local Langley delivery and pickup ordering for freshly steamed idlis, crisp masala vadas, fragrant rice bowls, and regional South Indian crepes during Thu–Sun service.`,
        plainDomain: `https://www.skipthedishes.com/mgs-kitchen-the-flavour-specialist`,
        actionLabel: `SkipTheDishes Storefront`
      }
    ];

      const socialUrls = [
      {
        id: "instagram",
        name: "Instagram",
        icon: "instagram", // Lucide icon: data-lucide="instagram"
        handle: "@mgs_kitchen_langley",
        description: "Small-batch morning tempering reels, weekend tiffin drops, and seasonal South Indian specials from Langley, BC.",
        plainDomain: "https://www.instagram.com/mgkitchentheflavourspecialist/",
        url: "https://www.instagram.com/mgkitchentheflavourspecialist/",
        actionLabel: "Instagram"
      },
      {
        id: "facebook",
        name: "Facebook",
        icon: "facebook", // Lucide icon: data-lucide="facebook"
        handle: "MG's Kitchen — The Flavour Specialist",
        description: "Community event announcements, festive tray updates, and Langley kitchen holiday notices.",
        plainDomain: "https://www.facebook.com/profile.php?id=61593743134117",
        url: "https://www.facebook.com/profile.php?id=61593743134117",
        actionLabel: "Facebook"
      },
      {
        id: "youtube",
        name: "YouTube",
        icon: "youtube", // Lucide icon: data-lucide="youtube"
        handle: "MG's Kitchen Culinary Craft",
        description: "Behind-the-scenes stories on hand-roasted podi, fermented Dose batter, and traditional Bengaluru-style cooking.",
        plainDomain: "https://www.youtube.com/@ManasaKitchenG",
        url: "https://www.youtube.com/@ManasaKitchenG",
        actionLabel: "YouTube"
      },
      {
        id: "whatsapp",
        name: "WhatsApp",
        icon: "message-circle", // Lucide icon: data-lucide="message-circle" or "phone"
        handle: "MG's Kitchen Direct Support",
        description: "Instant catering inquiries, bulk tiffin orders, and direct kitchen support on WhatsApp.",
        plainDomain: " https://chat.whatsapp.com/B86TuTEC1hm2IYAU3hRR0i?s=sh&p=a&iam=2",
        url: " https://chat.whatsapp.com/B86TuTEC1hm2IYAU3hRR0i?s=sh&p=a&iam=2", // Replace with your official WhatsApp number link
        actionLabel: "WhatsApp"
      }
    ];

    const MAP_DIRECTIONS = {
      label: `20381 62 Ave #301, Langley, BC V3A 5E6`,
      plainDestination: `maps.google.com/?q=20381+62+Ave+301+Langley+BC+V3A+5E6`,
      searchPrompt: `MG's Kitchen 20381 62 Ave #301 Langley BC`
    };

    const AGREEMENT_SECTIONS = [
      {
        title: `1. Event & Service Details`,
        bullets: [
          `Service Scope: Drop-off catering service only. No on-site waitstaff, table service, or ongoing event management under standard terms.`,
          `Delivery Logistics: Dispatched exclusively via third-party courier (Uber). Client must prepay all round-trip (to-and-fro) Uber delivery charges in full prior to dispatch.`,
          `On-Demand & Door Setup Labor: Excludes room staging, food unpacking, chafing dish arrangement, or buffet setup. Pre-agreed door setup is billed at $20.00 per hour.`,
          `No Discounts Policy: All listed menu rates, delivery fees, and labor charges are strictly non-negotiable; no discounts or reductions apply.`
        ]
      },
      {
        title: `2. Guest Count & Attendance Guarantees`,
        bullets: [
          `RSVP Cutoff: Submit final guaranteed guest headcount between 5 and 10 business days prior to the agreed event date.`,
          `Billing Floor: Final invoicing uses the guaranteed minimum headcount submitted at cutoff or actual attendance, whichever is higher.`,
          `Headcount Reductions: Must be submitted in writing via email at least 3 business days prior to the event.`,
          `Late Additions: Guest additions exceeding 5 attendees after cutoff incur supplementary per-person charges subject to food supply availability.`
        ]
      },
      {
        title: `3. Pricing, Invoicing & Payment Terms`,
        bullets: [
          `Initial Deposit: 50% (Non-Refundable) due upon contract execution.`,
          `Second Installment: 25% due 7 days (1 week) prior to event date.`,
          `Final Balance: 25% due day of event, prior to kitchen dispatch.`,
          `Strict Advance Settlement: 100% of total balance, Uber fees, and labor must be settled before food leaves the kitchen. No deferred billing, net terms, or cash-on-delivery.`,
          `Accepted Methods: Interac e-Transfer (manasagkitchen@gmail.com) or Credit/Debit Card (subject to standard merchant processing surcharges).`
        ]
      },
      {
        title: `4. Cancellation, Rescheduling & Rush Orders`,
        bullets: [
          `30+ Days Prior: Full refund of monies paid, less minimal administrative and processing charges.`,
          `7 to 29 Days Prior: 50% refund issued, or option to reschedule date, time, and venue (subject to kitchen capacity and Caterer approval).`,
          `Under 7 Days Prior: 0% refund. Total forfeiture of all funds paid.`,
          `Immediate & Rush Orders (< 7 Days): Require immediate 100% upfront payment upon confirmation, strictly subject to kitchen availability.`,
          `Grocery & Materials Policy: Under no circumstances will grocery receipts, raw goods, or wholesale ingredient invoices be transferred to the Client.`
        ]
      },
      {
        title: `5. Food Safety, Allergens & Liabilities`,
        bullets: [
          `Force Majeure: Neither party is liable for delays caused by acts of God, severe weather, transit blockades, utility failures, or government restrictions.`,
          `Allergen & Dietary Requests: Accepted exclusively for the entire order or a 50% volume split. Individual single-serving allergen plates cannot be accommodated.`,
          `Spice Level Specification: Finalized at contract execution; post-signing modifications cannot be guaranteed.`,
          `Safe Consumption Window: Client assumes full legal and physical liability for temperature maintenance, hygiene, and safe consumption 2 hours after delivery.`,
          `Equipment Damage: Client assumes full replacement liability for any lost, stolen, or damaged serving carriers or display rentals.`
        ]
      },
      {
        title: `6. Menu Items, Tastings & Communication`,
        bullets: [
          `Written Details: All menu items, final headcount, spice preferences, and allergen specifications must be submitted in writing.`,
          `Email-Only Communication Policy: Phone calls, text messages, and verbal discussions are not accepted. All requests must be submitted strictly via email.`,
          `Modification Deadline: Change requests must be emailed at least 3 days prior to the event; late changes depend on availability and incur extra charges.`,
          `Sweet Tastings: Sweets cannot be sampled before the event because they cannot be prepared in small test batches.`,
          `Non-Sweet Tastings: Non-sweet items are available for ordering and tasting prior to the event with adjustable spice levels.`
        ]
      }
    ];
 
    /* =========================================================================
       2. APPLICATION STATE & PERSISTENCE (notebookAppApi)
       ========================================================================= */

    let appState = {
      menuFilter: {
        category: `All`,
        search: ``,
        vegan: false,
        gf: false,
        nutFree: false,
        containsNuts: false
      },
      cart: [],
      cartMeta: {
        customerName: ``,
        contact: ``,
        fulfillment: `pickup`,
        spice: `Traditional Medium`,
        notes: ``,
        promoCode: ``,
        parkDine: {
          model: ``,
          color: ``,
          plate: ``,
          arrival: ``
        }
      },
      catering: {
        clientName: ``,
        eventDate: `2026-12-18`,
        address: ``,
        guests: 40,
        portions: {
          tomatoBath: 15,
          gheePodiIdli: 15,
          masalaVada: 20,
          kharabath: 10
        },
        pkgRate: 0,
        uberFee: 45,
        laborHours: 0,
        spiceLevel: `Traditional Medium`,
        dietarySplit: `Entire Order Uniform`,
        paymentMethod: `Interac e-Transfer (No card surcharge)`,
        signatoryName: ``,
        signatoryDate: `2026-11-20`,
        agreed: false
      }
    };

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

    let activePromoIndex = 0;

    async function persistState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === 'function') {
        try {
          await window.notebookAppApi.setAppState(appState);
        } catch (err) {
          /* Silently ignore transient shim write errors */
        }
      }
    }

    async function loadPersistedState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === 'function') {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === 'object') {
            if (saved.menuFilter) appState.menuFilter = { ...appState.menuFilter, ...saved.menuFilter };
            if (Array.isArray(saved.cart)) appState.cart = saved.cart;
            if (saved.cartMeta) {
              appState.cartMeta = {
                ...appState.cartMeta,
                ...saved.cartMeta,
                parkDine: { ...appState.cartMeta.parkDine, ...(saved.cartMeta.parkDine || {}) }
              };
            }
            if (saved.catering) {
              appState.catering = {
                ...appState.catering,
                ...saved.catering,
                portions: { ...appState.catering.portions, ...(saved.catering.portions || {}) }
              };
            }
          }
        } catch (err) {
          /* Fall back to defaults */
        }
      }
    }

    /* =========================================================================
       3. LIVE KITCHEN OPERATING STATUS (America/Vancouver)
       ========================================================================= */

    function getVancouverClockParts() {
      const now = new Date();
      try {
        const fmt = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'America/Vancouver',
          weekday: 'short',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        const parts = fmt.formatToParts(now);
        const map = {};
        parts.forEach(function (p) { map[p.type] = p.value; });
        const dayStr = map.weekday || 'Fri';
        const hour = parseInt(map.hour || '12', 10);
        const minute = parseInt(map.minute || '0', 10);
        return { dayStr: dayStr, hour: hour, minute: minute, formattedTime: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} PT` };
      } catch (e) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return {
          dayStr: days[now.getDay()],
          hour: now.getHours(),
          minute: now.getMinutes(),
          formattedTime: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
        };
      }
    }

    function renderLiveKitchenStatus() {
      const info = getVancouverClockParts();
      const openDays = ['Thu', 'Fri', 'Sat', 'Sun'];
      const isServiceDay = openDays.indexOf(info.dayStr) !== -1;
      const mins = info.hour * 60 + info.minute;

      let stateClass = `is-closed`;
      let pillLabel = `Closed Now`;
      let detailLine = `Open Thu–Sun · 11:00 AM – 04:40 PM`;
      let subNote = `Mon–Wed closed for small-batch prep & catering bookings via email.`;

      // 11:00 AM = 660 mins | 4:40 PM = 1000 mins
      if (isServiceDay && mins >= 660 && mins < 1000) {
        stateClass = ``;
        pillLabel = `Open Now · Pickup & Delivery`;
        const minsLeft = 1000 - mins;
        subNote = `Active service window (${info.dayStr} ${info.formattedTime}) · Closes at 4:40 PM PT (${Math.floor(minsLeft / 60)}h ${minsLeft % 60}m remaining).`;
      } else if (isServiceDay && mins < 660) {
        stateClass = `is-closed`;
        pillLabel = `Opens Today 11:00 AM`;
        subNote = `Today (${info.dayStr} ${info.formattedTime}): Opens at 11:00 AM PT.`;
      } else {
        stateClass = `is-closed`;
        pillLabel = `Closed · Next Open Thu`;
        subNote = `Current Langley time: ${info.dayStr} ${info.formattedTime}. Direct catering inquiries welcome anytime by email.`;
      }

      const headerPill = document.getElementById(`header-live-status`);
      if (headerPill) {
        headerPill.className = `status-pill ${stateClass}`;
        headerPill.textContent = pillLabel;
      }

      const mount = document.getElementById(`live-status-mount`);
      if (mount) {
        mount.innerHTML = `
          <div style="display:flex; align-items:center; gap:var(--space-sm); flex-wrap:wrap;">
            <span class="status-pill ${stateClass}">${pillLabel}</span>
            <span style="font-size:0.8125rem; font-weight:600; color:var(--on-surface-variant);">${info.dayStr} · ${info.formattedTime}</span>
          </div>
          <p style="margin:var(--space-xs) 0 0; font-size:0.9125rem; color:var(--on-surface); font-weight:600;">${detailLine}</p>
          <p style="margin:var(--space-xs) 0 0; font-size:0.84rem; color:var(--on-surface-variant);">${subNote}</p>
        `;
      }
    }

    /* =========================================================================
       4. PROMOTION GALLERY STRIP & MODAL POPUP
       ========================================================================= */

    function renderPromoStrip() {
      const mount = document.getElementById(`promo-strip-mount`);
      if (!mount) return;
      mount.innerHTML = PROMO_SLIDES.map(function (slide, idx) {
        return `
          <button type="button" class="promo-teaser" onclick="openPromoModal(${idx})">
            <img src="${slide.imageUrl}" alt="${slide.title}" class="promo-thumb">
            <div style="min-width:0;">
              <span class="promo-code-pill">${slide.discountCode}</span>
              <strong style="display:block; font-family:var(--font-headline); font-size:1.2rem; color:var(--on-surface); margin-top:var(--space-xs);">${slide.title}</strong>
              <span style="display:block; font-size:0.8125rem; color:var(--on-surface-variant);">${slide.badge} · Click for details</span>
            </div>
          </button>
        `;
      }).join(``);
    }

    function renderPromoModalContent() {
      const slide = PROMO_SLIDES[activePromoIndex] || PROMO_SLIDES[0];
      const img = document.getElementById(`promo-modal-img`);
      const badge = document.getElementById(`promo-modal-badge`);
      const title = document.getElementById(`promo-modal-title`);
      const desc = document.getElementById(`promo-modal-desc`);
      const code = document.getElementById(`promo-modal-code`);
      const win = document.getElementById(`promo-modal-window`);
      const dots = document.getElementById(`promo-modal-dots`);

      if (img) { img.src = slide.imageUrl; img.alt = slide.title; }
      if (badge) badge.textContent = slide.badge;
      if (title) title.textContent = slide.title;
      if (desc) desc.textContent = slide.description;
      if (code) code.textContent = slide.discountCode;
      if (win) win.textContent = slide.validWindow;
      if (dots) {
        dots.innerHTML = PROMO_SLIDES.map(function (s, idx) {
          const activeCls = idx === activePromoIndex ? `is-active` : ``;
          return `<button type="button" class="promo-dot ${activeCls}" onclick="setPromoSlide(${idx})" aria-label="View offer ${idx + 1}: ${s.title}"></button>`;
        }).join(``);
      }
    }

    function openPromoModal(index) {
      activePromoIndex = typeof index === 'number' ? index : 0;
      renderPromoModalContent();
      const modal = document.getElementById(`promo-modal`);
      if (modal) modal.classList.add(`is-open`);
    }

    function closePromoModal() {
      const modal = document.getElementById(`promo-modal`);
      if (modal) modal.classList.remove(`is-open`);
    }

    function handlePromoBackdropClick(event) {
      if (event.target && event.target.id === `promo-modal`) {
        closePromoModal();
      }
    }

    function setPromoSlide(idx) {
      activePromoIndex = (idx + PROMO_SLIDES.length) % PROMO_SLIDES.length;
      renderPromoModalContent();
    }

    function stepPromoSlide(delta) {
      setPromoSlide(activePromoIndex + delta);
    }

    function copyCurrentPromoCode() {
      const slide = PROMO_SLIDES[activePromoIndex];
      if (slide) copyTextToClipboard(slide.discountCode, `Copied promo code ${slide.discountCode}`);
    }

    function applyCurrentPromoToCart() {
      const slide = PROMO_SLIDES[activePromoIndex];
      if (!slide) return;
      appState.cartMeta.promoCode = slide.discountCode;
      const input = document.getElementById(`cart-promo-input`);
      if (input) input.value = slide.discountCode;
      persistState();
      renderCartDrawer();
      closePromoModal();
      openCartDrawer();
      showToast(`Applied code ${slide.discountCode} to cart`);
    }

    /* =========================================================================
       5. MENU RENDERING & DIETARY FILTERS (Vegan, Gluten-Free, Nuts)
       ========================================================================= */

    function getMenuCategories() {
      const cats = [`All`, `Featured`];
      MENU_ITEMS.forEach(function (item) {
        if (cats.indexOf(item.category) === -1) cats.push(item.category);
      });
      return cats;
    }

    function getCartQty(itemId) {
      const found = appState.cart.find(function (c) { return c.id === itemId; });
      return found ? found.qty : 0;
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
          heading.textContent = `How Bengaluru Car Oota Works`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Build &amp; Submit Order:</strong> Add dishes below, select <em>Park &amp; Dine</em> in the Cart Drawer, and note your vehicle make/color.</span></li>
            <li><span class="step-num">2</span><span><strong>Interac e-Transfer:</strong> Send total with 5% BC GST to <strong>${BUSINESS_EMAIL}</strong> before arriving.</span></li>
            <li><span class="step-num">3</span><span><strong>Pull Up &amp; Dine:</strong> Park outside 20381 62 Ave #301 (Thu–Sun, 11 A.M. - 4:40 P.M) and text/call <strong>+1 (672) 975-1664</strong> for car-window service.</span></li>
          `;
        } else if (mode === `pickup`) {
          badge.textContent = `Kitchen Pickup Active`;
          heading.textContent = `Direct Pickup at 20381 62 Ave`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Select Dishes:</strong> Choose from Rice of the Day, Breakfast Specials, Doses, Meals, and Desserts.</span></li>
            <li><span class="step-num">2</span><span><strong>Settle via Interac:</strong> Send total + 5% BC GST to <strong>${BUSINESS_EMAIL}</strong>.</span></li>
            <li><span class="step-num">3</span><span><strong>Collect Fresh:</strong> Pick up at Unit #301 during Thu–Sun, 11 A.M. - 4:40 P.M.</span></li>
          `;
        } else {
          badge.textContent = `24/7 Catering Mode Active`;
          heading.textContent = `Prepaid Uber Drop-Off Catering`;
          steps.innerHTML = `
            <li><span class="step-num">1</span><span><strong>Written Email Booking:</strong> All catering menu, headcount, and spice details must be emailed to <strong>${BUSINESS_EMAIL}</strong>.</span></li>
            <li><span class="step-num">2</span><span><strong>Milestone Payments:</strong> 50% non-refundable deposit at signing, 25% 7 days prior, 25% + round-trip Uber prior to dispatch.</span></li>
            <li><span class="step-num">3</span><span><strong>Handover &amp; 2-Hr Rule:</strong> Dispatched via prepaid Uber courier; optional door setup billed at <strong>$20.00/hr</strong>.</span></li>
          `;
        }
      }

      persistCurrentState();
    }

    function setMenuCategory(category) {
      appState.menuFilter.category = category;
      persistState();
      renderMenuSection();
    }

    function setMenuSearch(value) {
      appState.menuFilter.search = value || ``;
      renderMenuSection();
    }

    function toggleDietaryFilter(key) {
      if (key === `nutFree` && !appState.menuFilter.nutFree) {
        appState.menuFilter.containsNuts = false;
      }
      if (key === `containsNuts` && !appState.menuFilter.containsNuts) {
        appState.menuFilter.nutFree = false;
      }
      appState.menuFilter[key] = !appState.menuFilter[key];
      persistState();
      renderMenuSection();
    }

    function resetMenuFilters() {
      appState.menuFilter = {
        category: `All`,
        search: ``,
        vegan: false,
        gf: false,
        nutFree: false,
        containsNuts: false
      };
      const searchEl = document.getElementById(`menu-search`);
      if (searchEl) searchEl.value = ``;
      persistState();
      renderMenuSection();
    }

    function renderMenuSection() {
      const f = appState.menuFilter;
      const chipsMount = document.getElementById(`category-chips-mount`);
      if (chipsMount) {
        chipsMount.innerHTML = getMenuCategories().map(function (cat) {
          const active = f.category === cat ? `is-active` : ``;
          return `<button type="button" class="filter-chip ${active}" onclick="setMenuCategory('${cat}')">${cat}</button>`;
        }).join(``);
      }

      const dietMap = [
        { id: `diet-vegan-btn`, active: f.vegan },
        { id: `diet-gf-btn`, active: f.gf },
        { id: `diet-nutfree-btn`, active: f.nutFree },
        { id: `diet-nuts-btn`, active: f.containsNuts }
      ];
      dietMap.forEach(function (d) {
        const el = document.getElementById(d.id);
        if (el) el.classList.toggle(`is-active`, !!d.active);
      });

      const q = (f.search || ``).trim().toLowerCase();
      const filtered = MENU_ITEMS.filter(function (item) {
        if (item.isActive === false) return false;
        if (f.category === `Featured` && item.tags.indexOf(`Featured`) === -1) return false;
        if (f.category !== `All` && f.category !== `Featured` && item.category !== f.category) return false;
        if (f.vegan && !item.isVegan) return false;
        if (f.gf && !item.isGlutenFree) return false;
        if (f.nutFree && item.containsNuts) return false;
        if (f.containsNuts && !item.containsNuts) return false;
        if (q) {
          const hay = `${item.name} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase();
          if (hay.indexOf(q) === -1) return false;
        }
        return true;
      });

      const countLabel = document.getElementById(`menu-count-label`);
      if (countLabel) countLabel.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} dishes`;

      const grid = document.getElementById(`menu-grid`);
      if (!grid) return;

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="panel-card" style="grid-column: 1 / -1; text-align:center;">
            <h3 style="font-family:var(--font-headline); font-size:1.5rem; margin:0 0 var(--space-xs);">No dishes match your active filters</h3>
            <p style="margin:0 0 var(--space-md); color:var(--on-surface-variant);">Try clearing one of the dietary filters or searching a different ingredient.</p>
            <button type="button" class="btn btn-primary btn-sm" onclick="resetMenuFilters()">Show All 23 Dishes</button>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map(function (item) {
        const qty = getCartQty(item.id);
        const priceHtml = item.price !== null
          ? `<span class="dish-price">$${item.price.toFixed(2)}</span>`
          : `<span class="dish-price is-quote">Quote Confirmed</span>`;
        const primaryTag = item.tags[0] || item.category;

        return `
          <article class="dish-card">
            <div>
              <div class="dish-meta-row">
                <span class="badge-brass">${primaryTag}</span>
                <span style="font-size:0.75rem; font-weight:700; color:var(--on-surface-variant);">Spice: ${item.spiceLevel}</span>
              </div>
              <div class="dish-title-row">
                <h3 class="dish-name">${item.name}</h3>
                ${priceHtml}
              </div>
              <p class="dish-desc">${item.description}</p>
              <div class="dish-diet-row">
                ${item.isVegan ? `<span class="badge-emerald">Vegan</span>` : ``}
                ${item.isGlutenFree ? `<span class="badge-emerald">Gluten-Free</span>` : ``}
                ${item.containsNuts ? `<span class="badge-nut-warn">Contains Nuts</span>` : ``}
                ${item.noPreTasting ? `<span class="badge-brass">No Pre-Tasting</span>` : ``}
              </div>
            </div>

            <div class="dish-actions">
              <div class="qty-stepper" aria-label="Quantity for ${item.name}">
                <button type="button" class="qty-btn" onclick="changeCartQty('${item.id}', -1)" aria-label="Decrease ${item.name} quantity">−</button>
                <span class="qty-val">${qty}</span>
                <button type="button" class="qty-btn" onclick="changeCartQty('${item.id}', 1)" aria-label="Increase ${item.name} quantity">+</button>
              </div>
              <button type="button" class="btn btn-primary btn-sm add-to-cart-btn" onclick="changeCartQty('${item.id}', 1)">
                ${qty > 0 ? `Add Another` : `Add to Cart`}
              </button>
            </div>
          </article>
        `;
      }).join(``);
    }

    /* =========================================================================
       6. SIDE CART DRAWER, 5% BC GST, PARK & DINE, AND INTERAC MAILTO
       ========================================================================= */

    function changeCartQty(itemId, delta) {
      const idx = appState.cart.findIndex(function (c) { return c.id === itemId; });
      if (idx === -1 && delta > 0) {
        appState.cart.push({ id: itemId, qty: delta });
      } else if (idx !== -1) {
        appState.cart[idx].qty += delta;
        if (appState.cart[idx].qty <= 0) {
          appState.cart.splice(idx, 1);
        }
      }
      persistState();
      renderMenuSection();
      renderCartDrawer();
      if (delta > 0) {
        const dish = MENU_ITEMS.find(function (m) { return m.id === itemId; });
        if (dish) showToast(`Added ${dish.name} to cart`);
      }
    }
 function openAgreementDrawer() {
      renderCartDrawer();
      const backdrop = document.getElementById(`agreement-backdrop`);
      const drawer = document.getElementById(`agreement`);
      if (backdrop) backdrop.classList.add(`is-open`);
      if (drawer) drawer.classList.add(`is-open`);
    }

    function closeAgreementDrawer() {
      const backdrop = document.getElementById(`agreement-backdrop`);
      const drawer = document.getElementById(`agreement`);
      if (backdrop) backdrop.classList.remove(`is-open`);
      if (drawer) drawer.classList.remove(`is-open`);
    }

    
    function openCartDrawer() {
      renderCartDrawer();
      const backdrop = document.getElementById(`cart-backdrop`);
      const drawer = document.getElementById(`cart-drawer`);
      if (backdrop) backdrop.classList.add(`is-open`);
      if (drawer) drawer.classList.add(`is-open`);
    }

    function closeCartDrawer() {
      const backdrop = document.getElementById(`cart-backdrop`);
      const drawer = document.getElementById(`cart-drawer`);
      if (backdrop) backdrop.classList.remove(`is-open`);
      if (drawer) drawer.classList.remove(`is-open`);
    }

    function updateCartField(key, value) {
      appState.cartMeta[key] = value;
      persistState();
      renderCartDrawer();
    }

    function updateParkDineField(key, value) {
      appState.cartMeta.parkDine[key] = value;
      persistState();
      renderCartTotalsAndEmail();
    }

    function applyPromoFromInput() {
      const input = document.getElementById(`cart-promo-input`);
      if (input) appState.cartMeta.promoCode = input.value.trim().toUpperCase();
      persistState();
      renderCartDrawer();
    }

    function clearCartItems(btn) {
      if (btn && btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Confirm Clear`;
        setTimeout(function () {
          if (btn) {
            btn.dataset.armed = `false`;
            btn.textContent = `Clear`;
          }
        }, 3000);
        return;
      }
      appState.cart = [];
      if (btn) {
        btn.dataset.armed = `false`;
        btn.textContent = `Clear`;
      }
      persistState();
      renderMenuSection();
      renderCartDrawer();
      showToast(`Cart cleared`);
    }

    function computeCartFinancials() {
      let subtotal = 0;
      let quoteCount = 0;
      const lines = [];

      appState.cart.forEach(function (entry) {
        const dish = MENU_ITEMS.find(function (m) { return m.id === entry.id; });
        if (!dish) return;
        if (dish.price === null) {
          quoteCount += entry.qty;
          lines.push({ dish: dish, qty: entry.qty, lineTotal: null });
        } else {
          const lt = dish.price * entry.qty;
          subtotal += lt;
          lines.push({ dish: dish, qty: entry.qty, lineTotal: lt });
        }
      });

      const codeUpper = (appState.cartMeta.promoCode || ``).trim().toUpperCase();
      const matchedPromo = PROMO_SLIDES.find(function (p) { return p.discountCode === codeUpper; });
      const isCateringMode = appState.cartMeta.fulfillment === `catering`;
      let discountAmount = 0;
      let promoStatus = ``;

      if (codeUpper) {
        if (!matchedPromo) {
          promoStatus = `Code "${codeUpper}" not recognized.`;
        } else if (isCateringMode) {
          promoStatus = `No Discounts Policy applies to formal catering inquiries.`;
        } else if (matchedPromo.discountRate > 0) {
          discountAmount = subtotal * matchedPromo.discountRate;
          promoStatus = `${matchedPromo.discountCode} applied (${Math.round(matchedPromo.discountRate * 100)}% off eligible tiffin subtotal).`;
        } else {
          promoStatus = `${matchedPromo.discountCode} noted on your inquiry.`;
        }
      }

      const taxableSubtotal = Math.max(0, subtotal - discountAmount);
      const gst = taxableSubtotal * GST_RATE;
      const grandTotal = taxableSubtotal + gst;

      return {
        lines: lines,
        subtotal: subtotal,
        discountAmount: discountAmount,
        taxableSubtotal: taxableSubtotal,
        gst: gst,
        grandTotal: grandTotal,
        quoteCount: quoteCount,
        promoStatus: promoStatus
      };
    }

   /* function buildCartEmailPayload(fin) {
      const m = appState.cartMeta;
      const fulfillmentLabels = {
        pickup: `Kitchen Pickup (${KITCHEN_ADDRESS})`,
        parkAndDine: `Park & Dine (Parking-Served Curbside at ${KITCHEN_ADDRESS})`,
        catering: `Prepaid Round-Trip Uber Drop-Off Catering Inquiry`
      };

      const itemRows = fin.lines.length
        ? fin.lines.map(function (l) {
            const p = l.lineTotal !== null ? `$${l.lineTotal.toFixed(2)} CAD` : `Quote Confirmed`;
            return `- ${l.qty}x ${l.dish.name} — ${p}`;
          }).join(`\n`)
        : `- (No items selected yet)`;

      let parkDineSection = ``;
      if (m.fulfillment === `parkAndDine`) {
        parkDineSection = `\nPark & Dine Vehicle Details:\n- Make & Model: ${m.parkDine.model || '(Not entered)'}\n- Color: ${m.parkDine.color || '(Not entered)'}\n- License Plate: ${m.parkDine.plate || '(Not entered)'}\n- Arrival Time / Stall: ${m.parkDine.arrival || '(Not entered)'}\n`;
      }

      const subject = `MG's Kitchen Order — ${m.customerName || 'Customer'} (${m.fulfillment === 'parkAndDine' ? 'Park & Dine' : m.fulfillment === 'catering' ? 'Catering Inquiry' : 'Pickup'})`;

      const body = `Hello MG's Kitchen,\n\nI would like to place the following order:\n\nCustomer: ${m.customerName || '(Please enter)'}\nContact: ${m.contact || '(Please enter)'}\nFulfillment: ${fulfillmentLabels[m.fulfillment] || fulfillmentLabels.pickup}${parkDineSection}\nSpice Preference: ${m.spice}\nDietary / Delivery Notes: ${m.notes || 'None'}\n\nOrder Items:\n${itemRows}\n\nSummary (CAD):\n- Subtotal: $${fin.subtotal.toFixed(2)}${fin.discountAmount > 0 ? `\n- Promo (${m.promoCode.toUpperCase()}): -$${fin.discountAmount.toFixed(2)}` : ''}\n- BC GST (5%): $${fin.gst.toFixed(2)}\n- Grand Total: $${fin.grandTotal.toFixed(2)}${fin.quoteCount > 0 ? ` (+ ${fin.quoteCount} Quote-Confirmed item(s))` : ''}\n\nInterac e-Transfer Payment:\nSending $${fin.grandTotal.toFixed(2)} CAD via Interac e-Transfer to ${BUSINESS_EMAIL} prior to kitchen dispatch.\n\nThank you!`;

      const mailtoHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return { subject: subject, body: body, mailtoHref: mailtoHref };
    }*/
          function buildCartEmailPayload(fin) {
          const m = appState.cartMeta;

          // Reuse an existing order number if already generated in cartMeta, otherwise create a new one
          if (!m.orderNumber) {
            m.orderNumber = generateOrderNumber('MGK-ORD');
          }
          const orderNumber = m.orderNumber;

          const fulfillmentLabels = {
            pickup: `Kitchen Pickup (${KITCHEN_ADDRESS})`,
            parkAndDine: `Park & Dine (Parking-Served Curbside at ${KITCHEN_ADDRESS})`,
            catering: `Prepaid Round-Trip Uber Drop-Off Catering Inquiry`
          };

          const modeShortLabel =
            m.fulfillment === 'parkAndDine'
              ? 'Park & Dine'
              : m.fulfillment === 'catering'
              ? 'Catering Inquiry'
              : 'Pickup';

          const itemRows = fin.lines.length
            ? fin.lines
                .map(function (l) {
                  const p = l.lineTotal !== null ? `$${l.lineTotal.toFixed(2)} CAD` : `Quote Confirmed`;
                  return `- ${l.qty}x ${l.dish.name} — ${p}`;
                })
                .join(`\n`)
            : `- (No items selected yet)`;

          let parkDineSection = ``;
          if (m.fulfillment === `parkAndDine`) {
            parkDineSection = `\nPark & Dine Vehicle Details:\n- Make & Model: ${m.parkDine.model || '(Not entered)'}\n- Color: ${m.parkDine.color || '(Not entered)'}\n- License Plate: ${m.parkDine.plate || '(Not entered)'}\n- Arrival Time / Stall: ${m.parkDine.arrival || '(Not entered)'}\n`;
          }

          const subject = `MG's Kitchen Order [${orderNumber}] — ${m.customerName || 'Customer'} (${modeShortLabel})`;

          const body = `Hello MG's Kitchen,

        I would like to place the following order:

        Order Reference #: ${orderNumber}
        Customer: ${m.customerName || '(Please enter)'}
        Contact: ${m.contact || '(Please enter)'}
        Fulfillment: ${fulfillmentLabels[m.fulfillment] || fulfillmentLabels.pickup}${parkDineSection}
        Spice Preference: ${m.spice}
        Dietary / Delivery Notes: ${m.notes || 'None'}

        Order Items:
        ${itemRows}

        Summary (CAD):
        - Subtotal: $${fin.subtotal.toFixed(2)}${fin.discountAmount > 0 ? `\n- Promo (${m.promoCode.toUpperCase()}): -$${fin.discountAmount.toFixed(2)}` : ''}
        - BC GST (5%): $${fin.gst.toFixed(2)}
        - Grand Total: $${fin.grandTotal.toFixed(2)}${fin.quoteCount > 0 ? ` (+ ${fin.quoteCount} Quote-Confirmed item(s))` : ''}

        Interac e-Transfer Payment & Confirmation Note:
        - Please send $${fin.grandTotal.toFixed(2)} CAD via Interac e-Transfer to ${BUSINESS_EMAIL} prior to kitchen dispatch and include Order Reference # (${orderNumber}) in the e-Transfer message/memo field.
        - Please reply to this email thread with your Interac e-Transfer Confirmation / Reference Number once sent so we can verify payment promptly.

        Thank you!`;

          const mailtoHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          return {
            orderNumber: orderNumber,
            subject: subject,
            body: body,
            mailtoHref: mailtoHref
          };
        }

    function renderCartTotalsAndEmail() {
      const fin = computeCartFinancials();
      const payload = buildCartEmailPayload(fin);

      const totalsMount = document.getElementById(`cart-totals-mount`);
      if (totalsMount) {
        totalsMount.innerHTML = `
          <div class="summary-line"><span>Subtotal</span><span>$${fin.subtotal.toFixed(2)}</span></div>
          ${fin.discountAmount > 0 ? `<div class="summary-line" style="color:var(--tertiary);"><span>Promo Discount</span><span>−$${fin.discountAmount.toFixed(2)}</span></div>` : ``}
          <div class="summary-line"><span>BC GST (5%)</span><span>$${fin.gst.toFixed(2)}</span></div>
          <div class="summary-total"><span>Grand Total</span><span>$${fin.grandTotal.toFixed(2)}</span></div>
        `;
      }

      const promoFeedback = document.getElementById(`cart-promo-feedback`);
      if (promoFeedback) promoFeedback.textContent = fin.promoStatus;

      const preview = document.getElementById(`cart-email-preview`);
      if (preview) preview.textContent = `To: ${BUSINESS_EMAIL}\nSubject: ${payload.subject}\n\n${payload.body}`;

      const mailtoBtn = document.getElementById(`cart-mailto-btn`);
      if (mailtoBtn) mailtoBtn.setAttribute(`href`, payload.mailtoHref);
    }

    function renderCartDrawer() {
      const totalItems = appState.cart.reduce(function (sum, c) { return sum + c.qty; }, 0);
      const headerBadge = document.getElementById(`header-cart-count`);
      if (headerBadge) headerBadge.textContent = String(totalItems);

      const itemsMount = document.getElementById(`cart-drawer-items`);
      if (itemsMount) {
        if (appState.cart.length === 0) {
          itemsMount.innerHTML = `
            <div style="background:var(--surface-container-low); border:var(--warm-hairline); border-radius:var(--rounded); padding:var(--space-md); text-align:center;">
              <strong style="display:block; font-family:var(--font-headline); font-size:1.25rem;">Your cart is empty</strong>
              <span style="font-size:0.875rem; color:var(--on-surface-variant);">Select small-batch dishes from the Menu to calculate BC GST and Interac e-Transfer totals.</span>
            </div>
          `;
        } else {
          itemsMount.innerHTML = appState.cart.map(function (entry) {
            const dish = MENU_ITEMS.find(function (m) { return m.id === entry.id; });
            if (!dish) return ``;
            const linePrice = dish.price !== null ? `$${(dish.price * entry.qty).toFixed(2)}` : `Quote Confirmed`;
            return `
              <div class="cart-item-row">
                <div style="min-width:0;">
                  <strong style="display:block; font-size:0.9375rem;">${dish.name}</strong>
                  <span style="font-size:0.8125rem; color:var(--on-surface-variant);">${linePrice}</span>
                </div>
                <div class="qty-stepper">
                  <button type="button" class="qty-btn" onclick="changeCartQty('${dish.id}', -1)" aria-label="Decrease ${dish.name}">−</button>
                  <span class="qty-val">${entry.qty}</span>
                  <button type="button" class="qty-btn" onclick="changeCartQty('${dish.id}', 1)" aria-label="Increase ${dish.name}">+</button>
                </div>
              </div>
            `;
          }).join(``);
        }
      }

      const pdPanel = document.getElementById(`park-dine-panel`);
      if (pdPanel) {
        pdPanel.style.display = appState.cartMeta.fulfillment === `parkAndDine` ? `block` : `none`;
      }

      const syncVal = function (id, val) {
        const el = document.getElementById(id);
        if (el && el.value !== val) el.value = val;
      };
      syncVal(`cart-customer-name`, appState.cartMeta.customerName);
      syncVal(`cart-customer-contact`, appState.cartMeta.contact);
      syncVal(`cart-fulfillment`, appState.cartMeta.fulfillment);
      syncVal(`cart-spice`, appState.cartMeta.spice);
      syncVal(`cart-notes`, appState.cartMeta.notes);
      syncVal(`cart-promo-input`, appState.cartMeta.promoCode);
      syncVal(`pd-vehicle-model`, appState.cartMeta.parkDine.model);
      syncVal(`pd-vehicle-color`, appState.cartMeta.parkDine.color);
      syncVal(`pd-vehicle-plate`, appState.cartMeta.parkDine.plate);
      syncVal(`pd-arrival-note`, appState.cartMeta.parkDine.arrival);

      renderCartTotalsAndEmail();
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
    function copyCartEmailText() {
      const fin = computeCartFinancials();
      const payload = buildCartEmailPayload(fin);
      copyTextToClipboard(`To: ${BUSINESS_EMAIL}\nSubject: ${payload.subject}\n\n${payload.body}`, `Order email copied for ${BUSINESS_EMAIL}`);
    }

    /* =========================================================================
       7. CATERING ESTIMATOR, EMAIL FORMATTING & AGREEMENT RENDERING
       ========================================================================= */

    function updateCateringField(key, val) {
      appState.catering[key] = val;
      persistState();
      renderCateringAndAgreement();
    }

    function updateCateringNumber(key, val) {
      const num = parseFloat(val);
      appState.catering[key] = isNaN(num) || num < 0 ? 0 : num;
      persistState();
      renderCateringAndAgreement();
    }

    function updateCateringPortion(key, val) {
      const num = parseInt(val, 10);
      appState.catering.portions[key] = isNaN(num) || num < 0 ? 0 : num;
      persistState();
      renderCateringAndAgreement();
    }

    function loadCateringIntoCart() {
      const p = appState.catering.portions;
      const map = [
        { id: `tomato-bath`, qty: p.tomatoBath },
        { id: `ghee-podi-idli`, qty: p.gheePodiIdli },
        { id: `masala-vada`, qty: p.masalaVada },
        { id: `kharabath-upma`, qty: p.kharabath }
      ];
      map.forEach(function (row) {
        if (row.qty > 0) {
          const existing = appState.cart.find(function (c) { return c.id === row.id; });
          if (existing) existing.qty = row.qty;
          else appState.cart.push({ id: row.id, qty: row.qty });
        }
      });
      appState.cartMeta.fulfillment = `catering`;
      appState.cartMeta.customerName = appState.catering.clientName;
      appState.cartMeta.spice = appState.catering.spiceLevel;
      appState.cartMeta.notes = `Event Date: ${appState.catering.eventDate} | Headcount: ${appState.catering.guests} | Dietary: ${appState.catering.dietarySplit} | Delivery: ${appState.catering.address || 'Langley/Greater Vancouver'}`;
      persistState();
      renderMenuSection();
      renderCartDrawer();
      openCartDrawer();
      showToast(`Loaded catering portions into Cart`);
    }

    function resetCateringEstimator(btn) {
      if (btn && btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Click again to reset`;
        setTimeout(function () {
          if (btn) {
            btn.dataset.armed = `false`;
            btn.textContent = `Reset Estimator`;
          }
        }, 3000);
        return;
      }
      appState.catering = {
        clientName: ``,
        eventDate: `2026-12-18`,
        address: ``,
        guests: 40,
        portions: { tomatoBath: 15, gheePodiIdli: 15, masalaVada: 20, kharabath: 10 },
        pkgRate: 0,
        uberFee: 45,
        laborHours: 0,
        spiceLevel: `Traditional Medium`,
        dietarySplit: `Entire Order Uniform`,
        paymentMethod: `Interac e-Transfer (No card surcharge)`,
        signatoryName: ``,
        signatoryDate: `2026-11-20`,
        agreed: false
      };
      if (btn) {
        btn.dataset.armed = `false`;
        btn.textContent = `Reset Estimator`;
      }
      persistState();
      renderCateringAndAgreement();
      showToast(`Estimator reset to reference defaults`);
    }

    function computeCateringMetrics() {
      const c = appState.catering;
      const foodSubtotal =
        c.portions.tomatoBath * 11.95 +
        c.portions.gheePodiIdli * 12.95 +
        c.portions.masalaVada * 8.95 +
        c.portions.kharabath * 7.99 +
        c.guests * c.pkgRate;
      const uberFee = c.uberFee;
      const laborFee = c.laborHours * 20.00;
      const total = foodSubtotal + uberFee + laborFee;
      const perGuest = c.guests > 0 ? total / c.guests : 0;

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const ev = c.eventDate ? new Date(`${c.eventDate}T00:00:00`) : new Date(`2026-12-18T00:00:00`);
      const diffDays = Math.ceil((ev.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      let tierLabel = `30+ Days: Full refund (less admin fees)`;
      let badgeLabel = `Standard Order (50 / 25 / 25)`;
      let isRush = false;

      if (diffDays < 7) {
        tierLabel = `Under 7 Days (Rush Order): 100% upfront · 0% refund`;
        badgeLabel = `Rush Order (100% Upfront)`;
        isRush = true;
      } else if (diffDays <= 29) {
        tierLabel = `7–29 Days: 50% refund or reschedule`;
      }

      const minusDays = function (baseDate, d) {
        const copy = new Date(baseDate.getTime());
        copy.setDate(copy.getDate() - d);
        return copy.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
      };

      return {
        foodSubtotal: foodSubtotal,
        uberFee: uberFee,
        laborFee: laborFee,
        total: total,
        perGuest: perGuest,
        diffDays: diffDays,
        tierLabel: tierLabel,
        badgeLabel: badgeLabel,
        isRush: isRush,
        secondDueDate: minusDays(ev, 7),
        eventDateLabel: ev.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' }),
        modCutoffLabel: minusDays(ev, 3),
        rsvpStartLabel: minusDays(ev, 14),
        rsvpEndLabel: minusDays(ev, 7)
      };
    }
      /**
       * Generates a unique order number formatted as: MGK-YYYYMMDD-XXXX
       * Example: MGK-20261123-4829
       */
      function generateOrderNumber(prefix = 'MGK') {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const randomSuffix = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
        return `${prefix}-${year}${month}${day}-${randomSuffix}`;
      }

      function buildCateringEmailPayload(m) {
        const c = appState.catering;
        
        // Reuse an existing order number if already generated in state, otherwise create a new one
        if (!c.orderNumber) {
          c.orderNumber = generateOrderNumber('MGK-CAT');
        }
        const orderNumber = c.orderNumber;

        const subject = `Catering Inquiry [${orderNumber}] — ${c.clientName || 'Client'} (${c.eventDate || 'TBD'})`;
         
        const body = `Hello MG's Kitchen,

      I would like to submit a formal Drop-Off Catering Inquiry (Email-Only Policy):

      - Order Reference #: ${orderNumber}
      - Client Name: ${c.clientName || '(To be confirmed)'}
      - Event Date: ${c.eventDate || '(To be confirmed)'}
      - Delivery Address (Prepaid Uber): ${c.address || '(To be confirmed)'}
      - Estimated Headcount: ${c.guests} guests
      - Specified Spice Level: ${c.spiceLevel}
      - Allergen / Dietary Split: ${c.dietarySplit}
      - Payment Method: ${c.paymentMethod}

      Requested Portions:
      - Tomato Bath ($11.95): ${c.portions.tomatoBath}
      - Ghee Podi Idli ($12.95): ${c.portions.gheePodiIdli}
      - Masala Vada ($8.95): ${c.portions.masalaVada}
      - Kharabath Upma ($7.99): ${c.portions.kharabath}

      Estimated Settlement:
      - Food Subtotal: $${m.foodSubtotal.toFixed(2)} CAD
      - Prepaid Round-Trip Uber Courier: $${m.uberFee.toFixed(2)} CAD
      - Door Setup Labor ($20.00/hr): $${m.laborFee.toFixed(2)} CAD
      - Estimated Total: $${m.total.toFixed(2)} CAD ($${m.perGuest.toFixed(2)}/guest)

      Interac e-Transfer Payment & Confirmation Note:
      - Please send your Interac e-Transfer payment to ${BUSINESS_EMAIL} and include Order Reference # (${orderNumber}) in the e-Transfer message/memo field.
      - IMPORTANT: Please reply to this email thread with your Interac e-Transfer Confirmation / Reference Number once sent so our kitchen can verify settlement prior to dispatch.

      I acknowledge the "Non-Refundable $20 for Catering Enquiry" & 50% non-refundable deposit, 3-day email-only modification cutoff (${m.modCutoffLabel}), and 2-hour post-delivery food safety window.`;

        return {
          orderNumber: orderNumber,
          subject: subject,
          body: body,
          mailtoHref: `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        };
      }
   /* function buildCateringEmailPayload(m) {
      const c = appState.catering;
      const subject = `Catering Inquiry — ${c.clientName || 'Client'} (${c.eventDate || 'TBD'})`;
      const body = `Hello MG's Kitchen,\n\nI would like to submit a formal Drop-Off Catering Inquiry (Email-Only Policy):\n\n- Client Name: ${c.clientName || '(To be confirmed)'}\n- Event Date: ${c.eventDate || '(To be confirmed)'}\n- Delivery Address (Prepaid Uber): ${c.address || '(To be confirmed)'}\n- Estimated Headcount: ${c.guests} guests\n- Specified Spice Level: ${c.spiceLevel}\n- Allergen / Dietary Split: ${c.dietarySplit}\n- Payment Method: ${c.paymentMethod}\n\nRequested Portions:\n- Tomato Bath ($11.95): ${c.portions.tomatoBath}\n- Ghee Podi Idli ($12.95): ${c.portions.gheePodiIdli}\n- Masala Vada ($8.95): ${c.portions.masalaVada}\n- Kharabath Upma ($7.99): ${c.portions.kharabath}\n\nEstimated Settlement:\n- Food Subtotal: $${m.foodSubtotal.toFixed(2)} CAD\n- Prepaid Round-Trip Uber Courier: $${m.uberFee.toFixed(2)} CAD\n- Door Setup Labor ($20.00/hr): $${m.laborFee.toFixed(2)} CAD\n- Estimated Total: $${m.total.toFixed(2)} CAD ($${m.perGuest.toFixed(2)}/guest)\n\nI acknowledge the 50% non-refundable deposit, 3-day email-only modification cutoff (${m.modCutoffLabel}), and 2-hour post-delivery food safety window.`;

      return {
        subject: subject,
        body: body,
        mailtoHref: `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      };
    }*/

    function renderCateringAndAgreement() {
      const c = appState.catering;
      const syncInput = function (id, val) {
        const el = document.getElementById(id);
        if (el && el.value !== String(val)) el.value = String(val);
      };
      syncInput(`cat-client-name`, c.clientName);
      syncInput(`cat-event-date`, c.eventDate);
      syncInput(`cat-address`, c.address);
      syncInput(`cat-guests`, c.guests);
      syncInput(`cat-qty-tomato`, c.portions.tomatoBath);
      syncInput(`cat-qty-podi`, c.portions.gheePodiIdli);
      syncInput(`cat-qty-vada`, c.portions.masalaVada);
      syncInput(`cat-qty-upma`, c.portions.kharabath);
      syncInput(`cat-pkg-rate`, c.pkgRate);
      syncInput(`cat-uber-fee`, c.uberFee);
      syncInput(`cat-labor-hrs`, c.laborHours);
      syncInput(`cat-spice`, c.spiceLevel);
      syncInput(`cat-dietary`, c.dietarySplit);
      syncInput(`cat-payment`, c.paymentMethod);
      syncInput(`sig-client-name`, c.signatoryName);
      syncInput(`sig-date`, c.signatoryDate);

      const agreeEl = document.getElementById(`sig-agree-check`);
      if (agreeEl) agreeEl.checked = !!c.agreed;

      const m = computeCateringMetrics();
      const badgeEl = document.getElementById(`cat-tier-badge`);
      if (badgeEl) badgeEl.textContent = m.badgeLabel;

      const summaryMount = document.getElementById(`catering-summary-mount`);
      if (summaryMount) {
        const milestonesHtml = m.isRush
          ? `<tr><td><strong>Rush Upfront Payment (100%)</strong></td><td>Upon confirmation</td><td><strong>$${m.total.toFixed(2)}</strong></td></tr>`
          : `
            <tr><td><strong>Initial Deposit (50% Non-Refundable)</strong></td><td>Upon contract execution</td><td><strong>$${(m.total * 0.5).toFixed(2)}</strong></td></tr>
            <tr><td><strong>Second Installment (25%)</strong></td><td>${m.secondDueDate} (7 days prior)</td><td><strong>$${(m.total * 0.25).toFixed(2)}</strong></td></tr>
            <tr><td><strong>Final Balance (25%)</strong></td><td>${m.eventDateLabel} (Prior to dispatch)</td><td><strong>$${(m.total * 0.25).toFixed(2)}</strong></td></tr>
          `;

        summaryMount.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:baseline; gap:var(--space-sm); flex-wrap:wrap;">
            <div>
              <div style="font-family:var(--font-headline); font-size:2.4rem; font-weight:700; color:var(--primary); line-height:1.05;">$${m.total.toFixed(2)}</div>
              <div style="font-size:0.84rem; color:var(--on-surface-variant);">$${m.perGuest.toFixed(2)} per guest (${c.guests} guests)</div>
            </div>
            <div style="text-align:right;">
              <strong style="display:block; font-size:0.9375rem;">${m.diffDays} days until event</strong>
              <span style="font-size:0.8125rem; color:var(--tertiary); font-weight:600;">${m.tierLabel}</span>
            </div>
          </div>

          <table class="data-table" style="margin-top:var(--space-md);">
            <thead><tr><th>Cost Component</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>Menu Items &amp; Catering Food Subtotal</td><td>$${m.foodSubtotal.toFixed(2)}</td></tr>
              <tr><td>Prepaid Round-Trip Uber Courier</td><td>$${m.uberFee.toFixed(2)}</td></tr>
              <tr><td>Door Setup / On-Demand Labor ($20.00/hr)</td><td>$${m.laborFee.toFixed(2)}</td></tr>
            </tbody>
          </table>

          <p class="kicker" style="margin:var(--space-md) 0 var(--space-xs);">Required Payment Schedule</p>
          <table class="data-table">
            <thead><tr><th>Milestone</th><th>Due Date</th><th>Amount</th></tr></thead>
            <tbody>${milestonesHtml}</tbody>
          </table>

          <ul style="margin:var(--space-md) 0 0; padding-left:var(--space-lg); font-size:0.84rem; color:var(--on-surface-variant);">
            <li><strong>RSVP Cutoff (5–10 business days):</strong> ${m.rsvpStartLabel} to ${m.rsvpEndLabel}</li>
            <li><strong>Email Modification &amp; Reduction Cutoff (3 days):</strong> ${m.modCutoffLabel} (email only)</li>
            <li><strong>2-Hour Safe Consumption Liability:</strong> Client assumes food safety liability 2 hrs post-delivery.</li>
          </ul>
        `;
      }

      const emailPayload = buildCateringEmailPayload(m);
      const catMailLink = document.getElementById(`catering-mailto-link`);
      if (catMailLink) catMailLink.setAttribute(`href`, emailPayload.mailtoHref);

      const schedMount = document.getElementById(`agreement-schedule-mount`);
      if (schedMount) {
        schedMount.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-sm); margin-bottom:var(--space-sm);">
            <h3 style="font-family:var(--font-headline); font-size:1.5rem; margin:0;">Contract Schedule &amp; Event Overview</h3>
            <span class="badge-emerald">Synced with Catering Estimator</span>
          </div>
          <table class="data-table">
            <thead><tr><th>Detail</th><th>Specification</th></tr></thead>
            <tbody>
              <tr><td><strong>Caterer / Provider</strong></td><td>MG's Kitchen — The Flavour Specialist (${KITCHEN_ADDRESS})</td></tr>
              <tr><td><strong>Client Name</strong></td><td>${c.clientName || '(To be entered by Client)'}</td></tr>
              <tr><td><strong>Event Date</strong></td><td>${c.eventDate || '(To be confirmed)'}</td></tr>
              <tr><td><strong>Delivery Address</strong></td><td>${c.address || '(Prepaid Round-Trip Uber Courier destination)'}</td></tr>
              <tr><td><strong>Initial Estimated Headcount</strong></td><td>${c.guests} guests (Final confirmed 5–10 business days prior per Section 2)</td></tr>
              <tr><td><strong>Specified Spice Level</strong></td><td>${c.spiceLevel} (Confirmed at signing)</td></tr>
              <tr><td><strong>Dietary / Allergen Structure</strong></td><td>${c.dietarySplit}</td></tr>
              <!--<tr><td><strong>Estimated Contract Settlement</strong></td><td><strong>$${m.total.toFixed(2)} CAD</strong> (${c.paymentMethod})</td></tr>-->
            </tbody>
          </table>
        `;
      }

      const sigNote = document.getElementById(`sig-status-note`);
      if (sigNote) {
        sigNote.textContent = c.agreed && c.signatoryName
          ? `Ready to export for ${c.signatoryName} (${c.signatoryDate}).`
          : `Enter signatory name and check acknowledgment to finalize summary.`;
      }
    }

    function renderAgreementSections() {
      const mount = document.getElementById(`agreement-sections-mount`);
      if (!mount) return;
      mount.innerHTML = AGREEMENT_SECTIONS.map(function (sec) {
        const items = sec.bullets.map(function (b) { return `<li>${b}</li>`; }).join(``);
        return `
          <article class="agreement-card">
            <h3>${sec.title}</h3>
            <ul>${items}</ul>
          </article>
        `;
      }).join(``);
    }

    function copyCateringEmailText() {
      const m = computeCateringMetrics();
      const payload = buildCateringEmailPayload(m);
      copyTextToClipboard(`To: ${BUSINESS_EMAIL}\nSubject: ${payload.subject}\n\n${payload.body}`, `Catering email copied for ${BUSINESS_EMAIL}`);
    }

    function downloadSignedAgreement() {
      const c = appState.catering;
      const m = computeCateringMetrics();
      const text = [
        `MG'S KITCHEN — CATERING SERVICE AGREEMENT SUMMARY`,
        `==================================================`,
        `Caterer: MG's Kitchen — The Flavour Specialist (${KITCHEN_ADDRESS})`,
        `Email (All Requests & Interac): ${BUSINESS_EMAIL}`,
        `Client Name: ${c.clientName || c.signatoryName || '(Pending)'}`,
        `Event Date: ${c.eventDate}`,
        `Delivery Address: ${c.address || '(Pending)'}`,
        `Estimated Headcount: ${c.guests} guests`,
        `Spice Level (Final at Signing): ${c.spiceLevel}`,
        `Allergen / Dietary Split: ${c.dietarySplit}`,
        `Payment Method: ${c.paymentMethod}`,
        ``,
        `SETTLEMENT BREAKDOWN (CAD)`,
        `- Food Subtotal: $${m.foodSubtotal.toFixed(2)}`,
        `- Prepaid Round-Trip Uber Courier: $${m.uberFee.toFixed(2)}`,
        `- Door Setup Labor ($20.00/hr): $${m.laborFee.toFixed(2)}`,
        `- Total Balance: $${m.total.toFixed(2)}`,
        ``,
        `KEY POLICIES`,
        `- Drop-off service only; No Discounts Policy.`,
        `- RSVP Cutoff: 5–10 business days prior; billing floor is higher of guarantee or actual attendance.`,
        `- Email-Only Policy: Phone/text/verbal changes not accepted. Modifications due 3 days prior.`,
        `- Cancellation: 30+ days full refund less admin fees; 7–29 days 50% or reschedule; <7 days 0% refund.`,
        `- 2-Hour Safe Consumption Liability assumed by Client post-delivery.`,
        ``,
        `ACKNOWLEDGMENT`,
        `Client Signatory: ${c.signatoryName || '(Not signed)'}`,
        `Date Signed: ${c.signatoryDate}`,
        `Terms Accepted: ${c.agreed ? 'YES' : 'PENDING'}`
      ].join(`\n`);

      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === 'function') {
        window.notebookAppApi.triggerFileDownload({
          content: text,
          contentType: `text/plain`,
          encoding: `UTF-8`,
          filename: `MGs-Kitchen-Catering-Agreement.txt`
        });
        showToast(`Agreement summary downloaded`);
      } else {
        copyTextToClipboard(text, `Agreement summary copied to clipboard`);
      }
    }

    /* =========================================================================
       8. DELIVERY PARTNERS, SOCIAL CHANNELS & FOOTER GOOGLE MAPS DIRECTIONS
       ========================================================================= */

    function renderDeliveryAndSocial() {
      const delMount = document.getElementById(`delivery-partners-mount`);
      if (delMount) {
        delMount.innerHTML = deliveryUrls.map(function (partner) {
          return `
            <article class="partner-card">
              <div>
                <!--<p class="kicker">${partner.tag}</p>-->
                <span class="badge-emerald">${partner.tag}</span>
                <h3 style="font-family:var(--font-headline); font-size:1.65rem; margin:0 0 var(--space-xs);">${partner.name}</h3>
                <p style="margin:0 0 var(--space-sm); font-size:0.9rem; color:var(--on-surface-variant);">${partner.description}</p>
                 <p style="font-size: 0.78rem; color: var(--secondary); margin: var(--space-sm) 0 0; font-style: italic;">
              Merchant Notice: Delivery Charges on the ${partner.name} menu are set directly by the Merchant.
                </p>
                <!--<div class="plain-url-box">${partner.plainDomain}</div>
                -->
                
              </div>
              <div style="display:flex; gap:var(--space-sm); flex-wrap:wrap;">
                <button type="button" class="btn btn-primary btn-sm add-to-cart-btn" onclick="copyPartnerUrl('delivery', '${partner.id}')">${partner.actionLabel}</button>
              ${partner.plainSecondDomain 
              ? `<button type="button" class="btn btn-primary btn-sm add-to-cart-btn" onclick="copyPartnerUrl('delivery', '${partner.id}')">${partner.actionLabel2}</button>` 
              : ``}

              <button type="button" class="btn btn-secondary btn-sm add-to-cart-btn" onclick="openCartDrawer()">Direct Cart Order</button>
              </div>
            </article>
          `;
        }).join(``);
      }

      const socMount = document.getElementById(`social-links-mount`);
      if (socMount) {
        socMount.innerHTML = socialUrls.map(function (soc) {
          return `
          <button type="button" class="btn btn-secondary" onclick="copyPartnerUrl('social', '${soc.id}')">
              <i data-lucide= ${soc.name} aria-hidden="true"></i>
              <span>${soc.name}</span>
            </button>  
          <!--<article class="partner-card">
              <div>
                <p class="kicker">${soc.name}</p>
                <h3 style="font-family:var(--font-headline); font-size:1.45rem; margin:0 0 var(--space-xs);">${soc.handle}</h3>
                <p style="margin:0 0 var(--space-sm); font-size:0.9rem; color:var(--on-surface-variant);">${soc.description}</p>
                 <div class="plain-url-box">${soc.plainDomain}</div> 
              </div>
              <div>
                <button type="button" class="btn btn-secondary btn-sm" onclick="copyPartnerUrl('social', '${soc.id}')">${soc.actionLabel}</button>
              </div>
            </article>-->
          `;
        }).join(``);
      }

      const dirMount = document.getElementById(`footer-directions-mount`);
      if (dirMount) {
        dirMount.innerHTML = `
          <!--<div class="plain-url-box">Google Maps: ${MAP_DIRECTIONS.plainDestination}</div>-->
          <div style="display:flex; gap:var(--space-xs); flex-wrap:wrap;">
            <button type="button" class="btn btn-primary btn-sm" onclick="copyDirectionsInfo()">Directions</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="copyAddressOnly()">Copy Address</button>
          </div>
        `;
      }
    }

    function copyPartnerUrl(kind, id) {
      const list = kind === `delivery` ? deliveryUrls : socialUrls;
      const item = list.find(function (x) { return x.id === id; });
      if (item) {
        /* window.open(item, '_blank')
        alert(item.plainDomain);*/
        item.plainSecondDomain ? window.open(item.plainDomain, '_blank') : window.open(item.plainDomain, '_blank');
        
       // copyTextToClipboard(item.plainDomain, `Copied ${item.name} destination`);
      }
    }

    function copyDirectionsInfo() {
      copyTextToClipboard(`${MAP_DIRECTIONS.searchPrompt} (${MAP_DIRECTIONS.plainDestination})`, `Copied Google Maps directions for Langley kitchen`);
      
        window.open('https://maps.app.goo.gl/MyvaZ1DN5UNXVNpV6', '_blank');
    }

    function copyAddressOnly() {
      copyTextToClipboard(KITCHEN_ADDRESS, `Copied Langley kitchen address`);
    }

    /* =========================================================================
       9. CLIPBOARD & INLINE TOAST UTILITIES
       ========================================================================= */

    let toastTimer = null;

    function showToast(message) {
      const toast = document.getElementById(`inline-toast`);
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add(`is-visible`);
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toast.classList.remove(`is-visible`);
      }, 2800);
    }

    function copyTextToClipboard(text, successMsg) {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(text).then(function () {
          showToast(successMsg);
        }).catch(function () {
          fallbackCopy(text, successMsg);
        });
      } else {
        fallbackCopy(text, successMsg);
      }
    }

    function fallbackCopy(text, successMsg) {
      const ta = document.createElement(`textarea`);
      ta.value = text;
      ta.style.position = `fixed`;
      ta.style.opacity = `0`;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand(`copy`);
        showToast(successMsg);
      } catch (e) {
        showToast(`Ready: ${text}`);
      }
      document.body.removeChild(ta);
    }

    /* =========================================================================
       10. INITIALIZATION
       ========================================================================= */

    async function initApp() {
      await loadPersistedState();
      renderLiveKitchenStatus();
      renderPromoStrip();
      renderMenuSection();
      renderCartDrawer();
      renderAgreementSections();
      renderCateringAndAgreement();
      renderDeliveryAndSocial();

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      setInterval(renderLiveKitchenStatus, 60000);

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === 'function') {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initApp);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
      initMobileMenu();
    }
     
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "z0bc7d3tvm");
 
  const hamburgerBtn = document.querySelector('.hamburger-btn, [aria-label*="Menu"], #mobileMenuBtn');
const mobileNavPanel = document.getElementById('mobileNavPanel');

if (hamburgerBtn && mobileNavPanel) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileNavPanel.classList.toggle('is-open');
    mobileNavPanel.hidden = !isOpen;
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNavPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNavPanel.classList.remove('is-open');
      mobileNavPanel.hidden = true;
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function initAgreementModal({
  triggerSelector = 'a[href="#agreement"]',
  modalId = "agreement-modal",
  mobileMenuOpenClasses = ["mobile-nav-open", "nav-open", "is-open", "active"],
  mobileDrawerSelector = ".mobile-nav, .nav-drawer, .mobile-menu",
  onConfirm = null
} = {}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const triggers = Array.from(document.querySelectorAll(triggerSelector));
  const closeBtn = modal.querySelector("#close-agreement-modal");
  const jumpLink = modal.querySelector("#jump-to-full-agreement");
  const form = modal.querySelector("#agreement-modal-form");
  const nameInput = modal.querySelector("#modal-signatory-name");
  const checkInput = modal.querySelector("#modal-ack-check");

  let lastFocusedElement = null;

  function closeMobileDrawerIfOpen() {
    mobileMenuOpenClasses.forEach((cls) => {
      document.body.classList.remove(cls);
      document.documentElement.classList.remove(cls);
    });

    document.querySelectorAll(mobileDrawerSelector).forEach((drawer) => {
      mobileMenuOpenClasses.forEach((cls) => drawer.classList.remove(cls));
      if (drawer.hasAttribute("aria-expanded")) {
        drawer.setAttribute("aria-expanded", "false");
      }
    });
  }

  function setTriggersExpanded(expanded) {
    triggers.forEach((el) => {
      if (el.hasAttribute("aria-expanded")) {
        el.setAttribute("aria-expanded", String(expanded));
      }
    });
  }

  function openModal(event) {
    if (event) {
      event.preventDefault();
      // Prevent any delegated parent/drawer handlers from reopening or interfering
      event.stopPropagation();
    }

    lastFocusedElement = event?.currentTarget || document.activeElement;

    if (event?.currentTarget?.classList?.contains("mobile-toggleable")) {
      closeMobileDrawerIfOpen();
    }

    modal.hidden = false;
    document.body.classList.add("modal-open");
    setTriggersExpanded(true);

    // Defer focus slightly so any mobile drawer close transition doesn't steal focus
    requestAnimationFrame(() => {
      (nameInput || closeBtn)?.focus();
    });
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    setTriggersExpanded(false);

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }triggers.forEach((link) => {
    link.addEventListener("click", openModal);
  });

  closeBtn?.addEventListener("click", closeModal);

  jumpLink?.addEventListener("click", () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    setTriggersExpanded(false);
  });

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = {
      signatoryName: nameInput?.value.trim() || "",
      acknowledged: Boolean(checkInput?.checked),
      signedAt: new Date().toISOString()
    };

    if (typeof onConfirm === "function") {
      onConfirm(payload);
    }
    closeModal();
  });

  return { open: openModal, close: closeModal };
}

const agreementLink = document.querySelector('a.nav-link.mobile-toggleable[href="#agreement"]');

agreementLink?.addEventListener("click", (event) => {
  event.preventDefault();

  // If you have a mobile menu / drawer toggle helper, close it cleanly first
  document.body.classList.remove("mobile-nav-open", "nav-open");

  openAgreementModal(event);
});

document.addEventListener(
  "click",
  (event) => {
    const trigger = event.target.closest('[data-agreement-trigger], a[href="#agreement"]');
    if (!trigger) return;

    event.preventDefault();

    const modal = document.getElementById("agreement-modal");
    if (!modal) {
      console.warn("Agreement modal (#agreement-modal) not found in DOM.");
      return;
    }

    // Close mobile menu state if present
    document.body.classList.remove("mobile-nav-open", "nav-open", "is-open", "active");
    document.documentElement.classList.remove("mobile-nav-open", "nav-open", "is-open", "active");

    modal.hidden = false;
    document.body.classList.add("modal-open");
    trigger.setAttribute("aria-expanded", "true");
  },
  true
);

const agreementModal = document.getElementById("agreement-modal");

agreementModal?.addEventListener(
  "click",
  (event) => {
    const closeTrigger = event.target.closest(
      "#close-agreement-modal, [data-close-modal], .mgk-modal__close, [aria-label*='Close' i]"
    );
    if (!closeTrigger) return;

    event.preventDefault();
    event.stopPropagation();
    agreementModal.hidden = true;
    agreementModal.setAttribute("hidden", "");
    agreementModal.classList.remove("is-open", "open", "active");
    document.body.classList.remove("modal-open");
  },
  true
);
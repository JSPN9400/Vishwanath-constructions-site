const THEME_KEY = "vishwanathTheme";
const LANGUAGE_KEY = "vishwanathLanguage";

const translations = {
  en: {
    pageTitle: "Vishwanath Construction | Bihar Home Construction - Patna",
    metaDescription: "Vishwanath Construction - Patna, Bihar's trusted home construction company. 12+ years, 240+ homes, GST registered support.",
    ogTitle: "Vishwanath Construction | Bihar Home Construction",
    ogDescription: "Trusted Patna home construction company with clear quotation and practical execution support.",
    loaderPrompt: "Choose your language",
    floatingChat: "Chat",
    navHome: "Home",
    navOffers: "Offers",
    navServices: "Services",
    navBusiness: "Business",
    navStandards: "Standards",
    navPackages: "Packages",
    navProjects: "Projects",
    navTeam: "Team",
    navFaq: "FAQ",
    navContact: "Contact",
    navQuote: "Get Quotation",
    menuButton: "Menu",
    heroHeading: "Build Your Dream <em>Home</em><br />In Patna",
    heroQuote: "Free Quote",
    heroWhatsapp: "WhatsApp Us",
    heroBadgeEstablished: "Est. 2012",
    heroBadgeRera: "RERA Support",
    heroScroll: "Scroll",
    feature1Title: "Home Construction",
    feature1Text: "From foundation to roof, complete execution",
    feature2Title: "Clear Quotation",
    feature2Text: "Transparent estimate with GST breakup",
    feature3Title: "Daily Support",
    feature3Text: "Regular updates on WhatsApp and call",
    trust1: "Years Experience",
    trust2: "Homes Delivered",
    trust3: "On Time Delivery",
    trust4: "Registered Support",
    standardsLabel: "Industry Standards",
    standardsHeading: "Built With <strong>Clear Site Standards</strong>",
    standardsCopy: "Materials, supervision and reporting follow practical standards so families get clarity along with construction progress.",
    standard1Title: "Material Checks",
    standard1Text: "Brand discussion, quantity checks and site delivery review before key stages begin.",
    standard2Title: "Stage-wise Supervision",
    standard2Text: "Foundation, RCC, brickwork, plaster and finishing are reviewed in planned stages.",
    standard3Title: "Timeline Updates",
    standard3Text: "Families receive regular communication on site progress, pending work and next milestones.",
    standard4Title: "Documentation and Billing",
    standard4Text: "Quotation, payment milestones and billing communication stay documented and easy to track.",
    offersLabel: "Live Offers",
    offersHeading: "Current <strong>Deals &amp; Updates</strong>",
    offersCopy: "Latest offers, project updates and special deals can be managed from admin and shown here.",
    servicesLabel: "Our Services",
    servicesHeading: "We Handle <strong>Every Part Of Construction</strong>",
    servicesCopy: "From planning to finishing, one reliable team handles the full work.",
    service1Title: "New Home Construction",
    service1Text: "Complete house construction from structure to finishing with quality materials and supervised execution.",
    service2Title: "Renovation and Upgrade",
    service2Text: "Flooring, tiles, paint, plumbing, electrical and smart rework for old homes.",
    service3Title: "Civil Execution",
    service3Text: "Foundation, column, slab, brickwork and plaster under practical site supervision.",
    service4Title: "Turnkey Delivery",
    service4Text: "From design and material planning to final handover, everything in one package.",
    businessLabel: "Business Essentials",
    businessHeading: "Everything A Family Needs <strong>Before Starting Construction</strong>",
    businessCopy: "Planning, pricing, documentation and accountability - the important business side is covered too.",
    business1Title: "Detailed Cost Planning",
    business1Text: "Area-wise estimate, package breakup, stage-wise costing and practical budget guidance before work starts.",
    business2Title: "Material and Billing Transparency",
    business2Text: "Brand discussion, quantity tracking, GST billing and milestone payments for better clarity.",
    business3Title: "Site Reporting",
    business3Text: "Photo updates, call coordination and regular status sharing so families stay informed from anywhere.",
    business4Title: "Documentation Support",
    business4Text: "Quotation, contractor scope, payment schedule and basic approval guidance kept organized from day one.",
    roomsLabel: "Inside The Home",
    roomsHeading: "See Your Future Home <em>Now</em>",
    roomsCopy: "Feel the spaces we build for families in and around Patna.",
    room1: "Living Room",
    room2: "Bedroom",
    room3: "Kitchen",
    room4: "Balcony and Garden",
    processLabel: "Step By Step",
    processHeading: "How Your Home <strong>Gets Built</strong>",
    processCopy: "From site visit to handover, every step is planned clearly.",
    process1Title: "Site Visit",
    process1Text: "Plot review, discussion and practical starting guidance.",
    process2Title: "Design and Estimate",
    process2Text: "Plan finalization with quotation and work scope clarity.",
    process3Title: "Approvals and Planning",
    process3Text: "Required documentation and schedule alignment before execution.",
    process4Title: "Construction",
    process4Text: "Stage-wise execution with reporting, supervision and payments.",
    process5Title: "Finishing and Handover",
    process5Text: "Final checks, closure and key handover to the family.",
    portfolioLabel: "Our Projects",
    portfolioHeading: "More Than <strong>240 Homes</strong> Delivered",
    portfolioNote: "Want to see more completed projects? Message us on WhatsApp for the full portfolio:",
    packagesLabel: "Popular Packages",
    packagesHeading: "Choose A <strong>Construction Style</strong>",
    packagesCopy: "Different families need different levels of support, so we present the work in practical package styles.",
    package1Badge: "Essential",
    package1Title: "Labour Contract",
    package1Text: "Best when owner wants to manage material and only needs execution support at site.",
    package2Badge: "Popular",
    package2Title: "Material With Construction",
    package2Text: "Suitable for families wanting clearer budgeting with coordinated material and labour handling.",
    package3Badge: "Premium",
    package3Title: "Turnkey Home Delivery",
    package3Text: "For those who want planning, execution, finishing and handover support in one flow.",
    teamLabel: "Our Team",
    teamHeading: "The People Behind <strong>Your Home</strong>",
    teamCopy: "A practical on-ground team for planning, supervision and execution.",
    team1Role: "Founder",
    team1Text: "Client discussion, planning direction and site coordination from quotation to handover.",
    team2Role: "Site Engineers",
    team2Name: "Execution Team",
    team2Text: "Daily monitoring of structure, material flow, quality checks and progress reporting.",
    team3Role: "Skilled Workforce",
    team3Name: "Masons and Specialists",
    team3Text: "Experienced civil, finishing, plumbing and electrical teams working stage by stage.",
    coverageLabel: "Service Areas",
    coverageHeading: "We Work Across <strong>Patna And Nearby Areas</strong>",
    coverageCopy: "For new homes, renovation and turnkey support, we serve families across city locations and nearby residential belts.",
    coverageNearby: "Nearby Town Projects",
    reviewLabel: "Customer Reviews",
    reviewHeading: "Google And Customer Feedback",
    reviewCta: "See All Google Reviews",
    reviewAddCta: "Add Google Review",
    aboutLabel: "Why Vishwanath",
    aboutHeading: "Bihar's Trusted <em>Construction Partner</em>",
    aboutCopy: "Since 2012, Vishwanath Construction has focused on helping families in Patna build practical, durable and budget-aware homes. Clear communication and local execution stay at the center of every project.",
    aboutBadge1: "Operating since 2012",
    aboutBadge2: "Transparent billing",
    stat1: "Workers",
    stat2: "Custom Planning",
    stat3: "Structural Support",
    stat4: "Project Experience",
    quote1: "\"Vishwanath Construction completed our 3BHK on time and kept the process easy to follow with regular updates.\"",
    quote1By: "- Ramesh Prasad, Boring Road, Patna",
    quote2: "\"Pricing was transparent and the team stayed available whenever our family had questions.\"",
    quote2By: "- Sunita Devi, Kankarbagh, Patna",
    aboutCta: "Get Free Quote",
    financeLabel: "Budget Help",
    financeHeading: "Smart <em>Budget Planning</em>",
    financeCopy: "Estimate, payment planning and budget clarity for a smooth start.",
    finance1Title: "Cost Estimator",
    finance1Text: "Area, floor and package based estimate in minutes with organized cost direction.",
    finance1Link: "Open Quote Tool",
    finance2Title: "Home Loan Guidance",
    finance2Text: "Basic help for documents, lender discussion and planning your build budget sensibly.",
    finance3Title: "Transparent Billing",
    finance3Text: "Milestone payments, GST billing and straightforward financial communication.",
    faqLabel: "FAQ",
    faqHeading: "Frequently Asked <em>Questions</em>",
    faq1Q: "How long does a 3BHK home usually take?",
    faq1A: "A typical family home may take around 10 to 13 months depending on plot, design, approvals and finishing scope.",
    faq2Q: "Do you provide GST billing?",
    faq2A: "Yes. We work with transparent billing and GST support so families can track payments with clarity.",
    faq3Q: "Can we use our own material?",
    faq3A: "Yes. Depending on the project, material supply can be owner-managed or contractor-managed.",
    faq4Q: "Do you help with quotation before starting?",
    faq4A: "Yes. We can review the requirement, discuss the scope and prepare a practical quotation before execution begins.",
    contactLabel: "Talk To Us",
    contactHeading: "Start Your <em>Home Project</em>",
    contactOfficeLabel: "Office",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactQuote: "Get Quote",
    contactWhatsapp: "WhatsApp",
    socialTitle: "Links and Social",
    footerHome: "Home",
    footerAbout: "About",
    footerQuote: "Quote",
    themeDark: "Dark Mode",
    themeLight: "Light Mode"
  },
  hi: {
    pageTitle: "Vishwanath Construction | बिहार घर निर्माण - पटना",
    metaDescription: "Vishwanath Construction - पटना, बिहार की भरोसेमंद घर निर्माण कंपनी। 12+ साल, 240+ घर, जीएसटी सपोर्ट।",
    ogTitle: "Vishwanath Construction | बिहार घर निर्माण",
    ogDescription: "पटना की भरोसेमंद घर निर्माण कंपनी, साफ कोटेशन और व्यावहारिक निर्माण सहयोग के साथ।",
    loaderPrompt: "अपनी भाषा चुनें",
    floatingChat: "चैट",
    navHome: "होम",
    navOffers: "ऑफर",
    navServices: "सेवाएं",
    navBusiness: "बिजनेस",
    navStandards: "स्टैंडर्ड्स",
    navPackages: "पैकेज",
    navProjects: "प्रोजेक्ट्स",
    navTeam: "टीम",
    navFaq: "सवाल",
    navContact: "संपर्क",
    navQuote: "कोटेशन लें",
    menuButton: "मेन्यू",
    heroHeading: "अपना सपना <em>घर</em><br />पटना में बनाइए",
    heroQuote: "फ्री कोटेशन",
    heroWhatsapp: "व्हाट्सऐप करें",
    heroBadgeEstablished: "स्थापना 2012",
    heroBadgeRera: "रेरा सहायता",
    heroScroll: "स्क्रॉल",
    feature1Title: "घर निर्माण",
    feature1Text: "नींव से छत तक पूरा काम",
    feature2Title: "साफ कोटेशन",
    feature2Text: "जीएसटी के साथ स्पष्ट अनुमान",
    feature3Title: "रोजाना सहायता",
    feature3Text: "व्हाट्सऐप और कॉल पर नियमित अपडेट",
    trust1: "साल का अनुभव",
    trust2: "घर पूरे किए",
    trust3: "समय पर डिलीवरी",
    trust4: "रजिस्टर्ड सहायता",
    standardsLabel: "इंडस्ट्री स्टैंडर्ड्स",
    standardsHeading: "<strong>साफ साइट स्टैंडर्ड्स</strong> के साथ निर्माण",
    standardsCopy: "मैटेरियल, सुपरविजन और रिपोर्टिंग को व्यावहारिक स्टैंडर्ड्स के साथ रखा जाता है ताकि परिवार को स्पष्टता मिले।",
    standard1Title: "मैटेरियल चेक",
    standard1Text: "मुख्य स्टेज शुरू होने से पहले ब्रांड, मात्रा और साइट डिलीवरी की जांच।",
    standard2Title: "स्टेज-वाइज सुपरविजन",
    standard2Text: "फाउंडेशन, आरसीसी, ईंट का काम, प्लास्टर और फिनिशिंग की अलग-अलग स्टेज पर निगरानी।",
    standard3Title: "टाइमलाइन अपडेट",
    standard3Text: "परिवार को साइट प्रोग्रेस, बाकी काम और अगले माइलस्टोन की जानकारी मिलती रहती है।",
    standard4Title: "डॉक्यूमेंट और बिलिंग",
    standard4Text: "कोटेशन, पेमेंट माइलस्टोन और बिलिंग कम्युनिकेशन को व्यवस्थित रखा जाता है।",
    offersLabel: "लाइव ऑफर",
    offersHeading: "अभी के <strong>ऑफर और अपडेट</strong>",
    offersCopy: "नए ऑफर, प्रोजेक्ट अपडेट और खास डील यहां दिखेंगी।",
    servicesLabel: "हमारी सेवाएं",
    servicesHeading: "निर्माण का <strong>हर जरूरी काम</strong>",
    servicesCopy: "प्लानिंग से फिनिशिंग तक एक भरोसेमंद टीम पूरा काम संभालती है।",
    service1Title: "नया घर निर्माण",
    service1Text: "स्ट्रक्चर से फिनिशिंग तक पूरा घर निर्माण, क्वालिटी मैटेरियल और निगरानी के साथ।",
    service2Title: "रिनोवेशन और अपग्रेड",
    service2Text: "फ्लोरिंग, टाइल्स, पेंट, प्लंबिंग, इलेक्ट्रिकल और पुराने घर की स्मार्ट मरम्मत।",
    service3Title: "सिविल एक्जीक्यूशन",
    service3Text: "फाउंडेशन, कॉलम, स्लैब, ईंट का काम और प्लास्टर, साइट सुपरविजन के साथ।",
    service4Title: "टर्नकी डिलीवरी",
    service4Text: "डिजाइन, मैटेरियल प्लानिंग और फाइनल हैंडओवर तक सब एक पैकेज में।",
    businessLabel: "जरूरी बिजनेस जानकारी",
    businessHeading: "निर्माण शुरू करने से पहले <strong>परिवार को जो चाहिए</strong>",
    businessCopy: "प्लानिंग, प्राइसिंग, डॉक्यूमेंटेशन और जवाबदेही - जरूरी बिजनेस हिस्सा भी पूरी तरह कवर है।",
    business1Title: "डिटेल कॉस्ट प्लानिंग",
    business1Text: "एरिया, पैकेज और स्टेज के हिसाब से बजट प्लान ताकि शुरुआत साफ रहे।",
    business2Title: "मैटेरियल और बिलिंग में पारदर्शिता",
    business2Text: "ब्रांड चर्चा, मात्रा ट्रैकिंग, जीएसटी बिलिंग और माइलस्टोन पेमेंट की स्पष्टता।",
    business3Title: "साइट रिपोर्टिंग",
    business3Text: "फोटो अपडेट, कॉल कोऑर्डिनेशन और नियमित स्टेटस शेयरिंग ताकि परिवार दूर रहकर भी जुड़ा रहे।",
    business4Title: "डॉक्यूमेंट सहायता",
    business4Text: "कोटेशन, काम का दायरा, पेमेंट शेड्यूल और बेसिक अप्रूवल गाइडेंस व्यवस्थित रखा जाता है।",
    roomsLabel: "घर के अंदर",
    roomsHeading: "अपने भविष्य के घर को <em>अभी देखें</em>",
    roomsCopy: "पटना और आसपास के परिवारों के लिए हम जैसे स्पेस बनाते हैं, उन्हें महसूस करें।",
    room1: "लिविंग रूम",
    room2: "बेडरूम",
    room3: "किचन",
    room4: "बालकनी और गार्डन",
    processLabel: "एक-एक कदम",
    processHeading: "आपका घर <strong>कैसे बनता है</strong>",
    processCopy: "साइट विजिट से हैंडओवर तक हर स्टेप पहले से साफ रहता है।",
    process1Title: "साइट विजिट",
    process1Text: "प्लॉट देखना, चर्चा और शुरुआत की सही सलाह।",
    process2Title: "डिजाइन और अनुमान",
    process2Text: "प्लान फाइनल, कोटेशन और काम की स्पष्टता।",
    process3Title: "अप्रूवल और प्लानिंग",
    process3Text: "जरूरी डॉक्यूमेंट और काम शुरू होने से पहले शेड्यूल तय करना।",
    process4Title: "निर्माण",
    process4Text: "स्टेज के हिसाब से काम, सुपरविजन, रिपोर्टिंग और पेमेंट।",
    process5Title: "फिनिशिंग और हैंडओवर",
    process5Text: "फाइनल जांच के बाद परिवार को घर सौंपना।",
    portfolioLabel: "हमारे प्रोजेक्ट्स",
    portfolioHeading: "<strong>240 से ज्यादा घर</strong> पूरे किए",
    portfolioNote: "और ज्यादा पूरे प्रोजेक्ट देखना है? पूरा पोर्टफोलियो पाने के लिए व्हाट्सऐप करें:",
    packagesLabel: "लोकप्रिय पैकेज",
    packagesHeading: "<strong>कंस्ट्रक्शन स्टाइल</strong> चुनें",
    packagesCopy: "हर परिवार की जरूरत अलग होती है, इसलिए काम को व्यावहारिक पैकेज स्टाइल में समझाया जाता है।",
    package1Badge: "बेसिक",
    package1Title: "लेबर कॉन्ट्रैक्ट",
    package1Text: "जब मालिक खुद मैटेरियल संभालना चाहता हो और साइट पर सिर्फ काम करवाना हो।",
    package2Badge: "लोकप्रिय",
    package2Title: "मैटेरियल सहित निर्माण",
    package2Text: "उन परिवारों के लिए सही जो बजट में स्पष्टता और मैटेरियल-लेबर दोनों का समन्वय चाहते हैं।",
    package3Badge: "प्रीमियम",
    package3Title: "टर्नकी होम डिलीवरी",
    package3Text: "जो लोग प्लानिंग, निर्माण, फिनिशिंग और हैंडओवर सब एक फ्लो में चाहते हैं।",
    teamLabel: "हमारी टीम",
    teamHeading: "आपके घर के पीछे <strong>काम करने वाले लोग</strong>",
    teamCopy: "प्लानिंग, सुपरविजन और एक्जीक्यूशन के लिए जमीन से जुड़ी टीम।",
    team1Role: "संस्थापक",
    team1Text: "कोटेशन से हैंडओवर तक क्लाइंट चर्चा, प्लानिंग दिशा और साइट कोऑर्डिनेशन।",
    team2Role: "साइट इंजीनियर्स",
    team2Name: "एक्जीक्यूशन टीम",
    team2Text: "स्ट्रक्चर, मैटेरियल, क्वालिटी चेक और प्रोग्रेस रिपोर्टिंग की दैनिक निगरानी।",
    team3Role: "कुशल श्रमिक",
    team3Name: "मिस्त्री और विशेषज्ञ",
    team3Text: "सिविल, फिनिशिंग, प्लंबिंग और इलेक्ट्रिकल के अनुभवी लोग स्टेज वाइज काम करते हैं।",
    coverageLabel: "सेवा क्षेत्र",
    coverageHeading: "<strong>पटना और आसपास</strong> में काम",
    coverageCopy: "नए घर, रिनोवेशन और टर्नकी सपोर्ट के लिए हम शहर और आसपास के रिहायशी इलाकों में काम करते हैं।",
    coverageNearby: "आसपास के टाउन प्रोजेक्ट्स",
    reviewLabel: "कस्टमर रिव्यू",
    reviewHeading: "गूगल और ग्राहक फीडबैक",
    reviewCta: "सभी गूगल रिव्यू देखें",
    reviewAddCta: "गूगल पर रिव्यू लिखें",
    aboutLabel: "क्यों Vishwanath",
    aboutHeading: "बिहार का भरोसेमंद <em>कंस्ट्रक्शन पार्टनर</em>",
    aboutCopy: "2012 से Vishwanath Construction पटना के परिवारों के लिए टिकाऊ, व्यावहारिक और बजट के अनुसार घर बनाने पर काम कर रहा है। साफ बातचीत और लोकल एक्जीक्यूशन हमारी पहचान है।",
    aboutBadge1: "2012 से सेवा",
    aboutBadge2: "पारदर्शी बिलिंग",
    stat1: "वर्कर्स",
    stat2: "कस्टम प्लानिंग",
    stat3: "स्ट्रक्चरल सहायता",
    stat4: "प्रोजेक्ट अनुभव",
    quote1: "\"Vishwanath Construction ने हमारा 3BHK समय पर पूरा किया और पूरी प्रक्रिया आसान रखी।\"",
    quote1By: "- रमेश प्रसाद, बोरिंग रोड, पटना",
    quote2: "\"प्राइसिंग साफ थी और परिवार के हर सवाल पर टीम उपलब्ध रही।\"",
    quote2By: "- सुनीता देवी, कंकड़बाग, पटना",
    aboutCta: "फ्री कोटेशन लें",
    financeLabel: "बजट सहायता",
    financeHeading: "स्मार्ट <em>बजट प्लानिंग</em>",
    financeCopy: "अनुमान, पेमेंट प्लानिंग और बजट स्पष्टता से शुरुआत आसान होती है।",
    finance1Title: "कॉस्ट एस्टिमेटर",
    finance1Text: "एरिया, फ्लोर और पैकेज के आधार पर कुछ मिनट में अनुमान और दिशा।",
    finance1Link: "कोटेशन टूल खोलें",
    finance2Title: "होम लोन गाइडेंस",
    finance2Text: "डॉक्यूमेंट, लेंडर चर्चा और बजट प्लानिंग में बेसिक सहायता।",
    finance3Title: "पारदर्शी बिलिंग",
    finance3Text: "माइलस्टोन पेमेंट, जीएसटी बिलिंग और साफ वित्तीय बातचीत।",
    faqLabel: "सवाल जवाब",
    faqHeading: "अक्सर पूछे जाने वाले <em>सवाल</em>",
    faq1Q: "एक 3BHK घर बनने में कितना समय लगता है?",
    faq1A: "आमतौर पर प्लॉट, डिजाइन, अप्रूवल और फिनिशिंग के अनुसार 10 से 13 महीने लग सकते हैं।",
    faq2Q: "क्या जीएसटी बिलिंग मिलती है?",
    faq2A: "हां। हम पारदर्शी बिलिंग और जीएसटी सपोर्ट के साथ काम करते हैं।",
    faq3Q: "क्या अपना मैटेरियल इस्तेमाल कर सकते हैं?",
    faq3A: "हां। प्रोजेक्ट के हिसाब से मैटेरियल मालिक या कॉन्ट्रैक्टर दोनों मॉडल पर हो सकता है।",
    faq4Q: "क्या शुरुआत से पहले कोटेशन में मदद मिलती है?",
    faq4A: "हां। जरूरत समझकर हम काम का दायरा और प्रैक्टिकल कोटेशन तैयार करते हैं।",
    contactLabel: "बात करें",
    contactHeading: "अपना <em>घर प्रोजेक्ट शुरू करें</em>",
    contactOfficeLabel: "ऑफिस",
    contactPhoneLabel: "फोन",
    contactEmailLabel: "ईमेल",
    contactQuote: "कोटेशन लें",
    contactWhatsapp: "व्हाट्सऐप",
    socialTitle: "लिंक और सोशल",
    footerHome: "होम",
    footerAbout: "अबाउट",
    footerQuote: "कोटेशन",
    themeDark: "डार्क मोड",
    themeLight: "लाइट मोड"
  }
};

const header = document.getElementById("header");
const nav = document.getElementById("navMenu");
const mobileBtn = document.getElementById("mobileMenuBtn");
const themeToggle = document.getElementById("themeToggle");
const languagePicker = document.getElementById("languagePicker");
const headerLanguageSwitch = document.getElementById("headerLanguageSwitch");

function markActiveLanguage(language) {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
}

function getCurrentLanguage() {
  const language = window.localStorage.getItem(LANGUAGE_KEY);
  return language === "hi" ? "hi" : "en";
}

function applyLanguage(language) {
  const resolvedLanguage = language === "hi" ? "hi" : "en";
  const dictionary = translations[resolvedLanguage];

  document.documentElement.lang = resolvedLanguage;
  document.body.dataset.language = resolvedLanguage;
  window.localStorage.setItem(LANGUAGE_KEY, resolvedLanguage);
  document.title = dictionary.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }
  if (ogTitle) {
    ogTitle.setAttribute("content", dictionary.ogTitle);
  }
  if (ogDescription) {
    ogDescription.setAttribute("content", dictionary.ogDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) {
      element.innerHTML = dictionary[key];
    }
  });

  markActiveLanguage(resolvedLanguage);

  applyTheme(document.body.dataset.theme || window.localStorage.getItem(THEME_KEY) || "light");
  renderSettings();
  renderOffers();
  renderProjects();
  renderReviews();
}

function hideLoader() {
  window.setTimeout(() => {
    document.getElementById("loader")?.classList.add("done");
  }, 500);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hideLoader, { once: true });
} else {
  hideLoader();
}

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 48);
  },
  { passive: true }
);

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  const language = getCurrentLanguage();

  document.body.dataset.theme = resolvedTheme;
  window.localStorage.setItem(THEME_KEY, resolvedTheme);

  if (themeToggle) {
    themeToggle.textContent =
      resolvedTheme === "dark"
        ? translations[language].themeLight
        : translations[language].themeDark;
  }
}

themeToggle?.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

function bindLanguageButtons(container) {
  container?.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });
}

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
reveals.forEach((element) => revealObserver.observe(element));

const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = Number.parseInt(element.dataset.count || "", 10);

      if (Number.isNaN(target)) {
        counterObserver.unobserve(element);
        return;
      }

      let current = 0;
      const step = Math.max(1, Math.ceil(target / 42));
      const timer = window.setInterval(() => {
        current = Math.min(current + step, target);
        element.textContent = `${current}+`;

        if (current >= target) {
          window.clearInterval(timer);
        }
      }, 36);

      counterObserver.unobserve(element);
    });
  },
  { threshold: 0.45 }
);
counters.forEach((element) => counterObserver.observe(element));

function closeMobileMenu() {
  nav?.classList.remove("nav-open");
  mobileBtn?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

mobileBtn?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("nav-open");
  mobileBtn.setAttribute("aria-expanded", String(Boolean(isOpen)));
  document.body.classList.toggle("menu-open", Boolean(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 900) {
      closeMobileMenu();
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
});

document.querySelectorAll(".faq-q").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item?.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
    });

    if (item && !isOpen) {
      item.classList.add("open");
    }
  });
});

const defaultSiteData = {
  settings: {
    heroTagline: {
      en: "Build your dream home in Patna, Bihar",
      hi: "पटना, बिहार में अपना सपना घर बनाइए"
    },
    heroTag: {
      en: "Bihar Contractor - Clear Quotes - GST Registered",
      hi: "बिहार कॉन्ट्रैक्टर - साफ कोटेशन - जीएसटी सपोर्ट"
    },
    heroSub: {
      en: "Vishwanath Construction - foundation to finishing, everything in one place. 12+ years of trust, 240+ homes completed, GST registered support.",
      hi: "Vishwanath Construction - नींव से फिनिशिंग तक सब एक जगह। 12+ साल का भरोसा, 240+ घर पूरे, जीएसटी सपोर्ट।"
    },
    noticeTitle: "",
    noticeText: "",
    officeAddress: "Vijay Nagar Main Road, Khajpura, Patna, Bihar - 800014",
    phone: "+91 9934683355",
    email: "info.vishwanathconstruction@gmail.com",
    whatsappLink: "https://wa.me/9934683355",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Khajpura%20Patna%20800014&t=&z=15&ie=UTF8&iwloc=&output=embed",
    footerCopy: {
      en: "© 2026 Vishwanath Construction. Trusted home construction support for Bihar families.",
      hi: "© 2026 Vishwanath Construction. बिहार के परिवारों के लिए भरोसेमंद घर निर्माण सहयोग।"
    },
    socialLinks: {
      facebook: "#",
      instagram: "https://www.instagram.com/vishwanath_construction_patna/",
      youtube: "",
      maps: ""
    },
    googleReviewUrl:
      "https://www.google.com/search?q=VISHWANATHCONSTRUCTION&oq=v&sourceid=chrome&ie=UTF-8#mpd=~14315249868047743992/customers/reviews",
    googleReviewAddUrl: "https://g.page/r/CTYSuG7U5zjNEBM/review",
    heroImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
  },
  offers: [
    {
      title: {
        en: "Festive Booking Offer",
        hi: "त्योहार बुकिंग ऑफर"
      },
      tag: {
        en: "Special Deal",
        hi: "खास डील"
      },
      description: {
        en: "Book your project this month and get a free early cost planning discussion.",
        hi: "इस महीने प्रोजेक्ट बुक करें और शुरुआती कॉस्ट प्लानिंग चर्चा मुफ्त पाएं।"
      },
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      buttonText: {
        en: "Get Quote",
        hi: "कोटेशन लें"
      },
      buttonUrl: "quotation/index.html"
    },
    {
      title: {
        en: "New Project Showcase",
        hi: "नया प्रोजेक्ट शोकेस"
      },
      tag: {
        en: "Latest Work",
        hi: "नया काम"
      },
      description: {
        en: "See a recent turnkey home delivered with clean planning and modern finishing.",
        hi: "साफ प्लानिंग और आधुनिक फिनिशिंग के साथ हाल का टर्नकी घर देखें।"
      },
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      buttonText: {
        en: "View Project",
        hi: "प्रोजेक्ट देखें"
      },
      buttonUrl: "#portfolio"
    },
    {
      title: {
        en: "Quick WhatsApp Help",
        hi: "जल्दी व्हाट्सऐप सहायता"
      },
      tag: {
        en: "Fast Support",
        hi: "फास्ट सपोर्ट"
      },
      description: {
        en: "Ask about estimate, labour, materials or process directly on WhatsApp.",
        hi: "अनुमान, मजदूरी, मैटेरियल या प्रोसेस के बारे में सीधे व्हाट्सऐप पर पूछें।"
      },
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
      buttonText: {
        en: "Chat Now",
        hi: "अभी चैट करें"
      },
      buttonUrl: "https://wa.me/9934683355"
    }
  ],
  projects: [
    {
      title: {
        en: "Modern Villa - 4200 sqft",
        hi: "मॉडर्न विला - 4200 वर्गफुट"
      },
      location: {
        en: "Boring Road, Patna",
        hi: "बोरिंग रोड, पटना"
      },
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
    },
    {
      title: {
        en: "Family Home - 2100 sqft",
        hi: "फैमिली होम - 2100 वर्गफुट"
      },
      location: {
        en: "Kankarbagh, Patna",
        hi: "कंकड़बाग, पटना"
      },
      image:
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80"
    },
    {
      title: {
        en: "Apartment Block - 5 Floors",
        hi: "अपार्टमेंट ब्लॉक - 5 फ्लोर"
      },
      location: {
        en: "Rajiv Nagar, Patna",
        hi: "राजीव नगर, पटना"
      },
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80"
    },
    {
      title: {
        en: "Custom Family Home - 2800 sqft",
        hi: "कस्टम फैमिली होम - 2800 वर्गफुट"
      },
      location: {
        en: "Patliputra, Patna",
        hi: "पाटलिपुत्र, पटना"
      },
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80"
    },
    {
      title: {
        en: "Garden Villa - 3500 sqft",
        hi: "गार्डन विला - 3500 वर्गफुट"
      },
      location: {
        en: "Bailey Road, Patna",
        hi: "बेली रोड, पटना"
      },
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=700&q=80"
    }
  ],
  reviews: [
    {
      author: { en: "Ramesh Prasad", hi: "रमेश प्रसाद" },
      location: { en: "Boring Road, Patna", hi: "बोरिंग रोड, पटना" },
      text: {
        en: "Vishwanath Construction completed our 3BHK on time and kept the process easy to follow with regular updates.",
        hi: "Vishwanath Construction ने हमारा 3BHK समय पर पूरा किया और पूरी प्रक्रिया आसान रखी।"
      },
      rating: 5,
      source: "Google"
    },
    {
      author: { en: "Sunita Devi", hi: "सुनीता देवी" },
      location: { en: "Kankarbagh, Patna", hi: "कंकड़बाग, पटना" },
      text: {
        en: "Pricing was transparent and the team stayed available whenever our family had questions.",
        hi: "प्राइसिंग साफ थी और परिवार के हर सवाल पर टीम उपलब्ध रही।"
      },
      rating: 5,
      source: "Google"
    }
  ]
};

function localizedValue(value, language) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] || value.en || Object.values(value)[0] || "";
  }

  return value || "";
}

function getSiteData() {
  const raw = window.localStorage.getItem("vishwanathSiteData");
  if (!raw) {
    return defaultSiteData;
  }

  try {
    const stored = JSON.parse(raw);
    return {
      settings: {
        ...defaultSiteData.settings,
        ...(stored.settings || {}),
        socialLinks: {
          ...defaultSiteData.settings.socialLinks,
          ...(stored.settings?.socialLinks || {})
        }
      },
      offers: stored.offers?.length ? stored.offers : defaultSiteData.offers,
      projects: stored.projects?.length ? stored.projects : defaultSiteData.projects,
      reviews: stored.reviews?.length ? stored.reviews : defaultSiteData.reviews
    };
  } catch {
    return defaultSiteData;
  }
}

function renderReviews() {
  const language = getCurrentLanguage();
  const data = getSiteData();
  const reviewList = document.getElementById("reviewList");
  const googleReviewLink = document.getElementById("googleReviewLink");
  const googleReviewAddLink = document.getElementById("googleReviewAddLink");

  if (!reviewList) {
    return;
  }

  const reviews = data.reviews?.length ? data.reviews : defaultSiteData.reviews;
  reviewList.className = "review-list";
  reviewList.innerHTML = reviews
    .map((review) => {
      const rating = Number(review.rating) || 5;
      const stars = "★★★★★".slice(0, Math.min(Math.max(rating, 1), 5));
      return `
        <article class="review-card">
          <div class="review-stars">${stars}</div>
          <p>${localizedValue(review.text, language)}</p>
          <div class="review-meta">
            <span>${localizedValue(review.author, language)}</span>
            <span>${localizedValue(review.location, language)}</span>
            <span>${review.source || "Google"}</span>
          </div>
        </article>
      `;
    })
    .join("");

  if (googleReviewLink) {
    const reviewUrl = data.settings?.googleReviewUrl || "";
    googleReviewLink.hidden = !reviewUrl;
    googleReviewLink.href = reviewUrl || "#";
  }

  if (googleReviewAddLink) {
    const addUrl = data.settings?.googleReviewAddUrl || "";
    googleReviewAddLink.hidden = !addUrl;
    googleReviewAddLink.href = addUrl || "#";
  }
}

function renderSettings() {
  const language = getCurrentLanguage();
  const { settings } = getSiteData();

  const noticeStrip = document.getElementById("noticeStrip");
  const noticeTitle = document.getElementById("noticeTitle");
  const noticeText = document.getElementById("noticeText");
  const heroTag = document.getElementById("heroTag");
  const heroEyebrow = document.getElementById("heroEyebrow");
  const heroSub = document.getElementById("heroSub");
  const contactOffice = document.getElementById("contactOffice");
  const contactPhone = document.getElementById("contactPhone");
  const contactEmail = document.getElementById("contactEmail");
  const heroWhatsappLink = document.getElementById("heroWhatsappLink");
  const contactWhatsappLink = document.getElementById("contactWhatsappLink");
  const officeMap = document.getElementById("officeMap");
  const footerCopy = document.getElementById("footerCopy");
  const socialLinks = document.getElementById("socialLinks");
  const heroBg = document.querySelector(".hero-bg-img");

  if (noticeStrip) {
    const hasNotice = settings.noticeTitle || settings.noticeText;
    noticeStrip.hidden = !hasNotice;

    if (noticeTitle) {
      noticeTitle.textContent = settings.noticeTitle || "Important";
    }

    if (noticeText) {
      noticeText.textContent = settings.noticeText || "";
    }
  }

  if (heroTag) {
    heroTag.textContent = localizedValue(settings.heroTag, language);
  }

  if (heroEyebrow) {
    heroEyebrow.textContent = localizedValue(settings.heroTagline, language);
  }

  if (heroSub) {
    heroSub.textContent = localizedValue(settings.heroSub, language);
  }

  if (contactOffice) {
    contactOffice.textContent = settings.officeAddress || defaultSiteData.settings.officeAddress;
  }

  if (contactPhone) {
    const phone = settings.phone || defaultSiteData.settings.phone;
    contactPhone.innerHTML = `<a href="tel:${phone.replace(/\s+/g, "")}" style="color:var(--gold)">${phone}</a>`;
  }

  if (contactEmail) {
    const email = settings.email || defaultSiteData.settings.email;
    contactEmail.innerHTML = `<a href="mailto:${email}" style="color:rgba(255,255,255,.72)">${email}</a>`;
  }

  if (heroWhatsappLink) {
    heroWhatsappLink.href = settings.whatsappLink || defaultSiteData.settings.whatsappLink;
  }

  if (contactWhatsappLink) {
    contactWhatsappLink.href = settings.whatsappLink || defaultSiteData.settings.whatsappLink;
  }

  if (officeMap) {
    officeMap.src = settings.mapEmbedUrl || defaultSiteData.settings.mapEmbedUrl;
  }

  if (footerCopy) {
    footerCopy.textContent = localizedValue(settings.footerCopy, language);
  }

  if (heroBg) {
    heroBg.style.backgroundImage = `url("${settings.heroImage || defaultSiteData.settings.heroImage}")`;
  }

  if (socialLinks) {
    const icon = (name) => {
      switch (name) {
        case "Facebook":
          return `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.88h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>`;
        case "Instagram":
          return `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.51 4.51 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.75 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6z"/></svg>`;
        case "YouTube":
          return `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.6 4.5 12 4.5 12 4.5s-5.6 0-7.5.58A3 3 0 0 0 2.4 7.2 31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.12c1.9.58 7.5.58 7.5.58s5.6 0 7.5-.58a3 3 0 0 0 2.1-2.12A31.5 31.5 0 0 0 22 12a31.5 31.5 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/></svg>`;
        case "Maps":
          return `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 9.5 9 2.5 2.5 0 0 0 12 11.5z"/></svg>`;
        default:
          return "";
      }
    };

    const links = [
      { label: "Instagram", url: settings.socialLinks?.instagram },
      { label: "Facebook", url: settings.socialLinks?.facebook },
      { label: "YouTube", url: settings.socialLinks?.youtube },
      { label: "Maps", url: settings.socialLinks?.maps }
    ].filter((item) => item.url);

    socialLinks.innerHTML = links
      .map((item) => {
        const isPlaceholder = item.url === "#";
        const attrs = isPlaceholder
          ? 'href="#" aria-disabled="true"'
          : `href="${item.url}" target="_blank" rel="noreferrer"`;
        return `<a ${attrs} data-social="${item.label.toLowerCase()}">${icon(item.label)}<span>${item.label}</span></a>`;
      })
      .join("");
  }
}

function renderOffers() {
  const container = document.querySelector(".offers-list");
  if (!container) {
    return;
  }

  const language = getCurrentLanguage();
  const offers = getSiteData().offers;
  container.innerHTML = offers
    .map((offer) => {
      const title = localizedValue(offer.title, language);
      const tag = localizedValue(offer.tag, language) || "Update";
      const description = localizedValue(offer.description, language);
      const buttonText = localizedValue(offer.buttonText, language) || "Learn More";
      const buttonUrl = offer.buttonUrl || "#";

      return `
        <div class="offer-card">
          <img class="offer-img" src="${offer.image}" alt="${title}">
          <div class="offer-body">
            <span class="offer-tag">${tag}</span>
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${buttonUrl}" target="${buttonUrl.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${buttonText}</a>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderProjects() {
  const grid = document.querySelector(".project-grid");
  if (!grid) {
    return;
  }

  const language = getCurrentLanguage();
  const projects = getSiteData().projects;
  grid.innerHTML = projects
    .map((project) => {
      const title = localizedValue(project.title, language);
      const location = localizedValue(project.location, language);

      return `
        <div class="project-item">
          <img src="${project.image}" alt="${title}">
          <div class="project-meta"><span>${location}</span><h4>${title}</h4></div>
        </div>
      `;
    })
    .join("");
}

function initDynamicContent() {
  renderSettings();
  renderOffers();
  renderProjects();
  renderReviews();
}

if (document.readyState !== "loading") {
  initDynamicContent();
} else {
  document.addEventListener("DOMContentLoaded", initDynamicContent);
}

bindLanguageButtons(languagePicker);
bindLanguageButtons(headerLanguageSwitch);
applyTheme(window.localStorage.getItem(THEME_KEY) || "light");
applyLanguage(getCurrentLanguage());

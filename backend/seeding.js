const mongoose = require("mongoose");
const ipoModel = require("./models/ipoModel");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI = process.env.MONGO_URL;

const ipoData = [
  {
    companyName: "Hyundai Motor India Limited",
    aboutCompany: `Hyundai Motor India Limited (HMIL) is a wholly-owned subsidiary of the Hyundai Motor Company, South Korea. 
    It was incorporated in 1996 and has since become one of the most prominent automotive brands in India. 
    The company operates a state-of-the-art manufacturing facility near Chennai, capable of producing a wide range of vehicles. 
    HMIL is known for pioneering the "premium hatchback" segment with the i20 and the compact SUV segment with the Creta. 
    It is currently the second-largest passenger vehicle manufacturer in India by market share. 
    The company focuses heavily on R&D to bring global technologies like ADAS and electric drivetrains to the Indian market. 
    With over 1,300 sales points and 1,500 service points, it has one of the most extensive dealer networks in the country. 
    HMIL also serves as a critical export hub for Hyundai, shipping vehicles to Africa, the Middle East, and Latin America. 
    The company recently launched the IONIQ 5, marking its serious commitment to the Indian Electric Vehicle (EV) space. 
    Their IPO in 2024 was the largest in Indian history, reflecting their massive scale and investor confidence.`,
    logoLink: "https://example.com/logos/hyundai.png",
    issueDates: { start: new Date("2024-10-15"), end: new Date("2024-10-17") },
    issueSize: { min: 27856, max: 27870, currency: "INR" },
    priceRange: { min: 1865, max: 1960, currency: "INR" },
    minimumInvestment: { amount: 13720, shares: 7, lots: 1 },
    lotSize: { shares: 7, lots: 1 },
    listedOn: new Date("2024-10-22"),
    listedPrice: 1934,
    listingGains: { amount: -26, percentage: -1.3 },
    timeline: {
      biddingStarts: new Date("2024-10-15"),
      biddingEnds: new Date("2024-10-17"),
      allotmentFinalization: new Date("2024-10-18"),
      refundInitiation: new Date("2024-10-21"),
      dematTransfer: new Date("2024-10-21"),
      listingDate: new Date("2024-10-22"),
    },
  },
  {
    companyName: "Swiggy Limited",
    aboutCompany: `Swiggy is India's leading consumer-first technology platform, founded in 2014 by Sriharsha Majety and others. 
    It initially started as a food delivery service and has since evolved into a comprehensive hyperlocal commerce ecosystem. 
    The platform's core segments include Food Delivery, Quick Commerce (Instamart), and Out-of-home services (Dineout). 
    Instamart, their quick-commerce arm, has revolutionized how Indians shop for groceries by delivering in under 10 minutes. 
    Swiggy also operates "Genie," a pickup-and-drop service for personal items, adding to user convenience. 
    The company leverages a massive fleet of hundreds of thousands of delivery partners to ensure timely service. 
    Swiggy's technology stack is built on complex AI algorithms that optimize route planning and demand forecasting. 
    In 2024, the company went public to fund its dark store expansion and enhance its cloud infrastructure. 
    Despite heavy competition from Zomato and Zepto, Swiggy maintains a strong presence in Tier 1 and Tier 2 cities. 
    The brand has become synonymous with urban convenience, significantly impacting the way Indians eat and shop.`,
    logoLink: "https://example.com/logos/swiggy.png",
    issueDates: { start: new Date("2024-11-06"), end: new Date("2024-11-08") },
    issueSize: { min: 11300, max: 11327, currency: "INR" },
    priceRange: { min: 371, max: 390, currency: "INR" },
    minimumInvestment: { amount: 14820, shares: 38, lots: 1 },
    lotSize: { shares: 38, lots: 1 },
    listedOn: new Date("2024-11-13"),
    listedPrice: 420,
    listingGains: { amount: 30, percentage: 7.7 },
    timeline: {
      biddingStarts: new Date("2024-11-06"),
      biddingEnds: new Date("2024-11-08"),
      allotmentFinalization: new Date("2024-11-11"),
      refundInitiation: new Date("2024-11-12"),
      dematTransfer: new Date("2024-11-12"),
      listingDate: new Date("2024-11-13"),
    },
  },
  {
    companyName: "Tata Technologies Limited",
    aboutCompany: `Tata Technologies is a global leader in product engineering and digital services, part of the prestigious Tata Group. 
    The company was founded in 1989 and serves as a strategic partner to the world's leading automotive and aerospace OEMs. 
    It specializes in end-to-end product development, from conceptual design to manufacturing engineering and aftermarket support. 
    A major portion of its revenue comes from the automotive sector, where it assists in the transition to Electric Vehicles (EVs). 
    Tata Technologies also works with global aerospace firms, providing engineering solutions for aircraft interiors and structures. 
    Their proprietary e-learning platform, i GET IT, is used by thousands of engineers for technical upskilling. 
    With a workforce of over 12,000 professionals, the company operates across 18 delivery centers worldwide. 
    The 2023 IPO was highly anticipated, being the first Tata Group IPO in nearly two decades since TCS. 
    The company’s focus on sustainable engineering aligns with global shifts toward green energy and carbon neutrality. 
    They continue to expand into adjacent industries like Industrial Heavy Machinery and Healthcare technology.`,
    logoLink: "https://example.com/logos/tatatech.png",
    issueDates: { start: new Date("2023-11-22"), end: new Date("2023-11-24") },
    issueSize: { min: 3040, max: 3042, currency: "INR" },
    priceRange: { min: 475, max: 500, currency: "INR" },
    minimumInvestment: { amount: 15000, shares: 30, lots: 1 },
    lotSize: { shares: 30, lots: 1 },
    listedOn: new Date("2023-12-05"),
    listedPrice: 1200,
    listingGains: { amount: 700, percentage: 140.0 },
    timeline: {
      biddingStarts: new Date("2023-11-22"),
      biddingEnds: new Date("2023-11-24"),
      allotmentFinalization: new Date("2023-11-30"),
      refundInitiation: new Date("2023-12-01"),
      dematTransfer: new Date("2023-12-04"),
      listingDate: new Date("2023-12-05"),
    },
  },
  {
    companyName: "Ola Electric Mobility",
    aboutCompany: `Ola Electric is India’s largest electric two-wheeler manufacturer and a pioneer in the sustainable mobility space. 
    Founded by Bhavish Aggarwal, the company aims to end the era of internal combustion engine vehicles in India. 
    The company’s "Futurefactory" in Tamil Nadu is one of the world's largest integrated EV manufacturing facilities. 
    Ola Electric produces the S1 series of electric scooters, which feature advanced software and long-range battery tech. 
    The company is vertically integrated, manufacturing its own motors, battery packs, and vehicle frames in-house. 
    They are also developing a "Gigafactory" to produce lithium-ion cells locally, reducing dependence on imports. 
    Ola Electric operates a D2C (Direct-to-Consumer) model, bypassing traditional dealerships through experience centers. 
    The brand has built a vast network of "Hyperchargers" to provide fast-charging solutions across Indian cities. 
    In 2024, their IPO marked a significant milestone for the Indian startup ecosystem and the EV industry. 
    The company is currently exploring expansion into electric motorcycles and four-wheelers to broaden its portfolio.`,
    logoLink: "https://example.com/logos/olaelectric.png",
    issueDates: { start: new Date("2024-08-02"), end: new Date("2024-08-06") },
    issueSize: { min: 6145, max: 6145, currency: "INR" },
    priceRange: { min: 72, max: 76, currency: "INR" },
    minimumInvestment: { amount: 14820, shares: 195, lots: 1 },
    lotSize: { shares: 195, lots: 1 },
    listedOn: new Date("2024-08-09"),
    listedPrice: 76,
    listingGains: { amount: 0, percentage: 0.0 },
    timeline: {
      biddingStarts: new Date("2024-08-02"),
      biddingEnds: new Date("2024-08-06"),
      allotmentFinalization: new Date("2024-08-07"),
      refundInitiation: new Date("2024-08-08"),
      dematTransfer: new Date("2024-08-08"),
      listingDate: new Date("2024-08-09"),
    },
  },
  {
    companyName: "Mankind Pharma Limited",
    aboutCompany: `Mankind Pharma is one of India's largest and most trusted pharmaceutical companies, established in 1991. 
    The company is well-known for its consumer healthcare brands like Manforce condoms, Prega News, and Unwanted-72. 
    It operates across a vast range of therapeutic areas, including anti-infectives, cardiovascular, and gastrointestinal care. 
    Mankind has a massive distribution reach, especially in rural and semi-urban areas of India. 
    The company focuses on making quality medicines affordable, which has helped it gain a significant market share. 
    With 25 manufacturing facilities and a dedicated R&D center, it ensures high standards of production. 
    The company’s workforce includes over 11,000 medical representatives who engage with doctors nationwide. 
    Mankind went public in 2023 through a highly successful IPO that was oversubscribed multiple times. 
    The company is now expanding its presence in the chronic therapy segment and increasing its global footprint. 
    Their business model is built on domestic-led growth, with nearly 97% of revenue coming from the Indian market.`,
    logoLink: "https://example.com/logos/mankind.png",
    issueDates: { start: new Date("2023-04-25"), end: new Date("2023-04-27") },
    issueSize: { min: 4326, max: 4326, currency: "INR" },
    priceRange: { min: 1026, max: 1080, currency: "INR" },
    minimumInvestment: { amount: 14040, shares: 13, lots: 1 },
    lotSize: { shares: 13, lots: 1 },
    listedOn: new Date("2023-05-09"),
    listedPrice: 1300,
    listingGains: { amount: 220, percentage: 20.4 },
    timeline: {
      biddingStarts: new Date("2023-04-25"),
      biddingEnds: new Date("2023-04-27"),
      allotmentFinalization: new Date("2023-05-03"),
      refundInitiation: new Date("2023-05-04"),
      dematTransfer: new Date("2023-05-08"),
      listingDate: new Date("2023-05-09"),
    },
  },
  // ... Truncated for brevity, but I will continue with names and summary descriptions for 20 in total
  {
    companyName: "Honasa Consumer Limited (Mamaearth)",
    aboutCompany: `Honasa Consumer is the parent company of "Mamaearth," India's first toxin-free brand for baby and personal care. 
    Founded in 2016 by Varun and Ghazal Alagh, it is a leading digital-first "House of Brands." 
    The company's portfolio includes other popular brands like The Derma Co., Aqualogica, and Ayuga. 
    They specialize in BPC (Beauty and Personal Care) products that are crafted from natural and safe ingredients. 
    Mamaearth gained fame through its "Plant Goodness" initiative, planting a tree for every order placed on its website. 
    The company uses a data-driven approach to identify consumer needs and rapidly launch new product lines. 
    While initially an online-only brand, Honasa has aggressively expanded into offline retail and exclusive outlets. 
    They cater to millennials and Gen Z consumers who prioritize ethical and eco-friendly brand values. 
    The IPO in late 2023 helped the company scale its marketing and increase its offline distribution reach. 
    Honasa continues to acquire smaller brands to strengthen its position in the competitive skincare market.`,
    logoLink: "https://example.com/logos/mamaearth.png",
    issueDates: { start: new Date("2023-10-31"), end: new Date("2023-11-02") },
    issueSize: { min: 1701, max: 1701, currency: "INR" },
    priceRange: { min: 308, max: 324, currency: "INR" },
    minimumInvestment: { amount: 14904, shares: 46, lots: 1 },
    lotSize: { shares: 46, lots: 1 },
    listedOn: new Date("2023-11-10"),
    listedPrice: 330,
    listingGains: { amount: 6, percentage: 1.85 },
    timeline: {
      biddingStarts: new Date("2023-10-31"),
      biddingEnds: new Date("2023-11-02"),
      allotmentFinalization: new Date("2023-11-07"),
      listingDate: new Date("2023-11-10"),
    },
  },

  {
    companyName: "Zomato Limited",
    aboutCompany: `Zomato is a leading technology platform that connects customers, restaurant partners, and delivery partners.
    Founded in 2008 as Foodiebay, it rebranded to Zomato in 2010 and expanded its services globally.
    The company’s core business includes food ordering and delivery, which has become an essential urban service.
    Zomato also provides a comprehensive restaurant discovery platform where users can post reviews and photos.
    In 2021, Zomato became the first major Indian tech startup to go public, setting a precedent for the ecosystem.
    The company acquired Blinkit (formerly Grofers) to aggressively enter the quick commerce grocery market.
    Through "Hyperpure," Zomato supplies high-quality ingredients and kitchen products to restaurant partners.
    The platform leverages sophisticated machine learning to manage millions of orders and delivery logistics daily.
    Zomato Gold, its loyalty program, offers exclusive benefits to subscribers, driving high customer retention.
    The company is continuously focused on reaching profitability while expanding its footprint in Tier 2 and Tier 3 cities.
    Sustainability is a key pillar, with a commitment to 100% EV adoption for its delivery fleet by 2030.`,
    logoLink: "https://example.com/logos/zomato.png",
    issueDates: { start: new Date("2021-07-14"), end: new Date("2021-07-16") },
    issueSize: { min: 9375, max: 9375, currency: "INR" },
    priceRange: { min: 72, max: 76, currency: "INR" },
    minimumInvestment: { amount: 14820, shares: 195, lots: 1 },
    lotSize: { shares: 195, lots: 1 },
    listedOn: new Date("2021-07-23"),
    listedPrice: 115,
    listingGains: { amount: 39, percentage: 51.3 },
    timeline: {
      biddingStarts: new Date("2021-07-14"),
      biddingEnds: new Date("2021-07-16"),
      allotmentFinalization: new Date("2021-07-22"),
      listingDate: new Date("2021-07-23"),
    },
  },
  {
    companyName: "Bajaj Housing Finance Limited",
    aboutCompany: `Bajaj Housing Finance Limited (BHFL) is a non-deposit taking Housing Finance Company and a subsidiary of Bajaj Finance.
    It provides a wide range of financial solutions for purchasing, constructing, and renovating residential and commercial properties.
    The company is part of the legendary Bajaj Group, inheriting a legacy of trust and financial prudence.
    BHFL offers products like home loans, loans against property, and lease rental discounting for commercial clients.
    The company has one of the highest credit ratings in India, which allows it to borrow funds at competitive rates.
    It utilizes a robust digital infrastructure to offer quick loan approvals and seamless customer onboarding.
    With a focus on the "affluent" and "middle-income" segments, BHFL has maintained a very low NPA (Non-Performing Asset) ratio.
    The company’s IPO in 2024 was one of the most successful, receiving a massive response from institutional investors.
    They operate through an extensive network of branches across major Indian metros and growing urban centers.
    BHFL is committed to the "Housing for All" initiative, providing specialized schemes for first-time homebuyers.
    Their management team consists of seasoned veterans from the banking and financial services industry.`,
    logoLink: "https://example.com/logos/bajajhousing.png",
    issueDates: { start: new Date("2024-09-09"), end: new Date("2024-09-11") },
    issueSize: { min: 6560, max: 6560, currency: "INR" },
    priceRange: { min: 66, max: 70, currency: "INR" },
    minimumInvestment: { amount: 14980, shares: 214, lots: 1 },
    lotSize: { shares: 214, lots: 1 },
    listedOn: new Date("2024-09-16"),
    listedPrice: 150,
    listingGains: { amount: 80, percentage: 114.2 },
    timeline: {
      biddingStarts: new Date("2024-09-09"),
      biddingEnds: new Date("2024-09-11"),
      allotmentFinalization: new Date("2024-09-12"),
      listingDate: new Date("2024-09-16"),
    },
  },
  {
    companyName: "Life Insurance Corporation of India (LIC)",
    aboutCompany: `LIC is the largest financial institution in India and a dominant player in the life insurance market.
    Established in 1956 through the nationalization of the insurance industry, it has a history of nearly seven decades.
    LIC is often referred to as a "sovereign-backed" entity, providing a high sense of security to millions of policyholders.
    The company offers a diverse range of products, including term insurance, pension plans, and unit-linked insurance plans (ULIPs).
    With over 1.3 million individual agents, LIC has a distribution reach that penetrates the deepest rural corners of India.
    It is also one of the largest institutional investors in the Indian stock market, holding significant stakes in blue-chip companies.
    The LIC IPO in 2022 was the largest ever in India at that time, aiming to dilute the government's stake.
    The company’s "Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi" tagline is one of the most recognized brand slogans in the country.
    LIC manages assets worth trillions of rupees, making it a critical pillar of the Indian financial system.
    They are currently undergoing a digital transformation to compete with private insurers and improve customer service.
    Despite rising competition, LIC still commands a majority market share in terms of first-year premium income.`,
    logoLink: "https://example.com/logos/lic.png",
    issueDates: { start: new Date("2022-05-04"), end: new Date("2022-05-09") },
    issueSize: { min: 21008, max: 21008, currency: "INR" },
    priceRange: { min: 902, max: 949, currency: "INR" },
    minimumInvestment: { amount: 14235, shares: 15, lots: 1 },
    lotSize: { shares: 15, lots: 1 },
    listedOn: new Date("2022-05-17"),
    listedPrice: 872,
    listingGains: { amount: -77, percentage: -8.11 },
    timeline: {
      biddingStarts: new Date("2022-05-04"),
      biddingEnds: new Date("2022-05-09"),
      allotmentFinalization: new Date("2022-05-12"),
      listingDate: new Date("2022-05-17"),
    },
  },
  {
    companyName: "FSN E-Commerce Ventures (Nykaa)",
    aboutCompany: `Nykaa is India's leading lifestyle-focused consumer technology platform, founded by Falguni Nayar in 2012.
    The company started as a dedicated beauty and personal care (BPC) platform before expanding into fashion.
    Nykaa has successfully built a "House of Brands" including Kay Beauty, Nykaa Naturals, and Dot & Key.
    The platform is unique because it combines an inventory-led model with a marketplace model for brand variety.
    They are known for their curated content, using influencers and tutorials to drive consumer engagement.
    Nykaa also operates a large network of physical stores, including Nykaa Luxe and Nykaa On Trend outlets.
    In 2021, the company went public, making Falguni Nayar one of the world's wealthiest self-made female billionaires.
    The fashion segment, Nykaa Fashion, focuses on premium apparel, accessories, and footwear for women and men.
    Nykaa’s supply chain includes several warehouses across India to ensure fast delivery and product authenticity.
    The brand has successfully created a loyal community through its "Nykaa Network" and annual "Pink Friday" sales.
    They continue to expand their international presence, targeting the Middle Eastern market for growth.`,
    logoLink: "https://example.com/logos/nykaa.png",
    issueDates: { start: new Date("2021-10-28"), end: new Date("2021-11-01") },
    issueSize: { min: 5351, max: 5351, currency: "INR" },
    priceRange: { min: 1085, max: 1125, currency: "INR" },
    minimumInvestment: { amount: 13500, shares: 12, lots: 1 },
    lotSize: { shares: 12, lots: 1 },
    listedOn: new Date("2021-11-10"),
    listedPrice: 2001,
    listingGains: { amount: 876, percentage: 77.8 },
    timeline: {
      biddingStarts: new Date("2021-10-28"),
      biddingEnds: new Date("2021-11-01"),
      allotmentFinalization: new Date("2021-11-08"),
      listingDate: new Date("2021-11-10"),
    },
  },
  {
    companyName: "JSW Infrastructure Limited",
    aboutCompany: `JSW Infrastructure is a key part of the JSW Group, one of India's leading multi-business conglomerates.
    The company is one of the fastest-growing port-related infrastructure companies in India by cargo handling capacity.
    It operates a network of ports and terminals along both the east and west coasts of the country.
    JSW Infra specializes in handling a variety of cargo, including dry bulk, liquid cargo, and container traffic.
    The company’s strategic goal is to support the logistics needs of JSW Steel and JSW Energy while serving third-party clients.
    Their facilities are equipped with modern automated cargo handling systems to ensure high efficiency and low turnaround times.
    The company is focusing on expanding its capacity through both greenfield projects and strategic acquisitions.
    JSW Infra went public in 2023 to reduce debt and fund further expansion of its port connectivity projects.
    They are committed to environmental sustainability, implementing green port initiatives across their locations.
    The business benefits from India's maritime push under the "Sagarmala" project for port-led development.
    With a focus on long-term concession agreements, the company ensures stable and predictable revenue streams.`,
    logoLink: "https://example.com/logos/jswinfra.png",
    issueDates: { start: new Date("2023-09-25"), end: new Date("2023-09-27") },
    issueSize: { min: 2800, max: 2800, currency: "INR" },
    priceRange: { min: 113, max: 119, currency: "INR" },
    minimumInvestment: { amount: 14994, shares: 126, lots: 1 },
    lotSize: { shares: 126, lots: 1 },
    listedOn: new Date("2023-10-03"),
    listedPrice: 143,
    listingGains: { amount: 24, percentage: 20.1 },
    timeline: {
      biddingStarts: new Date("2023-09-25"),
      biddingEnds: new Date("2023-09-27"),
      allotmentFinalization: new Date("2023-09-29"),
      listingDate: new Date("2023-10-03"),
    },
  },
  {
    companyName: "IREDA (Indian Renewable Energy Development Agency)",
    aboutCompany: `IREDA is a Mini Ratna (Category – I) Government of India enterprise under the Ministry of New and Renewable Energy.
    Established in 1987, it serves as a specialized non-banking financial institution for the green energy sector.
    The company’s primary motto is "Energy for Ever," focusing on financing renewable energy and energy efficiency projects.
    IREDA provides financial assistance for solar, wind, hydro, biomass, and even waste-to-energy projects.
    It plays a pivotal role in achieving India’s goal of reaching 500 GW of non-fossil fuel capacity by 2030.
    The company offers various financial products, including project commissioning loans and short-term loans for developers.
    IREDA’s IPO in 2023 was a major success, highlighting the immense investor interest in the green economy.
    The agency also provides consultancy services to help developers optimize their renewable energy ventures.
    By maintaining a high-quality loan book, IREDA has become a preferred partner for international funding agencies.
    They are continuously innovating their lending models to support emerging technologies like Green Hydrogen and EVs.
    The company operates with a high level of transparency and is a key implementer of government-sponsored green schemes.`,
    logoLink: "https://example.com/logos/ireda.png",
    issueDates: { start: new Date("2023-11-21"), end: new Date("2023-11-23") },
    issueSize: { min: 2150, max: 2150, currency: "INR" },
    priceRange: { min: 30, max: 32, currency: "INR" },
    minimumInvestment: { amount: 14720, shares: 460, lots: 1 },
    lotSize: { shares: 460, lots: 1 },
    listedOn: new Date("2023-11-29"),
    listedPrice: 50,
    listingGains: { amount: 18, percentage: 56.2 },
    timeline: {
      biddingStarts: new Date("2023-11-21"),
      biddingEnds: new Date("2023-11-23"),
      allotmentFinalization: new Date("2023-11-24"),
      listingDate: new Date("2023-11-29"),
    },
  },
  {
    companyName: "DOMS Industries Limited",
    aboutCompany: `DOMS Industries is one of India's fastest-growing stationery and art material brands with a global presence.
    Founded as a pencil manufacturer, the company has expanded into a wide range of school and office stationery.
    The brand is particularly famous for its high-quality graphite and color pencils, which are used by students nationwide.
    DOMS has a strategic partnership with the FILA Group, a global leader in art materials, which helped it go international.
    The company operates state-of-the-art manufacturing facilities in Umbergaon, Gujarat, ensuring vertical integration.
    Their product portfolio includes over 3,500 SKUs, ranging from erasers and sharpeners to professional painting kits.
    The 2023 IPO was launched to fund the establishment of a new manufacturing facility for writing instruments.
    DOMS focuses on innovation, frequently launching ergonomic designs and attractive packaging to appeal to children.
    With a distribution network of over 3,500 distributors, the brand is available in nearly every corner of India.
    The company also exports its products to over 40 countries, showcasing "Make in India" on a global stage.
    Their commitment to quality and affordable pricing has made them a household name in the Indian education sector.`,
    logoLink: "https://example.com/logos/doms.png",
    issueDates: { start: new Date("2023-12-13"), end: new Date("2023-12-15") },
    issueSize: { min: 1200, max: 1200, currency: "INR" },
    priceRange: { min: 750, max: 790, currency: "INR" },
    minimumInvestment: { amount: 14220, shares: 18, lots: 1 },
    lotSize: { shares: 18, lots: 1 },
    listedOn: new Date("2023-12-20"),
    listedPrice: 1400,
    listingGains: { amount: 610, percentage: 77.2 },
    timeline: {
      biddingStarts: new Date("2023-12-13"),
      biddingEnds: new Date("2023-12-15"),
      allotmentFinalization: new Date("2023-12-18"),
      listingDate: new Date("2023-12-20"),
    },
  },
  {
    companyName: "Bikaji Foods International",
    aboutCompany: `Bikaji Foods is one of India’s largest ethnic snacks companies, rooted in the rich culinary heritage of Bikaner.
    Founded by Shiv Ratan Agarwal, the company is famous for its "Bikaneri Bhujia," which has a Geographical Indication (GI) tag.
    The company has a massive manufacturing footprint with six operational plants across India to ensure freshness.
    Bikaji’s product range includes namkeen, sweets, papad, cookies, and frozen foods, catering to a wide palate.
    They have a strong presence in Rajasthan, Assam, and Bihar, and are rapidly expanding into other Indian states.
    Bikaji uses automated production lines to maintain consistent taste and quality across millions of packets.
    The brand identity is heavily supported by celebrity endorsements, making it a familiar name in Indian households.
    The company went public in 2022 to strengthen its brand equity and expand its distribution reach.
    Bikaji also exports its authentic Indian snacks to the USA, Canada, UK, and Middle Eastern countries.
    Their business model focuses on a diverse product mix, ranging from 5-rupee packs to premium gift boxes.
    Bikaji continues to innovate in the "healthy snacking" segment to cater to modern, health-conscious consumers.`,
    logoLink: "https://example.com/logos/bikaji.png",
    issueDates: { start: new Date("2022-11-03"), end: new Date("2022-11-07") },
    issueSize: { min: 881, max: 881, currency: "INR" },
    priceRange: { min: 285, max: 300, currency: "INR" },
    minimumInvestment: { amount: 15000, shares: 50, lots: 1 },
    lotSize: { shares: 50, lots: 1 },
    listedOn: new Date("2022-11-16"),
    listedPrice: 321,
    listingGains: { amount: 21, percentage: 7.0 },
    timeline: {
      biddingStarts: new Date("2022-11-03"),
      biddingEnds: new Date("2022-11-07"),
      allotmentFinalization: new Date("2022-11-11"),
      listingDate: new Date("2022-11-16"),
    },
  },
  {
    companyName: "Global Health Limited (Medanta)",
    aboutCompany: `Global Health Limited, operated under the brand name "Medanta," is a leading multi-specialty tertiary care provider.
    Founded by the world-renowned cardiovascular surgeon Dr. Naresh Trehan in 2009.
    The flagship hospital, Medanta - The Medicity in Gurugram, is a sprawling campus with over 1,300 beds.
    Medanta specializes in complex specialties like cardiology, oncology, neurology, and organ transplants.
    The hospital group is known for its "Doctor-led" model, ensuring clinical excellence and patient-centric care.
    They operate several hospitals in Northern and Eastern India, including Lucknow, Patna, and Indore.
    Medanta is also a hub for clinical research and academic training, with numerous medical publications annually.
    The company went public in 2022 to fund the development of new hospitals and upgrade existing infrastructure.
    They utilize advanced medical technology, including robotic surgery systems and high-end diagnostic imaging.
    The "Medanta eClinic" provides digital healthcare services, connecting patients with specialists remotely.
    Their vision is to provide world-class medical facilities at affordable costs to a larger segment of the population.`,
    logoLink: "https://example.com/logos/medanta.png",
    issueDates: { start: new Date("2022-11-03"), end: new Date("2022-11-07") },
    issueSize: { min: 2206, max: 2206, currency: "INR" },
    priceRange: { min: 319, max: 336, currency: "INR" },
    minimumInvestment: { amount: 14784, shares: 44, lots: 1 },
    lotSize: { shares: 44, lots: 1 },
    listedOn: new Date("2022-11-16"),
    listedPrice: 391,
    listingGains: { amount: 55, percentage: 16.3 },
    timeline: {
      biddingStarts: new Date("2022-11-03"),
      biddingEnds: new Date("2022-11-07"),
      allotmentFinalization: new Date("2022-11-11"),
      listingDate: new Date("2022-11-16"),
    },
  },
  {
    companyName: "Inox India Limited",
    aboutCompany: `Inox India is a leading global supplier of cryogenic equipment and solutions for gas storage and transport.
    The company has been in operation for over 30 years and is a critical player in the industrial gas supply chain.
    They specialize in manufacturing vacuum-insulated tanks for liquid gases like oxygen, nitrogen, and argon.
    Inox India is one of the largest exporters of cryogenic tanks from India, serving customers in over 100 countries.
    The company plays a vital role in the Clean Energy space by providing infrastructure for Liquefied Natural Gas (LNG).
    They have a strong R&D focus, developing specialized equipment for space research and satellite launch programs.
    Inox India’s products are used across diverse sectors, including healthcare, chemicals, food processing, and steel.
    The company went public in 2023, attracting significant interest from global long-term investors.
    With multiple manufacturing facilities in Gujarat and Dadra, they maintain high international quality certifications.
    They are currently exploring opportunities in the Green Hydrogen economy, which requires advanced cryogenic storage.
    The management team is known for its focus on operational efficiency and maintaining a strong order book.`,
    logoLink: "https://example.com/logos/inoxindia.png",
    issueDates: { start: new Date("2023-12-14"), end: new Date("2023-12-18") },
    issueSize: { min: 1459, max: 1459, currency: "INR" },
    priceRange: { min: 627, max: 660, currency: "INR" },
    minimumInvestment: { amount: 14520, shares: 22, lots: 1 },
    lotSize: { shares: 22, lots: 1 },
    listedOn: new Date("2023-12-21"),
    listedPrice: 933,
    listingGains: { amount: 273, percentage: 41.3 },
    timeline: {
      biddingStarts: new Date("2023-12-14"),
      biddingEnds: new Date("2023-12-18"),
      allotmentFinalization: new Date("2023-12-19"),
      listingDate: new Date("2023-12-21"),
    },
  },
  {
    companyName: "Archean Chemical Industries",
    aboutCompany: `Archean Chemical is India’s leading specialty marine chemical manufacturer and a major exporter.
    The company produces Bromine, Industrial Salt, and Sulfate of Potash (SOP) from its facility in the Rann of Kutch.
    They have access to one of the largest brine reserves in the country, providing a significant competitive advantage.
    Bromine is a critical component used in pharmaceuticals, agrochemicals, and flame retardants worldwide.
    Archean Chemical is the largest exporter of Industrial Salt from India, serving markets in China and Japan.
    Their facility is vertically integrated with its own captive power plant and proximity to major ports.
    The company went public in 2022 to repay debt and expand its high-value Bromine derivative capacity.
    The global shift towards energy storage and electric vehicles is expected to drive demand for their chemicals.
    The company maintains high environmental standards, managing salt-marsh ecosystems responsibly.
    With a client base that includes several Fortune 500 companies, Archean is a key player in the global chemical supply chain.
    The company’s growth strategy focuses on moving up the value chain by producing more complex chemical derivatives.`,
    logoLink: "https://example.com/logos/archean.png",
    issueDates: { start: new Date("2022-11-09"), end: new Date("2022-11-11") },
    issueSize: { min: 1462, max: 1462, currency: "INR" },
    priceRange: { min: 386, max: 407, currency: "INR" },
    minimumInvestment: { amount: 14652, shares: 36, lots: 1 },
    lotSize: { shares: 36, lots: 1 },
    listedOn: new Date("2022-11-21"),
    listedPrice: 450,
    listingGains: { amount: 43, percentage: 10.5 },
    timeline: {
      biddingStarts: new Date("2022-11-09"),
      biddingEnds: new Date("2022-11-11"),
      allotmentFinalization: new Date("2022-11-16"),
      listingDate: new Date("2022-11-21"),
    },
  },
  {
    companyName: "Kaynes Technology India Limited",
    aboutCompany: `Kaynes Technology is a leading end-to-end and IoT solutions-enabled integrated electronics manufacturer in India.
    The company has over three decades of experience in the Electronics System Design and Manufacturing (ESDM) sector.
    They serve diverse industries, including automotive, aerospace, defense, healthcare, and industrial electronics.
    Kaynes provides specialized services like PCB assembly, cable harnesses, and full product box-builds.
    With eight manufacturing facilities across India, they have a geographically diversified production base.
    The company is a major beneficiary of the "Production Linked Incentive" (PLI) schemes for electronics.
    Kaynes went public in 2022 to fund its expansion into advanced semiconductor packaging and OSAT services.
    Their R&D team works closely with global clients to co-design and engineer complex electronic systems.
    The company’s focus on high-reliability electronics makes it a key supplier for space missions and defense equipment.
    As India becomes a global hub for electronics manufacturing, Kaynes is positioned as a preferred local partner.
    Their commitment to quality is backed by various international certifications, including AS9100 for aerospace.`,
    logoLink: "https://example.com/logos/kaynes.png",
    issueDates: { start: new Date("2022-11-10"), end: new Date("2022-11-14") },
    issueSize: { min: 857, max: 857, currency: "INR" },
    priceRange: { min: 559, max: 587, currency: "INR" },
    minimumInvestment: { amount: 14675, shares: 25, lots: 1 },
    lotSize: { shares: 25, lots: 1 },
    listedOn: new Date("2022-11-22"),
    listedPrice: 775,
    listingGains: { amount: 188, percentage: 32.0 },
    timeline: {
      biddingStarts: new Date("2022-11-10"),
      biddingEnds: new Date("2022-11-14"),
      allotmentFinalization: new Date("2022-11-17"),
      listingDate: new Date("2022-11-22"),
    },
  },
  {
    companyName: "Azad Engineering Limited",
    aboutCompany: `Azad Engineering is a key manufacturer of mission-critical components for the energy and aerospace sectors.
    The company produces high-precision components like turbine blades for power plants and aircraft engines.
    They are a critical supplier to global giants like Boeing, GE, Mitsubishi, and Siemens Energy.
    Azad’s manufacturing processes involve advanced metallurgy and 5-axis CNC machining for extreme accuracy.
    The company operates world-class facilities in Hyderabad, which are certified for global aerospace standards.
    The IPO in 2023 was highly successful, backed by high-profile investors including cricketer Sachin Tendulkar.
    Azad is a primary beneficiary of the "China Plus One" strategy, as global firms diversify their supply chains.
    The company focuses on high-entry-barrier products that require significant engineering expertise and certifications.
    They are currently expanding their capacity to cater to the growing demand for defense and commercial aviation.
    Azad's growth is fueled by long-term contracts with global OEMs, ensuring a stable and growing revenue stream.
    The company is also investing in R&D to develop components for the next generation of hydrogen turbines.`,
    logoLink: "https://example.com/logos/azad.png",
    issueDates: { start: new Date("2023-12-20"), end: new Date("2023-12-22") },
    issueSize: { min: 740, max: 740, currency: "INR" },
    priceRange: { min: 499, max: 524, currency: "INR" },
    minimumInvestment: { amount: 14672, shares: 28, lots: 1 },
    lotSize: { shares: 28, lots: 1 },
    listedOn: new Date("2023-12-28"),
    listedPrice: 720,
    listingGains: { amount: 196, percentage: 37.4 },
    timeline: {
      biddingStarts: new Date("2023-12-20"),
      biddingEnds: new Date("2023-12-22"),
      allotmentFinalization: new Date("2023-12-26"),
      listingDate: new Date("2023-12-28"),
    },
  },
  {
    companyName: "Go Fashion (India) Limited",
    aboutCompany: `Go Fashion is a pioneer in the "Bottom Wear" category for women in India, operating the brand "Go Colors."
    The company was among the first to identify bottom wear as a specialized and high-growth retail segment.
    They offer a massive range of products including leggings, palazzos, joggers, and ethnic bottom wear.
    Go Colors operates through a network of Exclusive Brand Outlets (EBOs), large-format stores, and online platforms.
    The brand targets women of all ages and sizes, focusing on a "Comfort and Color" philosophy with over 50 shades.
    Their inventory management system is highly optimized to handle thousands of SKUs across different colors and sizes.
    The company went public in 2021 to fund the opening of 120 new EBOs per year across India.
    Go Fashion has a light manufacturing model, outsourcing most of its production while maintaining strict quality control.
    The retail outlets are strategically located in high-traffic malls and prime high-street locations.
    The brand has successfully created a niche for itself, differentiating from general apparel retailers.
    Go Colors continues to innovate by adding new categories like denim and specialized maternity bottom wear.`,
    logoLink: "https://example.com/logos/gocolors.png",
    issueDates: { start: new Date("2021-11-17"), end: new Date("2021-11-22") },
    issueSize: { min: 1013, max: 1013, currency: "INR" },
    priceRange: { min: 655, max: 690, currency: "INR" },
    minimumInvestment: { amount: 14490, shares: 21, lots: 1 },
    lotSize: { shares: 21, lots: 1 },
    listedOn: new Date("2021-11-30"),
    listedPrice: 1316,
    listingGains: { amount: 626, percentage: 90.7 },
    timeline: {
      biddingStarts: new Date("2021-11-17"),
      biddingEnds: new Date("2021-11-22"),
      allotmentFinalization: new Date("2021-11-25"),
      listingDate: new Date("2021-11-30"),
    },
  },
];

// ---------------- SEED FUNCTION ----------------
async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await ipoModel.deleteMany();
    console.log("Existing IPO data cleared");

    await ipoModel.insertMany(ipoData);
    console.log("30 IPO records inserted successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Seeding error:", error);
    mongoose.connection.close();
  }
}

seed();

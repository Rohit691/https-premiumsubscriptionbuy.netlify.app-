// =============================================
// PRODUCT DATA — Har product ke multiple plans
// =============================================
const PRODUCT_DETAILS = {
  '1': {
    name: 'Canva Pro (Edu)',
    icon: '🎨',
    bg: '#1a0e22',
    tagline: 'Design anything. Publish anywhere. 100M+ premium templates.',
    description: 'Canva Pro gives you unlimited access to premium templates, background remover, brand kit, magic resize, and much more. Perfect for students, designers, and content creators.',
    features: ['100M+ Premium Templates','Background Remover','Brand Kit & Logo Maker','Magic Resize Tool','Team Collaboration','1TB Cloud Storage','Schedule Social Media Posts','Priority Support'],
    plans: [
      { id:'c1', name:'Canva Pro', duration:'01 Month',  price:58,   original:499,  off:88, inStock:true },
      { id:'c2', name:'Canva Pro', duration:'03 Months', price:117,  original:1497, off:92, inStock:true },
      { id:'c3', name:'Canva Pro', duration:'06 Months', price:176,  original:2994, off:94, inStock:true },
      { id:'c4', name:'Canva Pro', duration:'12 Months', price:352,  original:5900, off:94, inStock:true },
    ]
  },
  '2': {
    name: 'Netflix Premium',
    icon: '🎬',
    bg: '#1a0808',
    tagline: 'Watch anywhere. Cancel anytime. Unlimited entertainment.',
    description: 'Netflix Premium gives you 4K Ultra HD streaming on 4 screens simultaneously. Watch the latest movies, web series, documentaries and Netflix Originals without ads.',
    features: ['4K Ultra HD Quality','4 Screens Simultaneously','Download for Offline Viewing','All Netflix Originals','No Ads Ever','Dolby Atmos Sound','Watch on Any Device','New Content Every Week'],
    plans: [
      { id:'n1', name:'Netflix Premium', duration:'01 Month',  price:99,  original:649,  off:85, inStock:true },
      { id:'n2', name:'Netflix Premium', duration:'03 Months', price:249, original:1947, off:87, inStock:true },
      { id:'n3', name:'Netflix Premium', duration:'06 Months', price:480, original:3894, off:88, inStock:true },
      { id:'n4', name:'Netflix Premium', duration:'12 Months', price:899, original:7788, off:88, inStock:false },
    ]
  },
  '3': {
    name: 'ChatGPT Plus',
    icon: '🤖',
    bg: '#081a14',
    tagline: 'GPT-4o access. Faster responses. No limits.',
    description: 'ChatGPT Plus gives you access to GPT-4o, the most powerful AI model. Get faster responses, image generation with DALL-E 3, advanced data analysis, and priority access even during peak hours.',
    features: ['GPT-4o Access','DALL-E 3 Image Generation','Advanced Data Analysis','Priority Access Always','Faster Response Speed','Custom GPTs Access','Code Interpreter','Browsing & Web Search'],
    plans: [
      { id:'g1', name:'ChatGPT Plus', duration:'01 Month',  price:199, original:1700, off:88, inStock:true },
      { id:'g2', name:'ChatGPT Plus', duration:'03 Months', price:499, original:5100, off:90, inStock:true },
      { id:'g3', name:'ChatGPT Plus', duration:'06 Months', price:799, original:10200, off:92, inStock:true },
      { id:'g4', name:'ChatGPT Plus', duration:'12 Months', price:999, original:20400, off:95, inStock:true },
    ]
  },
  '4': {
    name: 'LinkedIn Premium',
    icon: '💼',
    bg: '#060e1a',
    tagline: '5x Better Career Growth with LinkedIn Premium.',
    description: 'LinkedIn Premium helps you get noticed by recruiters, see who viewed your profile, send InMail messages, and access 22,000+ LinkedIn Learning courses. Grow your career faster.',
    features: ['See Who Viewed Your Profile','InMail Messages','22,000+ LinkedIn Learning Courses','Job Insights & Salary Data','Top Applicant Badges','Interview Preparation Tools','Company Insights','AI-Powered Profile Tips'],
    plans: [
      { id:'l1', name:'Career Plan',           duration:'01 Month',  price:99,  original:1300, off:92, inStock:true },
      { id:'l2', name:'Career Plan',           duration:'03 Months', price:587, original:3528, off:83, inStock:true },
      { id:'l3', name:'Career Plan',           duration:'12 Months', price:999, original:14112,off:93, inStock:true },
      { id:'l4', name:'Business Premium',      duration:'03 Months', price:999, original:5000, off:80, inStock:true },
      { id:'l5', name:'Sales Navigator Core',  duration:'02 Months', price:1176,original:7058, off:83, inStock:true },
      { id:'l6', name:'Business Premium',      duration:'12 Months', price:2352,original:20000,off:88, inStock:false },
    ]
  },
  '5': {
    name: 'Amazon Prime',
    icon: '📦',
    bg: '#1a1008',
    tagline: 'Fast delivery + Prime Video + Prime Music. All in one.',
    description: 'Amazon Prime gives you free fast delivery on millions of products, access to Prime Video with exclusive content, Prime Music with 100M+ songs, and exclusive deals on Prime Day.',
    features: ['Free Fast Delivery','Prime Video Streaming','Prime Music 100M+ Songs','Exclusive Prime Day Deals','Prime Reading eBooks','Amazon Photos Storage','Early Access to Deals','Ad-Free Music'],
    plans: [
      { id:'a1', name:'Amazon Prime', duration:'01 Month',  price:79,  original:179,  off:56, inStock:true },
      { id:'a2', name:'Amazon Prime', duration:'03 Months', price:199, original:537,  off:63, inStock:true },
      { id:'a3', name:'Amazon Prime', duration:'06 Months', price:352, original:1074, off:67, inStock:true },
      { id:'a4', name:'Amazon Prime', duration:'12 Months', price:599, original:2148, off:72, inStock:true },
    ]
  },
  '6': {
    name: 'Coursera Plus',
    icon: '📚',
    bg: '#081020',
    tagline: 'Unlimited access to 7,000+ world-class courses.',
    description: 'Coursera Plus gives you unlimited access to 7,000+ courses, Specializations, and Professional Certificates from top universities like Stanford, Google, IBM, and more.',
    features: ['7,000+ Courses Unlimited','Certificates from Top Universities','Google & IBM Professional Certs','Learn at Your Own Pace','Offline Download','Shareable LinkedIn Certificates','Expert Instructors','New Courses Every Month'],
    plans: [
      { id:'co1', name:'Coursera Plus', duration:'01 Month',  price:299,  original:2999, off:90, inStock:true },
      { id:'co2', name:'Coursera Plus', duration:'03 Months', price:799,  original:8997, off:91, inStock:true },
      { id:'co3', name:'Coursera Plus', duration:'12 Months', price:1764, original:9900, off:82, inStock:true },
    ]
  },
  '7': {
    name: 'Nord VPN',
    icon: '🔒',
    bg: '#0d081a',
    tagline: 'Stay private online. Browse securely anywhere.',
    description: 'NordVPN protects your internet connection with military-grade encryption. Access geo-blocked content, stay safe on public WiFi, and browse anonymously with 5,500+ servers worldwide.',
    features: ['5,500+ Servers Worldwide','Military-Grade Encryption','No-Log Policy','Blocks Ads & Malware','6 Devices Simultaneously','Bypass Geo-Restrictions','Kill Switch Feature','24/7 Customer Support'],
    plans: [
      { id:'v1', name:'NordVPN Standard', duration:'01 Month',  price:199, original:700,  off:72, inStock:true },
      { id:'v2', name:'NordVPN Standard', duration:'03 Months', price:587, original:2100, off:72, inStock:true },
      { id:'v3', name:'NordVPN Plus',     duration:'03 Months', price:799, original:2800, off:71, inStock:true },
      { id:'v4', name:'NordVPN Standard', duration:'12 Months', price:999, original:8400, off:88, inStock:false },
    ]
  },
  '8': {
    name: 'Spotify Premium',
    icon: '🎵',
    bg: '#061a0a',
    tagline: 'Music without limits. Offline listening. No ads.',
    description: 'Spotify Premium gives you ad-free music, unlimited skips, offline listening, and high-quality audio. Access 100M+ songs and 5M+ podcasts anytime, anywhere.',
    features: ['Ad-Free Music Always','Offline Downloads','Unlimited Skips','High Quality 320kbps Audio','100M+ Songs','5M+ Podcasts','Spotify DJ Feature','Group Session with Friends'],
    plans: [
      { id:'s1', name:'Spotify Premium', duration:'01 Month',  price:59,  original:119,  off:50, inStock:true },
      { id:'s2', name:'Spotify Premium', duration:'03 Months', price:149, original:357,  off:58, inStock:true },
      { id:'s3', name:'Spotify Premium', duration:'06 Months', price:250, original:714,  off:65, inStock:true },
      { id:'s4', name:'Spotify Premium', duration:'12 Months', price:449, original:1428, off:69, inStock:true },
    ]
  },
  '9': {
    name: 'Adobe Creative',
    icon: '🖼️',
    bg: '#1a0808',
    tagline: 'All 20+ Adobe apps. Photoshop, Illustrator, Premiere & more.',
    description: 'Adobe Creative Cloud All Apps gives you access to 20+ creative desktop and mobile apps including Photoshop, Illustrator, Premiere Pro, After Effects, and 100GB cloud storage.',
    features: ['Photoshop & Lightroom','Illustrator & InDesign','Premiere Pro & After Effects','Acrobat Pro PDF Tools','100GB Cloud Storage','Adobe Fonts Library','Behance Portfolio','Adobe Express'],
    plans: [
      { id:'ad1', name:'All Apps Plan', duration:'01 Month',  price:299,  original:1675, off:82, inStock:true },
      { id:'ad2', name:'All Apps Plan', duration:'03 Months', price:799,  original:5025, off:84, inStock:true },
      { id:'ad3', name:'All Apps Plan', duration:'12 Months', price:1499, original:18000,off:92, inStock:true },
      { id:'ad4', name:'Photography Plan', duration:'12 Months', price:999, original:9000, off:89, inStock:true },
    ]
  },
  '10': {
    name: 'YouTube Premium',
    icon: '▶️',
    bg: '#1a0808',
    tagline: 'No ads. Background play. YouTube Music included.',
    description: 'YouTube Premium removes all ads from YouTube, lets you play videos in the background, download videos offline, and includes YouTube Music Premium at no extra cost.',
    features: ['Zero Ads on All Videos','Background Play','Download Videos Offline','YouTube Music Premium','YouTube Originals Access','Picture-in-Picture Mode','Works on All Devices','Family Plan Available'],
    plans: [
      { id:'y1', name:'YouTube Premium', duration:'01 Month',  price:59,  original:189,  off:69, inStock:true },
      { id:'y2', name:'YouTube Premium', duration:'03 Months', price:149, original:567,  off:74, inStock:true },
      { id:'y3', name:'YouTube Premium', duration:'06 Months', price:320, original:1134, off:72, inStock:true },
      { id:'y4', name:'YouTube Premium', duration:'12 Months', price:599, original:2268, off:74, inStock:false },
    ]
  },
  '11': {
    name: 'Midjourney Pro',
    icon: '🎭',
    bg: '#0f081a',
    tagline: 'Generate stunning AI art in seconds.',
    description: 'Midjourney is the most advanced AI image generator. Create photorealistic images, digital art, logos, and illustrations from simple text prompts. Used by designers and creators worldwide.',
    features: ['Unlimited Image Generation','Highest Quality Images','Stealth Mode (Private)','Fast Generation Speed','Commercial Usage Rights','Custom Styles & Moods','Discord & Web Access','Priority Queue'],
    plans: [
      { id:'m1', name:'Basic Plan',    duration:'01 Month',  price:199, original:880,  off:77, inStock:true },
      { id:'m2', name:'Standard Plan', duration:'01 Month',  price:399, original:2400, off:83, inStock:true },
      { id:'m3', name:'Pro Plan',      duration:'01 Month',  price:699, original:4800, off:85, inStock:true },
      { id:'m4', name:'Pro Plan',      duration:'12 Months', price:999, original:9600, off:90, inStock:true },
    ]
  },
  '12': {
    name: 'Duolingo Super',
    icon: '🦜',
    bg: '#0b1a08',
    tagline: 'Learn any language. No ads. Unlimited hearts.',
    description: 'Duolingo Super (formerly Duolingo Plus) removes all ads, gives you unlimited hearts so you never get blocked, lets you practice offline, and tracks your progress with detailed analytics.',
    features: ['No Ads Ever','Unlimited Hearts','Offline Practice','Progress Tracking','Mistake Review','Personalized Practice','40+ Languages','Achievement Badges'],
    plans: [
      { id:'d1', name:'Duolingo Super', duration:'01 Month',  price:49,  original:800,  off:94, inStock:true },
      { id:'d2', name:'Duolingo Super', duration:'03 Months', price:129, original:2400, off:95, inStock:true },
      { id:'d3', name:'Duolingo Super', duration:'12 Months', price:299, original:8400, off:96, inStock:true },
    ]
  },
  '13': {
    name: 'Grammarly Pro',
    icon: '✍️',
    bg: '#081a15',
    tagline: 'Write better. Everywhere. Powered by AI.',
    description: 'Grammarly Premium checks your grammar, spelling, tone, clarity, and plagiarism. It works across all your apps — email, docs, social media — and gives AI writing suggestions.',
    features: ['Grammar & Spell Check','Tone Detection','Plagiarism Checker','Clarity Suggestions','AI Writing Assistant','Works in All Apps','Full-Sentence Rewrites','Vocabulary Enhancement'],
    plans: [
      { id:'gr1', name:'Grammarly Premium', duration:'01 Month',  price:99,  original:1400, off:93, inStock:true },
      { id:'gr2', name:'Grammarly Premium', duration:'03 Months', price:249, original:4200, off:94, inStock:true },
      { id:'gr3', name:'Grammarly Premium', duration:'12 Months', price:499, original:14400,off:97, inStock:true },
    ]
  },
  '14': {
    name: 'DataCamp Pro',
    icon: '📊',
    bg: '#081220',
    tagline: 'Learn Data Science, Python, AI. Get job-ready.',
    description: 'DataCamp gives you hands-on learning for Data Science, Machine Learning, Python, R, SQL, and more. 400+ courses, real projects, and career tracks to make you job-ready.',
    features: ['400+ Interactive Courses','Python, R, SQL & More','Real-World Projects','Career Track Programs','Skill Assessments','Shareable Certificates','AI & ML Courses','Mobile App Learning'],
    plans: [
      { id:'dc1', name:'DataCamp Pro', duration:'01 Month',  price:299,  original:3000,  off:90, inStock:true },
      { id:'dc2', name:'DataCamp Pro', duration:'03 Months', price:799,  original:9000,  off:91, inStock:true },
      { id:'dc3', name:'DataCamp Pro', duration:'12 Months', price:2352, original:30000, off:92, inStock:true },
    ]
  },
  '15': {
    name: 'Zee5 Premium',
    icon: '🎞️',
    bg: '#1a0a08',
    tagline: 'India\'s biggest OTT. Movies, shows, live TV.',
    description: 'Zee5 Premium gives you access to 4,000+ movies, 1,500+ web series, and 260+ live TV channels in 18 languages. Watch exclusive Zee5 Originals and latest Bollywood releases.',
    features: ['4,000+ Movies','1,500+ Web Series','260+ Live TV Channels','18 Languages','Zee5 Originals','No Ads','HD & 4K Quality','Download for Offline'],
    plans: [
      { id:'z1', name:'Zee5 Premium', duration:'01 Month',  price:59,  original:99,  off:40, inStock:true },
      { id:'z2', name:'Zee5 Premium', duration:'03 Months', price:149, original:297, off:50, inStock:true },
      { id:'z3', name:'Zee5 Premium', duration:'06 Months', price:249, original:594, off:58, inStock:true },
      { id:'z4', name:'Zee5 Premium', duration:'12 Months', price:528, original:1000,off:47, inStock:true },
    ]
  },
  '16': {
    name: 'Capcut Pro',
    icon: '🎥',
    bg: '#08101a',
    tagline: 'Professional video editing. Free templates. AI tools.',
    description: 'CapCut Pro is the most popular video editing app with AI-powered tools, thousands of templates, auto-captions, background remover, and effects used by top creators worldwide.',
    features: ['AI Video Editing Tools','Auto Captions & Subtitles','Background Remover','1000s of Templates','No Watermark Export','4K Video Export','Commercial Usage Rights','Cloud Storage'],
    plans: [
      { id:'cc1', name:'CapCut Pro', duration:'01 Month',  price:199, original:800,  off:75, inStock:true },
      { id:'cc2', name:'CapCut Pro', duration:'03 Months', price:499, original:2400, off:79, inStock:true },
      { id:'cc3', name:'CapCut Pro', duration:'06 Months', price:940, original:8000, off:88, inStock:true },
    ]
  },
  '17': { name:'Quillbot Pro', icon:'✏️', bg:'#0a1a0a', tagline:'AI writing & paraphrasing tool.', description:'QuillBot is an AI-powered writing assistant that paraphrases, summarizes, grammar checks, and translates your text. Perfect for students and professionals.', features:['Unlimited Paraphrasing','7 Writing Modes','Grammar Checker','Summarizer Tool','Plagiarism Checker','Citation Generator','Chrome Extension','Word & Google Docs Plugin'],
    plans:[
      {id:'q1',name:'QuillBot Premium',duration:'01 Month', price:99,  original:800,  off:88,inStock:true},
      {id:'q2',name:'QuillBot Premium',duration:'06 Months',price:234, original:2400, off:90,inStock:true},
      {id:'q3',name:'QuillBot Premium',duration:'12 Months',price:449, original:4800, off:91,inStock:true},
    ]
  },
  '18': { name:'Sony LIV', icon:'📡', bg:'#1a0808', tagline:'Live sports, movies & Sony shows.', description:'Sony LIV Premium gives you access to live sports including IPL, WWE, UEFA, Sony original shows, movies, and international content all in one app.', features:['IPL Live Streaming','UEFA Champions League','WWE Programming','Sony Originals','Latest Bollywood Movies','Hollywood Content','No Ads','HD Quality'],
    plans:[
      {id:'sl1',name:'Sony LIV Premium',duration:'01 Month', price:59,  original:199, off:70,inStock:true},
      {id:'sl2',name:'Sony LIV Premium',duration:'03 Months',price:149, original:399, off:63,inStock:true},
      {id:'sl3',name:'Sony LIV Premium',duration:'06 Months',price:293, original:900, off:67,inStock:true},
    ]
  },
  '19': { name:'Gemini AI Pro', icon:'💎', bg:'#0a081a', tagline:'Google\'s most powerful AI. Unlimited access.', description:'Gemini Advanced gives you access to Google\'s most capable AI model. Get help with complex reasoning, coding, creative writing, analysis, and multimodal tasks.', features:['Gemini Ultra Model','1M Token Context Window','Google Workspace Integration','Code Generation','Image Analysis','Research Assistant','Priority Access','2TB Google Storage'],
    plans:[
      {id:'ge1',name:'Gemini Advanced',duration:'01 Month', price:299,  original:2000,  off:85,inStock:true},
      {id:'ge2',name:'Gemini Advanced',duration:'03 Months',price:799,  original:6000,  off:87,inStock:true},
      {id:'ge3',name:'Gemini Advanced',duration:'12 Months',price:1764, original:24000, off:93,inStock:true},
    ]
  },
  '20': { name:'Swiggy One', icon:'🍔', bg:'#1a0e08', tagline:'Free delivery on food & groceries. Every order.', description:'Swiggy One membership gives you free delivery on all food orders above ₹149, exclusive member discounts, free delivery on Instamart groceries, and priority customer support.', features:['Free Food Delivery','Free Instamart Delivery','Extra 10% Off on Restaurants','Priority Support','Member-Only Deals','No Surge Pricing','Swiggy Genie Benefits','Monthly Exclusive Offers'],
    plans:[
      {id:'sw1',name:'Swiggy One',duration:'01 Month', price:29, original:179, off:84,inStock:true},
      {id:'sw2',name:'Swiggy One',duration:'03 Months',price:49, original:399, off:88,inStock:true},
      {id:'sw3',name:'Swiggy One',duration:'06 Months',price:58, original:599, off:90,inStock:true},
    ]
  },
};

// =============================================
// PRODUCT PAGE — Open as full-screen modal
// =============================================
function openProductPage(productId) {
  const p = PRODUCT_DETAILS[productId];
  if (!p) return;

  let modal = document.getElementById('product-page-modal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'product-page-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:var(--bg);z-index:600;overflow-y:auto;animation:fadeIn .2s ease';

  modal.innerHTML = `
    <style>
      @keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
      .pp-nav{background:var(--bg2);border-bottom:1px solid var(--border);padding:0 24px;height:56px;display:flex;align-items:center;gap:16px;position:sticky;top:0;z-index:10}
      .pp-back{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:7px 14px;border-radius:8px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;font-family:'DM Sans',sans-serif}
      .pp-back:hover{border-color:var(--accent);color:var(--accent)}
      .pp-body{max-width:860px;margin:0 auto;padding:32px 24px}
      .pp-top{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:36px}
      .pp-img{background:${p.bg};border-radius:16px;height:240px;display:flex;align-items:center;justify-content:center;font-size:80px;border:1px solid var(--border)}
      .pp-info h1{font-family:'Syne',sans-serif;font-size:28px;font-weight:800;margin-bottom:8px}
      .pp-tagline{color:var(--muted);font-size:14px;line-height:1.6;margin-bottom:16px}
      .pp-off-badge{background:var(--red);color:#fff;font-size:12px;font-weight:700;padding:4px 10px;border-radius:6px;display:inline-block;margin-bottom:16px}
      .pp-features{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px}
      .pp-features h4{font-size:13px;font-weight:700;color:var(--accent);margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px}
      .pp-feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
      .pp-feat-item{font-size:13px;color:var(--muted);display:flex;align-items:center;gap:6px}
      .pp-feat-item::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
      .pp-plans-title{font-family:'Syne',sans-serif;font-size:20px;font-weight:700;margin-bottom:16px}
      .pp-plans-title span{color:var(--accent)}
      .plan-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:16px;transition:all .2s;flex-wrap:wrap}
      .plan-card:hover{border-color:var(--accent);background:var(--card2)}
      .plan-card.out{opacity:.5;pointer-events:none}
      .plan-left{}
      .plan-name{font-weight:700;font-size:15px;margin-bottom:4px}
      .plan-dur{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:6px}
      .plan-dur-badge{background:var(--bg3);border:1px solid var(--border);border-radius:20px;padding:2px 8px;font-size:11px}
      .plan-price-wrap{display:flex;align-items:baseline;gap:8px;margin-top:10px}
      .plan-price{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;color:var(--accent)}
      .plan-orig{font-size:13px;color:var(--muted);text-decoration:line-through}
      .plan-save{background:#22c77a20;color:var(--green);font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;border:1px solid #22c77a40}
      .plan-right{display:flex;flex-direction:column;gap:8px;min-width:140px}
      .plan-buy-btn{background:var(--accent);color:#000;border:none;padding:11px 20px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;white-space:nowrap}
      .plan-buy-btn:hover{background:#ffd060}
      .plan-add-btn{background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:9px 20px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .2s;white-space:nowrap}
      .plan-add-btn:hover{border-color:var(--accent);color:var(--accent)}
      .out-badge{background:var(--bg3);color:var(--muted);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:600;text-align:center}
      .pp-desc{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:20px;margin-top:28px}
      .pp-desc h4{font-size:13px;font-weight:700;color:var(--accent);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px}
      .pp-desc p{font-size:14px;color:var(--muted);line-height:1.8}
      .pp-trust{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
      .pp-trust-item{background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:8px 14px;font-size:12px;color:var(--muted);display:flex;align-items:center;gap:6px}
      @media(max-width:600px){
        .pp-top{grid-template-columns:1fr}
        .pp-img{height:160px}
        .pp-feat-grid{grid-template-columns:1fr}
        .plan-card{flex-direction:column;align-items:flex-start}
        .plan-right{flex-direction:row;width:100%}
        .plan-buy-btn,.plan-add-btn{flex:1;text-align:center}
      }
    </style>

    <!-- Back Nav -->
    <div class="pp-nav">
      <button class="pp-back" onclick="closeProductPage()">← Back</button>
      <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px">${p.icon} ${p.name}</span>
    </div>

    <!-- Body -->
    <div class="pp-body">

      <!-- Top Section -->
      <div class="pp-top">
        <div class="pp-img">${p.icon}</div>
        <div class="pp-info">
          <div class="pp-off-badge">UPTO ${Math.max(...p.plans.map(x=>x.off))}% OFF 🔥</div>
          <h1>${p.name}</h1>
          <div class="pp-tagline">${p.tagline}</div>
          <div class="pp-features">
            <h4>✨ What's Included</h4>
            <div class="pp-feat-grid">
              ${p.features.map(f=>`<div class="pp-feat-item">${f}</div>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Plans -->
      <div class="pp-plans-title">Choose Your <span>Plan 📦</span></div>
      ${p.plans.map(plan => `
        <div class="plan-card ${plan.inStock?'':'out'}">
          <div class="plan-left">
            <div class="plan-name">${plan.name}</div>
            <div class="plan-dur"><span class="plan-dur-badge">⏱ ${plan.duration}</span></div>
            <div class="plan-price-wrap">
              <span class="plan-price">₹${plan.price}</span>
              <span class="plan-orig">₹${plan.original}</span>
              <span class="plan-save">Save ${plan.off}%</span>
            </div>
          </div>
          <div class="plan-right">
            ${plan.inStock
              ? `<button class="plan-buy-btn" onclick="buyNow('${productId}','${plan.id}',${plan.price},'${plan.name}','${plan.duration}')">Buy Now →</button>
                 <button class="plan-add-btn" onclick="addPlanToCart('${productId}','${plan.id}',${plan.price},'${plan.name}','${plan.duration}')">+ Add to Cart</button>`
              : `<div class="out-badge">Out of Stock</div>`
            }
          </div>
        </div>
      `).join('')}

      <!-- Description -->
      <div class="pp-desc">
        <h4>About This Product</h4>
        <p>${p.description}</p>
      </div>

      <!-- Trust -->
      <div class="pp-trust">
        <div class="pp-trust-item">⚡ Instant Delivery on Email</div>
        <div class="pp-trust-item">🔒 100% Secure Payment</div>
        <div class="pp-trust-item">🔄 Free Replacement Guarantee</div>
        <div class="pp-trust-item">💬 <a href="https://wa.me/918409081014" style="color:var(--accent)">WhatsApp Support</a></div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeProductPage() {
  const modal = document.getElementById('product-page-modal');
  if (modal) modal.remove();
  document.body.style.overflow = '';
}

function addPlanToCart(productId, planId, price, planName, duration) {
  const p = PRODUCT_DETAILS[productId];
  const cartItem = {
    _id: planId,
    name: `${p.name} — ${planName}`,
    icon: p.icon,
    price: price,
    duration: duration,
    qty: 1
  };
  const existing = cart.find(c => c._id === planId);
  if (existing) { existing.qty++; } else { cart.push(cartItem); }
  updateCartUI();
  showNotify();
  // Flash the button
  const btns = document.querySelectorAll('.plan-add-btn');
  btns.forEach(b => {
    if (b.onclick && b.onclick.toString().includes(planId)) {
      b.textContent = '✓ Added!';
      b.style.background = 'var(--green)';
      b.style.color = '#000';
      setTimeout(() => { b.textContent = '+ Add to Cart'; b.style.background=''; b.style.color=''; }, 1500);
    }
  });
}

function buyNow(productId, planId, price, planName, duration) {
  // Check if user is logged in
  if (!window.currentUser) {
    showLoginPrompt(productId, planId, price, planName, duration);
    return;
  }
  showWhatsAppOrder(productId, planId, price, planName, duration);
}

function showLoginPrompt(productId, planId, price, planName, duration) {
  let modal = document.getElementById('login-prompt-modal');
  if (modal) modal.remove();
  modal = document.createElement('div');
  modal.id = 'login-prompt-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:#00000090;z-index:700;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML = `
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:36px;width:100%;max-width:380px;text-align:center;position:relative">
      <button onclick="document.getElementById('login-prompt-modal').remove()" style="position:absolute;top:14px;right:14px;background:var(--bg3);border:1px solid var(--border);color:var(--muted);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px">✕</button>
      <div style="font-size:52px;margin-bottom:16px">🔐</div>
      <h3 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:700;margin-bottom:8px">Login Required</h3>
      <p style="color:var(--muted);font-size:14px;margin-bottom:24px;line-height:1.6">Please login or create an account to place your order for<br><strong style="color:var(--accent)">${planName} — ${duration}</strong></p>
      <button onclick="document.getElementById('login-prompt-modal').remove();document.getElementById('login-modal').classList.add('open');sessionStorage.setItem('pendingBuy',JSON.stringify({productId:'${productId}',planId:'${planId}',price:${price},planName:'${planName}',duration:'${duration}'}))" style="width:100%;background:var(--accent);color:#000;border:none;padding:13px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;margin-bottom:10px">Login to Continue →</button>
      <button onclick="document.getElementById('login-prompt-modal').remove();document.getElementById('register-modal').classList.add('open');sessionStorage.setItem('pendingBuy',JSON.stringify({productId:'${productId}',planId:'${planId}',price:${price},planName:'${planName}',duration:'${duration}'}))" style="width:100%;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:13px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif">Create Free Account</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function showWhatsAppOrder(productId, planId, price, planName, duration) {
  const p = PRODUCT_DETAILS[productId];
  const user = window.currentUser;
  const orderId = 'ORD' + Date.now().toString().slice(-6);

  // Build WhatsApp message
  const msg = encodeURIComponent(
    `Hello! I want to place an order 🛒\n\n` +
    `*Product:* ${p.icon} ${p.name}\n` +
    `*Plan:* ${planName}\n` +
    `*Duration:* ${duration}\n` +
    `*Price:* ₹${price}\n` +
    `*Order ID:* #${orderId}\n\n` +
    `*Name:* ${user.name}\n` +
    `*Email:* ${user.email}\n\n` +
    `Please confirm my order and share payment details. Thank you!`
  );
  const waUrl = `https://wa.me/918409081014?text=${msg}`;

  let modal = document.getElementById('wa-order-modal');
  if (modal) modal.remove();
  modal = document.createElement('div');
  modal.id = 'wa-order-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:#00000090;z-index:700;display:flex;align-items:center;justify-content:center;padding:20px';

  modal.innerHTML = `
    <div style="background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:32px;width:100%;max-width:440px;position:relative">
      <button onclick="document.getElementById('wa-order-modal').remove()" style="position:absolute;top:14px;right:14px;background:var(--bg3);border:1px solid var(--border);color:var(--muted);width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px">✕</button>

      <!-- Header -->
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-size:48px;margin-bottom:10px">✅</div>
        <h2 style="font-family:'Syne',sans-serif;font-size:20px;font-weight:800;margin-bottom:6px">Confirm Your Order on WhatsApp</h2>
        <p style="color:var(--muted);font-size:13px">Fast, secure, and personally handled by our team</p>
      </div>

      <!-- Order Summary -->
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:16px;margin-bottom:20px">
        <div style="font-size:12px;color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Order Summary</div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="font-size:32px;background:${p.bg};width:50px;height:50px;border-radius:10px;display:flex;align-items:center;justify-content:center">${p.icon}</div>
          <div>
            <div style="font-weight:700;font-size:15px">${p.name}</div>
            <div style="font-size:12px;color:var(--muted)">${planName} · ${duration}</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border)">
          <span style="color:var(--muted);font-size:13px">Total Amount</span>
          <span style="font-family:'Syne',sans-serif;font-size:18px;font-weight:800;color:var(--accent)">₹${price}</span>
        </div>
        <div style="font-size:11px;color:var(--muted);margin-top:6px">Order ID: <span style="color:var(--text)">#${orderId}</span></div>
      </div>

      <!-- Steps -->
      <div style="margin-bottom:22px">
        ${[
          'Click on "WhatsApp us now" button below.',
          'Your order details will open in WhatsApp chat automatically.',
          'Press Send to confirm your order with us.',
          'We will reply with payment details and next instructions.',
          'After making payment, share the transaction screenshot in the same chat.',
          'Our team will verify and activate your plan shortly.'
        ].map((step, i) => `
          <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:10px">
            <div style="min-width:22px;height:22px;background:var(--accent);color:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;margin-top:1px">${i+1}</div>
            <div style="font-size:13px;color:var(--muted);line-height:1.5">${step}</div>
          </div>
        `).join('')}
      </div>

      <!-- WhatsApp Button -->
      <a href="${waUrl}" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;background:#25d366;color:#000;border:none;padding:15px;border-radius:12px;font-size:16px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:none;box-sizing:border-box;margin-bottom:10px">
        <span style="font-size:22px">💬</span> WhatsApp Us Now
      </a>
      <p style="text-align:center;font-size:12px;color:var(--muted);margin:0">We typically respond within 15 minutes · Available 24/7</p>
    </div>
  `;
  document.body.appendChild(modal);
}

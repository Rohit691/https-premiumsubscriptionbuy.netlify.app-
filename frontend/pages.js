// =============================================
// ALL PAGES CONTENT — injected as modals
// =============================================
const PAGES = {

  about: {
    title: "About Us",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:16px">About Online Subscription 🚀</h2>
      <p style="color:var(--muted);line-height:1.8;margin-bottom:16px">
        <strong style="color:var(--text)">Online Subscription</strong> is India's #1 platform for buying premium digital subscriptions at the lowest prices. We help students, professionals, and families access world-class platforms like Netflix, Canva, ChatGPT, LinkedIn, and 50+ more — at up to 96% off the market price.
      </p>
      <p style="color:var(--muted);line-height:1.8;margin-bottom:16px">
        Founded with a simple mission — <strong style="color:var(--accent)">"Premium for everyone"</strong> — we believe no one should pay full price for digital tools. Whether you're a student, freelancer, or a business owner, we've got the right plan for you.
      </p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:24px 0">
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px;text-align:center">
          <div style="font-size:28px;font-weight:800;color:var(--accent);font-family:'Syne',sans-serif">10,000+</div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px">Happy Customers</div>
        </div>
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px;text-align:center">
          <div style="font-size:28px;font-weight:800;color:var(--accent);font-family:'Syne',sans-serif">50+</div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px">Premium Products</div>
        </div>
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px;text-align:center">
          <div style="font-size:28px;font-weight:800;color:var(--accent);font-family:'Syne',sans-serif">96%</div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px">Max Savings</div>
        </div>
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px;text-align:center">
          <div style="font-size:28px;font-weight:800;color:var(--accent);font-family:'Syne',sans-serif">4.9★</div>
          <div style="font-size:13px;color:var(--muted);margin-top:4px">Customer Rating</div>
        </div>
      </div>
      <p style="color:var(--muted);line-height:1.8">
        We are based in <strong style="color:var(--text)">Gurugram, Haryana, India</strong> and serve customers across the country. Our team works 24/7 to ensure you get the best deals and instant support on WhatsApp.
      </p>
    `
  },

  blog: {
    title: "Blog",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:20px">Latest Articles 📝</h2>
      ${[
        { emoji:'🎨', title:'Why Canva Pro is Worth Every Rupee (And How to Get it for ₹352)', date:'May 2026', desc:'Canva Pro gives you access to 100M+ premium templates, background remover, brand kit and more. Here\'s why designers love it and how to get it cheap.' },
        { emoji:'🤖', title:'ChatGPT Plus vs Free — Is the Upgrade Worth It in 2026?', date:'May 2026', desc:'GPT-4o, image generation, faster responses — we break down exactly what you get with ChatGPT Plus and whether it\'s worth upgrading.' },
        { emoji:'📺', title:'Top 5 OTT Platforms in India & How to Get Them at 90% Off', date:'Apr 2026', desc:'Netflix, Amazon Prime, Zee5, Sony LIV, YouTube Premium — we compare all 5 and show you how to subscribe at a fraction of the price.' },
        { emoji:'🎓', title:'Best Online Learning Platforms for Students in India 2026', date:'Apr 2026', desc:'Coursera, LinkedIn Learning, DataCamp — which one is right for you? We compare features, certificates and costs.' },
      ].map(b => `
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:14px;cursor:pointer" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
          <div style="font-size:22px;margin-bottom:8px">${b.emoji}</div>
          <div style="font-weight:700;font-size:15px;margin-bottom:6px;color:var(--text)">${b.title}</div>
          <div style="font-size:12px;color:var(--accent);margin-bottom:8px">${b.date}</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.6">${b.desc}</div>
        </div>
      `).join('')}
    `
  },

  faq: {
    title: "Frequently Asked Questions",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:20px">FAQ ❓</h2>
      ${[
        { q:'Are these subscriptions legal?', a:'Yes. We sell shared/family plan slots and educational plan access that are completely legitimate. All accounts are verified before delivery.' },
        { q:'How fast will I receive my subscription?', a:'Instantly to within 30 minutes after payment confirmation. Credentials are sent directly to your registered email address.' },
        { q:'What if the account stops working?', a:'We offer a free replacement guarantee. If your subscription stops working at any time during the validity period, WhatsApp us and we will replace it within 24 hours at no extra cost.' },
        { q:'Can I change the account password?', a:'No. Please do not change the password or any account settings. Doing so will void your replacement guarantee.' },
        { q:'Which payment methods are accepted?', a:'We accept all major payment methods via Razorpay — UPI (GPay, PhonePe, Paytm), Credit/Debit cards, Net banking, and Wallets.' },
        { q:'Is my payment secure?', a:'100% yes. All payments are processed through Razorpay, which is RBI-compliant and PCI-DSS certified. We never store your card details.' },
        { q:'Can I get a refund?', a:'We offer a replacement, not a refund, since digital products are delivered instantly. However, if we cannot deliver your order, a full refund is issued within 3-5 business days.' },
        { q:'How do I contact support?', a:'WhatsApp us at +91 84090 81014. We are available 24/7 and typically respond within 15 minutes.' },
      ].map((f,i) => `
        <div style="border:1px solid var(--border);border-radius:10px;margin-bottom:10px;overflow:hidden">
          <div onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';this.querySelector('.faq-arrow').textContent=this.nextElementSibling.style.display==='block'?'▲':'▼'"
            style="padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:var(--bg3)">
            <span style="font-weight:600;font-size:14px">Q: ${f.q}</span>
            <span class="faq-arrow" style="color:var(--accent);font-size:12px">▼</span>
          </div>
          <div style="display:none;padding:14px 16px;font-size:13px;color:var(--muted);line-height:1.7;background:var(--card)">
            ${f.a}
          </div>
        </div>
      `).join('')}
    `
  },

  howItWorks: {
    title: "How It Works",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:20px">How It Works 🔄</h2>
      ${[
        { step:'01', icon:'🛒', title:'Browse & Add to Cart', desc:'Browse our 50+ premium subscriptions. Choose your plan duration and add to cart. All prices are already discounted — no coupon needed.' },
        { step:'02', icon:'👤', title:'Create Your Account', desc:'Register with your email and phone number. This is where we\'ll send your subscription credentials after payment.' },
        { step:'03', icon:'💳', title:'Pay Securely via Razorpay', desc:'Complete payment using UPI, card, net banking or wallet. Takes less than 30 seconds. All transactions are 100% secure.' },
        { step:'04', icon:'📧', title:'Receive Credentials on Email', desc:'Instantly after payment, your login credentials are sent to your email. Check spam if you don\'t see it in inbox.' },
        { step:'05', icon:'🎉', title:'Enjoy Your Subscription!', desc:'Login to the platform and start using your premium subscription immediately. If anything goes wrong, WhatsApp us for instant support.' },
      ].map(s => `
        <div style="display:flex;gap:16px;align-items:flex-start;margin-bottom:20px;padding:18px;background:var(--bg3);border:1px solid var(--border);border-radius:12px">
          <div style="min-width:44px;height:44px;background:var(--accent);color:#000;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;font-family:'Syne',sans-serif">${s.step}</div>
          <div>
            <div style="font-size:20px;margin-bottom:6px">${s.icon}</div>
            <div style="font-weight:700;font-size:15px;margin-bottom:6px">${s.title}</div>
            <div style="font-size:13px;color:var(--muted);line-height:1.7">${s.desc}</div>
          </div>
        </div>
      `).join('')}
    `
  },

  trackOrder: {
    title: "Track Your Order",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:8px">Track Order 📦</h2>
      <p style="color:var(--muted);font-size:14px;margin-bottom:24px">Enter your registered email to find your order status</p>
      <div style="margin-bottom:14px">
        <label style="font-size:12px;color:var(--muted);display:block;margin-bottom:6px">Registered Email Address</label>
        <input type="email" id="track-email" placeholder="you@example.com" style="width:100%;background:var(--bg3);border:1px solid var(--border);color:var(--text);padding:11px 14px;border-radius:8px;font-size:14px;font-family:'DM Sans',sans-serif;outline:none">
      </div>
      <button onclick="trackOrder()" style="width:100%;background:var(--accent);color:#000;border:none;padding:13px;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif">Track My Order</button>
      <div id="track-result" style="margin-top:20px"></div>
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:16px;margin-top:20px">
        <p style="font-size:13px;color:var(--muted);margin:0">💬 <strong style="color:var(--text)">Faster support?</strong> WhatsApp us at <a href="https://wa.me/918409081014" style="color:var(--accent)">+91 84090 81014</a> with your payment screenshot and we'll help you instantly.</p>
      </div>
    `
  },

  terms: {
    title: "Terms of Service",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:6px">Terms of Service 📄</h2>
      <p style="color:var(--muted);font-size:12px;margin-bottom:24px">Last updated: May 2026</p>
      ${[
        { title:'1. Acceptance of Terms', body:'By purchasing from Online Subscription, you agree to these terms. If you do not agree, please do not use our services.' },
        { title:'2. Nature of Service', body:'We provide shared/family plan access and educational plan subscriptions to premium digital platforms. These are legitimate accounts shared across multiple users.' },
        { title:'3. Account Usage Rules', body:'You must not: change the account password or email, log out other users, share credentials with others, use the account on more devices than allowed, or use VPN while accessing the account.' },
        { title:'4. Delivery', body:'Digital products are delivered to your registered email address within 30 minutes of payment confirmation. Delivery times may vary during high demand.' },
        { title:'5. Replacement Policy', body:'We offer free replacements if your subscription stops working. To claim a replacement, contact us within the validity period via WhatsApp.' },
        { title:'6. No Refund Policy', body:'Since digital products are delivered instantly, we do not offer refunds. However, if we fail to deliver, a full refund will be processed within 3-5 business days.' },
        { title:'7. Liability', body:'Online Subscription is not affiliated with Netflix, Canva, OpenAI, or any other platform we sell. We are an independent reseller and are not liable for changes made by these platforms.' },
        { title:'8. Contact', body:'For any questions regarding these terms, WhatsApp us at +91 84090 81014 or email us at support@onlinesubscription.in' },
      ].map(t => `
        <div style="margin-bottom:18px">
          <div style="font-weight:700;font-size:14px;color:var(--text);margin-bottom:6px">${t.title}</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.8">${t.body}</div>
        </div>
      `).join('')}
    `
  },

  privacy: {
    title: "Privacy Policy",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:6px">Privacy Policy 🔒</h2>
      <p style="color:var(--muted);font-size:12px;margin-bottom:24px">Last updated: May 2026</p>
      ${[
        { title:'Information We Collect', body:'We collect your name, email address, phone number, and payment information (processed securely via Razorpay — we never store card details).' },
        { title:'How We Use Your Information', body:'Your information is used to: process your orders, send subscription credentials, provide customer support, and send important account updates. We do not sell your data to third parties.' },
        { title:'Data Security', body:'All data is stored securely on encrypted servers. Payment data is handled entirely by Razorpay (PCI-DSS compliant). We use JWT tokens for secure authentication.' },
        { title:'Cookies', body:'We use minimal cookies only for session management (keeping you logged in). We do not use tracking or advertising cookies.' },
        { title:'Third Party Services', body:'We use Razorpay for payments, Gmail SMTP for email delivery, and MongoDB Atlas for database storage. Each of these has their own privacy policies.' },
        { title:'Your Rights', body:'You may request deletion of your account and data at any time by contacting us on WhatsApp. We will process your request within 7 business days.' },
        { title:'Contact', body:'For privacy concerns, WhatsApp us at +91 84090 81014.' },
      ].map(t => `
        <div style="margin-bottom:18px">
          <div style="font-weight:700;font-size:14px;color:var(--text);margin-bottom:6px">${t.title}</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.8">${t.body}</div>
        </div>
      `).join('')}
    `
  },

  refund: {
    title: "Refund Policy",
    content: `
      <h2 style="color:var(--accent);font-family:'Syne',sans-serif;margin-bottom:6px">Refund Policy 💰</h2>
      <p style="color:var(--muted);font-size:12px;margin-bottom:24px">Last updated: May 2026</p>
      <div style="background:#22c77a18;border:1px solid #22c77a40;border-radius:10px;padding:16px;margin-bottom:20px">
        <p style="color:var(--green);font-size:14px;margin:0">✅ <strong>Our Promise:</strong> If we cannot deliver your order for any reason, you will receive a 100% refund — no questions asked.</p>
      </div>
      ${[
        { title:'Free Replacement (Most Common)', body:'If your subscription stops working during the validity period, we will replace it for free within 24 hours. This covers account bans, password changes by the platform, or any other technical issue on our end. Contact us on WhatsApp with your order details.' },
        { title:'When Refunds Are Issued', body:'Refunds are only issued if: (1) We cannot deliver your order within 24 hours of payment, or (2) We cannot provide a working replacement after 3 attempts. Refunds are NOT issued for change of mind after delivery.' },
        { title:'When Refunds Are NOT Issued', body:'No refund if: you violated account rules (changed password, shared credentials, etc.), the platform changed its policies, you forgot to use the subscription, or you bought the wrong plan.' },
        { title:'Refund Timeline', body:'Approved refunds are processed within 3-5 business days back to your original payment method (UPI/card/wallet).' },
        { title:'How to Request', body:'WhatsApp us at +91 84090 81014 with your payment screenshot and order details. We respond within 15 minutes.' },
      ].map(t => `
        <div style="margin-bottom:18px;padding:16px;background:var(--bg3);border:1px solid var(--border);border-radius:10px">
          <div style="font-weight:700;font-size:14px;color:var(--text);margin-bottom:6px">${t.title}</div>
          <div style="font-size:13px;color:var(--muted);line-height:1.8">${t.body}</div>
        </div>
      `).join('')}
    `
  }
};

// =============================================
// PAGE MODAL ENGINE
// =============================================
function openPage(pageKey) {
  const page = PAGES[pageKey];
  if (!page) return;
  let modal = document.getElementById('page-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'page-modal';
    modal.style.cssText = 'position:fixed;inset:0;background:#00000090;z-index:500;display:flex;align-items:flex-start;justify-content:center;padding:20px;overflow-y:auto';
    modal.innerHTML = `
      <div id="page-modal-box" style="background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:32px;width:100%;max-width:640px;position:relative;margin:auto">
        <button onclick="document.getElementById('page-modal').remove()" style="position:absolute;top:16px;right:16px;background:var(--bg3);border:1px solid var(--border);color:var(--muted);width:34px;height:34px;border-radius:8px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">✕</button>
        <div id="page-modal-content"></div>
      </div>`;
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
  }
  document.getElementById('page-modal-content').innerHTML = page.content;
  modal.scrollTop = 0;
}

// Track order function
async function trackOrder() {
  const email = document.getElementById('track-email')?.value?.trim();
  const result = document.getElementById('track-result');
  if (!email) { result.innerHTML = '<p style="color:var(--red);font-size:13px">Please enter your email address.</p>'; return; }
  result.innerHTML = '<p style="color:var(--muted);font-size:13px">Searching orders...</p>';
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(`${window.API_BASE || 'http://localhost:5000/api'}/orders/my`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('Not found');
    const orders = await res.json();
    if (!orders.length) throw new Error('No orders');
    result.innerHTML = orders.map(o => `
      <div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:14px;margin-bottom:10px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-weight:600;font-size:13px">${o.items.map(i=>i.icon+' '+i.name).join(', ')}</span>
          <span style="font-size:12px;padding:2px 8px;border-radius:20px;background:${o.status==='delivered'?'#22c77a20':'#f0c04020'};color:${o.status==='delivered'?'var(--green)':'var(--accent)'}">${o.status}</span>
        </div>
        <div style="font-size:12px;color:var(--muted)">₹${o.totalAmount} · ${new Date(o.createdAt).toLocaleDateString('en-IN')}</div>
      </div>
    `).join('');
  } catch(e) {
    result.innerHTML = `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:center">
      <p style="color:var(--muted);font-size:13px">No orders found. <a href="https://wa.me/918409081014" style="color:var(--accent)">WhatsApp us</a> for help.</p>
    </div>`;
  }
}

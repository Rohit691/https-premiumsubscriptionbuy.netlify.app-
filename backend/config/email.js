const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS  // Use Gmail App Password (not your real password)
  }
});

// Send subscription credentials to customer
const sendCredentials = async (toEmail, customerName, orderItems) => {
  const itemsHtml = orderItems.map(item => `
    <div style="background:#1e1e28;border:1px solid #333;border-radius:12px;padding:20px;margin-bottom:16px">
      <h3 style="color:#f0c040;margin:0 0 12px">${item.icon} ${item.name} — ${item.duration}</h3>
      ${item.credentials?.email ? `
        <p style="margin:6px 0;color:#ccc">📧 <strong>Email:</strong> <span style="color:#fff">${item.credentials.email}</span></p>
        <p style="margin:6px 0;color:#ccc">🔑 <strong>Password:</strong> <span style="color:#fff">${item.credentials.password}</span></p>
      ` : ''}
      ${item.credentials?.note ? `<p style="margin:10px 0 0;color:#888;font-size:13px">📝 ${item.credentials.note}</p>` : ''}
    </div>
  `).join('');

  const mailOptions = {
    from: `"Online Subscription" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: '🎉 Your Subscription is Ready! — Online Subscription',
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"></head>
      <body style="background:#0a0a0f;color:#f0eee8;font-family:'DM Sans',Arial,sans-serif;margin:0;padding:0">
        <div style="max-width:560px;margin:0 auto;padding:40px 20px">
          <div style="text-align:center;margin-bottom:32px">
            <h1 style="font-size:28px;font-weight:800;color:#f0c040;margin:0">Online<span style="color:#f0eee8">Subscription</span></h1>
          </div>
          <div style="background:#111118;border:1px solid #ffffff12;border-radius:16px;padding:32px">
            <h2 style="margin:0 0 8px;font-size:22px">Hey ${customerName}! 🎉</h2>
            <p style="color:#888;margin:0 0 24px">Your payment was successful. Here are your subscription credentials:</p>
            ${itemsHtml}
            <div style="background:#081a14;border:1px solid #22c77a30;border-radius:10px;padding:16px;margin-top:20px">
              <p style="margin:0;color:#22c77a;font-size:14px">✅ <strong>Important:</strong> Do not change the password. Do not share credentials with others. For any issues, WhatsApp us immediately.</p>
            </div>
          </div>
          <div style="text-align:center;margin-top:24px">
            <a href="https://wa.me/${process.env.WHATSAPP_NUMBER}" style="background:#25d366;color:#000;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">💬 WhatsApp Support</a>
          </div>
          <p style="text-align:center;color:#444;font-size:12px;margin-top:24px">© 2026 Online Subscription · Made with ❤️ in India</p>
        </div>
      </body>
      </html>
    `
  };

  await transporter.sendMail(mailOptions);
  console.log(`📧 Credentials email sent to ${toEmail}`);
};

// Send order confirmation to admin
const notifyAdmin = async (order, userName, userEmail) => {
  await transporter.sendMail({
    from: `"Online Subscription Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `💰 New Order ₹${order.totalAmount} — ${userName}`,
    html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2>New Order Received!</h2>
        <p><strong>Customer:</strong> ${userName} (${userEmail})</p>
        <p><strong>Amount:</strong> ₹${order.totalAmount}</p>
        <p><strong>Payment ID:</strong> ${order.payment?.razorpayPaymentId || 'N/A'}</p>
        <h3>Items:</h3>
        <ul>${order.items.map(i => `<li>${i.icon} ${i.name} x${i.qty} — ₹${i.price * i.qty}</li>`).join('')}</ul>
      </div>
    `
  });
};

module.exports = { sendCredentials, notifyAdmin };

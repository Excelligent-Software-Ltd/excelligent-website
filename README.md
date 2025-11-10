# Excelligent Software - Company Website

Professional B2B website for Excelligent Software Ltd showcasing Cadmus Spelling and company mission.

## 🚀 Quick Start - Deploy to GitHub Pages

### Option 1: GitHub Web Interface (Easiest)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it: `excelligent-website` or `your-username.github.io`
   - Make it **Public**
   - Don't initialize with README

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all website files:
     - `index.html`
     - `product.html`
     - `about.html`
     - `demo.html`
     - `styles.css`
     - `script.js`
   - Commit changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: `main` or `master`
   - Folder: `/ (root)`
   - Click Save

4. **Your site will be live at:**
   - `https://your-username.github.io/excelligent-website/`
   - Or if named `your-username.github.io`: `https://your-username.github.io/`

### Option 2: Using Git Command Line

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Excelligent Software website"

# Connect to GitHub
git remote add origin https://github.com/your-username/excelligent-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings (see Option 1, step 3).

---

## 📁 File Structure

```
excelligent-website/
├── index.html          # Home page
├── product.html        # Cadmus Spelling product page
├── about.html          # Company about page
├── demo.html           # Demo booking / contact page
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

---

## ✏️ Customization Guide

### 1. Update Contact Information

**In `demo.html`** (around line 155):
```html
<p><strong>Email:</strong><br><a href="mailto:contact@excelligent.com">contact@excelligent.com</a></p>
<p><strong>Phone:</strong><br><a href="tel:+442012345678">020 1234 5678</a></p>
```

**In all footers** (each HTML file):
```html
<a href="#contact">Contact</a>
```
Update with your actual contact page or email.

### 2. Add Your Logo

Replace the text logo with an image:

**In all navigation sections:**
```html
<!-- Current: -->
<span class="brand-name">Excelligent Software</span>

<!-- Replace with: -->
<img src="logo.png" alt="Excelligent Software" style="height: 40px;">
```

### 3. Add Product Screenshots

**Where to add images:**
- Home page: `.solution-visual` section (line 127 in index.html)
- Product page: `.feature-detail-visual` sections (multiple locations in product.html)

**Replace placeholder with:**
```html
<img src="images/dashboard-screenshot.png" alt="Cadmus Spelling Dashboard" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow-lg);">
```

### 4. Update Colors/Branding

**In `styles.css`** (lines 12-18):
```css
:root {
    --primary-color: #2563eb;      /* Your brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --primary-light: #3b82f6;      /* Lighter shade */
    --secondary-color: #10b981;    /* Accent color */
}
```

Use a color picker tool to find your brand colors in hex format.

### 5. Add Testimonials (Optional)

**In `index.html`**, add a testimonials section before the CTA:

```html
<section class="testimonials">
    <div class="container">
        <h2>What Schools Are Saying</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p>"Cadmus Spelling has transformed how we teach spelling..."</p>
                <strong>Jane Smith</strong>
                <span>Headteacher, Example Primary School</span>
            </div>
            <!-- Add more testimonials -->
        </div>
    </div>
</section>
```

### 6. Connect Demo Form to Your Backend

**In `script.js`** (line 127):

Currently, the form just logs to console. To send to your backend:

```javascript
// Replace the TODO section with:
try {
    const response = await fetch('https://your-backend.com/api/demo-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
        throw new Error('Failed to submit form');
    }
    
    const result = await response.json();
    console.log('Form submitted successfully:', result);
} catch (error) {
    console.error('Error:', error);
    alert('There was an error. Please try again or email us directly.');
    return;
}
```

**Quick alternatives for form handling:**
- **Formspree**: https://formspree.io/ (free tier available)
- **Google Forms**: Create form, embed in iframe
- **EmailJS**: https://www.emailjs.com/ (sends to your email)
- **Netlify Forms**: If hosting on Netlify

---

## 🎨 Adding New Pages

1. **Create new HTML file** (e.g., `pricing.html`)
2. **Copy header and footer** from any existing page
3. **Add content** in between
4. **Update navigation** in all files:

```html
<a href="pricing.html" class="nav-link">Pricing</a>
```

---

## 📊 Analytics Integration

### Google Analytics

1. Get your GA4 tracking ID from https://analytics.google.com
2. Add to **every HTML file** before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

Add before `</head>` in every HTML file:

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

## 🔧 Technical Features

### Responsive Design
- Mobile-friendly hamburger menu
- Adaptive grid layouts
- Touch-friendly buttons and forms

### Performance
- Pure HTML/CSS/JS (no frameworks = fast loading)
- Optimized CSS with minimal dependencies
- Semantic HTML for SEO

### SEO
- Proper meta tags on every page
- Semantic HTML structure
- Descriptive page titles and descriptions

---

## 📱 Mobile Menu

The mobile menu automatically activates on screens narrower than 768px. Test by:
1. Opening site in browser
2. Press F12 (Developer Tools)
3. Click device toolbar icon
4. Select mobile device

---

## 🚀 Next Steps for Production

### 1. Custom Domain
- Buy domain (e.g., from Namecheap, Google Domains)
- In GitHub repo settings → Pages → Custom domain
- Add CNAME record in domain DNS settings

### 2. SSL Certificate
- GitHub Pages provides free HTTPS
- Just enable "Enforce HTTPS" in settings

### 3. Form Backend Options
- **Formspree** (easiest): https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Netlify Forms**: If you switch to Netlify hosting
- **Custom backend**: Build with Node.js, PHP, or Python

### 4. Email Service Integration
- Set up email forwarding for contact@excelligent.com
- Use Google Workspace, Microsoft 365, or Zoho Mail

### 5. Analytics & Tracking
- Set up Google Analytics (see section above)
- Set up Google Search Console for SEO monitoring
- Consider: Hotjar for heatmaps, Mixpanel for product analytics

### 6. Add Screenshots
- Take high-quality screenshots of your actual app
- Use tools like: Cleanshot, Snagit, or Chrome DevTools
- Optimize images before uploading (use TinyPNG.com)

### 7. Legal Pages
Create `privacy.html` and `terms.html` with:
- Privacy Policy (required for GDPR)
- Terms of Service
- Cookie Policy
- You can use generators like: TermsFeed, PrivacyPolicyGenerator

---

## 💡 Pro Tips

### For Wonde Integration
They'll particularly look at:
- Professional design ✓
- Clear product description ✓
- Working website (not "coming soon") ✓
- Company information ✓
- Contact details ✓

### For School Decision-Makers
They care about:
- Credibility and professionalism ✓
- Clear value proposition ✓
- Easy way to book a demo ✓
- Understanding of education sector ✓

### Converting More Demos
1. Add social proof (testimonials, case studies)
2. Add "As featured in..." if you get any press
3. Add video demo if possible
4. Make phone number clickable on mobile
5. Respond to demo requests within 24 hours

---

## 🐛 Troubleshooting

### Site not showing up on GitHub Pages
- Wait 5-10 minutes after enabling Pages
- Check that repository is Public
- Ensure `index.html` is in root directory
- Check Settings → Pages for any error messages

### Forms not working
- Forms currently log to browser console (for testing)
- You need to integrate a form backend (see section above)
- Check browser console (F12) for JavaScript errors

### Mobile menu not working
- Ensure `script.js` is loading (check browser console)
- Clear browser cache
- Test in incognito mode

### Styling looks wrong
- Clear browser cache (Ctrl+F5)
- Check that `styles.css` is in same folder as HTML files
- Validate CSS at https://jigsaw.w3.org/css-validator/

---

## 📞 Support

If you need help:
1. Check this README first
2. Search GitHub Issues for similar problems
3. Ask Claude for specific customization help
4. Contact web developer if major changes needed

---

## 📄 License

This website template is for Excelligent Software Ltd. Modify as needed for your business.

---

## ✅ Launch Checklist

Before going live, ensure you've:
- [ ] Updated all contact information
- [ ] Added your actual email and phone
- [ ] Set up form backend integration
- [ ] Added Google Analytics
- [ ] Tested on mobile devices
- [ ] Tested form submission
- [ ] Checked all links work
- [ ] Added privacy policy page
- [ ] Set up custom domain (optional)
- [ ] Enabled HTTPS on GitHub Pages
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Proofread all content for typos
- [ ] Added any screenshots/images you have

---

**Built with ❤️ for Excelligent Software Ltd**

*Making education more effective through retention-focused learning technology*
# excelligent-website

# Excelligent Software Ltd - Website

Professional B2B SaaS marketing website for Excelligent Software Ltd and Cadmus Spelling.

## 📁 Files Included

- `index.html` - Home page (company overview + Cadmus Spelling introduction)
- `product.html` - Product page (detailed Cadmus Spelling features)
- `about.html` - About page (company vision and mission)
- `demo.html` - Book a Demo page (contact form)
- `styles.css` - All styling
- `script.js` - Form handling and interactivity

## 🚀 Quick Deployment to GitHub Pages

### Option 1: GitHub Web Interface (Easiest)

1. **Create a new repository**
   - Go to https://github.com/new
   - Name it: `yourcompany.github.io` (or any name you prefer)
   - Make it Public
   - Don't initialize with README

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files (index.html, product.html, about.html, demo.html, styles.css, script.js)
   - Commit changes

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch "main"
   - Folder: / (root)
   - Click Save

4. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/repository-name/`
   - Usually takes 1-2 minutes to deploy

### Option 2: Command Line (If you're comfortable with Git)

```bash
# Create a new repository on GitHub first, then:
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

# Copy all website files into the repository
cp /path/to/files/* .

# Commit and push
git add .
git commit -m "Initial website deployment"
git push origin main

# Enable GitHub Pages in repository settings
```

## 🎨 Customization Guide

### Immediate Changes to Make

1. **Update Email Address** (demo.html)
   - Search for: `hello@excelligent.co.uk`
   - Replace with your actual email

2. **Add Your Logo** (Optional)
   - Replace text logo in navigation with an image:
   ```html
   <a href="index.html" class="logo">
       <img src="logo.png" alt="Excelligent Software" height="32">
   </a>
   ```

3. **Update Form Handling** (script.js)
   - Currently logs to console - integrate with your backend
   - Options: Email service (Formspree, EmailJS), Backend API, CRM integration

### Content You Can Customize

**Home Page (index.html):**
- Hero headline and subtitle
- Product features (6 feature cards)
- Value propositions for different audiences
- Testimonials (currently placeholder)

**Product Page (product.html):**
- Product description
- Problem statements
- How it works steps
- Benefits and features
- Science section

**About Page (about.html):**
- Company mission and values
- Journey story
- Vision for future products
- Partnership benefits

**Demo Page (demo.html):**
- Form fields (you can add/remove fields)
- "What to Expect" section
- Testimonial
- Email address

### Styling Customization (styles.css)

Change colors by editing CSS variables at the top:

```css
:root {
    --primary-blue: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;      /* Hover states */
    --accent-purple: #7c3aed;     /* Accent color */
    --accent-green: #10b981;      /* Success/checkmarks */
}
```

## 📊 Adding Analytics

### Google Analytics 4

1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (e.g., G-XXXXXXXXXX)
3. Add before closing `</head>` tag in all HTML files:

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

4. Uncomment tracking code in script.js

### Plausible Analytics (Privacy-friendly alternative)

1. Add to `<head>`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 📧 Form Integration Options

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS (Free tier available)
```javascript
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
```

### Option 3: Your Own Backend
- Send POST request to your API endpoint
- Example code in script.js (commented out)

## 🔍 SEO Optimization

Already included:
- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Proper heading hierarchy
- ✅ Mobile-responsive design

To improve further:
1. Add your domain in `<link rel="canonical">` tags
2. Add Open Graph tags for social sharing
3. Create sitemap.xml
4. Add robots.txt
5. Submit to Google Search Console

## 🎯 Next Steps

### Essential:
1. ☐ Deploy to GitHub Pages
2. ☐ Update email address
3. ☐ Test form submission
4. ☐ Add analytics

### Important:
5. ☐ Get real testimonials from pilot schools
6. ☐ Add screenshots of your app
7. ☐ Set up form backend/email service
8. ☐ Configure custom domain (optional)

### Nice-to-have:
9. ☐ Add company logo
10. ☐ Create favicon
11. ☐ Add more product screenshots
12. ☐ Create blog section (for SEO)

## 💡 Tips for Success

**For Wonde and Partners:**
- The site looks professional and established
- Shows you're serious about the business
- Demonstrates technical capability

**For School Decision-Makers:**
- Clear value proposition
- Professional credibility
- Easy path to book demo

**For Lead Generation:**
- Multiple CTAs throughout
- Low-friction demo booking
- Clear benefits articulated

## 🆘 Common Issues

**Pages look unstyled:**
- Check that styles.css is in the same folder
- Check browser console for errors

**Form doesn't submit:**
- Normal - integrate with backend first
- Currently logs to console (open DevTools)

**Images don't show:**
- Make sure image files are in same directory
- Check file paths in HTML

## 📱 Testing Checklist

Before going live:
- ☐ Test on mobile devices
- ☐ Test form submission
- ☐ Check all links work
- ☐ Verify email address is correct
- ☐ Test in different browsers
- ☐ Check page load speed
- ☐ Proofread all content

## 📞 Support

Need help? The code is well-commented and straightforward to modify. Each section is clearly labeled in the CSS and HTML files.

**Pro tip:** Start with small changes and test frequently. The site is designed to be easily customizable without breaking.

---

Built with ❤️ for educational technology

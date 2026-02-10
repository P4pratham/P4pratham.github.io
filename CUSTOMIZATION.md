# Portfolio Website Customization Guide

## 🎨 How to Personalize Your Portfolio

This guide will help you customize the portfolio to match your personal brand and information.

## 1. Basic Information

### Update Personal Details in `index.html`

**Line 7-8: Update Meta Description**
```html
<meta name="description" content="YOUR NAME - Business Analyst with X+ years of experience...">
<title>YOUR NAME | Business Analyst & Data Engineering Specialist</title>
```

**Line 25: Update Logo/Name**
```html
<div class="logo">
    <i class="fas fa-database"></i> YOUR NAME
</div>
```

**Line 48: Update Main Heading**
```html
<h1 class="glitch" data-text="YOUR NAME">YOUR NAME</h1>
```

## 2. Update Contact Information

### In `index.html`

**Line 412-424: Update Contact Methods**
```html
<a href="mailto:your.email@example.com" class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</a>
<a href="https://www.linkedin.com/in/your-profile" class="contact-method" target="_blank">
    <i class="fab fa-linkedin"></i>
    <span>LinkedIn Profile</span>
</a>
<a href="https://github.com/your-username" class="contact-method" target="_blank">
    <i class="fab fa-github"></i>
    <span>GitHub Profile</span>
</a>
```

**Line 463-472: Update Footer Social Links**
```html
<a href="https://www.linkedin.com/in/your-profile" target="_blank">
    <i class="fab fa-linkedin"></i>
</a>
<a href="https://github.com/your-username" target="_blank">
    <i class="fab fa-github"></i>
</a>
<a href="mailto:your.email@example.com">
    <i class="fas fa-envelope"></i>
</a>
```

### In `script.js`

**Line 220: Update Contact Form Email**
```javascript
window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
```

## 3. Customize Colors

### Edit `styles.css` (Lines 2-14)

```css
:root {
    --primary-color: #00d4ff;        /* Main accent color */
    --secondary-color: #7000ff;      /* Secondary accent */
    --accent-color: #ff006e;         /* Highlight color */
    --dark-bg: #0a0e27;             /* Main background */
    --darker-bg: #060913;           /* Darker background */
    /* ... more colors ... */
}
```

**Popular Color Schemes:**

**Blue Professional:**
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent-color: #60a5fa;
```

**Purple Tech:**
```css
--primary-color: #8b5cf6;
--secondary-color: #6d28d9;
--accent-color: #a78bfa;
```

**Green Data:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

## 4. Update Experience Details

### Years of Experience (Line 66-68 in index.html)

```html
<div class="stat-item">
    <span class="stat-number" data-target="6">0</span>  <!-- Change 6 to your years -->
    <span class="stat-label">Years Experience</span>
</div>
```

### Experience Section (Lines 245-322)

Update with your actual job titles, companies, and achievements.

## 5. Customize Skills

### Update Skill Progress Bars (Lines 154-221)

Change `data-progress` value (0-100):

```html
<div class="skill-progress" data-progress="95"></div>  <!-- Change 95 to your level -->
```

### Add or Remove Skills

Copy this template for new skills:

```html
<div class="skill-card" data-skill="skillname">
    <div class="skill-icon">
        <i class="fas fa-icon-name"></i>  <!-- Choose from fontawesome.com -->
    </div>
    <h3>Skill Name</h3>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
    <p>Description of your expertise</p>
    <div class="skill-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

## 6. Update Projects

### Edit Project Cards (Lines 324-406)

Template for a new project:

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <h3>Project Name</h3>
    </div>
    <p class="project-description">
        Detailed description of your project
    </p>
    <div class="project-tech">
        <span>Tech1</span>
        <span>Tech2</span>
    </div>
    <div class="project-impact">
        <i class="fas fa-lightbulb"></i>
        <span>Key achievement or impact</span>
    </div>
</div>
```

## 7. Customize About Section

### Update Career Journey (Lines 104-146)

Edit the text in the about section:
- Your introduction paragraph
- Career progression details
- Domain expertise list

## 8. Typography

### Change Fonts

Add to `<head>` in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Update in `styles.css`:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

## 9. Add Your Photo

1. Add your photo to the project folder: `profile.jpg`
2. Update hero section in `index.html`:

```html
<div class="hero-image">
    <img src="profile.jpg" alt="Your Name" style="border-radius: 50%; max-width: 400px;">
</div>
```

## 10. Typing Effect Texts

### Edit Typing Animation (script.js, Lines 15-23)

```javascript
const textArray = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
    // Add more titles
];
```

## 11. Statistics Counter

### Update Stats (Lines 66-78 in index.html)

```html
<div class="stat-item">
    <span class="stat-number" data-target="YOUR_NUMBER">0</span>
    <span class="stat-label">Your Label</span>
</div>
```

## 12. Social Media Icons

### Add More Social Platforms

Add to footer or contact section:

```html
<!-- Twitter -->
<a href="https://twitter.com/your-handle" target="_blank">
    <i class="fab fa-twitter"></i>
</a>

<!-- Medium -->
<a href="https://medium.com/@your-profile" target="_blank">
    <i class="fab fa-medium"></i>
</a>

<!-- Instagram -->
<a href="https://instagram.com/your-profile" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

## 13. Domain Expertise

### Update Telecom/Industry Specifics (Lines 127-138)

Replace with your industry expertise:

```html
<ul>
    <li>Your Expertise 1</li>
    <li>Your Expertise 2</li>
    <li>Your Expertise 3</li>
</ul>
```

## 14. Browser Tab Title & Favicon

### Add Favicon

1. Create a favicon (32x32 px) named `favicon.ico`
2. Add to `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## 15. SEO Optimization

### Add to `<head>` in index.html:

```html
<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://your-site.com/preview-image.jpg">
<meta property="og:url" content="https://your-site.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Name - Portfolio">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://your-site.com/preview-image.jpg">
```

## 16. Call-to-Action Buttons

### Customize Button Text and Links (Lines 57-64)

```html
<a href="#contact" class="btn btn-primary">
    <i class="fas fa-envelope"></i> Your CTA Text
</a>
<a href="resume.pdf" class="btn btn-secondary" download>
    <i class="fas fa-download"></i> Download Resume
</a>
```

## Testing Checklist

After customization:

- [ ] All personal information updated
- [ ] Contact links work correctly
- [ ] Social media links are correct
- [ ] Skills reflect your expertise
- [ ] Projects showcase your work
- [ ] Colors match your brand
- [ ] Test on mobile devices
- [ ] Check all animations work
- [ ] Verify contact form
- [ ] Test on different browsers

## Need Help?

- Font Awesome Icons: https://fontawesome.com/icons
- Color Palette Generator: https://coolors.co
- Gradient Generator: https://cssgradient.io
- Google Fonts: https://fonts.google.com

---

**Pro Tip:** Make changes incrementally and test in your browser to see results immediately!

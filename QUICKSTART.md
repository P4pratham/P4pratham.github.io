# 🚀 Quick Start Guide

Get your portfolio website live in under 10 minutes!

## ⚡ Fast Track Deployment

### Prerequisites
- GitHub account ([Sign up here](https://github.com/join))
- Git installed ([Download here](https://git-scm.com/downloads))

### Step 1: Create GitHub Repository (2 minutes)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your GitHub username)
3. Set to **Public**
4. Click **Create repository**

### Step 2: Deploy Your Site (3 minutes)

Open PowerShell in this folder and run these commands:

```powershell
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: My portfolio website"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: View Your Live Site (1 minute)

Wait 1-2 minutes, then visit:
```
https://YOUR-USERNAME.github.io
```

**🎉 Your portfolio is now live!**

---

## 📝 Quick Customization (5 minutes)

### 1. Update Your Name
Open `index.html` and replace:
- Line 8: `<title>Prathamesh Shelke` → `<title>YOUR NAME`
- Line 48: `<h1 class="glitch" data-text="Prathamesh Shelke">` → `<h1 class="glitch" data-text="YOUR NAME">`

### 2. Update Email
Find and replace all instances of `prathash@amdocs.com` with your email:
- In `index.html` (3 places)
- In `script.js` (1 place)

### 3. Update Social Links
In `index.html`, update:
- LinkedIn URL (Line 416)
- GitHub URL (Line 420)
- Footer social links (Lines 465-473)

### 4. Update Experience Years
Line 66: Change `data-target="6"` to your years of experience

### 5. Save and Push Changes

```powershell
git add .
git commit -m "Updated personal information"
git push
```

Wait 1-2 minutes and refresh your site!

---

## 🎨 Color Themes (Optional)

Want a different color scheme? Edit `styles.css` line 3:

### Ocean Blue
```css
--primary-color: #0ea5e9;
```

### Purple Tech
```css
--primary-color: #a855f7;
```

### Emerald Green
```css
--primary-color: #10b981;
```

---

## 📱 Test Your Site

After deployment, check:
- ✅ Desktop view
- ✅ Mobile view (open on phone)
- ✅ All links work
- ✅ Contact form opens email
- ✅ Smooth scrolling

---

## 🆘 Troubleshooting

### Site not loading?
- Wait 5 minutes (GitHub Pages takes time)
- Check repository is public
- Verify repository name is exactly: `YOUR-USERNAME.github.io`

### CSS not working?
- Clear browser cache (Ctrl+F5)
- Check all files are pushed to GitHub
- Verify file names are correct (case-sensitive)

### Need more help?
- Read `DEPLOYMENT.md` for detailed instructions
- Read `CUSTOMIZATION.md` for styling guide
- Check [GitHub Pages docs](https://docs.github.com/pages)

---

## 🎯 Next Steps

1. **Share Your Portfolio**
   - Add to LinkedIn profile
   - Add to resume
   - Share on social media

2. **Customize Further**
   - Read `CUSTOMIZATION.md`
   - Update projects section
   - Adjust skills and experience

3. **Optimize**
   - Add your photo
   - Update project descriptions
   - Fine-tune colors

4. **Analytics (Optional)**
   - Set up Google Analytics
   - Track visitor stats

---

## 📚 Full Documentation

- `README.md` - Overview and features
- `DEPLOYMENT.md` - Detailed deployment guide
- `CUSTOMIZATION.md` - Complete customization reference

---

## ⚡ Command Cheat Sheet

```powershell
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Update description"
git push

# Check status
git status

# View history
git log --oneline

# Undo changes (be careful!)
git reset --hard HEAD
```

---

## 💡 Pro Tips

1. **Test Locally First**
   - Open `index.html` in browser before pushing
   - Make sure everything looks good

2. **Make Small Changes**
   - Update one section at a time
   - Test after each change

3. **Use Descriptive Commit Messages**
   - Good: "Update contact information and skills"
   - Bad: "changes"

4. **Keep Backup**
   - GitHub stores all versions
   - Use `git log` to see history

---

## 🎓 Learn More

- HTML/CSS: [MDN Web Docs](https://developer.mozilla.org)
- Git: [Git Documentation](https://git-scm.com/doc)
- GitHub Pages: [Official Guide](https://pages.github.com)

---

**Need Help?** Open an issue on GitHub or check the documentation files.

**Ready to Go?** Start with Step 1 above! 🚀

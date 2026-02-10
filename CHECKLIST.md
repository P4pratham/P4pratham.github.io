# ✅ Portfolio Deployment Checklist

Use this checklist to track your progress from setup to live deployment.

## 📋 Pre-Deployment Checklist

### 1. Preview Locally
- [ ] Open `index.html` in browser
- [ ] Check all sections load correctly
- [ ] Test navigation links
- [ ] Verify animations work
- [ ] Check mobile view (F12 → Device toolbar)

### 2. Personalize Content (REQUIRED)

#### Basic Information (5 minutes)
- [ ] Replace "Prathamesh Shelke" with your name (multiple locations)
- [ ] Update email from `prathash@amdocs.com` to your email
- [ ] Update page title in `<title>` tag
- [ ] Update meta description

#### Contact & Social (5 minutes)
- [ ] Update LinkedIn URL (2 places: contact section & footer)
- [ ] Update GitHub URL (2 places: contact section & footer)
- [ ] Update email in contact form handler (script.js line 220)
- [ ] Verify social media links are correct

#### Professional Details (5 minutes)
- [ ] Update years of experience (currently "6+")
- [ ] Update statistics in hero section
- [ ] Update domain from "Telecom" if different
- [ ] Verify technical stack matches your skills

#### Content (10 minutes)
- [ ] Update "About Me" section text
- [ ] Update professional journey description
- [ ] Update domain expertise list
- [ ] Verify typing animation titles (script.js)

### 3. Skills & Experience (Optional but Recommended)

#### Skills Section
- [ ] Adjust skill proficiency percentages (data-progress values)
- [ ] Add/remove skills as needed
- [ ] Update skill descriptions
- [ ] Verify technology tags

#### Experience Section
- [ ] Update job titles
- [ ] Update company names
- [ ] Update achievements list
- [ ] Update technologies used

#### Projects Section
- [ ] Update project titles
- [ ] Update project descriptions
- [ ] Update technologies used
- [ ] Update impact metrics

### 4. Visual Customization (Optional)

- [ ] Choose color scheme (default is blue/purple)
- [ ] Update primary color in styles.css if desired
- [ ] Add your profile photo (optional)
- [ ] Update favicon (optional)

---

## 🚀 Deployment Checklist

### Step 1: Prerequisites
- [ ] GitHub account created ([github.com/join](https://github.com/join))
- [ ] Git installed on computer ([git-scm.com](https://git-scm.com))
- [ ] GitHub username noted down

### Step 2: Create Repository
- [ ] Go to [github.com/new](https://github.com/new)
- [ ] Name repository: `YOUR-USERNAME.github.io`
- [ ] Set repository to **Public**
- [ ] Do NOT initialize with README
- [ ] Click "Create repository"

### Step 3: Initialize Git Locally
Open PowerShell/Terminal in your portfolio folder:

- [ ] Run: `git init`
- [ ] Verify: See "Initialized empty Git repository" message

### Step 4: Add Files
- [ ] Run: `git add .`
- [ ] Verify: No error messages

### Step 5: Commit Changes
- [ ] Run: `git commit -m "Initial commit: My portfolio website"`
- [ ] Verify: See file count and changes

### Step 6: Connect to GitHub
- [ ] Run: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git`
  - Replace YOUR-USERNAME with your actual username
- [ ] Verify: No error messages

### Step 7: Push to GitHub
- [ ] Run: `git branch -M main`
- [ ] Run: `git push -u origin main`
- [ ] Enter GitHub credentials if prompted
- [ ] Verify: See "Branch 'main' set up to track" message

### Step 8: Wait for Deployment
- [ ] Wait 2-5 minutes for GitHub Pages to build
- [ ] Check repository Settings → Pages for status

### Step 9: Verify Live Site
- [ ] Visit: `https://YOUR-USERNAME.github.io`
- [ ] Verify: Site loads correctly
- [ ] Check: All sections visible
- [ ] Test: All links work
- [ ] Test: Animations work
- [ ] Test: Mobile responsive (test on phone)

---

## 🎨 Post-Deployment Checklist

### Testing
- [ ] Desktop view (Chrome)
- [ ] Desktop view (Firefox)
- [ ] Desktop view (Edge/Safari)
- [ ] Mobile view (iOS/Android)
- [ ] Tablet view
- [ ] All navigation links work
- [ ] Contact form opens email
- [ ] Social links open correct profiles
- [ ] Smooth scrolling works
- [ ] Animations are smooth
- [ ] No console errors (F12 → Console tab)

### Performance
- [ ] Page loads fast (< 3 seconds)
- [ ] Animations are not laggy
- [ ] Images load correctly (if you added any)
- [ ] No broken links

### Content Review
- [ ] No spelling errors
- [ ] All information is accurate
- [ ] Professional tone maintained
- [ ] Contact information is correct
- [ ] Dates are current

---

## 📢 Sharing Checklist

### Online Presence
- [ ] Add URL to LinkedIn profile
- [ ] Add URL to resume/CV
- [ ] Update GitHub profile README with link
- [ ] Add to Twitter/X bio (if applicable)
- [ ] Share on LinkedIn post
- [ ] Add to email signature

### Professional Use
- [ ] Include in job applications
- [ ] Share with recruiters
- [ ] Add to business cards
- [ ] Include in cover letters
- [ ] Reference in networking

---

## 🔄 Maintenance Checklist (Regular Updates)

### Monthly
- [ ] Review and update projects
- [ ] Check for broken links
- [ ] Update experience if changed
- [ ] Add new skills learned

### Quarterly
- [ ] Update achievements
- [ ] Refresh project descriptions
- [ ] Update statistics
- [ ] Review and improve content

### Annually
- [ ] Major content review
- [ ] Consider design refresh
- [ ] Update all dates
- [ ] Review and update bio

---

## 🆘 Troubleshooting Checklist

### If Site Doesn't Load
- [ ] Wait full 5 minutes
- [ ] Check repository is public (Settings → General)
- [ ] Verify GitHub Pages is enabled (Settings → Pages)
- [ ] Check repository name is exactly: `username.github.io`
- [ ] Clear browser cache (Ctrl + F5)
- [ ] Try incognito/private browsing
- [ ] Check [githubstatus.com](https://www.githubstatus.com)

### If CSS Doesn't Work
- [ ] Verify `styles.css` was pushed to GitHub
- [ ] Check file name is exactly `styles.css` (lowercase)
- [ ] Clear browser cache
- [ ] Check browser console for errors (F12)
- [ ] Verify link tag in HTML is correct

### If JavaScript Doesn't Work
- [ ] Verify `script.js` was pushed to GitHub
- [ ] Check file name is exactly `script.js` (lowercase)
- [ ] Check browser console for errors (F12)
- [ ] Verify script tag in HTML is correct

### If Git Push Fails
- [ ] Check remote URL is correct: `git remote -v`
- [ ] Verify GitHub credentials
- [ ] Check internet connection
- [ ] Try: `git push origin main` instead
- [ ] Check GitHub repository exists

---

## 📊 Success Metrics

You've succeeded when:
- [ ] ✅ Site is live at your GitHub Pages URL
- [ ] ✅ All content is personalized
- [ ] ✅ Site is responsive on all devices
- [ ] ✅ All links work correctly
- [ ] ✅ No console errors
- [ ] ✅ Shared on LinkedIn
- [ ] ✅ Added to resume
- [ ] ✅ Received positive feedback

---

## 🎯 Quick Reference

### Your Details
- GitHub Username: `________________`
- Repository URL: `________________`
- Live Site URL: `________________`
- Deployment Date: `________________`

### Important Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your message"

# Push changes
git push

# View remote
git remote -v
```

---

## 📝 Notes

Use this space for your own notes:

```
_______________________________________________

_______________________________________________

_______________________________________________

_______________________________________________
```

---

## ✨ Final Check

Before considering your portfolio complete:

- [ ] All checklists above are completed
- [ ] Site is live and working
- [ ] Content is personalized
- [ ] Shared with network
- [ ] Ready to include in job applications

---

**Congratulations! Your portfolio is live! 🎉**

**Pro Tip:** Keep this checklist for future updates!

---

**Last Updated:** [Add your completion date]

**Status:** [ ] In Progress  [ ] Completed  [ ] Live & Shared

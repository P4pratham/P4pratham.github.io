# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio files ready

## Option 1: Deploy as User/Organization Site (username.github.io)

This is the recommended method as your site will be available at `https://username.github.io`

### Steps:

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it exactly: `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your GitHub username)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Initialize and push from your local directory**

Open PowerShell or Command Prompt in your project folder and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

3. **Wait for deployment**
   - GitHub Pages will automatically deploy your site
   - Visit `https://YOUR-USERNAME.github.io` after 1-2 minutes
   - Your portfolio is now live!

## Option 2: Deploy as Project Site

If you want to use a custom repository name (e.g., `portfolio`):

### Steps:

1. **Create a new repository**
   - Name it anything you want (e.g., `portfolio`)
   - Make it public

2. **Push your code**

```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section (left sidebar)
   - Under **Source**, select branch: `main`
   - Select folder: `/ (root)`
   - Click **Save**

4. **Access your site**
   - Your site will be at: `https://YOUR-USERNAME.github.io/REPO-NAME`

## Updating Your Portfolio

After making changes to your portfolio:

```powershell
# Check what files changed
git status

# Add changed files
git add .

# Commit with a message
git commit -m "Update: Description of changes"

# Push to GitHub
git push
```

Your site will automatically update within 1-2 minutes.

## Custom Domain (Optional)

If you have a custom domain:

1. In your repository, go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain (e.g., `prathameshshelke.com`)
3. Click **Save**
4. Add a `CNAME` file to your repository root with your domain name
5. Configure your domain's DNS settings to point to GitHub Pages:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR-USERNAME.github.io`

## Verification

After deployment, verify:

- ✅ Site loads correctly
- ✅ All animations work
- ✅ Links are functional
- ✅ Contact form works
- ✅ Responsive design on mobile

## Troubleshooting

### Site not loading after 5 minutes
- Check if repository name is correct
- Ensure repository is public
- Verify GitHub Pages is enabled in Settings

### CSS/JS not loading
- Check file paths are relative (not absolute)
- Ensure all files are committed and pushed
- Clear browser cache and try again

### 404 errors
- Verify all file names match exactly (case-sensitive)
- Check that all referenced files exist in repository

## Common Commands Reference

```powershell
# Check repository status
git status

# See commit history
git log --oneline

# View remote repository
git remote -v

# Pull latest changes
git pull

# Create and switch to new branch
git checkout -b feature-name

# Switch back to main
git checkout main
```

## Next Steps

After deployment:

1. ✅ Test your site on different devices
2. ✅ Share your portfolio URL on LinkedIn
3. ✅ Add the URL to your resume
4. ✅ Update your GitHub profile README with the link
5. ✅ Consider SEO optimization
6. ✅ Set up Google Analytics (optional)

## Support

If you encounter issues:

- Check GitHub Pages documentation: https://docs.github.com/pages
- Review GitHub Pages status: https://www.githubstatus.com
- Check repository Actions tab for deployment logs

---

## Quick Start Commands (Copy & Paste)

Replace `YOUR-USERNAME` with your GitHub username:

```powershell
# One-time setup
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git branch -M main
git push -u origin main
```

```powershell
# Future updates
git add .
git commit -m "Update portfolio"
git push
```

That's it! Your portfolio is now live on GitHub Pages! 🚀

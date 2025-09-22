# 🎂 Birthday Website (Mobile Version)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/birthday_website_mobile.git
   cd birthday_website_mobile
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to http://localhost:5173/ (default Vite dev server URL).

### Build For Production

To build the project for production:
```bash
npm run build
```
The production-ready files will be generated in the _dist_ directory.

## 🎨 Making the Page Personal to You
This project allows full customization through the config.js file and by adding images to specific folders.

### 1️⃣ Editing Text & Titles
All customizable text (titles, messages, prompts) is in `config.js`. You can edit:

- **Home page messages and recipient name**
- **Birthday card content and signature**
- **Cake page settings and blow instructions**
- **Present page title and gift items**
- **Colors, timing, and animation settings**

Simply open `config.js` and edit the values.

### 2️⃣ Adding Personal Pictures
To add your own images, place them in `src/assets/` and import them:

📌 **Picture Gallery (used in the Pictures page):**

- Location: `src/assets/`
- Import your images in `src/assets/index.js`
- Update the `images` array in `src/components/Picture.jsx`
- Example: Replace `picture.png` with your own images

📌 **Background & Decorative Images**

- `src/assets/bg.jpg` → Background image for the app
- `src/assets/confetti.gif` → Confetti animation after blowing candles
- `src/assets/picture.png` → Default placeholder image

If you add new images, make sure to import them properly so the app loads them! 🎉

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Update the repository name** in `vite.config.js`:
   ```javascript
   base: '/your-repository-name/',
   ```

2. **Push to GitHub** and enable GitHub Pages:
   - Go to repository settings → Pages
   - Set source to "Deploy from a branch" 
   - Select branch: `gh-pages`

3. **Automatic Deployment**: Every push to `main` builds and deploys automatically!

### Manual Deployment:
```bash
npm run build
npm run deploy
```

## 🖌️ Styling
This project uses Tailwind CSS for styling.

- You can modify colors in `tailwind.config.js` (custom blue is already defined)
- Add or remove Tailwind classes in `.jsx` files
- Everything is fully responsive and mobile-first 🎨✨

## ⚠️ Advanced Settings (For Developers)
**DO NOT CHANGE UNLESS YOU KNOW WHAT YOU'RE DOING** ⚠️

Certain configurations should not be changed unless you are modifying the app structure:

- Route paths in `config.js` → `routes` section
- Audio detection settings → `audioSettings` section  
- Animation timing → `fadeInDuration`, `cardOpenDelay`

## 📜 Conclusion
This project is designed to be customizable and easy to use! 🎉 Simply:
1️⃣ Edit `config.js` to personalize text
2️⃣ Add your own images to `src/assets/` 
3️⃣ Run the project and enjoy!
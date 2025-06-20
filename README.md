# 📱 NotMyPal - Instagram Follower Analysis Tool

An elegant and user-friendly tool for analyzing your Instagram data. Find out who doesn't follow you back and optimize your Instagram network.

![NotMyPal Screenshot](https://img.shields.io/badge/Status-Active-brightgreen)
![React Version](https://img.shields.io/badge/React-18.3.1-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 What is NotMyPal?

NotMyPal is a modern web tool that helps you analyze your Instagram followers. Download your Instagram data and let NotMyPal do the work for you - it shows you exactly who follows you but doesn't follow back.

### ✨ Key Features

- 🔍 **Smart Follower Analysis** - Compares your followers with your following lists
- 📥 **Easy Data Import** - Drag & drop for Instagram ZIP files
- 🔗 **Direct Instagram Links** - Navigate quickly to profiles
- 📊 **Clear Presentation** - Clean lists with clickable links
- 🎨 **Modern Design** - Glassmorphism effect with beautiful gradient
- 📱 **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Instagram account with data download

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/NotMyPal.git
   cd NotMyPal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### 1. Download Instagram Data

1. Click the **"📥 Download Instagram Data"** button
2. Follow the instructions on Instagram:
   - Go to **Settings** → **Security** → **Download Data**
   - Wait for the email with the download link
   - Download the ZIP file

### 2. Analyze Data in NotMyPal

1. **Upload ZIP file**:
   - Drag the Instagram ZIP file into the upload area
   - Or click to select a file

2. **Wait for analysis**:
   - NotMyPal automatically processes your data
   - Analysis takes only a few seconds

3. **View results**:
   - See a list of all users who don't follow you back
   - Click on usernames to navigate to their Instagram profiles

## 🛠️ Technical Details

### Technologies Used

- **Frontend**: React 18.3.1
- **Styling**: Tailwind CSS
- **File Processing**: JSZip
- **Drag & Drop**: React Dropzone
- **Build Tool**: Create React App

### Project Structure

```
NotMyPal/
├── public/
│   ├── favicon.svg          # Custom NotMyPal Favicon
│   ├── index.html           # HTML Template
│   └── manifest.json        # PWA Manifest
├── src/
│   ├── App.js              # Main Component
│   ├── App.css             # Styling
│   └── index.js            # App Entry Point
├── package.json            # Dependencies & Scripts
└── README.md              # This file
```

## 🔧 Available Scripts

### Development
```bash
npm start          # Starts development server
npm test           # Runs tests
npm run build      # Creates production build
```

### Deployment
```bash
npm run deploy     # Deploys to GitHub Pages
```

## 🎨 Design Features

- **Glassmorphism Effect** with gradient background
- **Responsive Design** for desktop, tablet and mobile
- **Hover Effects** and smooth transitions
- **Modern UI/UX** with Tailwind CSS
- **Custom Favicon** with NotMyPal branding

## 🔒 Privacy & Security

- **100% Local Processing** - Your data never leaves your device
- **No Server Communication** - All calculations happen in the browser
- **No Data Storage** - Data is not stored anywhere
- **GDPR Compliant** - Fully privacy compliant

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Create Pull Request**

### Planned Features

- [ ] Advanced statistics and visualizations
- [ ] Smart filtering and sorting
- [ ] Export functions (PDF, CSV)
- [ ] Dark/Light mode toggle
- [ ] Mobile app version
- [ ] Engagement rate analysis
- [ ] Batch unfollow functions

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **Instagram** for providing the data export feature
- **React Community** for the amazing framework
- **Tailwind CSS** for the beautiful styling system
- **All contributors** and feedback providers

## 📞 Support

For questions or issues:

- **Issues**: [GitHub Issues](https://github.com/yourusername/NotMyPal/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/NotMyPal/discussions)
- **Email**: support@notmypal.com

---

**Developed with ❤️ for the Instagram Community**

⭐ **Star this repository if you like it!**

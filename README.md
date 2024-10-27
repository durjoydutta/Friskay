# Friskay - Premium Cat Food Landing Page 🐱

A modern, responsive landing page for Friskay premium cat food brand. Features an animated mobile menu, playful illustrations, and a clean, modern design that emphasizes the brand's fun and energetic personality.

![Friskay Landing Page Preview](/preview.png)

## 🚀 Features

- Responsive design that works across all devices
- Animated mobile navigation menu with smooth transitions
- Custom illustrations and SVG graphics
- Interactive elements and hover states
- Optimized layout and performance
- Modern CSS using nested selectors and custom properties

## 🛠️ Technologies Used

- HTML5
- CSS3 (with modern features like nested selectors)
- JavaScript (Vanilla)
- SVG Graphics
- Inter Font Family

## 📋 Prerequisites

- A modern web browser
- Basic understanding of HTML, CSS, and JavaScript
- Code editor (VS Code recommended)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/friskay-landing.git
```

2. Navigate to the project directory:
```bash
cd friskay-landing
```

3. Open `index.html` in your browser or use a local development server.

## 🎨 Project Structure

```
friskay-landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── logo.svg
│   ├── menu.svg
│   ├── close.svg
│   ├── bonkers.svg
│   └── cat.png
└── README.md
```

## 💻 Usage

The website is designed to be intuitive and user-friendly. The mobile menu can be toggled using the menu icon in the top right corner on mobile devices. All links are currently set to "#" as placeholder values - update these with your actual URLs before deployment.

## 🎯 Key Components

### Mobile Navigation
```javascript
// Toggle mobile menu functionality
const menu = document.querySelector('nav ul');
const openBtn = document.querySelector('.menu_open');
const closeBtn = document.querySelector('.menu_close');
```

### Responsive Design
```css
@media (min-width: 750px) {
    .hide-desktop {
        display: none;
    }
}
```

## 🔨 Customization

### Colors
The main colors used in the project are:
- Primary Orange: `#FFA800`
- Background: `whitesmoke`
- Text: `#111`
- Circle Background: `rgba(57, 219, 203, 0.096)`
- Inner Circle: `#ffebc3`

To modify these, update the corresponding values in `style.css`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## ✨ Credits

- Design & Development by DDC
- Cat illustration by [Artist Name/Source]
- Inter font family by Rasmus Andersson

## 📫 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/friskay-landing](https://github.com/yourusername/friskay-landing)

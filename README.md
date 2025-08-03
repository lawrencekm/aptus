# Aptus Group - Professional Logistics & Safe Depository Services

A modern, responsive website for Aptus Group built with Next.js 15, TypeScript, and Tailwind CSS. This project converts a Laravel Blade template into a professional React-based landing page.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with professional UI/UX
- **Interactive Components**: Smooth animations with Framer Motion
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance Focused**: Optimized images and lazy loading
- **Professional Branding**: Aptus Group corporate identity

## 🏢 About Aptus Group

Aptus Group is a leading logistics and safe depository services company operating across East Africa and the Great Lakes region. Services include:

- **Logistics Services**: Air, Sea & Road Freight, Customs Clearing, Freight Consulting
- **Warehousing Services**: CFS (Clearing and Forwarding), Secure Warehousing
- **Safe Depository**: Advanced robotics-powered safe deposit solutions

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (FontAwesome)
- **Carousel**: Embla Carousel React
- **Fonts**: Inter & Roboto (Google Fonts)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd aptus-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
aptus-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Features.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── LoadingSpinner.tsx
│       ├── Navbar.tsx
│       ├── QuoteForm.tsx
│       ├── Services.tsx
│       ├── Stats.tsx
│       ├── Testimonials.tsx
│       └── TrackingForm.tsx
├── public/
│   ├── images/
│   └── robots.txt
└── package.json
```

## 🎨 Components Overview

- **Navbar**: Responsive navigation with smooth scrolling
- **Hero**: Animated carousel showcasing logistics and safe depository services
- **About**: Dual-section about component with features
- **Stats**: Animated counters with company statistics
- **Services**: Grid layout showcasing all services
- **QuoteForm**: Interactive form for quote requests
- **TrackingForm**: Shipment tracking functionality
- **Features**: Why choose Aptus Group section
- **Testimonials**: Customer testimonials carousel
- **Footer**: Comprehensive footer with contact info and links

## 🖼 Images Setup

Add the following images to `public/images/`:

- `carousel-1.jpg` - Main logistics image
- `safe.jpg` - Safe depository image
- `transport-and-logistics.jpg` - About section image
- `Safe-Deposit-Box-Bank-Vault-Locker.jpg` - Safe services image
- `service-1.jpg` to `service-5.jpg` - Service images
- `feature.jpg` - Features section image

See `public/images/README.md` for detailed image requirements.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO Features

- Comprehensive metadata
- Open Graph tags
- Twitter Card support
- Structured data
- Semantic HTML
- Optimized images
- robots.txt

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📞 Contact Information

- **Phone**: +254 101 631 676, +254 107 816 884
- **Email**: info@aptusgroup.com
- **Address**: Airport North Road, Nairobi, KENYA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to Aptus Group.

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## 📈 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js Image component
- Lazy loading implemented

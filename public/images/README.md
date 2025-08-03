# Images Directory

This directory contains all the images used in the Aptus Group website.

## Required Images

The following images are referenced in the components and need to be added:

### Hero Carousel Images
- `carousel-1.jpg` - Main logistics/transport image for hero carousel
- `safe.jpg` - Safe depository image for hero carousel

### About Section Images
- `transport-and-logistics.jpg` - Cargo logistics solutions image
- `Safe-Deposit-Box-Bank-Vault-Locker.jpg` - Safe depository services image

### Services Images
- `service-1.jpg` - Air, Sea & Road Freight service
- `service-2.jpg` - Customs Clearing service
- `service-3.jpg` - Freight Consulting service
- `service-4.jpg` - Warehousing Services
- `service-5.jpg` - Safe Depository & Safekeeping

### Features Image
- `feature.jpg` - Why Choose Aptus Group section image

## Image Requirements

- **Format**: JPG or PNG
- **Size**: Optimized for web (recommended max width: 1920px)
- **Quality**: High quality but web-optimized
- **Content**: Professional logistics, shipping, warehousing, and safe depository related images

## Placeholder Images

For development purposes, you can use placeholder images from services like:
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Lorem Picsum (https://picsum.photos/)

Search terms for appropriate images:
- Logistics
- Shipping containers
- Cargo transport
- Warehouse
- Safe deposit box
- Freight transport
- Port/harbor
- Trucks/trucking
- Air cargo
- Sea freight

## Usage

Images are imported using Next.js Image component for optimal performance:

```jsx
import Image from 'next/image';

<Image
  src="/images/carousel-1.jpg"
  alt="Description"
  fill
  className="object-cover"
/>
```

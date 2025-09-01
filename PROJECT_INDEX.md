# BH Store - Chỉ Mục Dự Án

## 📋 Tổng Quan Dự Án

**Tên dự án:** BH Store  
**Loại:** Website thương mại điện tử / Portfolio  
**Công nghệ:** React + TypeScript + Vite + Tailwind CSS  
**Trạng thái:** Đang phát triển

## 🏗️ Cấu Trúc Dự Án

### 📁 Thư Mục Gốc

```
bh-store/
├── public/                 # Tài nguyên tĩnh
├── src/                   # Mã nguồn chính
├── package.json           # Cấu hình dự án
├── vite.config.ts         # Cấu hình Vite
├── tailwind.config.js     # Cấu hình Tailwind CSS
├── tsconfig.json          # Cấu hình TypeScript
└── netlify.toml           # Cấu hình deploy Netlify
```

### 📁 Thư Mục Public

```
public/
├── images/                # Hình ảnh portfolio
│   ├── about-shop.jpg     # Hình ảnh về shop
│   ├── hero-bg.jpg        # Background hero section
│   ├── portfolio-*.jpg    # Hình ảnh portfolio (8 items)
│   └── ...
├── favicon.ico            # Icon website
├── manifest.json          # PWA manifest
├── robots.txt             # SEO robots
├── sitemap.xml            # Sitemap XML
└── _redirects             # Netlify redirects
```

### 📁 Thư Mục Source (src/)

```
src/
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Header navigation
│   │   └── Footer.tsx    # Footer
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── FloatingButtons.tsx
│       └── LanguageThemeSwitcher.tsx
├── contexts/             # React contexts
│   ├── AppContext.tsx    # Global app state
│   └── useApp.ts         # Custom hook
├── translations/         # Đa ngôn ngữ
│   └── index.ts
├── utils/                # Utility functions
│   ├── analytics.ts      # Google Analytics
│   └── scroll.ts         # Scroll utilities
├── lib/                  # Library functions
│   └── utils.ts          # Utility functions
├── assets/               # Assets
│   └── images/
│       └── bhstore.png   # Logo
├── App.tsx               # Main App component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🛠️ Công Nghệ Sử Dụng

### Frontend Framework

- **React 18.3.1** - UI framework
- **TypeScript 5.6.2** - Type safety
- **Vite 6.0.1** - Build tool

### Styling & UI

- **Tailwind CSS 3.4.17** - CSS framework
- **Radix UI** - Accessible UI components
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
- **Lucide React** - Icon library
- **AOS (Animate On Scroll)** - Scroll animations

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

## 📄 Các Trang/Section Chính

### 1. Hero Section

- **File:** `src/components/sections/HeroSection.tsx`
- **Mô tả:** Trang chủ với banner chính
- **Tính năng:** Animation, responsive design

### 2. About Section

- **File:** `src/components/sections/AboutSection.tsx`
- **Mô tả:** Giới thiệu về shop
- **Tính năng:** Hình ảnh, mô tả chi tiết

### 3. Services Section

- **File:** `src/components/sections/ServicesSection.tsx`
- **Mô tả:** Danh sách dịch vụ
- **Tính năng:** Card layout, hover effects

### 4. Portfolio Section

- **File:** `src/components/sections/PortfolioSection.tsx`
- **Mô tả:** Showcase sản phẩm
- **Tính năng:** Grid layout, modal view
- **Sản phẩm:** 8 loại sản phẩm
  - Banner
  - Poster
  - Standee
  - Billboard
  - Decal
  - Photocopy
  - Signage
  - LED

### 5. Pricing Section

- **File:** `src/components/sections/PricingSection.tsx`
- **Mô tả:** Bảng giá dịch vụ
- **Tính năng:** Pricing cards, comparison

### 6. Contact Section

- **File:** `src/components/sections/ContactSection.tsx`
- **Mô tả:** Thông tin liên hệ
- **Tính năng:** Contact form, map, social links

## 🎨 UI Components

### Layout Components

- **Header:** Navigation, logo, menu
- **Footer:** Links, contact info, social media

### UI Components

- **Button:** Multiple variants, sizes
- **Card:** Content containers
- **Dialog:** Modal windows
- **Input/Textarea:** Form elements
- **FloatingButtons:** Scroll to top, contact
- **LanguageThemeSwitcher:** Theme & language toggle

## 🌐 Đa Ngôn Ngữ & Theme

### Ngôn Ngữ Hỗ Trợ

- **Tiếng Việt (vi)** - Mặc định
- **Tiếng Anh (en)**

### Theme

- **Light Mode** - Mặc định
- **Dark Mode** - Tối

### Context Management

- **AppContext:** Global state management
- **useApp:** Custom hook for context

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Optimizations

- Faster AOS animations
- Smaller offsets
- Optimized touch interactions

## 🚀 Deployment

### Netlify Configuration

- **File:** `netlify.toml`
- **Redirects:** `public/_redirects`
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

### SEO & Performance

- **Sitemap:** `public/sitemap.xml`
- **Robots:** `public/robots.txt`
- **Manifest:** `public/manifest.json`
- **Analytics:** Google Analytics integration

## 📊 Scripts Available

```bash
# Development
npm run dev          # Start dev server
npm run preview      # Preview production build

# Building
npm run build        # Build for production

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Git Hooks
npm run prepare      # Setup Husky hooks
```

## 🔧 Configuration Files

### Build Tools

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

### Code Quality

- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui configuration

## 📈 Analytics & Tracking

### Google Analytics

- **File:** `src/utils/analytics.ts`
- **Integration:** GTM/GA4 setup

### Scroll Tracking

- **File:** `src/utils/scroll.ts`
- **Features:** Scroll position tracking

## 🎯 Portfolio Items

### Sản Phẩm Chính

1. **Banner** - Biển quảng cáo
2. **Poster** - Áp phích
3. **Standee** - Bảng đứng
4. **Billboard** - Bảng quảng cáo lớn
5. **Decal** - Decal dán
6. **Photocopy** - In ấn
7. **Signage** - Biển hiệu
8. **LED** - Màn hình LED

## 🔄 State Management

### Global State

- **Theme:** Light/Dark mode
- **Language:** Vietnamese/English
- **Local Storage:** Persistence

### Context API

- **AppContext:** Centralized state
- **useApp:** Custom hook for easy access

## 📝 Development Notes

### Code Style

- **ESLint:** Enforced code quality
- **Prettier:** Consistent formatting
- **TypeScript:** Type safety
- **Husky:** Pre-commit hooks

### Performance

- **AOS:** Optimized for mobile
- **Lazy Loading:** Images and components
- **Code Splitting:** Vite optimization

---

_Chỉ mục này được tạo tự động và cập nhật theo cấu trúc dự án hiện tại._

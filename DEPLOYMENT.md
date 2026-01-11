# Vercel Deployment Optimization Guide

## ✅ Đã tối ưu

### 1. **vercel.json** - Cấu hình Vercel
- Deploy region: Singapore (sin1) - gần Việt Nam nhất
- Cache headers cho static assets (images, JS, CSS)
- Security headers (XSS, Clickjacking protection)

### 2. **next.config.mjs** - Tối ưu Next.js
- **Standalone output mode** - giảm 80% deployment size
- Image optimization (AVIF, WebP)
- SWC minification
- CSS optimization
- Package import optimization
- Bật compression

### 3. **.npmrc** - Tối ưu npm install
- Tăng tốc build trên Vercel

## 🔥 Cần làm thủ công

### 1. **Tối ưu images (QUAN TRỌNG!)**
Các file này quá lớn và cần compress:

```bash
# Cài tool tối ưu ảnh
npm install -D sharp-cli

# Tối ưu tất cả ảnh (giảm 60-80% dung lượng)
npx sharp-cli -i "public/images/**/*.{jpg,png}" -o "public/images/" -f webp -q 85
```

**Hoặc dùng online tools:**
- https://squoosh.app/ (Google)
- https://tinypng.com/

**Images cần tối ưu:**
- `public/images/projects/sofin/*.png` (1.9MB → ~300KB)
- `public/images/avatar.jpg` (413KB → ~80KB)

### 2. **Environment Variables trên Vercel**
Vào Vercel Dashboard → Project Settings → Environment Variables:
```
PAGE_ACCESS_PASSWORD=your_secure_password
```

### 3. **Vercel Project Settings**
- **Build Command**: `npm run build` (mặc định OK)
- **Output Directory**: `.next` (mặc định OK)
- **Install Command**: `npm install` (mặc định OK)
- **Framework**: Next.js (auto-detect)

### 4. **Caching & Performance**
Vercel tự động có:
- ✅ Edge CDN (global)
- ✅ Incremental Static Regeneration
- ✅ Image optimization API

## 📊 Performance Tips

### Sau khi deploy, check:
1. **Vercel Analytics** - xem performance metrics
2. **Lighthouse Score** - aim for 90+ 
3. **Web Vitals** - LCP < 2.5s, FID < 100ms

### Build time optimization:
```json
// package.json - thêm script
"analyze": "ANALYZE=true next build"
```

### Monitor bundle size:
```bash
npm install -D @next/bundle-analyzer
```

## 🚀 Deploy Commands

```bash
# Deploy to production
git push origin main

# Deploy preview (PR)
git push origin develop

# Local preview
npm run build && npm start
```

## 🎯 Expected Results
- ⚡ Build time: 2-3 phút
- 📦 Bundle size: < 500KB (first load JS)
- 🗜️ **Deployment size: ~50MB** (thay vì 200-300MB với node_modules)
- 🖼️ Images: WebP/AVIF format, lazy loading
- 🌍 CDN: Global edge network
- 📈 Lighthouse: 90+ score

## 🏗️ Standalone Mode Benefits
- ✅ Chỉ deploy code cần thiết (không có node_modules đầy đủ)
- ✅ Faster cold starts
- ✅ Smaller Docker images (nếu self-host)
- ✅ Vercel tự động tối ưu

## 🔧 Troubleshooting

**Build quá lâu?**
- Check dependencies size
- Remove unused packages

**Images không load?**
- Vercel tự động optimize qua Image Optimization API
- Đảm bảo dùng `next/image` component

**Environment variables không work?**
- Phải prefix `NEXT_PUBLIC_` cho client-side vars
- Rebuild sau khi thay đổi env vars

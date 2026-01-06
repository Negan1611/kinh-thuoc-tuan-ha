# 👓 Project: Kính Thuốc Tuấn Hà (Cloudflare GitOps Edition)

> **Role:** Single Source of Truth (SSOT)
> **Agent Protocol:** Super Agent (Strict Terminal & GitOps Mode)
> **Status:** Phase 2 Complete - UI Components Ready for Testing
> **Stack:** Next.js 14+ (App Router), Cloudflare Pages, Cloudflare D1 (SQLite), Drizzle ORM.

---

## 1. Core Principles (Luật Bất Di Bất Dịch)
1.  **No Auto-Browser:** Agent KHÔNG ĐƯỢC PHÉP tự ý mở trình duyệt. Nếu cần xác thực (Login), hãy cung cấp URL để User tự làm.
2.  **Terminal First:** Mọi thao tác tạo file, cài đặt, migrate database đều phải cung cấp lệnh Shell/Bash cho User thực hiện thủ công.
3.  **GitOps Workflow:**
    * Mọi thay đổi code phải được commit và push lên nhánh `main`.
    * Cloudflare Pages sẽ tự động build từ GitHub.
    * Tuyệt đối không dùng lệnh `wrangler deploy` trực tiếp từ máy local (trừ khi test D1 migration).

## 2. Business Info (Thông tin Doanh Nghiệp)
* **Name:** Kính Thuốc Tuấn Hà
* **Address:** 61A đường Biên Hoà, P. Lương Khánh Thiện, TP. Phủ Lý, Hà Nam.
* **Contacts:** Hotline/Zalo: `0988887870` | Messenger: `https://m.me/100067165626895`

## 3. System Architecture (Kiến trúc hệ thống)
* **Hosting:** Cloudflare Pages (Edge Runtime).
* **Database:** Cloudflare D1 (Serverless SQLite).
* **ORM:** Drizzle ORM + Drizzle Kit.
* **Deployment:** GitHub Actions / Cloudflare CI.
* **Config:** `wrangler.toml` (D1 binding), `drizzle.config.ts`.

## 4. Implementation Plan (Kế hoạch triển khai)

### Phase 1: Setup Infrastructure ✅ (Completed)
- [x] **Init Project:** Next.js + Tailwind + TypeScript.
- [x] **Install Libs:** `drizzle-orm`, `@cloudflare/next-on-pages`, `better-sqlite3` (dev).
- [x] **Install DevTools:** `drizzle-kit`, `wrangler`, `dotenv`.
- [x] **Git Setup:** Init repo, ignore files, ready to push to GitHub `kinh-thuoc-tuan-ha`.
- [x] **Cloudflare Binding:** Configure `wrangler.toml` for D1 DB `kinh-mat-db` (manual creation required).
- [x] **Schema:** Define `products` and `orders` tables in `src/db/schema.ts`.

### Phase 2: UI Components & Layout ✅ (Completed)
- [x] **Assets:** Setup Fonts (Be Vietnam Pro), Colors (Royal Blue).
- [x] **Layout:** Header (Mega Menu), Footer (4 cols), Mobile Menu.
- [x] **Global Layout:** Header & Footer moved to `layout.tsx` for all pages.
- [x] **Components:** ProductCard với badges và price formatting.
- [x] **Home Sections:** Hero Banner (carousel), Category Grid, Featured Products.
- [x] **Responsive:** Mobile-first design với breakpoints tối ưu.

### Phase 3: Product Pages & Database Integration ✅ (Completed)
- [x] **SEO-Friendly URLs:** Restructured routes to Vietnamese no-accent format:
  - `/san-pham` - All products listing/search
  - `/[category]` - Category landing pages (e.g., `/gong-kinh`)
  - `/[category]/[slug]` - Product detail pages (e.g., `/gong-kinh/rayban-aviator`)
  - `/lien-he` - Contact page
  - `/cua-hang` - Store locations
- [x] **Product Listing:** Trang danh sách sản phẩm với filters và search.
- [x] **Product Detail:** Trang chi tiết sản phẩm với image gallery, related products.
- [x] **Category Pages:** Dynamic category landing pages với banner và filters.
- [x] **Database Schema:** D1 schema với `products` và `orders` tables.
- [x] **Seed API:** `/api/seed` route để migrate mock data vào D1.
- [x] **Mock Data:** 16 sản phẩm mẫu với slugs và categories.

### Phase 4: E-commerce Features (Next)
- [ ] **Shopping Cart:** Client-side cart với localStorage.
- [ ] **Checkout Flow:** Form đặt hàng và xác nhận.
- [ ] **API Routes:** GET/POST endpoints cho products và orders từ D1.
- [ ] **Admin Panel:** Quản lý sản phẩm và đơn hàng (optional).
- [ ] **Search Enhancement:** Full-text search với filters nâng cao.

## 5. Domain Modeling (Drizzle Schema)
**File: `src/db/schema.ts`**
```typescript
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  slug: text('slug').unique().notNull(),
  price: integer('price').notNull(),
  category: text('category').notNull(), // GONG_KINH, TRONG_KINH...
  attributes: text('attributes', { mode: 'json' }), // Brand, Shape, Material
  images: text('images', { mode: 'json' }),
  inStock: integer('in_stock', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  customerName: text('customer_name').notNull(),
  customerPhone: text('customer_phone').notNull(),
  items: text('items', { mode: 'json' }).notNull(),
  totalPrice: integer('total_price').notNull(),
  status: text('status').default('PENDING'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});
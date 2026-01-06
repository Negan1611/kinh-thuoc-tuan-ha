# 🚀 Hướng Dẫn Cài Đặt & Triển Khai

## 📋 Yêu Cầu Hệ Thống
- **Node.js:** >= 18.x
- **npm:** >= 9.x
- **Git:** >= 2.x
- **Tài khoản Cloudflare:** (Free tier)
- **Tài khoản GitHub:** (Free tier)

---

## 🔧 Bước 1: Cài Đặt Dependencies

Mở Terminal tại thư mục `d:\Kinhthuoctuanha` và chạy:

```bash
npm install
```

**Lưu ý:** Lệnh này sẽ cài đặt tất cả dependencies đã được định nghĩa trong `package.json`.

---

## 🗄️ Bước 2: Tạo Cloudflare D1 Database

### 2.1. Đăng nhập Cloudflare CLI

```bash
npx wrangler login
```

Lệnh này sẽ mở trình duyệt để bạn đăng nhập vào Cloudflare.

### 2.2. Tạo D1 Database

```bash
npx wrangler d1 create kinh-mat-db
```

**Output mẫu:**
```
✅ Successfully created DB 'kinh-mat-db'
Database ID: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### 2.3. Cập nhật `wrangler.toml`

Copy **Database ID** từ output trên và thay thế vào file `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "kinh-mat-db"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" # <-- Paste Database ID vào đây
```

---

## 🔑 Bước 3: Cấu Hình Environment Variables

### 3.1. Tạo file `.env.local`

```bash
copy .env.example .env.local
```

### 3.2. Lấy Cloudflare Credentials

1. **Account ID:**
   - Truy cập: https://dash.cloudflare.com/
   - Account ID hiển thị ở sidebar bên phải

2. **API Token:**
   - Truy cập: https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Chọn template "Edit Cloudflare Workers"
   - Copy token

3. **D1 Database ID:**
   - Đã lấy ở Bước 2.2

### 3.3. Cập nhật `.env.local`

```env
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
CLOUDFLARE_D1_ID=your_d1_database_id_here
CLOUDFLARE_API_TOKEN=your_api_token_here
```

---

## 🗃️ Bước 4: Generate & Run Database Migrations

### 4.1. Generate Migration Files

```bash
npm run db:generate
```

### 4.2. Apply Migrations (Local)

```bash
npm run db:migrate
```

### 4.3. Apply Migrations (Production)

```bash
npm run db:migrate:prod
```

---

## 🏃 Bước 5: Chạy Development Server

```bash
npm run dev
```

Mở trình duyệt tại: **http://localhost:3000**

---

## 📦 Bước 6: Thiết Lập Git & Push lên GitHub

### 6.1. Khởi tạo Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Next.js + Cloudflare Stack setup"
```

### 6.2. Tạo GitHub Repository

1. Truy cập: https://github.com/new
2. Repository name: `kinh-thuoc-tuan-ha`
3. Visibility: **Private** (hoặc Public tùy ý)
4. **KHÔNG** chọn "Initialize with README"
5. Click "Create repository"

### 6.3. Push Code lên GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/kinh-thuoc-tuan-ha.git
git branch -M main
git push -u origin main
```

**Thay `YOUR_USERNAME` bằng username GitHub của bạn.**

---

## ☁️ Bước 7: Deploy lên Cloudflare Pages

### 7.1. Kết nối GitHub với Cloudflare Pages

1. Truy cập: https://dash.cloudflare.com/
2. Click "Workers & Pages" → "Create application" → "Pages"
3. Click "Connect to Git"
4. Chọn repository `kinh-thuoc-tuan-ha`
5. **Build settings:**
   - Framework preset: **Next.js**
   - Build command: `npm run pages:build`
   - Build output directory: `.vercel/output/static`
6. **Environment variables:** (Thêm các biến từ `.env.local`)
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_D1_ID`
   - `CLOUDFLARE_API_TOKEN`
7. Click "Save and Deploy"

### 7.2. Bind D1 Database

1. Sau khi deploy xong, vào **Settings** → **Functions**
2. Scroll xuống **D1 database bindings**
3. Click "Add binding"
   - Variable name: `DB`
   - D1 database: `kinh-mat-db`
4. Click "Save"

### 7.3. Redeploy

Mỗi lần push code lên GitHub, Cloudflare Pages sẽ **tự động build và deploy**.

---

## 🛠️ Scripts Hữu Ích

| Script | Mô tả |
|--------|-------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build production |
| `npm run pages:build` | Build cho Cloudflare Pages |
| `npm run preview` | Preview local với Wrangler |
| `npm run db:generate` | Generate migration files |
| `npm run db:migrate` | Apply migrations (local) |
| `npm run db:migrate:prod` | Apply migrations (production) |
| `npm run db:studio` | Mở Drizzle Studio (GUI) |

---

## 🚨 Lưu Ý Quan Trọng

1. **KHÔNG commit file `.env.local`** (đã có trong `.gitignore`)
2. **KHÔNG dùng `wrangler deploy`** - chỉ push lên GitHub, Cloudflare tự build
3. **Luôn test local trước** với `npm run dev`
4. **Database migrations** phải chạy thủ công sau mỗi lần thay đổi schema

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, kiểm tra:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [Next.js Docs](https://nextjs.org/docs)

# OrangeCloud — Trịnh Hoàng Tú (thtcsec) Portfolio

Website portfolio cá nhân của **Trịnh Hoàng Tú (thtcsec)** trên hệ sinh thái **OrangeCloud**, thiết kế đồng bộ theo chuẩn layout và phong cách của **Cuong Le Sy (`sycule.orangecloud.vn`)**.

---

## ⚡ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Cloudflare Design Tokens (`#0B0F19`, `#111622`, `#F38020`)
- **Hosting / Deploy**: Cloudflare Pages
- **Internationalization**: Song ngữ tức thì (Tiếng Việt & English)

---

## 🚀 Hướng dẫn chạy Local Dev

```bash
# Cài đặt dependencies
pnpm install # hoặc npm install

# Khởi chạy dev server
pnpm dev # hoặc npm run dev
```

Truy cập: `http://localhost:5173` (hoặc `http://localhost:5174`)

---

## ☁️ Hướng dẫn Deploy lên Cloudflare Pages

### Cách 1: Kết nối trực tiếp qua GitHub (Khuyên dùng)

1. Truy cập **[Cloudflare Dashboard](https://dash.cloudflare.com/)** → Chọn mục **Workers & Pages**.
2. Nhấp **Create application** → Chọn tab **Pages** → **Connect to Git**.
3. Chọn repository: **`thtcsec/orangecloud-thtcsec`**.
4. Cấu hình **Build settings**:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build` *(hoặc `pnpm build`)*
   - **Build output directory**: `dist`
   - **Root directory**: `/` *(để trống)*
5. Nhấp **Save and Deploy**.
6. Gắn Custom Domain:
   - Vào mục **Custom domains** của dự án trên Cloudflare Pages.
   - Thêm subdomain mong muốn (ví dụ: `tu.orangecloud.vn` hoặc `thtcsec.orangecloud.vn`).

---

### Cách 2: Deploy trực tiếp bằng Wrangler CLI

```bash
# Cài đặt wrangler nếu chưa có
npm install -g wrangler

# Đăng nhập tài khoản Cloudflare
wrangler login

# Build dự án
npm run build

# Deploy thư mục dist lên Cloudflare Pages
wrangler pages deploy dist --project-name=orangecloud-thtcsec
```

---

## 📄 Bản quyền & Ghi chú

- **Tác giả**: Trịnh Hoàng Tú (thtcsec)
- **Domain**: OrangeCloud Ecosystem
- **Built on**: Cloudflare Pages

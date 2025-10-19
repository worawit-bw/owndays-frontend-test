# OWNDAYS Landing Page

เว็บไซต์หน้าแรกของร้านแว่นตา OWNDAYS ที่ทำด้วย Next.js และ Tailwind CSS

## 🚀 เริ่มต้นใช้งาน

### ติดตั้งและรัน

1. **โคลนโปรเจกต์**
   ```bash
   git clone https://github.com/worawit-bw/owndays-frontend-test.git
   cd owndays-landing-page
   ```

2. **ติดตั้ง dependencies**
   ```bash
   npm install
   ```

3. **รันในโหมด development**
   ```bash
   npm run dev
   ```

4. **เปิดเบราว์เซอร์ไปที่** http://localhost:3000

## 📱 ฟีเจอร์หลัก

- **Responsive Design** - ใช้งานได้ทั้งมือถือ แท็บเล็ต และคอมพิวเตอร์
- **Product Carousel** - เลื่อนดูสินค้าได้ 3 กลุ่มราคา (20,000 เยน+, 10,000 เยน, 8,000 เยนลง)
- **Search Modal** - ค้นหาสินค้าแบบ popup
- **Mobile Menu** - เมนูแบบ hamburger สำหรับมือถือ
- **Product Cards** - การ์ดสินค้าที่สวยงามพร้อมปุ่ม favorite

## 🛠 เทคโนโลยีที่ใช้

- **Next.js 15** - Framework หลัก
- **React 19** - Library สำหรับสร้าง UI
- **Tailwind CSS v4** - สำหรับจัดแต่ง styling
- **JavaScript** - ภาษาที่ใช้พัฒนา

## 📁 โครงสร้างโปรเจกต์

```
owndays-landing-page/
├── components/          # Component ต่างๆ
│   ├── button/         # ปุ่มต่างๆ
│   ├── card/           # การ์ดสินค้า
│   ├── carousel/       # Carousel สำหรับเลื่อนสินค้า
│   ├── landing/        # Section ต่างๆ ในหน้าแรก
│   └── layout/         # Navbar และ Footer
├── pages/              # หน้าเว็บต่างๆ
├── public/             # รูปภาพและไฟล์ static
└── styles/             # CSS files
```

## 🎨 Design System

### สี
- **แดง OWNDAYS**: `#B8181E` 
- **เหลือง**: `#F2DC00`
- **เขียว**: `#468A59`, `#7ABC8C`
- **ทอง**: `#B58741`

### Font
- **Outfit** - สำหรับข้อความภาษาอังกฤษ
- **Noto Sans JP** - สำหรับข้อความภาษาญี่ปุ่น

## 🧩 Component หลัก

### Navbar
- เมนูหลักที่ด้านบน
- ปุ่มค้นหาที่เปิด modal
- เมนู hamburger สำหรับมือถือ

### ProductCarousel
- Component สำหรับแสดงสินค้าแบบเลื่อนได้
- รองรับ 3 กลุ่มราคา
- แสดง 1 สินค้าในมือถือ, 2 สินค้าใน tablet, 4 สินค้าใน desktop

### ProductCard
- การ์ดแสดงข้อมูลสินค้า
- มีปุ่ม favorite
- รองรับ responsive

## � Commands ที่ใช้บ่อย

```bash
# รัน development
npm run dev

# Build สำหรับ production
npm run build

# รัน production
npm start

# ตรวจสอบ code ด้วย ESLint
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (แสดง 1 สินค้า)
- **Tablet**: 640px - 1024px (แสดง 2 สินค้า)  
- **Desktop**: > 1024px (แสดง 4 สินค้า)

## 🎯 ฟีเจอร์พิเศษ

### Product Groups
1. **Premium** (20,000 เยน+) - สีทอง
2. **Standard** (10,000 เยน) - สีเขียวเข้ม
3. **Budget** (8,000 เยนลง) - สีเขียวอ่อน

### Pages ที่มี
- หน้าแรก (`/`)
- เลนส์ (`/lenses`)
- เกี่ยวกับเรา (`/about`)
- แบรนด์ (`/brands`)
- ค้นหาสินค้า (`/search-products`)
- ค้นหาร้าน (`/store-locator`)
- นโยบายความเป็นส่วนตัว (`/privacy`)
- ข้อกำหนดการใช้งาน (`/terms`)

## 🔧 การพัฒนา

### เพิ่ม Component ใหม่
1. สร้างไฟล์ใน folder `components/`
2. ใช้ functional component
3. ใช้ Tailwind CSS สำหรับ styling
4. เทส responsive ทุกขนาดหน้าจอ

### การใช้ ProductCarousel
```javascript
<ProductCarousel
  products={productArray}
  title="ชื่อกลุ่มสินค้า"
  titleColor="#สีที่ต้องการ"
  buttonText="ข้อความบนปุ่ม"
  onButtonClick={() => console.log('คลิกแล้ว')}
/>
```

## 🎨 Styling Tips

- ใช้ Tailwind classes เป็นหลัก
- สำหรับสีพิเศษให้ใส่ใน config
- Mobile-first approach (เขียน mobile ก่อน แล้วใส่ breakpoint)
- ใช้ Next.js Image สำหรับรูปภาพ

---

**สร้างโดยทีมพัฒนา OWNDAYS** 🤓👓
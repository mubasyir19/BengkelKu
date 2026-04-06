# BengkelKu - Sistem Reservasi Bengkel Online

[![Laravel](https://img.shields.io/badge/Laravel-11.x-red.svg)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.2+-blue.svg)](https://php.net)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-1.x-9553e9.svg)](https://inertiajs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8.svg)](https://tailwindcss.com)

BengkelKu adalah aplikasi web modern untuk sistem reservasi bengkel kendaraan yang dibangun dengan Laravel 11, Inertia.js, dan React. Aplikasi ini memungkinkan pelanggan untuk melakukan reservasi servis kendaraan secara online dan memantau status reservasi mereka secara real-time.

## ✨ Fitur Utama

### Untuk Pelanggan

- **Reservasi Online**: Booking servis kendaraan dengan mudah melalui antarmuka web
- **Cek Status Reservasi**: Pantau status antrean reservasi menggunakan nomor telepon dan plat kendaraan
- **Berbagai Jenis Kendaraan**: Mendukung motor, mobil, SUV, MPV, pickup, truk, bus, dan kendaraan listrik
- **Informasi Lengkap**: Detail servis, jadwal, dan informasi pelanggan

### Untuk Admin

- **Dashboard Manajemen**: Panel kontrol lengkap untuk mengelola reservasi
- **Manajemen Status**: Update status reservasi dari pending hingga completed
- **Laporan Reservasi**: Monitoring dan pelaporan aktivitas reservasi
- **Manajemen Profil**: Pengaturan akun dan informasi bengkel

## 🛠️ Teknologi yang Digunakan

- **Backend**: Laravel 11 (PHP 8.2+)
- **Frontend**: React 18 dengan Inertia.js
- **Styling**: Tailwind CSS
- **Database**: MySQL/PostgreSQL dengan Eloquent ORM
- **Authentication**: Laravel Sanctum
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📋 Persyaratan Sistem

- PHP 8.2 atau lebih tinggi
- Composer
- Node.js 18+ dan npm
- MySQL 8.0+ atau PostgreSQL
- Git

## 🚀 Instalasi dan Setup

### 1. Clone Repository

```bash
git clone https://github.com/username/bengkelku.git
cd bengkelku
```

### 2. Install Dependencies PHP

```bash
composer install
```

### 3. Install Dependencies JavaScript

```bash
npm install
```

### 4. Konfigurasi Environment

```bash
cp .env.example .env
```

Edit file `.env` dan sesuaikan konfigurasi database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bengkelku
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 5. Generate Application Key

```bash
php artisan key:generate
```

### 6. Jalankan Migrasi Database

```bash
php artisan migrate
```

### 7. Seed Database (Opsional)

```bash
php artisan db:seed
```

### 8. Build Assets

```bash
npm run build
# atau untuk development
npm run dev
```

### 9. Jalankan Server

```bash
php artisan serve
```

Aplikasi akan berjalan di `http://localhost:8000`

## 📖 Penggunaan

### Akses Aplikasi

- **Halaman Utama**: `http://localhost:8000`
- **Booking Reservasi**: `http://localhost:8000/booking`
- **Cek Status Reservasi**: `http://localhost:8000/check-reservation`

### Akun Admin

Untuk mengakses dashboard admin, daftar akun baru atau gunakan seeder untuk membuat akun default.

## 🏗️ Struktur Proyek

```
bengkelku/
├── app/                    # Kode aplikasi Laravel
│   ├── Http/Controllers/   # Controller
│   ├── Models/            # Model Eloquent
│   └── Providers/         # Service Providers
├── database/              # Migrasi dan seeder
│   ├── migrations/        # Schema database
│   └── seeders/          # Data awal
├── public/                # Assets publik
├── resources/             # Views dan assets
│   ├── css/              # Stylesheet
│   ├── js/               # JavaScript/React
│   └── views/            # Blade templates
├── routes/                # Definisi routes
└── tests/                 # Unit dan feature tests
```

## 🧪 Testing

Jalankan test suite dengan perintah:

```bash
php artisan test
```

## 📝 API Documentation

Aplikasi ini menggunakan Inertia.js untuk komunikasi antara frontend dan backend. Routes API tersedia di `routes/web.php`.

## 🤝 Kontribusi

Kami menerima kontribusi dari komunitas! Silakan ikuti langkah berikut:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 👥 Tim Pengembang

- **Developer**: [Nama Anda]
- **Framework**: Laravel Community

## 📞 Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi:

- Email: your-email@example.com
- GitHub Issues: [Buat Issue Baru](https://github.com/username/bengkelku/issues)

---

**BengkelKu** - Membuat servis kendaraan lebih mudah dan efisien! 🚗🔧

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

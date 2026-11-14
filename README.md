# Portofolio Muh. Asri Ahmad

Website portofolio statis berbasis HTML, Bootstrap, CSS, dan JavaScript ES Modules. Dapat di-host langsung melalui GitHub Pages.

## Struktur proyek

```text
Asri-Ahmad/
├── index.html
├── about.html
├── projects.html
├── project-detail.html
├── login.html
├── css/
│   ├── style.css          # entry point, mengimpor seluruh modul CSS
│   ├── tokens.css         # warna, radius, bayangan, dan design tokens
│   ├── base.css           # reset, tipografi, dan fondasi halaman
│   ├── components.css     # navbar, tombol, card, form, dan komponen umum
│   ├── pages.css          # gaya khusus hero, profil, detail, dan login
│   └── responsive.css     # breakpoint dan aksesibilitas gerakan
├── js/
│   ├── script.js          # entry point JavaScript
│   ├── data/
│   │   └── projects.js    # data konten proyek
│   └── modules/
│       ├── theme.js       # mode terang/gelap
│       ├── project-detail.js # render detail proyek
│       ├── login.js       # validasi form login
│       └── motion.js      # efek animasi saat elemen terlihat
└── gambar/
```

## Cara kerja modular

- Setiap halaman tetap memakai `css/style.css`, yang menjadi pintu masuk untuk semua file CSS.
- Setiap halaman memuat `js/script.js` sebagai ES module. Entry point tersebut memanggil modul sesuai kebutuhan halaman.
- Data proyek disimpan terpisah dari logika tampilan sehingga isi proyek dapat diperbarui tanpa mengubah fungsi detail.
- Login pada website ini tetap berupa simulasi validasi sisi browser, bukan autentikasi server.

## Menjalankan lokal

Buka folder ini melalui VS Code Live Server atau jalankan server lokal. ES Modules sebaiknya tidak diuji dengan membuka file HTML langsung melalui protokol `file://`.

# Week 6 PAW — Etalase Produk dan Pembuat Caption

Project praktikum Week 6 yang menggunakan HTML, CSS, dan JavaScript untuk latihan Fetch API, DOM, Event Handling, dan validasi form.

## Fitur
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/da146db9-940a-4e83-8280-db8f04f0b298" />

### 1. Fetch API — Daftar Produk
- Mengambil data dari `https://dummyjson.com/products` menggunakan `fetch()`.
- Menampilkan nama, gambar, dan harga produk pada halaman web.
- Menampilkan pesan loading saat data sedang diambil.
- Menampilkan pesan jika data gagal dimuat.
- Tombol **Muat Ulang** untuk mengambil data kembali.

### 2. Form Pembuat Caption
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/08d2c1c2-10d3-4a92-a22c-9ce598a5d5ad" />

- Input nama produk dan harga.
- Pilihan gaya caption: Santai, Promo, dan Formal.
- Validasi nama produk minimal 3 karakter dan harga harus lebih dari 0.
- Menampilkan caption dan pesan status langsung pada halaman menggunakan DOM.
- Menggunakan event listener `submit` untuk memproses form.

## Struktur Folder

```text
Week6-PAW/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── latihan/
│   ├── fetch.js
│   └── test.js
└── README.md
```


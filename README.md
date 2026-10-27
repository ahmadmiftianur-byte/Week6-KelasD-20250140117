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

### 3. File latihan Fetch API terpisah
- File `latihan/fetch.js` berisi contoh Fetch API mandiri untuk latihan dan menampilkan hasil di Console browser.
- File `latihan/test.js` menguji respons API, struktur JSON, keberadaan daftar produk, serta nama dan harga produk. Hasilnya ditampilkan di Console browser.
- Kedua file latihan tidak dipanggil oleh halaman utama agar permintaan API tidak berjalan dua kali.
- Fitur utama website tetap berada di `js/script.js` dan menampilkan produk langsung pada halaman.

## Cara Menjalankan

1. Buka folder project di Visual Studio Code.
2. Jalankan `index.html` menggunakan Live Server.
3. Pastikan koneksi internet aktif agar data dari DummyJSON dapat dimuat.
4. Coba tombol **Muat Ulang** dan isi form pembuat caption.
5. Untuk mencoba `latihan/fetch.js` atau `latihan/test.js`, buka DevTools browser (biasanya tekan F12) dan jalankan isi file yang diinginkan di Console, atau buat halaman latihan terpisah yang memuat file tersebut. Hasil latihan/pengujian akan terlihat di Console. File latihan tidak perlu ditambahkan ke `index.html` utama.

## Pengujian

- [ ] Produk berhasil muncul dengan nama dan harga.
- [ ] `latihan/test.js` menyatakan pengujian API dan data produk lulus di Console.
- [ ] Pesan loading muncul saat data sedang dimuat.
- [ ] Pesan error muncul jika API tidak dapat diakses.
- [ ] Tombol **Muat Ulang** dapat mengambil data kembali.
- [ ] Form menolak nama produk kurang dari 3 karakter.
- [ ] Form menolak harga kosong atau kurang dari/sama dengan 0.
- [ ] Caption muncul jika input valid dan berubah sesuai gaya yang dipilih.
- [ ] Tampilan diperiksa pada desktop dan mobile.

## Pengumpulan

Buat repository GitHub baru dengan format nama sesuai ketentuan dosen, yaitu `Week6-Kelas[X]-[NIMLengkap]`. Sesuaikan `[X]` dan `[NIMLengkap]` dengan data sendiri, lalu push seluruh isi folder project ke repository tersebut. Setelah itu, kumpulkan tautan repository Week 6 melalui Moodle.

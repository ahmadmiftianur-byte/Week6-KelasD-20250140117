const API_URL = 'https://dummyjson.com/products';

// Mengambil elemen HTML untuk bagian daftar produk.
const productList = document.getElementById('productList');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');
const refreshButton = document.getElementById('refreshButton');

// Mengambil elemen HTML untuk form caption.
const captionForm = document.getElementById('captionForm');
const productName = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const captionStyle = document.getElementById('captionStyle');
const nameError = document.getElementById('nameError');
const priceError = document.getElementById('priceError');
const captionResult = document.getElementById('captionResult');
const captionText = document.getElementById('captionText');
const formStatus = document.getElementById('formStatus');

// Meminta data produk dari API dan menampilkannya ke halaman.
async function loadProducts() {
  loadingMessage.hidden = false;
  errorMessage.hidden = true;
  productList.replaceChildren();
  loadingMessage.textContent = 'Memuat data produk...';
  refreshButton.disabled = true;
  refreshButton.textContent = 'Memuat...';

  try {
    const response = await fetch(API_URL);

    // fetch tidak otomatis error untuk status HTTP seperti 404 atau 500.
    if (!response.ok) {
      throw new Error('Respons server tidak berhasil.');
    }

    const data = await response.json();

    if (!Array.isArray(data.products)) {
      throw new Error('Format data produk tidak sesuai.');
    }

    displayProducts(data.products);
    loadingMessage.hidden = true;
  } catch (error) {
    loadingMessage.hidden = true;
    errorMessage.textContent = 'Data produk gagal dimuat. Periksa koneksi internet lalu coba lagi.';
    errorMessage.hidden = false;
    console.error('Gagal mengambil produk:', error);
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = 'Muat Ulang';
  }
}

// Membuat kartu produk menggunakan DOM.
function displayProducts(products) {
  productList.replaceChildren();

  if (!Array.isArray(products) || products.length === 0) {
    errorMessage.textContent = 'Tidak ada produk yang tersedia.';
    errorMessage.hidden = false;
    return;
  }

  products.forEach(function (product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const image = document.createElement('img');
    image.src = product.thumbnail || '';
    image.alt = product.title || 'Gambar produk';
    image.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'product-info';

    const title = document.createElement('h3');
    title.textContent = product.title || 'Produk tanpa nama';

    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = formatRupiah(Number(product.price) || 0);

    info.append(title, price);
    card.append(image, info);
    productList.append(card);
  });
}

// Mengubah harga menjadi format Rupiah.
function formatRupiah(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(price);
}

// Event click untuk memuat ulang data produk.
refreshButton.addEventListener('click', loadProducts);

// Memproses form ketika tombol Buat Caption ditekan.
captionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Menghapus pesan validasi dari percobaan sebelumnya.
  nameError.textContent = '';
  priceError.textContent = '';
  formStatus.textContent = '';
  captionResult.hidden = true;

  const name = productName.value.trim();
  const price = Number(productPrice.value);
  const style = captionStyle.value;
  let isValid = true;

  if (name.length < 3) {
    nameError.textContent = 'Nama produk minimal 3 karakter.';
    isValid = false;
  }

  if (productPrice.value.trim() === '' || !Number.isFinite(price) || price <= 0) {
    priceError.textContent = 'Masukkan harga lebih dari 0.';
    isValid = false;
  }

  if (!isValid) {
    formStatus.textContent = 'Periksa kembali input yang masih salah.';
    return;
  }

  let message = '';

  if (style === 'promo') {
    message = `PROMO SPESIAL! ${name} sekarang hanya Rp${price.toLocaleString('id-ID')}. Yuk, pesan sekarang sebelum kehabisan!`;
  } else if (style === 'formal') {
    message = `Kami memperkenalkan ${name} dengan harga Rp${price.toLocaleString('id-ID')}. Silakan hubungi kami untuk informasi dan pemesanan lebih lanjut.`;
  } else {
    message = `Lagi cari produk menarik? ${name} bisa jadi pilihan kamu, lho! Harganya Rp${price.toLocaleString('id-ID')}. Yuk, coba sekarang!`;
  }

  // textContent menampilkan teks dengan aman sebagai teks biasa.
  captionText.textContent = `${message}\n\n#ProdukLokal #Belanja`;
  captionResult.hidden = false;
  formStatus.textContent = 'Caption berhasil dibuat.';
});

// Jalankan pengambilan data ketika halaman dibuka.
loadProducts();

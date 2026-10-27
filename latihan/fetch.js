
const API_URL = 'https://dummyjson.com/products';

async function latihanFetchProduk() {
  console.log('Mengambil data produk...');

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Permintaan gagal dengan status ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.products)) {
      throw new Error('Format data produk tidak sesuai.');
    }

    console.log('Data produk berhasil diambil:');
    data.products.forEach((produk) => {
      console.log(`Nama: ${produk.title} | Harga: $${produk.price}`);
    });

    return data.products;
  } catch (error) {
    console.error('Gagal mengambil data produk:', error.message);
    return [];
  }
}

// Jalankan latihan saat file ini dimuat.
latihanFetchProduk();

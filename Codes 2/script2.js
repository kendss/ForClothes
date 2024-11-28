

// Menambahkan atribut baru ke tombol beli
const buttonElement = document.getElementById('beli-button');
buttonElement.setAttribute('title', 'Klik untuk membeli produk ini');
buttonElement.setAttribute('onclick', "alert('Terima kasih telah membeli!')");

// Menambahkan atribut tambahan ke div
const produkDiv = document.getElementById('produk');
produkDiv.setAttribute('data-kategori', 'fashion');
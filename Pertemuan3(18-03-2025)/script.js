// Array produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
    {id: 4, nama:"Televisi", harga: 2000000, stok: 10}
];

// Menampilkan Daftar Table Produk
function tampilkanProduk() {
    let tabelBody = document.querySelector("#tabelProduk tbody");
    tabelBody.innerHTML = "";
    produkToko.forEach(produk => {
        let row = `<tr>
            <td style="text-align: center";>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>Rp${produk.harga.toLocaleString()}</td>
            <td style="text-align: center";>${produk.stok}</td>
            <td>
                <button onclick="editProduk(${produk.id})" class="btn btn-warning">Edit</button>
                <button onclick="hapusProduk(${produk.id})" class="btn btn-danger">Hapus</button>
            </td>
        </tr>`;
        tabelBody.innerHTML += row;
    });
}

// Button menambahkan produk baru
function tambahkanProduk() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);
    let stok = parseInt(document.getElementById("stok").value);
    if (nama && harga > 0 && stok > 0) {
        let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
        produkToko.push({ id: idBaru, nama, harga, stok });
        tampilkanProduk();
    }
}

// Edit Produk
function editProduk(id) {
    let produk = produkToko.find(p => p.id === id);
    if (produk) {
        let namaBaru = prompt("Masukkan nama produk baru:", produk.nama);
        let hargaBaru = parseInt(prompt("Masukkan harga produk baru:", produk.harga));
        let stokBaru = parseInt(prompt("Masukkan stok produk baru:", produk.stok));
        if (namaBaru && hargaBaru > 0 && stokBaru >= 0) {
            produk.nama = namaBaru;
            produk.harga = hargaBaru;
            produk.stok = stokBaru;
            tampilkanProduk();
        }
    }
}

// Menghapus produk
function hapusProduk(id) {
    produkToko = produkToko.filter(produk => produk.id !== id);
    tampilkanProduk();
}

tampilkanProduk();
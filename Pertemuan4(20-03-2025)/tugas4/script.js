class Pelanggan {
    constructor(nama, alamat, noTelepon, kendaraan, tanggalSewa, lamaSewa, totalBiaya) {
        this.nama = nama;
        this.alamat = alamat;
        this.noTelepon = noTelepon;
        this.kendaraan = kendaraan;
        this.tanggalSewa = tanggalSewa;
        this.lamaSewa = lamaSewa;
        this.totalBiaya = totalBiaya;
    }
}

// form input data pelanggan
let daftarPelanggan = [];

function tambahPelanggan() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const noTelepon = document.getElementById('noTelepon').value;

    if (nama === "" || alamat === "" || noTelepon === "") {
        alert("Harap lengkapi kolom data pelanggan!");
        return;
    }

    alert(`Data pelanggan ${nama} berhasil ditambahkan!`);
}

// form input sewa kendaraan
function sewaKendaraan() {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const noTelepon = document.getElementById('noTelepon').value;
    const kendaraanData = document.getElementById('kendaraan').value.split("-");
    const kendaraan = kendaraanData[0];
    const hargaSewa = parseInt(kendaraanData[1]);
    const tanggalSewa = document.getElementById('tanggalSewa').value;
    const lamaSewa = parseInt(document.getElementById('lamaSewa').value);

    if (nama === "" || alamat === "" || noTelepon === "" || tanggalSewa === "" || isNaN(lamaSewa)) {
        alert("Harap isi dan lengkapi semua kolom data penyewaan!");
        return;
    }

    const totalBiaya = hargaSewa * lamaSewa;
    const pelanggan = new Pelanggan(nama, alamat, noTelepon, kendaraan, tanggalSewa, lamaSewa, totalBiaya);

    daftarPelanggan.push(pelanggan);
    updateDaftarPelanggan();
}

// hasil inputan form berupa table data pelanggan
function updateDaftarPelanggan() {
    const tbody = document.getElementById('daftarPelanggan');
    tbody.innerHTML = "";

    daftarPelanggan.forEach((pelanggan, index) => {
        const row = `
            <tr>
                <td>${pelanggan.nama}</td>
                <td>${pelanggan.alamat}</td>
                <td>${pelanggan.noTelepon}</td>
                <td>${pelanggan.kendaraan}</td>
                <td>${pelanggan.tanggalSewa}</td>
                <td>${pelanggan.lamaSewa} hari</td>
                <td>Rp ${pelanggan.totalBiaya.toLocaleString()}</td>
                <td><button onclick="hapusPelanggan(${index})" class="btn btn-danger">Hapus</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function hapusPelanggan(index) {
    daftarPelanggan.splice(index, 1);
    updateDaftarPelanggan();
}

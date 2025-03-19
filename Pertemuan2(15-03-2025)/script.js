let nomor = 1; // Nomor id pegawai
let totalKeseluruhan = 0; // Total semua gaji

function tampilkanHasil() {
    // Mengambil data dari form
    let nama = document.getElementById("nama").value;
    let umur = document.getElementById("umur").value;
    let jabatan = document.getElementById("jabatan").value;
    let status = document.querySelector('input[name="status"]:checked').value;

    // Menampilkan notifikasi jika tidak memngisi form dengan lengkap
    if (!nama || !umur) {
        alert("Harap isi semua data!");
        return;
    }

    // Menentukan Gaji Pokok berdasarkan Jabatan
    let gajiPokok;
    if (jabatan === "Manajer") {
        gajiPokok = 15000000;
    } else if (jabatan === "Asisten Manajer") {
        gajiPokok = 10000000;
    } else {
        gajiPokok = 5000000;
    }

    // Menghitung tunjangan jabatan
    let tunjanganJabatan = 0.15 * gajiPokok;

    // Menghitung BPJS
    let bpjs = 0.10 * gajiPokok;

    // Menghitung tunjangan keluarga
    let tunjanganKeluarga = (status === "Menikah") ? 0.20 * gajiPokok : 0;

    // Total gaji pegawai
    let totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga - bpjs;
    totalKeseluruhan += totalGaji; // Tambah ke total keseluruhan

    // Menambahkan data ke dalam tabel
    let tabel = document.getElementById("dataPegawai");
    let row = tabel.insertRow();
    row.innerHTML = `
        <td>${nomor++}</td>
        <td>${nama}</td>
        <td>${umur}</td>
        <td>${jabatan}</td>
        <td>${status}</td>
        <td>Rp ${gajiPokok.toLocaleString()}</td>
        <td>Rp ${tunjanganJabatan.toLocaleString()}</td>
        <td>Rp ${bpjs.toLocaleString()}</td>
        <td>Rp ${tunjanganKeluarga.toLocaleString()}</td>
        <td>Rp ${totalGaji.toLocaleString()}</td>
    `;

    // Perbarui total keseluruhan
    document.getElementById("totalKeseluruhan").innerText = `Rp ${totalKeseluruhan.toLocaleString()}`;

    // Kosongkan form setelah input
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
}
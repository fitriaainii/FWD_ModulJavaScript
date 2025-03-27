import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Menambahkan dua data karyawan
    store({ nama: "Angga", umur: 25, alamat: "Jakarta" });
    store({ nama: "Janet", umur: 20, alamat: "Bogor" });

    // Menampilkan data karyawan setelah penambahan
    index();

    // Menghapus salah satu data karyawan
    destroy("Putra");

    // Menampilkan data karyawan setelah penghapusan
    index();
};

main();


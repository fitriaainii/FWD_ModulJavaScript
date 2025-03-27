import users from "./data.mjs";

const index = () => {
    // menampilkan data
    console.log("Menampilkan Data Karyawan");
    users.map((user, index) => {
    console.log(`${index + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat}`);
    });
};

const store = (user) => {
    // menambahkan data
    users.push(user);
    console.log("Data berhasil ditambahkan!", user);
};

const destroy = () => {
    // menghapus data
    const index = user.findIndex(user => user.nama === nama);
    if (index !== -1) {
        const deletedUser = users.splice(index, 1);
        console.log("Data berhasil dihapus!", deletedUser);
    } else {
        console.log("Data tidak dapat ditemukan!");
    }
};

export { index, store, destroy };
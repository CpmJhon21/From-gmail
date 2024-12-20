// script.js

// Fungsi yang dipanggil saat formulir diajukan
function handleSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai dari input
    const nama = document.getElementById("nama").value;
    const gmail = document.getElementById("gmail").value;
    const nohp = document.getElementById("nohp").value;
    const tgl_lahir = document.getElementById("tgl_lahir").value;
    const jenis_kelamin = document.getElementById("jenis_kelamin").value;
    const kota = document.getElementById("kota").value;
    const kel_desa = document.getElementById("kel_desa").value;
    const wilayah = document.getElementById("wilayah").value;
    const id_car_parking = document.getElementById("id_car_parking").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Lakukan sesuatu dengan nilai-nilai tersebut, seperti mengirimkan ke server atau menampilkan pesan sukses
    // Misalnya: console.log(nama, gmail, nohp, tgl_lahir, jenis_kelamin, kota, kel_desa, wilayah, id_car_parking, subject, message);
}

// Menghubungkan fungsi handleSubmit ke formulir
const form = document.getElementById("registration-form");
form.addEventListener("submit", handleSubmit);

// Sembunyikan pesan sukses saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("successPopup").classList.add("hidden");
});

// Menampilkan atau menyembunyikan field pesan berdasarkan pilihan
document.getElementById("emailChoice").addEventListener("change", function () {
  const messageField = document.getElementById("messageField");
  if (this.value === "requestGmail") {
    messageField.classList.remove("hidden"); // Tampilkan pesan
  } else {
    messageField.classList.add("hidden"); // Sembunyikan pesan
    document.getElementById("message").value = ""; // Kosongkan input
  }
});

// Validasi dan kirim form
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(form);
  let isValid = true;

  // Validasi setiap input wajib
  form.querySelectorAll("[required]").forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("border-red-500"); // Tambahkan indikator error
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (isValid) {
    // Kirim form jika valid
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          // Menampilkan popup sukses jika form berhasil dikirim
          document.getElementById("successPopup").classList.remove("hidden");
        } else {
          // Tampilkan pesan gagal jika server gagal merespons dengan benar
          alert("Terjadi kesalahan di server. Silakan coba lagi.");
        }
      })
      .catch(() => {
        // Tampilkan pesan gagal jika ada masalah koneksi atau kesalahan lainnya
        alert("Gagal mengirim pesan. Pastikan koneksi internet stabil.");
      });
  } else {
    // Jika form tidak valid, beri peringatan
    alert("Harap isi semua field yang diperlukan.");
  }
});

// Tutup pop-up sukses dan reset form
document.getElementById("closePopup").addEventListener("click", () => {
  // Sembunyikan pop-up
  document.getElementById("successPopup").classList.add("hidden");

  // Reset form agar siap untuk pengisian baru
  form.reset();

  // Pastikan elemen-elemen lainnya (seperti field pesan) juga disembunyikan atau dikosongkan
  const messageField = document.getElementById("messageField");
  messageField.classList.add("hidden");
  document.getElementById("message").value = ""; // Kosongkan input pesan
});

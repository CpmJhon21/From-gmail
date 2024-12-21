// Sembunyikan pesan sukses dan tombol Back saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("successMessage").classList.add("hidden");
  document.getElementById("backButton").classList.add("hidden");
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
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.reset(); // Reset form
          document.getElementById("successMessage").classList.remove("hidden"); // Tampilkan pesan sukses
          document.getElementById("backButton").classList.remove("hidden"); // Tampilkan tombol Back
        } else {
          alert("Terjadi kesalahan. Silakan coba lagi.");
        }
      })
      .catch(() => alert("Gagal mengirim pesan."));
  } else {
    alert("Harap isi semua field yang diperlukan.");
  }
});

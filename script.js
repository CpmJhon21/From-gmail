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

// Reset form setelah submit dan tampilkan pesan sukses
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        form.reset(); // Reset form
        document.getElementById("successMessage").style.display = "block"; // Tampilkan pesan sukses
        document.getElementById("backButton").style.display = "inline-block"; // Tampilkan tombol Back
      } else {
        alert("Terjadi kesalahan. Silakan coba lagi.");
      }
    })
    .catch(() => alert("Gagal mengirim pesan."));
});

// Tambahkan fungsi tombol Back
document.getElementById("backButton").addEventListener("click", () => {
  window.history.back(); // Kembali ke halaman sebelumnya
});

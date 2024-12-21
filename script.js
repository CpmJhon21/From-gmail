document.addEventListener("DOMContentLoaded", () => {
  // Menyembunyikan popup sukses saat pertama kali halaman dimuat
  document.getElementById("successPopup").classList.add("hidden");
  document.getElementById("backButton").classList.add("hidden");
});

document.getElementById("emailChoice").addEventListener("change", function () {
  const messageField = document.getElementById("messageField");
  if (this.value === "requestGmail") {
    messageField.classList.remove("hidden"); // Tampilkan input pesan
  } else {
    messageField.classList.add("hidden"); // Sembunyikan input pesan
    document.getElementById("message").value = ""; // Kosongkan input pesan
  }
});

// Menangani submit form
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(form);
  let isValid = true;

  // Validasi form
  form.querySelectorAll("[required]").forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("border-red-500"); // Tandai input yang kosong
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
          // Tampilkan pop-up sukses
          document.getElementById("successPopup").classList.remove("hidden");
          // Tampilkan tombol back setelah pesan sukses
          document.getElementById("backButton").classList.remove("hidden");
        } else {
          alert("Terjadi kesalahan di server. Silakan coba lagi.");
        }
      })
      .catch(() => {
        alert("Gagal mengirim pesan. Pastikan koneksi internet stabil.");
      });
  } else {
    alert("Harap isi semua field yang diperlukan.");
  }
});

// Menutup pop-up sukses dan reset form
document.getElementById("closePopup").addEventListener("click", () => {
  // Sembunyikan pop-up sukses
  document.getElementById("successPopup").classList.add("hidden");

  // Reset form dan sembunyikan pesan dan tombol Back
  form.reset();
  document.getElementById("backButton").classList.add("hidden");
  const messageField = document.getElementById("messageField");
  messageField.classList.add("hidden");
  document.getElementById("message").value = ""; // Kosongkan input pesan
});

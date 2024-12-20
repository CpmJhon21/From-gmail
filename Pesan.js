document.getElementById('emailChoice').addEventListener('change', function () {
      const messageField = document.getElementById('messageField');
      if (this.value === 'requestGmail') {
        messageField.classList.remove('hidden'); // Tampilkan pesan
      } else {
        messageField.classList.add('hidden'); // Sembunyikan pesan
        document.getElementById('message').value = ''; // Kosongkan input
      }
    });

    // Kirim data ke Formspree.io dan reset form
    document.getElementById('gmailForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Mencegah form reload halaman

      const formData = new FormData(this);
      const successMessage = document.getElementById('successMessage');

      fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

.then(response => {
          if (response.ok) {
            successMessage.classList.remove('hidden'); // Tampilkan pesan sukses
            this.reset(); // Hapus isi form
            setTimeout(() => {
              successMessage.classList.add('hidden'); // Sembunyikan pesan setelah 3 detik
            }, 3000);
          } else {
            alert('Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
          }
        })
        .catch(() => alert('Terjadi kesalahan jaringan. Silakan coba lagi.'));
    });

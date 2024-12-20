// JavaScript untuk mengontrol visibilitas field pesan
    document.getElementById('emailChoice').addEventListener('change', function () {
      const messageField = document.getElementById('messageField');
      if (this.value === 'requestGmail') {
        messageField.classList.remove('hidden'); // Tampilkan pesan
      } else {
        messageField.classList.add('hidden'); // Sembunyikan pesan
        document.getElementById('message').value = ''; // Kosongkan input jika disembunyikan
      }
    });

    // JavaScript untuk menangani submit form
    document.getElementById('gmailForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Mencegah reload halaman
      const emailChoice = document.getElementById('emailChoice').value;
      const message = document.getElementById('message').value;
    }

// Log data ke console (bisa diganti dengan pengiriman ke server)
      console.log('Pilihan Gmail:', emailChoice);
      console.log('nohp:', nohp);
      console.log('Jenis Akun:', jenis_Akun_Game);
      console.log('nama:', nama);
      console.log('nama pengirim:', subject);
      console.log('Note:', message);
      console.log('Pesan:', message);

      // Reset form setelah submit
      this.reset();
      document.getElementById('messageField').classList.add('hidden'); // Sembunyikan pesan
      alert('Form berhasil dikirim!'); // Tampilkan pesan sukses
    });

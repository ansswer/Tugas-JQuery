const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Hindari pengiriman formulir default

        // Mengambil nilai dari setiap elemen formulir
        var fullName = $('#fullName').val().trim();
        var email = $('#email').val().trim();
        var phoneNumber = $('#phoneNumber').val().trim();
        var message = $('#message').val().trim();

        // Validasi formulir
        if (fullName === '' || email === '' || phoneNumber === '' || message === '') {
            $('#errorMessage').text('Please fill in all fields.');
            return;
        }

        // Validasi nama (maksimal 20 karakter)
        if (fullName.length > 20) {
            $('#errorMessage').text('Full Name should be maximum 20 characters.');
            return;
        }

        // Validasi email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $('#errorMessage').text('Please enter a valid email address.');
            return;
        }

        // Validasi nomor handphone
        var phonePattern = /^\d{10,}$/;
        if (!phonePattern.test(phoneNumber)) {
            $('#errorMessage').text('Please enter a valid phone number.');
            return;
        }

        // Validasi jumlah kata pada pesan
        if (message.split(' ').length > 100) {
            $('#errorMessage').text('Message should not exceed 100 words.');
            return;
        }

        // Jika semua validasi berhasil, kirim formulir
        // Di sini Anda bisa menambahkan kode untuk mengirim formulir ke backend atau melakukan tindakan lainnya
        $('#errorMessage').text('Form submitted successfully!');
        // Clear formulir setelah pengiriman berhasil (opsional)
        $('#contactForm')[0].reset();
    });
});
// pindah halaman ==========
document.querySelectorAll('.icon-container').forEach((element, index) => {
    element.addEventListener('click', () => {
        // Tentukan URL halaman berdasarkan index atau kondisi tertentu
        let urls = [
            '../../index.html',       // Untuk ikon pertama
            'favorite.html',   // Untuk ikon kedua
            'histori.html',    // Untuk ikon ketiga
            'akun.html'     // Untuk ikon keempat
        ];

        // Navigasikan ke halaman yang sesuai
        if (urls[index]) {
            window.location.href = urls[index];
        }
    });
});
// pindah halaman ==========

// konten slide ==========
// Menyembunyikan semua elemen kecuali #note
document.getElementById('security').style.display = 'none'; // Sembunyikan security
document.getElementById('btn-note').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah halaman menggulir
    document.getElementById('note').style.display = 'block'; // Tampilkan note
    document.getElementById('security').style.display = 'none'; // Sembunyikan security
});
document.getElementById('btn-security').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah halaman menggulir
    document.getElementById('note').style.display = 'none'; // Sembunyikan note
    document.getElementById('security').style.display = 'block'; // Tampilkan security
});
// konten slide ==========

// konten keamanan untuk memasukkan detail akun ==========
// Initialize default values
window.onload = function() {
    document.querySelector('.pw').innerText = '*********';
    document.querySelector('.email').innerText = 'kelompokEmpat@gmail.com';
    document.querySelector('.phone').innerText = '+62-812-3456-7890';
};

// Function to handle password input
document.getElementById('pw').addEventListener('click', function() {
    let password = '';
    while (true) {
        password = prompt('Masukkan kata sandi (6-15 karakter):');
        if (password && password.length >= 6 && password.length <= 15) {
            document.querySelector('.pw').innerText = '*'.repeat(password.length);
            break;
        } else {
            alert('Kata sandi harus antara 6 hingga 15 karakter. Coba lagi.');
        }
    }
});

// Function to handle email input
document.getElementById('email').addEventListener('click', function() {
    let email = '';
    while (true) {
        email = prompt('Masukkan email:');
        if (email && email.includes('@')) {
            document.querySelector('.email').innerText = email;
            break;
        } else {
            alert('Email anda harus memiliki @. Coba lagi.');
        }
    }
});

// Function to handle phone number input
document.getElementById('phone').addEventListener('click', function() {
    let phone = '';
    while (true) {
        phone = prompt('Masukkan nomor telepon:');
        if (phone && !isNaN(phone)) {
            document.querySelector('.phone').innerText = phone;
            break;
        } else {
            alert('Yang anda masukkan bukan angka! Coba lagi.');
        }
    }
});
// konten keamanan untuk memasukkan detail akun ==========

// ganti bahasa footer ==========
document.addEventListener("DOMContentLoaded", () => {
    // Pilih elemen select untuk memilih bahasa
    const languageSelector = document.querySelector(".language-selector select");

    // Ambil elemen-elemen yang perlu diterjemahkan
    const elementsToTranslate = Array.from(document.querySelectorAll("footer a, .footer-up p, .footer-bottom .call"));

    // Simpan teks asli (Bahasa Indonesia)
    const originalTexts = elementsToTranslate.map(element => element.textContent.trim());

    // Objek translasi ke Bahasa Inggris
    const translations = {
        "Ada Pertanyaan? Hubungi": "Have Questions? Contact",
        "Tanya Jawab": "FAQ",
        "Hubungan Investor": "Investor Relations",
        "Cara Menonton": "How to Watch",
        "Informasi Perusahaan": "Corporate Information",
        "Pusat Bantuan": "Help Center",
        "Lowongan Kerja": "Careers",
        "Ketentuan Pengguna": "Terms of Use",
        "Hubungi Kami": "Contact Us",
        "Akun": "Account",
        "Tukar Kartu Hadiah": "Redeem Gift Cards",
        "Privasi": "Privacy",
        "Tes Jaringan": "Network Test",
    };

    // Fungsi untuk mengganti bahasa
    const changeLanguage = (language) => {
        elementsToTranslate.forEach((element, index) => {
            if (language === "English") {
                // Ubah teks ke Bahasa Inggris
                const translatedText = translations[originalTexts[index]];
                if (translatedText) {
                    element.textContent = translatedText;
                }
            } else if (language === "Bahasa Indonesia") {
                // Kembalikan ke teks asli
                element.textContent = originalTexts[index];
            }
        });
    };

    // Event listener untuk perubahan pilihan bahasa
    languageSelector.addEventListener("change", () => {
        const selectedLanguage = languageSelector.value;
        changeLanguage(selectedLanguage);
    });
});
// ganti bahasa footer ==========

// back to top ==========
const backToTopButton = document.getElementById('backToTop');
// Tampilkan tombol saat scroll ke bawah
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
// Fungsi untuk kembali ke atas
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// back to top ==========
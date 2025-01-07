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
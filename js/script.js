// ===== DATA PROYEK ===== 
var proyek = {
  html: {
    judul: "Halaman CV Online Sederhana",
    gambar: "gambar/halaman cv.jpg",
    deskripsi: "Proyek pertama saya adalah membuat halaman CV online sederhana menggunakan HTML murni. Di sini saya belajar menyusun struktur halaman web dari nol, mulai dari menuliskan data diri, pendidikan, hingga menambahkan foto profil ke dalam halaman web.",
    belajar: [
      "Membuat struktur dasar halaman HTML (html, head, body)",
      "Menuliskan data diri, pendidikan, dan pengalaman dalam bentuk teks HTML",
      "Menambahkan foto profil ke halaman menggunakan tag <img>",
      "Mengatur ukuran foto dengan atribut width dan height",
      "Membuat judul, paragraf, daftar, dan link di halaman CV"
    ],
    teknologi: ["HTML5"]
  },
  css: {
    judul: "Profil Tim Digital",
    gambar: "gambar/profil-tim.png",
    deskripsi: "Proyek kedua saya adalah membuat halaman profil tim digital menggunakan HTML dan CSS. Di sini saya belajar mempercantik tampilan halaman, mengatur warna, tata letak, dan membuat kartu profil untuk setiap anggota tim supaya halaman terlihat rapi dan profesional.",
    belajar: [
      "Menggabungkan HTML dan CSS dalam satu halaman web",
      "Mengatur warna latar belakang, warna teks, dan jenis huruf",
      "Membuat kartu profil untuk setiap anggota tim",
      "Mengatur tata letak halaman menggunakan CSS (margin, padding, flexbox)",
      "Memberi efek hover pada elemen supaya halaman lebih interaktif"
    ],
    teknologi: ["HTML", "CSS3"]
  },
  js: {
    judul: "Form Registrasi",
    gambar: "gambar/from-registrasi.png",
    deskripsi: "Proyek ketiga saya adalah membuat form registrasi menggunakan HTML, CSS, dan JavaScript. Di sini saya belajar membuat form input yang bisa mengecek apakah data sudah diisi dengan benar atau belum, lalu menampilkan pesan error atau sukses sesuai hasil validasi.",
    belajar: [
      "Membuat form registrasi dengan input nama, email, dan password",
      "Memvalidasi input menggunakan JavaScript (cek kosong, format email, panjang password)",
      "Menampilkan pesan error kalau input tidak sesuai ketentuan",
      "Menampilkan pesan sukses kalau semua input sudah valid",
      "Mencegah form terkirim kalau masih ada input yang salah (preventDefault)"
    ],
    teknologi: ["HTML", "CSS", "JavaScript"]
  },
  bootstrap: {
    judul: "Web Portofolio Sederhana",
    gambar: "gambar/web portofolio.png",
    deskripsi: "Proyek keempat saya adalah membuat website portofolio pribadi menggunakan HTML, CSS, JavaScript, dan Bootstrap 5. Website ini terdiri dari 5 halaman (Beranda, Proyek, Detail Proyek, Tentang Saya, dan Login) yang semuanya responsif dan saling terhubung. Website yang sedang kamu lihat sekarang inilah hasilnya.",
    belajar: [
      "Membuat navbar responsif yang bisa dibuka-tutup di HP menggunakan Bootstrap",
      "Membuat layout halaman menggunakan Grid System Bootstrap (row dan col)",
      "Menggunakan komponen Bootstrap: Card, Button, Badge, Alert, Breadcrumb",
      "Membuat halaman login dengan validasi form menggunakan JavaScript",
      "Membuat animasi dan dark mode toggle menggunakan CSS dan JavaScript"
    ],
    teknologi: ["HTML", "CSS", "JavaScript", "Bootstrap 5"]
  }
};

// ===== LOGIKA HALAMAN DETAIL =====
var detailRoot = document.getElementById("detailRoot");

if (detailRoot) {
  var id = new URLSearchParams(window.location.search).get("id");
  var p = proyek[id];

  if (!p) {
    detailRoot.classList.add("d-none");
    document.getElementById("notFound").classList.remove("d-none");
  } else {
    document.title = p.judul + " | Portofolio Muh. Asri Ahmad";
    document.getElementById("crumb").textContent = p.judul;
    document.getElementById("detailTitle").textContent = p.judul;
    document.getElementById("detailDesc").textContent = p.deskripsi;

    var img = document.getElementById("detailImg");
    img.src = p.gambar;
    img.alt = p.judul;

    var list = document.getElementById("detailList");
    for (var i = 0; i < p.belajar.length; i++) {
      var li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = p.belajar[i];
      list.appendChild(li);
    }

    var techSpan = document.getElementById("detailTech");
    techSpan.innerHTML = "";
    for (var j = 0; j < p.teknologi.length; j++) {
      var badge = document.createElement("span");
      badge.className = "badge bg-primary me-1 mt-1";
      badge.textContent = p.teknologi[j];
      techSpan.appendChild(badge);
    }
  }
}

// ===== VALIDASI FORM LOGIN =====
document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var username = document.getElementById('username').value.trim();
      var password = document.getElementById('password').value;
      var alertBox = document.getElementById('alertBox');

      alertBox.className = 'alert d-none';
      alertBox.innerHTML = '';
      var errors = [];

      if (username === '') {
        errors.push('Username atau email tidak boleh kosong.');
      } else if (username.includes('@')) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
          errors.push('Format email tidak valid. Contoh: nama@email.com');
        }
      } else if (username.length < 4) {
        errors.push('Username minimal 4 karakter.');
      }

      if (password === '') {
        errors.push('Password tidak boleh kosong.');
      } else if (password.length < 6) {
        errors.push('Password minimal 6 karakter.');
      }

      if (errors.length > 0) {
        alertBox.className = 'alert alert-danger';
        var listHtml = '<strong>Login gagal:</strong><ul class="mb-0 mt-2">';
        for (var i = 0; i < errors.length; i++) {
          listHtml += '<li>' + errors[i] + '</li>';
        }
        listHtml += '</ul>';
        alertBox.innerHTML = listHtml;
      } else {
        alertBox.className = 'alert alert-success';
        alertBox.innerHTML = '<strong>Sukses!</strong> Data login memenuhi ketentuan. Selamat datang!';
        loginForm.reset();
      }
    });
  }
});

// ===== DARK MODE TOGGLE (TRANSISI MENGALIR) =====
(function () {
  var htmlEl = document.documentElement;
  var toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  var icon = toggleBtn.querySelector('i');

  // Muat tema terakhir
  var saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    htmlEl.setAttribute('data-bs-theme', saved);
  }
  updateIcon();

  function updateIcon() {
    var isDark = htmlEl.getAttribute('data-bs-theme') === 'dark';
    icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }

  toggleBtn.addEventListener('click', function () {
    var isDark = htmlEl.getAttribute('data-bs-theme') === 'dark';
    var next = isDark ? 'light' : 'dark';
    htmlEl.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
})();

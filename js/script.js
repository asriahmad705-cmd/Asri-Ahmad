// ===== DATA PROYEK ===== 
var proyek = {
  html: {
    judul: "Latihan HTML",
    gambar: "https://static.vecteezy.com/system/resources/previews/013/313/458/original/html-icon-3d-rendering-illustration-vector.jpg",
    deskripsi: "Latihan membuat halaman web dengan HTML. Di sini saya belajar membuat struktur halaman, menambahkan foto, dan mengatur ukuran foto menggunakan atribut width dan height.",
    belajar: [
      "Struktur dasar HTML (html, head, body)",
      "Menambahkan gambar dengan tag img",
      "Mengatur ukuran gambar dengan width dan height",
      "Membuat judul, paragraf, dan link"
    ],
    teknologi: ["HTML5"]
  },
  css: {
    judul: "Latihan CSS",
    gambar: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
    deskripsi: "Latihan mempercantik halaman web dengan CSS. Di sini saya belajar mengatur warna, ukuran, jarak, dan tata letak elemen.",
    belajar: [
      "Selector class dan id",
      "Mengatur warna teks dan latar belakang",
      "Mengatur margin dan padding",
      "Mengatur ukuran gambar dengan CSS"
    ],
    teknologi: ["HTML", "CSS3"]
  },
  js: {
    judul: "Latihan JavaScript",
    gambar: "https://tse1.mm.bing.net/th/id/OIP.6WYwaQfPuMmVMVoYd1EqPQHaEo?r=0&pid=Api&h=220&P=0",
    deskripsi: "Latihan membuat halaman menjadi interaktif dengan JavaScript. Di sini saya belajar variabel, fungsi, event, dan mengubah isi halaman.",
    belajar: [
      "Variabel dan fungsi",
      "Event seperti klik dan submit",
      "Mengambil elemen dengan getElementById",
      "Validasi form sederhana"
    ],
    teknologi: ["HTML", "CSS", "JavaScript"]
  },
  bootstrap: {
    judul: "Latihan Bootstrap 5",
    gambar: "https://tse1.mm.bing.net/th/id/OIP.t27breaaHiD6tt56rOmQDwHaE4?r=0&pid=Api&h=220&P=0",
    deskripsi: "Latihan membuat website responsif menggunakan framework Bootstrap 5. Di sini saya belajar menggunakan komponen siap pakai seperti navbar, card, grid system, button, badge, dan utility classes untuk mempercepat pembuatan website.",
    belajar: [
      "Grid system (container, row, col)",
      "Komponen Card, Navbar, Button, Badge",
      "Utility classes (spacing, typography, colors)",
      "Responsive design tanpa CSS custom"
    ],
    teknologi: ["HTML", "CSS", "Bootstrap 5"]
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

// ===== DARK MODE TOGGLE + COLORFUL FLASH =====
(function () {
  var htmlEl = document.documentElement;
  var toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return; // jaga-jaga kalau tombol tidak ada

  var icon = toggleBtn.querySelector('i');

  // Buat overlay flash otomatis lewat JS (tidak perlu tambah HTML)
  var overlay = document.createElement('div');
  overlay.id = 'themeFlash';
  document.body.appendChild(overlay);

  // Muat tema yang terakhir dipilih user
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

    // Titik awal lingkaran = posisi tombol ditekan
    var rect = toggleBtn.getBoundingClientRect();
    overlay.style.setProperty('--x', (rect.left + rect.width / 2) + 'px');
    overlay.style.setProperty('--y', (rect.top + rect.height / 2) + 'px');

    // Restart animasi flash
    overlay.classList.remove('flash');
    void overlay.offsetWidth;
    overlay.classList.add('flash');

    // Ganti tema di TENGAH animasi (saat layar tertutup warna-warni)
    setTimeout(function () {
      htmlEl.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateIcon();
    }, 450);
  });
})();

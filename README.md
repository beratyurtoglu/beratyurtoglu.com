# 🎥 Berat Yurtoglu - Video Portfolio & CMS

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, dinamik içerik yönetimine (CMS) sahip profesyonel bir video portfolyo sitesidir. Videolar statik kodlar yerine **Firebase Firestore** üzerinden gerçek zamanlı (real-time) olarak çekilmektedir.

## 🚀 Özellikler

- **Dinamik İçerik:** Videolar Firebase Firestore'dan anlık olarak yüklenir; kod güncellemesi gerektirmez.
- **Admin Paneli:** `/admin` yolu üzerinden erişilebilen, sadece yetkili kullanıcının girebildiği yönetim arayüzü.
- **Firebase Auth:** Güvenli giriş sistemi (Email/Password).
- **Responsive Tasarım:** Mobil, tablet ve masaüstü cihazlarla tam uyumlu (Tailwind CSS).
- **Modern Animasyonlar:** Framer Motion kullanılarak akıcı geçişler ve modal efektleri.
- **Sayfalama (Pagination):** Çok sayıda video için performanslı sayfalama sistemi.

## 🛠️ Kullanılan Teknolojiler

- **Frontend:** React.js, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** Firebase Firestore (NoSQL)
- **Authentication:** Firebase Auth
- **Routing:** React Router DOM

## 📂 Proje Yapısı

```text
src/
├── components/       # Tekrar kullanılabilir bileşenler (VideoItem, vb.)
├── pages/            # Ana sayfalar (Portfolio, Admin, vb.)
├── firebase.js       # Firebase yapılandırması ve bağlantısı
└── VideoPortfolyo.jsx # Videoların listelendiği dinamik alan
```

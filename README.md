# UTS MOB2 20261 — Personal CV & Academic Score App

**Nama:** Fitri Yani Permana  
**NIM:** 242505025  
**Program Studi:** Sistem Informasi  
**Semester:** 5  
**Mata Kuliah:** Pemrograman Mobile 2

## Deskripsi

Aplikasi Personal CV & Academic Score App dibuat menggunakan React Native, Expo SDK 58, TypeScript, dan Expo Router. Aplikasi menampilkan profil pribadi, minat, skill, portofolio, formulir kontak, detail profil, dan dashboard nilai akademik.

## Struktur fitur

- **Level 1–3:** profil pribadi, foto, deskripsi, dan layout responsif.
- **Level 4:** form kontak dengan State, event handling, dan validasi.
- **Level 5–6:** pemisahan komponen dan data JSON.
- **Level 7:** konten dinamis dari array JSON dan galeri portofolio.
- **Level 8:** dashboard nilai akademik dari `src/data/academic.json`.
- **Level 9:** navigasi tab dan stack menggunakan Expo Router.
- **Level 10:** fallback halaman 404, accessibility labels, empty state, komponen terpisah, dan checklist pengujian.

## Menjalankan project

1. Buka CMD di folder project.
2. Instal dependency jika baru clone:

   ```cmd
   npm install
   ```

3. Jalankan Expo:

   ```cmd
   npx expo start
   ```

4. Scan QR menggunakan Expo Go atau tekan `w` untuk web.

## Mengisi data nilai

Buka `src/data/academic.json`, kemudian isi nilai sesuai data akademik yang benar:

- `dosen`
- `nilaiAkhir`
- `grade`
- `lp`
- nilai pada setiap item di `komponen`

Nilai awal sengaja dikosongkan (`null`) agar aplikasi tidak menampilkan nilai akademik yang belum diverifikasi.

## Struktur navigasi

```text
src/app/
├── _layout.tsx          # Root Stack Navigator
├── +not-found.tsx       # Fallback route
├── detail.tsx           # Detail Profil
├── score.tsx             # My Academic Score
└── (tabs)/
    ├── _layout.tsx       # Native bottom tabs
    ├── index.tsx         # Home / Personal CV
    └── explore.tsx       # Navigation hub
```

## Checklist pengujian manual

- [ ] Home tampil tanpa error.
- [ ] Foto profil dan data JSON tampil benar.
- [ ] Tombol My Academic Score membuka halaman Score.
- [ ] Tombol Detail Profil membuka halaman Detail.
- [ ] Tombol kembali bekerja.
- [ ] Tab Home dan Explore dapat berpindah.
- [ ] Dashboard nilai menampilkan placeholder jika data belum diisi.
- [ ] Setelah `academic.json` diisi, nilai dan progress tampil sesuai data.
- [ ] Form kontak menolak input kosong dan email tidak valid.
- [ ] URL tidak dikenal menampilkan halaman 404.
- [ ] Tampilan diperiksa pada Android/Expo Go dan web.

## Catatan

Project menggunakan Expo Router sebagai sistem routing. Jangan menambahkan `NavigationContainer` secara manual. `@react-navigation/native` dan `@react-navigation/native-stack` telah terpasang sebagai dependency, sedangkan route dan navigator aplikasi dikelola melalui Expo Router.

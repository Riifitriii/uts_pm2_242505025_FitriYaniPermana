// Palet aksen agar tampilan tidak monoton: tiap seksi/kartu memakai warna berbeda
export type Aksen = {
  main: string; // warna utama (bar, tombol)
  soft: string; // latar lembut (chip, ikon)
  teks: string; // warna teks di atas latar lembut
};

export const AKSEN: Aksen[] = [
  { main: "#4F46E5", soft: "#EEF2FF", teks: "#4338CA" }, // indigo
  { main: "#DB2777", soft: "#FCE7F3", teks: "#BE185D" }, // pink
  { main: "#059669", soft: "#D1FAE5", teks: "#047857" }, // hijau
  { main: "#D97706", soft: "#FEF3C7", teks: "#B45309" }, // kuning
  { main: "#0284C7", soft: "#E0F2FE", teks: "#0369A1" }, // biru
  { main: "#7C3AED", soft: "#EDE9FE", teks: "#6D28D9" }, // ungu
];

// Ambil warna berdasarkan nomor urut (berulang jika melebihi jumlah palet)
export const aksen = (index: number): Aksen => AKSEN[index % AKSEN.length];

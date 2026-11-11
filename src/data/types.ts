import type { ImageSourcePropType } from "react-native";

// Bentuk data di data.json (Level 5 & 6: pemisahan UI dan data)
export type Profile = {
  nim: string;
  nama: string;
  profesi: string;
  status: string;
  proyek: string;
  tagline: string;
  foto: string;
  deskripsi: string;
};

export type Interest = {
  id: string;
  ikon: string;
  judul: string;
  deskripsi: string;
};

export type Skill = {
  id: string;
  nama: string;
  kategori: string;
  level: number;
};

export type PortfolioItem = {
  id: string;
  judul: string;
  deskripsi: string;
  teknologi: string[];
  gambar: string;
};

// Item portofolio setelah kunci gambar diubah menjadi source gambar lokal
export type PortfolioCardItem = Omit<PortfolioItem, "gambar"> & {
  gambar: ImageSourcePropType;
};

export type PortfolioData = {
  profile: Profile;
  interests: Interest[];
  skills: Skill[];
  portfolio: PortfolioItem[];
};

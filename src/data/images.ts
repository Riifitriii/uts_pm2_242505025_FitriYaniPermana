import type { ImageSourcePropType } from "react-native";

// JSON tidak bisa menyimpan require(), jadi data.json hanya berisi "kunci" gambar.
// Pemetaan kunci ke file lokal ada di sini.
const images: Record<string, ImageSourcePropType> = {
  profile: require("../../assets/images/profile.jpg"),
  project1: require("../../assets/images/project1.png"),
  project2: require("../../assets/images/project2.png"),
  project3: require("../../assets/images/project3.png"),
};

export default images;

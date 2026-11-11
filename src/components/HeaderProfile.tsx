import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { aksen } from "../constants/accent";

type Props = {
  nim: string;
  nama: string;
  profesi: string;
  status: string;
  proyek: string;
  tagline: string;
  fotoSource: ImageSourcePropType;
  onLihatPortofolio: () => void;
  onHubungi: () => void;
};

// Memenuhi Level 1 & 2: Text, Image, View untuk NIM, Nama, Foto, Profesi
// Memenuhi Level 5 & 6: semua data diterima lewat Props, tidak ada teks profil yang di-hardcode
export default function HeaderProfile({
  nim,
  nama,
  profesi,
  status,
  proyek,
  tagline,
  fotoSource,
  onLihatPortofolio,
  onHubungi,
}: Props) {
  // "Mahasiswa IT / React Native Developer" dipecah menjadi chip warna-warni
  const daftarProfesi = profesi.split(" / ");

  return (
    <View>
      {/* Hero rata tengah */}
      <View style={styles.hero}>
        <View style={styles.bars}>
          <View style={[styles.bar, { backgroundColor: aksen(0).main }]} />
          <View style={[styles.bar, { backgroundColor: aksen(1).main }]} />
          <View style={[styles.bar, { backgroundColor: aksen(2).main }]} />
          <View style={[styles.bar, { backgroundColor: aksen(3).main }]} />
        </View>

        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>PERSONAL PORTFOLIO</Text>
        </View>

        <View style={styles.imageRing}>
          <Image source={fotoSource} style={styles.foto} resizeMode="cover" />
        </View>

        <Text style={styles.greeting}>Hello, I'm</Text>
        <Text style={styles.nama}>{nama}</Text>

        <View style={styles.chipRow}>
          {daftarProfesi.map((item, index) => {
            const a = aksen(index);
            return (
              <View
                key={item}
                style={[styles.chip, { backgroundColor: a.soft }]}
              >
                <Text style={[styles.chipText, { color: a.teks }]}>{item}</Text>
              </View>
            );
          })}
        </View>

        <Text style={styles.tagline}>{tagline}</Text>

        <View style={styles.nimPill}>
          <Text style={styles.nimLabel}>NIM</Text>
          <Text style={styles.nimValue}>{nim}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={onLihatPortofolio}
            activeOpacity={0.85}
          >
            <Text style={styles.btnPrimaryText}>Lihat Portofolio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOutline}
            onPress={onHubungi}
            activeOpacity={0.85}
          >
            <Text style={styles.btnOutlineText}>Hubungi Saya</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Kartu info: 1 kolom di HP, 2 kolom di layar lebar (flexBasis + flexWrap) */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <View style={[styles.infoIcon, { backgroundColor: aksen(0).soft }]}>
            <Text style={[styles.infoIconText, { color: aksen(0).teks }]}>
              ID
            </Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>STUDENT IDENTITY</Text>
            <Text style={styles.infoValue}>{status}</Text>
          </View>
        </View>

        <View style={styles.infoCard}>
          <View style={[styles.infoIcon, { backgroundColor: aksen(1).soft }]}>
            <Text style={[styles.infoIconText, { color: aksen(1).teks }]}>
              CV
            </Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoLabel}>CURRENT PROJECT</Text>
            <Text style={styles.infoValue}>{proyek}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// Memenuhi Level 3: StyleSheet + Flexbox (alignItems, justifyContent, flexWrap, gap)
const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8ECF5",
    elevation: 3,
    shadowColor: "#172554",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
  },
  bars: { flexDirection: "row", gap: 6, marginBottom: 18 },
  bar: { width: 28, height: 5, borderRadius: 3 },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    marginBottom: 22,
  },
  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4F46E5",
    marginRight: 8,
  },
  badgeText: {
    color: "#4338CA",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  imageRing: {
    padding: 5,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "#C7D2FE",
    marginBottom: 18,
  },
  foto: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "#E8EDFF",
  },

  greeting: { fontSize: 16, color: "#64748B", marginBottom: 4 },
  nama: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "900",
    color: "#172554",
    textAlign: "center",
    letterSpacing: -0.8,
  },

  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 14,
  },
  chip: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 999 },
  chipText: { fontSize: 13, fontWeight: "800" },

  tagline: {
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
    textAlign: "center",
    marginTop: 16,
    maxWidth: 420,
  },

  nimPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 16,
  },
  nimLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
    marginRight: 8,
  },
  nimValue: {
    fontSize: 14,
    fontWeight: "800",
    color: "#4F46E5",
    letterSpacing: 1,
  },

  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 22,
  },
  btnPrimary: {
    backgroundColor: "#172554",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 12,
  },
  btnPrimaryText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: "#059669",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 12,
  },
  btnOutlineText: { color: "#059669", fontSize: 14, fontWeight: "800" },

  infoRow: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginTop: 14 },
  infoCard: {
    flexGrow: 1,
    flexBasis: 220,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },
  infoIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },
  infoIconText: { fontSize: 12, fontWeight: "900" },
  infoText: { flex: 1 },
  infoLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    lineHeight: 19,
  },
});

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
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
  const daftarProfesi = profesi.split(" / ");

  return (
    <View>
      <View style={styles.hero}>
        <View style={styles.accentBars}>
          {[0, 1, 2, 3].map((item) => (
            <View
              key={item}
              style={[styles.accentBar, { backgroundColor: aksen(item).main }]}
            />
          ))}
        </View>

        <View style={styles.badge}>
          <View style={styles.badgeDot} />
          <Text style={styles.badgeText}>PERSONAL PORTFOLIO</Text>
        </View>

        <View style={styles.photoFrame}>
          <Image
            source={fotoSource}
            style={styles.photo}
            resizeMode="cover"
            accessibilityLabel={`Foto profil ${nama}`}
          />
        </View>

        <Text style={styles.greeting}>Hello, I'm</Text>
        <Text style={styles.name}>{nama}</Text>

        <View style={styles.professionRow}>
          {daftarProfesi.map((item, index) => {
            const color = aksen(index);

            return (
              <View
                key={item}
                style={[styles.professionChip, { backgroundColor: color.soft }]}
              >
                <Text style={[styles.professionText, { color: color.teks }]}>
                  {item}
                </Text>
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
          <Pressable
            accessibilityRole="button"
            onPress={onLihatPortofolio}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>Lihat Portofolio</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={onHubungi}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.secondaryButtonText}>Hubungi Saya</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.infoRow}>
        <InfoCard
          icon="ID"
          label="STUDENT IDENTITY"
          value={status}
          color={aksen(0)}
        />

        <InfoCard
          icon="CV"
          label="CURRENT PROJECT"
          value={proyek}
          color={aksen(1)}
        />
      </View>
    </View>
  );
}

function InfoCard({
  icon,
  label,
  value,
  color,
}: {
  icon: string;
  label: string;
  value: string;
  color: ReturnType<typeof aksen>;
}) {
  return (
    <View style={styles.infoCard}>
      <View style={[styles.infoIcon, { backgroundColor: color.soft }]}>
        <Text style={[styles.infoIconText, { color: color.teks }]}>{icon}</Text>
      </View>

      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    paddingVertical: 26,
    paddingHorizontal: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E6EAF5",
    shadowColor: "#172554",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
  },

  accentBars: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 18,
  },

  accentBar: {
    width: 27,
    height: 5,
    borderRadius: 5,
  },

  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 30,
    marginBottom: 20,
  },

  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "#4F46E5",
    marginRight: 8,
  },

  badgeText: {
    color: "#4338CA",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.1,
  },

  photoFrame: {
    padding: 5,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#C7D2FE",
    marginBottom: 17,
  },

  photo: {
    width: 124,
    height: 124,
    borderRadius: 64,
    backgroundColor: "#E8EDFF",
  },

  greeting: {
    fontSize: 15,
    color: "#64748B",
    marginBottom: 5,
  },

  name: {
    color: "#172554",
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -0.8,
    textAlign: "center",
  },

  professionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 13,
  },

  professionChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 30,
  },

  professionText: {
    fontSize: 12,
    fontWeight: "800",
  },

  tagline: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 16,
    maxWidth: 430,
  },

  nimPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F5F9",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginTop: 16,
  },

  nimLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
    marginRight: 8,
  },

  nimValue: {
    color: "#4F46E5",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },

  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginTop: 21,
  },

  primaryButton: {
    backgroundColor: "#172554",
    paddingHorizontal: 21,
    paddingVertical: 13,
    borderRadius: 12,
    minWidth: 145,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#059669",
    paddingHorizontal: 21,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 135,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#059669",
    fontSize: 13,
    fontWeight: "900",
  },

  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
  },

  infoCard: {
    flexGrow: 1,
    flexBasis: 220,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E6EAF5",
  },

  infoIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoIconText: {
    fontSize: 12,
    fontWeight: "900",
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.8,
    marginBottom: 5,
  },

  infoValue: {
    color: "#334155",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 18,
  },
});

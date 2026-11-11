import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, Pressable, View } from "react-native";

import rawData from "@/data/data.json";
import type { PortfolioData } from "@/data/types";

const data = rawData as PortfolioData;
const profile = data.profile;

export default function DetailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>PERSONAL INFORMATION</Text>
        <Text style={styles.name}>{profile.nama}</Text>
        <Text style={styles.nim}>NIM {profile.nim}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Informasi Akademik</Text>
        <InfoRow label="Program Studi" value="Sistem Informasi" />
        <InfoRow label="Semester" value="5" />
        <InfoRow label="Profesi/Minat" value={profile.profesi} />
        <InfoRow label="Proyek Saat Ini" value={profile.proyek} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tentang Saya</Text>
        <Text style={styles.description}>{profile.deskripsi}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Minat</Text>
        {data.interests.map((item) => (
          <View key={item.id} style={styles.interestRow}>
            <Text style={styles.interestIcon}>{item.ikon}</Text>
            <View style={styles.flex}>
              <Text style={styles.interestTitle}>{item.judul}</Text>
              <Text style={styles.description}>{item.deskripsi}</Text>
            </View>
          </View>
        ))}
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Buka halaman nilai akademik"
        onPress={() => router.push("/score")}
        style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}
      >
        <Text style={styles.primaryButtonText}>Lihat Nilai Akademik</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.back()}
        style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}
      >
        <Text style={styles.secondaryButtonText}>Kembali</Text>
      </Pressable>
    </ScrollView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40, width: "100%", maxWidth: 720, alignSelf: "center" },
  hero: { backgroundColor: "#172554", padding: 24, borderRadius: 22, marginBottom: 16 },
  eyebrow: { color: "#A5B4FC", fontSize: 10, fontWeight: "900", letterSpacing: 1.4 },
  name: { color: "#FFFFFF", fontSize: 25, fontWeight: "900", marginTop: 10 },
  nim: { color: "#DCE4FF", fontSize: 13, marginTop: 7 },
  card: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 19, borderWidth: 1, borderColor: "#E8ECF5", marginBottom: 14 },
  sectionTitle: { color: "#172554", fontSize: 17, fontWeight: "900", marginBottom: 14 },
  infoRow: { paddingVertical: 9, borderBottomWidth: 1, borderBottomColor: "#F1F5F9" },
  infoLabel: { color: "#94A3B8", fontSize: 10, fontWeight: "800", textTransform: "uppercase", marginBottom: 4 },
  infoValue: { color: "#334155", fontSize: 14, fontWeight: "700" },
  description: { color: "#64748B", fontSize: 13, lineHeight: 21 },
  interestRow: { flexDirection: "row", gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#F1F5F9" },
  interestIcon: { fontSize: 23 },
  interestTitle: { color: "#172554", fontSize: 14, fontWeight: "800", marginBottom: 4 },
  flex: { flex: 1 },
  primaryButton: { backgroundColor: "#4F46E5", borderRadius: 13, padding: 15, alignItems: "center", marginTop: 4 },
  primaryButtonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  secondaryButton: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#CBD5E1", borderRadius: 13, padding: 14, alignItems: "center", marginTop: 10 },
  secondaryButtonText: { color: "#334155", fontWeight: "800" },
  pressed: { opacity: 0.75 },
});

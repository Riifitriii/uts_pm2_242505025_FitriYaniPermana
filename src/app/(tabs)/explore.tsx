import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExploreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.eyebrow}>EXPLORE</Text>
      <Text style={styles.title}>Jelajahi Profil Saya</Text>
      <Text style={styles.subtitle}>Pilih halaman yang ingin kamu buka.</Text>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/score")}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <Text style={styles.icon}>📊</Text>
        <View style={styles.flex}>
          <Text style={styles.cardTitle}>My Academic Score</Text>
          <Text style={styles.cardText}>Lihat ringkasan nilai, grade, LP, dan komponen penilaian.</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push("/detail")}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <Text style={styles.icon}>👤</Text>
        <View style={styles.flex}>
          <Text style={styles.cardTitle}>Detail Profil</Text>
          <Text style={styles.cardText}>Lihat informasi pribadi, akademik, dan minat.</Text>
        </View>
        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <View style={styles.note}>
        <Text style={styles.noteTitle}>Tentang Aplikasi</Text>
        <Text style={styles.noteText}>Personal CV & Academic Score App dikembangkan menggunakan React Native dan Expo Router.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 28, paddingBottom: 40, flexGrow: 1, width: "100%", maxWidth: 720, alignSelf: "center" },
  eyebrow: { color: "#4F46E5", fontSize: 10, fontWeight: "900", letterSpacing: 1.5 },
  title: { color: "#172554", fontSize: 26, fontWeight: "900", marginTop: 7 },
  subtitle: { color: "#64748B", fontSize: 13, marginTop: 6, marginBottom: 20 },
  card: { flexDirection: "row", alignItems: "center", gap: 14, backgroundColor: "#FFFFFF", padding: 17, borderRadius: 18, borderWidth: 1, borderColor: "#E8ECF5", marginBottom: 12 },
  icon: { fontSize: 25 },
  flex: { flex: 1 },
  cardTitle: { color: "#172554", fontSize: 14, fontWeight: "900" },
  cardText: { color: "#64748B", fontSize: 11, lineHeight: 17, marginTop: 4 },
  arrow: { color: "#4F46E5", fontSize: 27, fontWeight: "700" },
  note: { backgroundColor: "#EEF2FF", padding: 17, borderRadius: 16, marginTop: 10 },
  noteTitle: { color: "#3730A3", fontSize: 13, fontWeight: "900", marginBottom: 5 },
  noteText: { color: "#4338CA", fontSize: 11, lineHeight: 18 },
  pressed: { opacity: 0.75 },
});

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>404</Text>
      <Text style={styles.title}>Halaman tidak ditemukan</Text>
      <Text style={styles.description}>Halaman yang kamu cari tidak tersedia atau alamatnya salah.</Text>
      <Link href="/" style={styles.link}>Kembali ke Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24, backgroundColor: "#F5F7FF" },
  code: { color: "#4F46E5", fontSize: 52, fontWeight: "900" },
  title: { color: "#172554", fontSize: 20, fontWeight: "900", marginTop: 8, textAlign: "center" },
  description: { color: "#64748B", fontSize: 13, lineHeight: 20, textAlign: "center", marginTop: 8, marginBottom: 20 },
  link: { color: "#FFFFFF", backgroundColor: "#4F46E5", overflow: "hidden", borderRadius: 12, paddingHorizontal: 18, paddingVertical: 12, fontWeight: "800" },
});

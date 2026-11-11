import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, Pressable, View } from "react-native";

import academic from "@/data/academic.json";

type AcademicData = {
  semester: string;
  programStudi: string;
  mataKuliah: string;
  dosen: string;
  nilaiAkhir: number | null;
  grade: string;
  lp: number | null;
  komponen: { id: string; label: string; deskripsi: string; nilai: number | null }[];
};

const scoreData = academic as AcademicData;
const formatValue = (value: number | null) => value === null ? "Belum diisi" : `${value}`;

export default function ScoreScreen() {
  const hasAnyScore = scoreData.nilaiAkhir !== null || scoreData.komponen.some((item) => item.nilai !== null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>ACADEMIC DASHBOARD</Text>
        <Text style={styles.title}>My Academic Score</Text>
        <Text style={styles.subtitle}>Ringkasan capaian akademik dan progres pembelajaran.</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseLabel}>MATA KULIAH</Text>
        <Text style={styles.courseName}>{scoreData.mataKuliah}</Text>
        <Text style={styles.courseInfo}>Semester {scoreData.semester} • {scoreData.programStudi}</Text>
        <Text style={styles.lecturer}>Dosen: {scoreData.dosen}</Text>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.metricLabel}>NILAI AKHIR</Text>
          <Text style={styles.bigValue}>{formatValue(scoreData.nilaiAkhir)}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.metricLabel}>GRADE</Text>
          <Text style={styles.bigValue}>{scoreData.grade || "Belum diisi"}</Text>
        </View>
      </View>

      <View style={styles.lpCard}>
        <View style={styles.lpTextWrap}>
          <Text style={styles.metricLabel}>LEARNING POINT (LP)</Text>
          <Text style={styles.lpValue}>{formatValue(scoreData.lp)}</Text>
        </View>
        <Text style={styles.lpCaption}>Total poin pembelajaran</Text>
      </View>

      <View style={styles.componentsCard}>
        <Text style={styles.sectionTitle}>Komponen Penilaian</Text>
        {scoreData.komponen.length === 0 ? (
          <Text style={styles.emptyText}>Belum ada komponen penilaian yang ditambahkan.</Text>
        ) : scoreData.komponen.map((item) => (
          <View key={item.id} style={styles.componentItem}>
            <View style={styles.componentHeader}>
              <View style={styles.flex}>
                <Text style={styles.componentName}>{item.label}</Text>
                <Text style={styles.componentDescription}>{item.deskripsi}</Text>
              </View>
              <Text style={styles.componentValue}>{item.nilai === null ? "—" : `${item.nilai}%`}</Text>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${item.nilai === null ? 0 : Math.max(0, Math.min(100, item.nilai))}%` }]} />
            </View>
            {item.nilai === null ? <Text style={styles.notEntered}>Nilai belum dimasukkan</Text> : null}
          </View>
        ))}
      </View>

      {!hasAnyScore ? (
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Data nilai belum lengkap</Text>
          <Text style={styles.noticeText}>Buka src/data/academic.json, lalu isi nilai akhir, grade, LP, nama dosen, dan komponen penilaian berdasarkan data akademik yang sebenarnya.</Text>
        </View>
      ) : null}

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Kembali ke halaman utama"
        onPress={() => router.replace("/")}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Kembali ke Home</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40, width: "100%", maxWidth: 720, alignSelf: "center" },
  heading: { marginBottom: 18 },
  eyebrow: { color: "#4F46E5", fontSize: 10, fontWeight: "900", letterSpacing: 1.5 },
  title: { color: "#172554", fontSize: 27, fontWeight: "900", marginTop: 7 },
  subtitle: { color: "#64748B", fontSize: 13, lineHeight: 20, marginTop: 6 },
  courseCard: { backgroundColor: "#172554", borderRadius: 20, padding: 20, marginBottom: 14 },
  courseLabel: { color: "#A5B4FC", fontSize: 9, fontWeight: "900", letterSpacing: 1.2 },
  courseName: { color: "#FFFFFF", fontSize: 20, fontWeight: "900", marginTop: 8 },
  courseInfo: { color: "#DCE4FF", fontSize: 12, marginTop: 7 },
  lecturer: { color: "#DCE4FF", fontSize: 12, marginTop: 4 },
  summaryRow: { flexDirection: "row", gap: 12, marginBottom: 12 },
  summaryCard: { flex: 1, minHeight: 100, backgroundColor: "#FFFFFF", borderRadius: 17, padding: 16, borderWidth: 1, borderColor: "#E8ECF5", justifyContent: "center" },
  metricLabel: { color: "#94A3B8", fontSize: 9, fontWeight: "900", letterSpacing: 1 },
  bigValue: { color: "#172554", fontSize: 23, fontWeight: "900", marginTop: 8 },
  lpCard: { backgroundColor: "#EEF2FF", borderRadius: 17, padding: 18, marginBottom: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  lpTextWrap: { flex: 1 },
  lpValue: { color: "#4338CA", fontSize: 24, fontWeight: "900", marginTop: 5 },
  lpCaption: { color: "#6366F1", fontSize: 11, maxWidth: 115, textAlign: "right" },
  componentsCard: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 19, borderWidth: 1, borderColor: "#E8ECF5" },
  sectionTitle: { color: "#172554", fontSize: 17, fontWeight: "900", marginBottom: 16 },
  componentItem: { marginBottom: 18 },
  componentHeader: { flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 8 },
  flex: { flex: 1 },
  componentName: { color: "#334155", fontSize: 13, fontWeight: "800" },
  componentDescription: { color: "#94A3B8", fontSize: 10, marginTop: 3 },
  componentValue: { color: "#4338CA", fontSize: 13, fontWeight: "900" },
  progressTrack: { height: 8, backgroundColor: "#EEF2F7", borderRadius: 8, overflow: "hidden" },
  progressFill: { height: 8, backgroundColor: "#4F46E5", borderRadius: 8 },
  notEntered: { color: "#94A3B8", fontSize: 10, marginTop: 5 },
  emptyText: { color: "#64748B", fontSize: 12 },
  notice: { backgroundColor: "#FFF7ED", borderWidth: 1, borderColor: "#FED7AA", borderRadius: 14, padding: 15, marginTop: 14 },
  noticeTitle: { color: "#9A3412", fontSize: 13, fontWeight: "900", marginBottom: 5 },
  noticeText: { color: "#9A3412", fontSize: 11, lineHeight: 18 },
  button: { backgroundColor: "#4F46E5", borderRadius: 13, padding: 15, alignItems: "center", marginTop: 16 },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  pressed: { opacity: 0.75 },
});

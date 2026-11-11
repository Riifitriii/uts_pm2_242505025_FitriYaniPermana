import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import academic from "@/data/academic.json";

type AcademicData = {
  semester: string;
  programStudi: string;
  mataKuliah: string;
  dosen: string;
  nilaiAkhir: number | null;
  grade: string;
  lp: number | null;
  komponen: {
    id: string;
    label: string;
    deskripsi: string;
    nilai: number | null;
  }[];
};

const scoreData = academic as AcademicData;

const formatNumber = (value: number | null) => {
  if (value === null) return "Belum diisi";

  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function ScoreScreen() {
  const hasAnyScore =
    scoreData.nilaiAkhir !== null ||
    scoreData.komponen.some((item) => item.nilai !== null);

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>ACADEMIC DASHBOARD</Text>
        <Text style={styles.title}>My Academic Score</Text>
        <Text style={styles.subtitle}>
          Ringkasan capaian akademik dan progres pembelajaran.
        </Text>
      </View>

      <View style={styles.courseCard}>
        <View style={styles.courseBadge}>
          <Text style={styles.courseBadgeText}>MATA KULIAH</Text>
        </View>

        <Text style={styles.courseName}>{scoreData.mataKuliah}</Text>

        <Text style={styles.courseInfo}>
          Semester {scoreData.semester} • {scoreData.programStudi}
        </Text>

        <View style={styles.courseDivider} />

        <Text style={styles.lecturer}>Dosen Pengampu: {scoreData.dosen}</Text>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.metricLabel}>NILAI AKHIR</Text>
          <Text style={styles.scoreValue}>
            {formatNumber(scoreData.nilaiAkhir)}
          </Text>
          <Text style={styles.metricCaption}>Capaian nilai</Text>
        </View>

        <View style={styles.gradeCard}>
          <Text style={styles.gradeLabel}>GRADE</Text>
          <Text style={styles.gradeValue}>{scoreData.grade || "—"}</Text>
          <Text style={styles.gradeCaption}>Predikat nilai</Text>
        </View>
      </View>

      <View style={styles.lpCard}>
        <View style={styles.lpIcon}>
          <Text style={styles.lpIconText}>LP</Text>
        </View>

        <View style={styles.lpTextWrap}>
          <Text style={styles.metricLabel}>LEARNING POINT</Text>
          <Text style={styles.lpValue}>{formatNumber(scoreData.lp)}</Text>
          <Text style={styles.lpCaption}>Total poin pembelajaran</Text>
        </View>
      </View>

      <View style={styles.componentsCard}>
        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionTitle}>Komponen Penilaian</Text>
            <Text style={styles.sectionSubtitle}>
              Ringkasan progres setiap komponen.
            </Text>
          </View>
        </View>

        {scoreData.komponen.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>Belum ada komponen penilaian</Text>
            <Text style={styles.emptyText}>
              Data komponen akan ditampilkan setelah tersedia.
            </Text>
          </View>
        ) : (
          scoreData.komponen.map((item) => {
            const value =
              item.nilai === null ? 0 : Math.max(0, Math.min(100, item.nilai));

            return (
              <View key={item.id} style={styles.componentItem}>
                <View style={styles.componentHeader}>
                  <View style={styles.flex}>
                    <Text style={styles.componentName}>{item.label}</Text>

                    {item.deskripsi ? (
                      <Text style={styles.componentDescription}>
                        {item.deskripsi}
                      </Text>
                    ) : null}
                  </View>

                  <Text style={styles.componentValue}>
                    {item.nilai === null ? "—" : `${item.nilai}%`}
                  </Text>
                </View>

                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${value}%` }]} />
                </View>

                {item.nilai === null ? (
                  <Text style={styles.notEntered}>Nilai belum dimasukkan</Text>
                ) : null}
              </View>
            );
          })
        )}
      </View>

      {!hasAnyScore ? (
        <View style={styles.notice}>
          <Text style={styles.noticeTitle}>Data nilai belum lengkap</Text>
          <Text style={styles.noticeText}>
            Silakan periksa data pada src/data/academic.json.
          </Text>
        </View>
      ) : null}

      <View style={styles.actionArea}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Kembali ke halaman utama"
          onPress={() => router.replace("/")}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Kembali ke Home</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>PERSONAL CV & ACADEMIC SCORE APP</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F7FF",
  },

  container: {
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 42,
  },

  heading: {
    marginBottom: 19,
  },

  eyebrow: {
    color: "#4F46E5",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  title: {
    color: "#172554",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 6,
  },

  subtitle: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  courseCard: {
    backgroundColor: "#172554",
    borderRadius: 21,
    padding: 21,
    marginBottom: 14,
  },

  courseBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#29396D",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  courseBadgeText: {
    color: "#C7D2FE",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  courseName: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 12,
  },

  courseInfo: {
    color: "#DCE4FF",
    fontSize: 12,
    marginTop: 7,
  },

  courseDivider: {
    height: 1,
    backgroundColor: "#394979",
    marginVertical: 13,
  },

  lecturer: {
    color: "#DCE4FF",
    fontSize: 11,
  },

  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  summaryCard: {
    flex: 1,
    minHeight: 125,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#E6EAF5",
    justifyContent: "center",
  },

  metricLabel: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  scoreValue: {
    color: "#172554",
    fontSize: 31,
    fontWeight: "900",
    marginTop: 9,
  },

  metricCaption: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 4,
  },

  gradeCard: {
    flex: 1,
    minHeight: 125,
    backgroundColor: "#EEF2FF",
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#DDE3FF",
    justifyContent: "center",
  },

  gradeLabel: {
    color: "#6366F1",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  gradeValue: {
    color: "#4338CA",
    fontSize: 39,
    fontWeight: "900",
    marginTop: 4,
  },

  gradeCaption: {
    color: "#6366F1",
    fontSize: 10,
    marginTop: 1,
  },

  lpCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderColor: "#E6EAF5",
  },

  lpIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  lpIconText: {
    color: "#4F46E5",
    fontSize: 14,
    fontWeight: "900",
  },

  lpTextWrap: {
    flex: 1,
  },

  lpValue: {
    color: "#4338CA",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 4,
  },

  lpCaption: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 2,
  },

  componentsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E6EAF5",
  },

  sectionHeading: {
    marginBottom: 20,
  },

  sectionTitle: {
    color: "#172554",
    fontSize: 17,
    fontWeight: "900",
  },

  sectionSubtitle: {
    color: "#94A3B8",
    fontSize: 11,
    marginTop: 5,
  },

  componentItem: {
    marginBottom: 21,
  },

  componentHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 9,
  },

  flex: {
    flex: 1,
  },

  componentName: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "900",
  },

  componentDescription: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 4,
  },

  componentValue: {
    color: "#4338CA",
    fontSize: 13,
    fontWeight: "900",
  },

  progressTrack: {
    height: 9,
    backgroundColor: "#EEF2F7",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    height: 9,
    backgroundColor: "#4F46E5",
    borderRadius: 10,
  },

  notEntered: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 6,
  },

  emptyState: {
    backgroundColor: "#F8FAFC",
    borderRadius: 13,
    padding: 17,
  },

  emptyTitle: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "800",
  },

  emptyText: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 5,
  },

  notice: {
    backgroundColor: "#FFF7ED",
    borderWidth: 1,
    borderColor: "#FED7AA",
    borderRadius: 14,
    padding: 15,
    marginTop: 14,
  },

  noticeTitle: {
    color: "#9A3412",
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 5,
  },

  noticeText: {
    color: "#9A3412",
    fontSize: 11,
    lineHeight: 18,
  },

  actionArea: {
    marginTop: 17,
  },

  button: {
    backgroundColor: "#4F46E5",
    borderRadius: 13,
    minHeight: 49,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },

  buttonArrow: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
    marginLeft: 9,
  },

  pressed: {
    opacity: 0.75,
  },

  footer: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 25,
  },
});

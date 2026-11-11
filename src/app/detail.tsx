import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import rawData from "@/data/data.json";
import type { PortfolioData } from "@/data/types";

const data = rawData as PortfolioData;
const profile = data.profile;

export default function DetailScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>PERSONAL PROFILE</Text>
        <Text style={styles.pageTitle}>Detail Profil</Text>
        <Text style={styles.pageSubtitle}>
          Informasi pribadi, akademik, dan bidang yang saya minati.
        </Text>
      </View>

      <View style={styles.hero}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {profile.nama
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </Text>
        </View>

        <View style={styles.heroText}>
          <Text style={styles.heroEyebrow}>PERSONAL INFORMATION</Text>
          <Text style={styles.name}>{profile.nama}</Text>
          <Text style={styles.nim}>NIM {profile.nim}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <SectionHeading number="01" title="Informasi Akademik" />

        <InfoRow label="Program Studi" value="Sistem Informasi" />
        <InfoRow label="Semester" value="5" />
        <InfoRow label="Profesi / Minat" value={profile.profesi} />
        <InfoRow label="Proyek Saat Ini" value={profile.proyek} />
      </View>

      <View style={styles.card}>
        <SectionHeading number="02" title="Tentang Saya" />
        <Text style={styles.description}>{profile.deskripsi}</Text>
      </View>

      <View style={styles.card}>
        <SectionHeading number="03" title="Minat dan Ketertarikan" />

        {data.interests.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.interestRow,
              index === data.interests.length - 1 && styles.lastRow,
            ]}
          >
            <View style={styles.interestIcon}>
              <Text style={styles.interestEmoji}>{item.ikon}</Text>
            </View>

            <View style={styles.interestContent}>
              <Text style={styles.interestTitle}>{item.judul}</Text>
              <Text style={styles.description}>{item.deskripsi}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.actionArea}>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push("/score")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Lihat Nilai Akademik</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.replace("/")}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Kembali ke Home</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>PERSONAL CV & ACADEMIC SCORE APP</Text>
    </ScrollView>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionNumber}>{number}</Text>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
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
    marginBottom: 20,
  },

  eyebrow: {
    color: "#4F46E5",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  pageTitle: {
    color: "#172554",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 6,
  },

  pageSubtitle: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  hero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#172554",
    borderRadius: 21,
    padding: 22,
    marginBottom: 15,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#4F46E5",
    fontSize: 21,
    fontWeight: "900",
  },

  heroText: {
    flex: 1,
  },

  heroEyebrow: {
    color: "#A5B4FC",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.1,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 7,
  },

  nim: {
    color: "#DCE4FF",
    fontSize: 12,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 19,
    borderWidth: 1,
    borderColor: "#E6EAF5",
    marginBottom: 14,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },

  sectionNumber: {
    color: "#4F46E5",
    backgroundColor: "#EEF2FF",
    overflow: "hidden",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 5,
    fontSize: 10,
    fontWeight: "900",
  },

  sectionTitle: {
    color: "#172554",
    fontSize: 16,
    fontWeight: "900",
  },

  infoRow: {
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  infoLabel: {
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 5,
  },

  infoValue: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 19,
  },

  description: {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 21,
  },

  interestRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  lastRow: {
    borderBottomWidth: 0,
    paddingBottom: 0,
  },

  interestIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  interestEmoji: {
    fontSize: 21,
  },

  interestContent: {
    flex: 1,
  },

  interestTitle: {
    color: "#172554",
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 4,
  },

  actionArea: {
    marginTop: 5,
    gap: 10,
  },

  primaryButton: {
    backgroundColor: "#4F46E5",
    borderRadius: 13,
    minHeight: 49,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
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

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE3EF",
    borderRadius: 13,
    minHeight: 47,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: "#334155",
    fontSize: 13,
    fontWeight: "800",
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

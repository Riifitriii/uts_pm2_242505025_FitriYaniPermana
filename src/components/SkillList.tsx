import { StyleSheet, Text, View } from "react-native";
import { aksen } from "../constants/accent";
import type { Skill } from "../data/types";
import SectionTitle from "./SectionTitle";

type Props = {
  skills: Skill[];
};

// Memenuhi Level 7: Dynamic Content, daftar skill dirender dari array JSON memakai .map()
// Memenuhi Level 5 & 6: array skills diterima lewat Props
export default function SkillList({ skills }: Props) {
  return (
    <View style={styles.section}>
      <SectionTitle
        nomor="03"
        judul="My Skills"
        deskripsi="Keahlian yang sedang saya pelajari dan kembangkan."
        warna={2}
      />
      {/* flexWrap + flexBasis: otomatis 1 kolom di HP dan 2 kolom di layar lebar */}
      <View style={styles.card}>
        {skills.map((skill, index) => {
          const a = aksen(index);
          return (
            <View key={skill.id} style={styles.item}>
              <View style={styles.row}>
                <Text style={styles.nama}>{skill.nama}</Text>
                <View style={[styles.levelBadge, { backgroundColor: a.soft }]}>
                  <Text style={[styles.level, { color: a.teks }]}>
                    {skill.level}%
                  </Text>
                </View>
              </View>
              <Text style={styles.kategori}>{skill.kategori}</Text>
              <View style={styles.barBackground}>
                <View
                  style={[
                    styles.barFill,
                    { width: `${skill.level}%`, backgroundColor: a.main },
                  ]}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 36 },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 24,
    rowGap: 18,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },
  item: { flexGrow: 1, flexBasis: 240 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nama: { fontSize: 14, fontWeight: "800", color: "#172554" },
  levelBadge: { paddingHorizontal: 9, paddingVertical: 3, borderRadius: 999 },
  level: { fontSize: 11, fontWeight: "800" },
  kategori: { fontSize: 11, color: "#94A3B8", marginTop: 3, marginBottom: 8 },
  barBackground: {
    height: 8,
    backgroundColor: "#F1F5F9",
    borderRadius: 4,
    overflow: "hidden",
  },
  barFill: { height: 8, borderRadius: 4 },
});

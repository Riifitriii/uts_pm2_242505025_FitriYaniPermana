import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import SectionTitle from "./SectionTitle";
import { aksen } from "../constants/accent";
import type { PortfolioCardItem } from "../data/types";

type Props = {
  items: PortfolioCardItem[];
};

// Memenuhi Level 7: Dynamic Content, galeri dirender dari array JSON memakai FlatList
// Memenuhi Level 5 & 6: array portfolio diterima lewat Props
export default function PortfolioGallery({ items }: Props) {
  return (
    <View style={styles.section}>
      <SectionTitle
        nomor="04"
        judul="Portfolio"
        deskripsi="Geser ke samping untuk melihat proyek lainnya."
        warna={3}
      />
      {/* Horizontal agar tidak nested dengan ScrollView vertikal di halaman utama */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => {
          const a = aksen(index);
          return (
            <View style={styles.card}>
              <View style={[styles.strip, { backgroundColor: a.main }]} />
              <Image source={item.gambar} style={styles.gambar} resizeMode="cover" />
              <View style={styles.info}>
                <Text style={styles.judul}>{item.judul}</Text>
                <Text style={styles.deskripsi}>{item.deskripsi}</Text>
                <View style={styles.tagRow}>
                  {item.teknologi.map((tech) => (
                    <View key={tech} style={[styles.tag, { backgroundColor: a.soft }]}>
                      <Text style={[styles.tagText, { color: a.teks }]}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 36 },
  separator: { width: 14 },
  card: {
    width: 250,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },
  strip: { height: 5 },
  gambar: { width: "100%", height: 130, backgroundColor: "#E8EDFF" },
  info: { padding: 16 },
  judul: { fontSize: 15, fontWeight: "800", color: "#172554" },
  deskripsi: { fontSize: 12, lineHeight: 19, color: "#64748B", marginTop: 6 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 12 },
  tag: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5 },
  tagText: { fontSize: 10, fontWeight: "800" },
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { aksen } from "../constants/accent";

type Props = {
  nomor: string;
  judul: string;
  deskripsi?: string;
  warna?: number; // indeks warna aksen
};

// Judul seksi rata tengah dengan warna aksen berbeda per seksi (Level 3: hierarki visual)
export default function SectionTitle({ nomor, judul, deskripsi, warna = 0 }: Props) {
  const a = aksen(warna);
  return (
    <View style={styles.wrapper}>
      <View style={[styles.nomorBox, { backgroundColor: a.soft }]}>
        <Text style={[styles.nomor, { color: a.teks }]}>{nomor}</Text>
      </View>
      <Text style={styles.judul}>{judul}</Text>
      <View style={[styles.garis, { backgroundColor: a.main }]} />
      {deskripsi ? <Text style={styles.deskripsi}>{deskripsi}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: "center", marginBottom: 20 },
  nomorBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginBottom: 10,
  },
  nomor: { fontSize: 12, fontWeight: "900", letterSpacing: 1 },
  judul: { fontSize: 26, fontWeight: "900", color: "#172554", textAlign: "center" },
  garis: { width: 40, height: 4, borderRadius: 2, marginTop: 10 },
  deskripsi: {
    fontSize: 13,
    lineHeight: 21,
    color: "#64748B",
    marginTop: 12,
    textAlign: "center",
    maxWidth: 420,
  },
});

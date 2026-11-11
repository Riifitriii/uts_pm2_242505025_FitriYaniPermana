import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import SectionTitle from "./SectionTitle";
import { aksen } from "../constants/accent";

// Memenuhi Level 4: State (useState), Event Handling (onChangeText, onPress), Validasi, Alert
export default function ContactForm() {
  // Level 4: State untuk tiap field
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = () => {
    // Level 4: Validasi input tidak boleh kosong
    if (!nama.trim() || !email.trim() || !pesan.trim()) {
      Alert.alert("Form belum lengkap", "Nama, Email, dan Pesan wajib diisi.");
      return;
    }

    // Tambahan di luar syarat soal: validasi format email dasar
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      Alert.alert("Email tidak valid", "Masukkan alamat email yang benar.");
      return;
    }

    // Level 4: Alert saat form berhasil disubmit
    Alert.alert(
      "Pesan terkirim",
      `Terima kasih, ${nama.trim()}! Pesan Anda sudah diterima.`
    );

    // Kosongkan form setelah submit
    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <View style={styles.section}>
      <SectionTitle
        nomor="05"
        judul="Contact Me"
        deskripsi="Kirim pesan melalui form di bawah ini."
        warna={4}
      />
      <View style={styles.card}>
        <Text style={styles.label}>NAMA</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama lengkap"
          placeholderTextColor="#94A3B8"
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="nama@email.com"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Text style={styles.label}>PESAN</Text>
        <TextInput
          style={[styles.input, styles.inputPesan]}
          placeholder="Tulis pesan Anda"
          placeholderTextColor="#94A3B8"
          value={pesan}
          onChangeText={setPesan}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: aksen(4).main }]}
          onPress={handleSubmit} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Kirim Pesan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginTop: 36 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },
  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8ECF5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: "#172554",
    backgroundColor: "#F5F7FF",
    marginBottom: 16,
  },
  inputPesan: { height: 110 },
  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
});

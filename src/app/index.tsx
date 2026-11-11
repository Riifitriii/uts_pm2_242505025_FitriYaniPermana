import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ContactForm from "../components/ContactForm";
import HeaderProfile from "../components/HeaderProfile";
import PortfolioGallery from "../components/PortfolioGallery";
import SectionTitle from "../components/SectionTitle";
import SkillList from "../components/SkillList";
import { aksen } from "../constants/accent";
import rawData from "../data/data.json"; // Level 5 & 6: sumber data terpisah dari UI
import images from "../data/images";
import type { PortfolioCardItem, PortfolioData } from "../data/types";

const data: PortfolioData = rawData;

type TujuanGulir = "portofolio" | "kontak";

export default function HomeScreen() {
  const { profile, interests, skills, portfolio } = data;

  // Untuk tombol "Lihat Portofolio" dan "Hubungi Saya" (gulir ke bagian terkait)
  const scrollRef = useRef<React.ComponentRef<typeof ScrollView>>(null);
  const posisi = useRef<Record<TujuanGulir, number>>({
    portofolio: 0,
    kontak: 0,
  });
  const gulirKe = (tujuan: TujuanGulir) => {
    scrollRef.current?.scrollTo({
      y: Math.max(posisi.current[tujuan] - 16, 0),
      animated: true,
    });
  };

  // Ubah kunci gambar (string di JSON) menjadi source gambar lokal
  const portfolioItems: PortfolioCardItem[] = portfolio.map((item) => ({
    ...item,
    gambar: images[item.gambar],
  }));

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar barStyle="dark-content" />

      <ScrollView
        ref={scrollRef}
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Level 1 sampai 3 + Level 5 & 6: data profil dikirim lewat Props */}
        <HeaderProfile
          nim={profile.nim}
          nama={profile.nama}
          profesi={profile.profesi}
          status={profile.status}
          proyek={profile.proyek}
          tagline={profile.tagline}
          fotoSource={images[profile.foto]}
          onLihatPortofolio={() => gulirKe("portofolio")}
          onHubungi={() => gulirKe("kontak")}
        />

        {/* About Me (teks diambil dari data.json) */}
        <View style={styles.section}>
          <SectionTitle nomor="01" judul="About Me" warna={0} />
          <View style={styles.aboutCard}>
            <Text style={styles.aboutGreeting}>A little introduction</Text>
            <Text style={styles.aboutText}>{profile.deskripsi}</Text>
          </View>
        </View>

        {/* Level 7: Dynamic Content, daftar minat dirender dengan .map() */}
        <View style={styles.section}>
          <SectionTitle
            nomor="02"
            judul="My Interests"
            deskripsi="Bidang yang ingin saya pelajari dan kembangkan."
            warna={1}
          />
          {/* flexWrap 
+                    flexBasis: 1 kolom di HP, 3 kolom di layar lebar */}

          <View style={styles.interestGrid}>
            {interests.map((interest, index) => {
              const a = aksen(index + 1);
              return (
                <View key={interest.id} style={styles.interestCard}>
                  <View
                    style={[styles.interestIcon, { backgroundColor: a.soft }]}
                  >
                    <Text style={styles.interestEmoji}>{interest.ikon}</Text>
                  </View>
                  <Text style={styles.interestTitle}>{interest.judul}</Text>
                  <Text style={styles.interestDescription}>
                    {interest.deskripsi}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Level 7: Dynamic Content, skills dengan .map() */}
        <SkillList skills={skills} />

        {/* Level 7: Dynamic Content, galeri portofolio dengan FlatList */}
        <View
          onLayout={(e) => (posisi.current.portofolio = e.nativeEvent.layout.y)}
        >
          <PortfolioGallery items={portfolioItems} />
        </View>

        {/* Level 4: Form kontak interaktif */}
        <View
          onLayout={(e) => (posisi.current.kontak = e.nativeEvent.layout.y)}
        >
          <ContactForm />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerBars}>
            <View
              style={[styles.footerBar, { backgroundColor: aksen(0).main }]}
            />
            <View
              style={[styles.footerBar, { backgroundColor: aksen(1).main }]}
            />
            <View
              style={[styles.footerBar, { backgroundColor: aksen(2).main }]}
            />
          </View>
          <Text style={styles.footerTitle}>{profile.nama.toUpperCase()}</Text>
          <Text style={styles.footerSubtitle}>
            Personal CV & Academic Score App
          </Text>
          <Text style={styles.footerCopyright}>UTS MOB2 • 20261</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F5F7FF" },
  container: { flex: 1 },
  // Responsif: di HP memenuhi layar, di laptop dibatasi lebar 720 dan berada di tengah
  content: {
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 35,
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
  },

  section: { marginTop: 36 },

  aboutCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 22,
    borderWidth: 1,
    borderColor: "#E8ECF5",
    alignItems: "center",
  },
  aboutGreeting: {
    fontSize: 13,
    fontWeight: "800",
    color: "#4F46E5",
    marginBottom: 11,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 24,
    color: "#475569",
    textAlign: "center",
  },

  interestGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },

  interestCard: {
    flexGrow: 1,
    flexBasis: 190,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },
  interestIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  interestEmoji: { fontSize: 24 },
  interestTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 6,
    textAlign: "center",
  },
  interestDescription: {
    fontSize: 12,
    lineHeight: 20,
    color: "#64748B",
    textAlign: "center",
  },

  footer: { alignItems: "center", marginTop: 40 },
  footerBars: { flexDirection: "row", gap: 6, marginBottom: 18 },
  footerBar: { width: 24, height: 4, borderRadius: 2 },
  footerTitle: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.4,
    color: "#172554",
    textAlign: "center",
  },
  footerSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 7,
    textAlign: "center",
  },
  footerCopyright: { fontSize: 10, color: "#94A3B8", marginTop: 8 },
});

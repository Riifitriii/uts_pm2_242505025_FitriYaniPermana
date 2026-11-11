import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { aksen } from "../constants/accent";
import type { PortfolioCardItem } from "../data/types";
import SectionTitle from "./SectionTitle";

type Props = {
  items: PortfolioCardItem[];
};

export default function PortfolioGallery({ items }: Props) {
  return (
    <View style={styles.section}>
      <SectionTitle
        nomor="04"
        judul="Portfolio"
        deskripsi="Beberapa proyek yang pernah saya kerjakan."
        warna={3}
      />

      {items.length === 0 ? (
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>Belum ada proyek</Text>
          <Text style={styles.emptyText}>
            Proyek akan ditampilkan di bagian ini.
          </Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item, index }) => {
            const color = aksen(index);

            return (
              <View style={styles.card}>
                <View
                  style={[styles.accentStrip, { backgroundColor: color.main }]}
                />

                <Image
                  source={item.gambar}
                  style={styles.image}
                  resizeMode="cover"
                  accessibilityLabel={`Gambar proyek ${item.judul}`}
                />

                <View style={styles.info}>
                  <View style={styles.projectNumber}>
                    <Text style={styles.projectNumberText}>
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </Text>
                  </View>

                  <Text style={styles.title} numberOfLines={1}>
                    {item.judul}
                  </Text>

                  <Text style={styles.description} numberOfLines={3}>
                    {item.deskripsi}
                  </Text>

                  <View style={styles.tagRow}>
                    {item.teknologi.map((tech) => (
                      <View
                        key={tech}
                        style={[styles.tag, { backgroundColor: color.soft }]}
                      >
                        <Text style={[styles.tagText, { color: color.teks }]}>
                          {tech}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}

      {items.length > 1 ? (
        <Text style={styles.hint}>
          Geser kartu ke samping untuk melihat proyek lainnya
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 36,
  },

  listContent: {
    paddingVertical: 2,
  },

  separator: {
    width: 14,
  },

  card: {
    width: 258,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E6EAF5",
    shadowColor: "#172554",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  accentStrip: {
    height: 5,
  },

  image: {
    width: "100%",
    height: 145,
    backgroundColor: "#E8EDFF",
  },

  info: {
    padding: 16,
  },

  projectNumber: {
    alignSelf: "flex-start",
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 9,
  },

  projectNumberText: {
    color: "#64748B",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 0.7,
  },

  title: {
    color: "#172554",
    fontSize: 15,
    fontWeight: "900",
  },

  description: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
    minHeight: 54,
  },

  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 12,
  },

  tag: {
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  tagText: {
    fontSize: 10,
    fontWeight: "800",
  },

  hint: {
    color: "#94A3B8",
    fontSize: 11,
    textAlign: "center",
    marginTop: 12,
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6EAF5",
    padding: 22,
    alignItems: "center",
  },

  emptyTitle: {
    color: "#172554",
    fontSize: 14,
    fontWeight: "900",
  },

  emptyText: {
    color: "#64748B",
    fontSize: 12,
    marginTop: 5,
  },
});

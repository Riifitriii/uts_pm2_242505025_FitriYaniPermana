import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FF" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>PERSONAL PORTFOLIO</Text>
          </View>

          <Text style={styles.greeting}>Hello, I'm</Text>

          <Text style={styles.headerName}>Fitri Yani{"\n"}Permana.</Text>

          <Text style={styles.headerDescription}>
            Get to know me, my interests, and my journey in Information Systems.
          </Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.name}>Fitri Yani Permana</Text>

          <Text style={styles.nim}>242505025</Text>

          <View style={styles.divider} />

          <View style={styles.identityRow}>
            <View style={styles.identityIcon}>
              <Text style={styles.iconText}>ID</Text>
            </View>

            <View style={styles.identityInfo}>
              <Text style={styles.label}>STUDENT IDENTITY</Text>

              <Text style={styles.value}>Mahasiswa Sistem Informasi</Text>
            </View>
          </View>

          <View style={styles.identityRow}>
            <View style={styles.identityIcon}>
              <Text style={styles.iconText}>CV</Text>
            </View>

            <View style={styles.identityInfo}>
              <Text style={styles.label}>CURRENT PROJECT</Text>

              <Text style={styles.value}>Personal CV & Academic Score</Text>
            </View>
          </View>
        </View>

        {/* About Me */}
        <View style={styles.section}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionNumber}>01</Text>

            <Text style={styles.sectionTitle}>About Me</Text>
          </View>

          <View style={styles.aboutCard}>
            <Text style={styles.aboutGreeting}>A little introduction</Text>

            <Text style={styles.aboutText}>
              Saya Fitri Yani Permana, mahasiswa Program Studi Sistem Informasi
              yang tertarik pada perkembangan teknologi digital dan pengembangan
              aplikasi. Saya senang mempelajari hal baru, mengembangkan
              keterampilan, serta memahami bagaimana teknologi dapat membantu
              menyelesaikan berbagai permasalahan.
            </Text>
          </View>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionNumber}>02</Text>

            <Text style={styles.sectionTitle}>My Interests</Text>
          </View>

          <Text style={styles.sectionDescription}>
            Bidang yang ingin saya pelajari dan kembangkan.
          </Text>

          <View style={styles.interestCard}>
            <View style={styles.interestIcon}>
              <Text style={styles.interestEmoji}>📱</Text>
            </View>

            <View style={styles.interestInfo}>
              <Text style={styles.interestTitle}>Mobile Development</Text>

              <Text style={styles.interestDescription}>
                Mempelajari pengembangan aplikasi mobile menggunakan React
                Native dan Expo.
              </Text>
            </View>
          </View>

          <View style={styles.interestCard}>
            <View style={styles.interestIcon}>
              <Text style={styles.interestEmoji}>💻</Text>
            </View>

            <View style={styles.interestInfo}>
              <Text style={styles.interestTitle}>Web Development</Text>

              <Text style={styles.interestDescription}>
                Mengenal pengembangan aplikasi berbasis web dan teknologi
                pendukungnya.
              </Text>
            </View>
          </View>

          <View style={styles.interestCard}>
            <View style={styles.interestIcon}>
              <Text style={styles.interestEmoji}>🎨</Text>
            </View>

            <View style={styles.interestInfo}>
              <Text style={styles.interestTitle}>UI/UX Design</Text>

              <Text style={styles.interestDescription}>
                Memahami desain antarmuka yang menarik, konsisten, dan mudah
                digunakan.
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLine} />

          <Text style={styles.footerTitle}>FITRI YANI PERMANA</Text>

          <Text style={styles.footerSubtitle}>
            Personal CV & Academic Score App
          </Text>

          <Text style={styles.footerCopyright}>UTS MOB2 • 20261</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F7FF",
  },

  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 35,
  },

  header: {
    marginBottom: 25,
  },

  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8EDFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 22,
  },

  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4F46E5",
    marginRight: 8,
  },

  badgeText: {
    color: "#4338CA",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  greeting: {
    fontSize: 18,
    color: "#64748B",
    marginBottom: 5,
  },

  headerName: {
    fontSize: 39,
    lineHeight: 45,
    fontWeight: "900",
    color: "#172554",
    letterSpacing: -1.2,
  },

  headerDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: "#64748B",
    marginTop: 12,
    maxWidth: 310,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8ECF5",
    elevation: 3,
    shadowColor: "#172554",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
  },

  imageContainer: {
    padding: 5,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: "#C7D2FE",
    marginBottom: 16,
  },

  profileImage: {
    width: 116,
    height: 116,
    borderRadius: 60,
    backgroundColor: "#E8EDFF",
  },

  name: {
    fontSize: 21,
    fontWeight: "800",
    color: "#172554",
    textAlign: "center",
  },

  nim: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4F46E5",
    marginTop: 7,
    letterSpacing: 1,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E8ECF5",
    marginVertical: 22,
  },

  identityRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },

  identityIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  iconText: {
    fontSize: 12,
    fontWeight: "900",
    color: "#4338CA",
  },

  identityInfo: {
    flex: 1,
  },

  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
    marginBottom: 5,
  },

  value: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    lineHeight: 19,
  },

  section: {
    marginTop: 32,
  },

  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  sectionNumber: {
    fontSize: 12,
    fontWeight: "900",
    color: "#4F46E5",
    backgroundColor: "#E8EDFF",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 9,
    overflow: "hidden",
    marginRight: 11,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: "900",
    color: "#172554",
  },

  aboutCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },

  aboutGreeting: {
    fontSize: 13,
    fontWeight: "800",
    color: "#4F46E5",
    marginBottom: 11,
  },

  aboutText: {
    fontSize: 14,
    lineHeight: 24,
    color: "#475569",
    textAlign: "left",
  },

  sectionDescription: {
    fontSize: 13,
    lineHeight: 21,
    color: "#64748B",
    marginBottom: 15,
    marginTop: -5,
  },

  interestCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E8ECF5",
  },

  interestIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  interestEmoji: {
    fontSize: 22,
  },

  interestInfo: {
    flex: 1,
    paddingTop: 2,
  },

  interestTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 6,
  },

  interestDescription: {
    fontSize: 12,
    lineHeight: 20,
    color: "#64748B",
  },

  footer: {
    alignItems: "center",
    marginTop: 35,
  },

  footerLine: {
    width: 45,
    height: 4,
    borderRadius: 3,
    backgroundColor: "#4F46E5",
    marginBottom: 18,
  },

  footerTitle: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.4,
    color: "#172554",
  },

  footerSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 7,
  },

  footerCopyright: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 8,
  },
});

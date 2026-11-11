import {
  TabList,
  TabListProps,
  Tabs,
  TabSlot,
  TabTrigger,
  TabTriggerSlotProps,
} from "expo-router/ui";
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const NAVY = "#172554";
const INDIGO = "#4F46E5";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: "100%" }} />

      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Beranda</TabButton>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Jelajahi</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const { ref, ...pressableProps } = props;
  void ref;

  return (
    <Pressable
      {...pressableProps}
      accessibilityRole="tab"
      accessibilityState={{ selected: isFocused }}
      style={({ pressed }) => [
        styles.tabButton,
        isFocused && styles.tabButtonActive,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.tabText, isFocused && styles.tabTextActive]}>
        {children}
      </Text>
    </Pressable>
  );
}

function CustomTabList(props: TabListProps) {
  const { width } = useWindowDimensions();

  // Hitung lebar navbar berdasarkan viewport browser.
  const navWidth = Math.min(820, Math.max(0, width - 32));
  const navLeft = Math.max(0, (width - navWidth) / 2);

  return (
    <View
      {...props}
      style={[
        props.style,
        styles.navPosition as any,
        {
          width: navWidth,
          left: navLeft,
        },
      ]}
    >
      <View style={styles.navbar}>
        <View style={styles.brandBlock}>
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>F</Text>
          </View>

          <View>
            <Text style={styles.brandText}>FITRI.YP</Text>
            <Text style={styles.brandCaption}>PERSONAL PORTFOLIO</Text>
          </View>
        </View>

        <View style={styles.links}>{props.children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navPosition: {
    // Fixed membuat posisi mengacu ke viewport browser.
    position: "fixed" as any,
    top: 12,
    zIndex: 999,
    paddingHorizontal: 0,
    alignItems: "stretch",
  },

  navbar: {
    width: "100%",
    minHeight: 58,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: NAVY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: NAVY,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 6,
  },

  brandBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  brandMark: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  brandMarkText: {
    color: INDIGO,
    fontSize: 17,
    fontWeight: "900",
  },

  brandText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },

  brandCaption: {
    color: "#C7D2FE",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1.1,
    marginTop: 2,
  },

  links: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  tabButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },

  tabButtonActive: {
    backgroundColor: "#FFFFFF",
  },

  tabText: {
    color: "#E0E7FF",
    fontSize: 12,
    fontWeight: "700",
  },

  tabTextActive: {
    color: NAVY,
    fontWeight: "900",
  },

  pressed: {
    opacity: 0.72,
  },
});

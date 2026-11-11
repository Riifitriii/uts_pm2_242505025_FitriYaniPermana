import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#F5F7FF",
          },
          headerTintColor: "#172554",
          headerTitleStyle: {
            fontWeight: "800",
          },
          contentStyle: {
            backgroundColor: "#F5F7FF",
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="detail" options={{ title: "Detail Profil" }} />

        <Stack.Screen name="score" options={{ title: "My Academic Score" }} />

        <Stack.Screen
          name="+not-found"
          options={{ title: "Halaman Tidak Ditemukan" }}
        />
      </Stack>
    </ThemeProvider>
  );
}

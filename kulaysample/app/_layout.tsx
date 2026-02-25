import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Stack>{children}</Stack>;
}
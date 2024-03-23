import { Fragment } from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import {
  InfoIcon,
  XIcon,
  Wand,
  CalendarClock,
  MicOff,
  Share,
  Phone,
} from "lucide-react-native";
import { BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet";

function ContentHeader() {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <InfoIcon color="black" />
      </Pressable>
      <Text>Actions</Text>
      <Pressable>
        <XIcon color="black" />
      </Pressable>
    </View>
  );
}

function ContentMainActions() {
  return (
    <View style={styles.mainActionsContainer}>
      <View style={styles.cardContainer}>
        <Wand color="black" />
        <Text>Reply with AI</Text>
      </View>
      <View style={styles.cardContainer}>
        <CalendarClock color="black" />
        <Text>Snooze</Text>
      </View>
    </View>
  );
}

function ListItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <View style={[styles.mainActionsContainer, styles.listItem]}>
      {icon}
      <Text>{text}</Text>
    </View>
  );
}

export default function BottomSheetContent() {
  return (
    <BottomSheetView style={{ flex: 1 }}>
      <ContentHeader />
      <View style={{ gap: 20, flex: 1 }}>
        <ContentMainActions />
        <BottomSheetScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, gap: 20, paddingBottom: 40 }}
        >
          <ListItem icon={<MicOff color="black" />} text="Mute" />
          <ListItem icon={<Share color="black" />} text="Share" />
          <ListItem icon={<Phone color="black" />} text="Call" />
        </BottomSheetScrollView>
      </View>
    </BottomSheetView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainActionsContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    aspectRatio: 2.5,
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});

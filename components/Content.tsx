import { Fragment } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import {
  InfoIcon,
  XIcon,
  Wand,
  CalendarClock,
  MicOff,
} from "lucide-react-native";

function ContentHeader() {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <InfoIcon />
      </Pressable>
      <Text>Actions</Text>
      <Pressable>
        <XIcon />
      </Pressable>
    </View>
  );
}

function ContentMainActions() {
  return (
    <View style={styles.mainActionsContainer}>
      <View style={styles.cardContainer}>
        <Wand />
        <Text>Reply with AI</Text>
      </View>
      <View style={styles.cardContainer}>
        <CalendarClock />
        <Text>Snooze</Text>
      </View>
    </View>
  );
}

export default function BottomSheetContent() {
  return (
    <Fragment>
      <ContentHeader />
      <ContentMainActions />
      <View style={styles.mainActionsContainer}>
        <MicOff />
        <Text>Mute</Text>
      </View>
    </Fragment>
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
  },
});

import { ScrollView, StyleSheet } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ArticleScroll({ children }: Props) {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.contentContainer}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  contentContainer: {
    flexGrow: 1,
    overflow: "hidden",
  },
});

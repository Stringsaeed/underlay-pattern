import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";
import { Button, Dimensions, LogBox, Platform, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import MyBottomSheet from "./components/BottomSheet";
import ArticleScroll from "./components/ArticleScroll";

const { width, height } = Dimensions.get("window");
const sheetHeight = height * 0.4;

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const progress = useSharedValue(0);

  const articleContainerStylez = useAnimatedStyle(() => {
    return {
      margin: interpolate(progress.value, [0, 1], [0, 20], Extrapolation.CLAMP),
      marginTop: interpolate(
        progress.value,
        [0, 1],
        [0, 60],
        Extrapolation.CLAMP
      ),
      marginBottom: interpolate(
        progress.value,
        [0, 1],
        [0, sheetHeight - 40],
        Extrapolation.CLAMP
      ),
      shadowOffset: {
        width: 0,
        height: interpolate(
          progress.value,
          [0, 1],
          [0, 4],
          Extrapolation.CLAMP
        ),
      },
      shadowOpacity: interpolate(
        progress.value,
        [0, 1],
        [0, 0.2],
        Extrapolation.CLAMP
      ),
      shadowRadius: interpolate(
        progress.value,
        [0, 1],
        [0, 5],
        Extrapolation.CLAMP
      ),
      elevation: interpolate(
        progress.value,
        [0, 1],
        [0, 10],
        Extrapolation.CLAMP
      ),
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [0, 20],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.View
        style={[styles.articleScrollContainer, articleContainerStylez]}
      >
        <ArticleScroll />
      </Animated.View>
      <MyBottomSheet ref={bottomSheetRef} progress={progress} />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  articleScrollContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      android: {
        elevation: 0,
        overflow: "hidden",
      },
    }),
  },
});

LogBox.ignoreAllLogs(true);

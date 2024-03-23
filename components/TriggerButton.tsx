import { StyleSheet } from "react-native";
import { ChevronsUpDown } from "lucide-react-native";
import {
  BottomSheetHandle,
  BottomSheetHandleProps,
} from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type TriggerButtonHandleProps = {
  progress: SharedValue<number>;
};

export default function TriggerButtonHandle({
  progress,
  ...props
}: BottomSheetHandleProps & TriggerButtonHandleProps) {
  const handleAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(progress.value, [0, 1], [40, 80], Extrapolation.CLAMP),
      height: interpolate(progress.value, [0, 1], [40, 4], Extrapolation.CLAMP),
      borderRadius: interpolate(
        progress.value,
        [0, 1],
        [20, 4],
        Extrapolation.CLAMP
      ),
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [1, 0]),
  }));

  return (
    <BottomSheetHandle
      {...props}
      style={styles.container}
      indicatorStyle={styles.indicator}
    >
      <Animated.View style={[styles.indicatorContainer, handleAnimatedStyle]}>
        <Animated.View style={iconAnimatedStyle}>
          <ChevronsUpDown color="white" />
        </Animated.View>
      </Animated.View>
    </BottomSheetHandle>
  );
}

const styles = StyleSheet.create({
  container: { height: 40 },
  indicator: { display: "none" },
  indicatorContainer: {
    overflow: "hidden",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 4,
    backgroundColor: "#aeaeae",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

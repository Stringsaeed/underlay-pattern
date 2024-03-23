import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

import TriggerButtonHandle from "./TriggerButton";
import BottomSheetContent from "./Content";

type Props = {
  progress: SharedValue<number>;
};
const snapPoints = ["10%", "40%"];

function BottomSheetComponent({ progress }: Props, ref: Ref<BottomSheet>) {
  const innerRef = useRef<BottomSheet>(null);
  useImperativeHandle(ref, () => innerRef.current! as BottomSheet);

  const renderHandle = useCallback(
    (props: BottomSheetHandleProps) => (
      <TriggerButtonHandle progress={progress} {...props} />
    ),
    []
  );

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    flex: 1,
  }));

  return (
    <BottomSheet
      ref={innerRef}
      animatedIndex={progress}
      style={styles.bottomSheet}
      handleComponent={renderHandle}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      backgroundStyle={styles.background}
      enableOverDrag={false}
    >
      <Animated.View style={animatedStyle}>
        <BottomSheetContent />
      </Animated.View>
    </BottomSheet>
  );
}

export default forwardRef<BottomSheet, Props>(BottomSheetComponent);

const styles = StyleSheet.create({
  bottomSheet: {
    paddingHorizontal: 24,
  },
  background: {
    backgroundColor: "transparent",
  },
});

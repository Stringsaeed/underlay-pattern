import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetHandleProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import React, {
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
  children: React.ReactNode;
};

const snapPoints = ["10%", "50%"];

function BottomSheetComponent(
  { progress, children }: Props,
  ref: Ref<BottomSheet>
) {
  const innerRef = useRef<BottomSheetModal>(null);
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
      enablePanDownToClose={false}
      backgroundStyle={styles.background}
      enableOverDrag={false}
      enableContentPanningGesture
      // enableDynamicSizing
      snapPoints={snapPoints}
    >
      <Animated.View style={animatedStyle}>
        {/* <BottomSheetContent /> */}
        {children}
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

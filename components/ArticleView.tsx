import Animated, { AnimatedStyle } from "react-native-reanimated";
import { StyleSheet, ViewStyle, Platform } from "react-native";

type Props = {
  children: React.ReactNode;
  style: AnimatedStyle<ViewStyle>;
};

export default function ArticleView({ children, style }: Props) {
  return (
    <Animated.View style={[styles.articleScrollContainer, style]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
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
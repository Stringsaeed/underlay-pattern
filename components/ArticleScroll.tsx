import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function ArticleScroll() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={[styles.logoContainer, { paddingTop: 50 }]}>
        <Image
          style={styles.logo}
          source={require("./assets/logo-wordmark.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.article}>
        <Text style={styles.title}>Introducing Expo.dev</Text>
        <Text style={styles.paragraph}>
          Expo is an open-source platform that empowers developers to build
          universal native apps for Android, iOS, and the web using JavaScript
          and React. It offers a comprehensive suite of tools and services
          designed to streamline the app development process, making it more
          efficient and accessible. With Expo, developers can create a single
          project that runs natively across multiple devices, leveraging a wide
          array of SDK modules to access device and system functionality such as
          contacts, camera, GPS location, and more. One of the key features of
          Expo is its flexibility, allowing developers to use any library, SDK,
          or write their own native code, ensuring they're never limited in what
          they can create. This is complemented by the ability to invite teams
          to collaborate, review PRs easily through generated QR codes, and run
          automated end-to-end tests using Detox. Expo also simplifies the
          deployment process, offering tools to create and submit app
          store-ready builds, publish updates quickly, and maintain dashboards
          to track builds, submissions, and deployments. Expo's development
          tools, including the Expo CLI and Expo SDK, support fast animations,
          genuine native components, and allow for instant previews on devices
          through the Expo Go app. This eco-system supports rapid development,
          enabling features such as push notifications to be implemented with
          what feels like "black magic" to developers accustomed to web
          development. Furthermore, Expo's over-the-air update feature has been
          praised for its ability to quickly deploy fixes, saving developers on
          crucial launch days. The platform boasts impressive performance
          metrics, supporting 120 FPS animations and housing over 750K projects,
          with more than half of React Native projects using Expo. Its services
          cater specifically to professionals, offering build and submission
          services to the App Store and Google Play, instant updates to users,
          insights into app usage, on-demand payment for services used, and
          dedicated support from the Expo team. Additionally, Expo facilitates
          learning and community engagement through resources like Expo Snack,
          which allows experimentation in the browser, and a community Discord
          for developer interaction. Expo consistently updates its SDK, ensuring
          developers have access to the latest features and improvements in
          React Native and the broader app development ecosystem​​​​​​. For
          those interested in exploring or starting with Expo, further
          information and tools are available at their official website and
          documentation.
        </Text>
      </View>
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
  logoContainer: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: width * 0.5,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  article: {
    paddingTop: 24,
    paddingHorizontal: 45,
  },
});

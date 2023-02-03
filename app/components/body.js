import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
  console.log("Profiles", Profiles);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Profiles.mtl.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.textName}>{Profiles.mtl.name}</Text>
        <Text style={styles.textDistance}>{Profiles.mtl.caption}</Text>
      </ImageBackground>
      <View style={styles.bottomBox}>
        <Text style={styles.text}>my hottest take</Text>
        <View style={styles.audioBox}>
          <Image style={styles.play} source={Icons.player.light} />
          <Image style={styles.audio} source={Icons.audioWave.light} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: " ",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight,
  },
  image: {
    display: "flex",
    // width: windowWidth * 0.75,
    aspectRatio: 1 / 1.1,
    height: windowHeight * 0.45,
    justifyContent: "space-between",
    // transform: [{ scale: 0.8 }],
    borderRadius: 10,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
  },
  imageStyle: {
    borderRadius: 8,
  },
  textName: {
    padding: 8,
    fontSize: 32,
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
  },
  textDistance: {
    color: Themes.light.textSecondary,
    fontSize: 18,
    padding: 5,
    fontFamily: "Sydney",
  },
  bottomBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // width: windowWidth * 0.75,
    aspectRatio: 2 / 1,
    height: windowHeight * 0.2,
    backgroundColor: Themes.light.bgSecondary,
    // margin: windowWidth,
    position: "relative",
    borderRadius: 20,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    marginTop: windowHeight * 0.03,
  },

  audioBox: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    // width: windowWidth * 0.75,
    aspectRatio: 4 / 1,
    height: windowHeight * 0.1,
    top: windowHeight * 0.1 * 0.05,
    marginLeft: windowWidth * 0.85 * 0.1,
  },
  play: {
    aspectRatio: 1 / 1,
    width: undefined,
    height: windowHeight * 0.1 * 0.5,
    margin: windowWidth * 0.75 * 0.01,

    // position: "relative",
    // right: windowWidth * 0.85 * 0.025,
    // padding: 5,
  },
  audio: {
    aspectRatio: 5 / 1,
    width: undefined,
    height: windowHeight * 0.1 * 0.5,

    // position: "relative",
    // left: windowWidth * 0.85 * 0.1,
    // right: windowWidth * 0.85 * 0.15,
  },
  text: {
    position: "absolute",
    left: windowWidth * 0.85 * 0.06,
    top: windowHeight * 0.15 * 0.1,
    color: Themes.light.text,
    fontSize: 20,
    fontFamily: "Sydney",
  },
});
export default Body;

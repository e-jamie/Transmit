import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Footeris = ({ style }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.footeris, style]}>
      <View style={styles.meniuPunktas1}>
        <View style={[styles.ikona, styles.ikonaFlexBox1]}>
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/dashboard-s1.png")}
          />
          <Image
            style={[styles.dashboardIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/dashboard1.png")}
          />
        </View>
        <Text style={[styles.dasboard, styles.dasboardTypo1]}>Dasboard</Text>
      </View>
      <View style={styles.meniuPunktas1}>
        <View style={styles.ikonaFlexBox1}>
          <Image
            style={[styles.functionsWIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/functions-w1.png")}
          />
          <Image
            style={[styles.functionsIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/functions1.png")}
          />
        </View>
        <Text style={[styles.functions, styles.dasboardTypo1]}>Functions</Text>
      </View>
      <TouchableHighlight
        style={styles.meniuPunktas1}
        underlayColor="#394690"
        onPress={() => navigation.navigate("IPhone14Pro2")}
      >
        <>
          <View style={styles.ikonaFlexBox1}>
            <Image
              style={styles.historyIconLayout1}
              contentFit="cover"
              source={require("../assets/history1.png")}
            />
            <Image
              style={[styles.historySIcon, styles.historyIconLayout1]}
              contentFit="cover"
              source={require("../assets/history-s1.png")}
            />
          </View>
          <Text style={[styles.functions, styles.dasboardTypo1]}>
            Analytics
          </Text>
        </>
      </TouchableHighlight>
      <View style={styles.meniuPunktas1}>
        <View style={styles.ikonaFlexBox1}>
          <Image
            style={[styles.profileSIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/profile-s.png")}
          />
          <Image
            style={[styles.functionsIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </View>
        <Text style={[styles.functions, styles.dasboardTypo1]}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ikonaFlexBox1: {
    justifyContent: "center",
    padding: Padding.p_5xs,
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 20,
    display: "none",
  },
  dasboardTypo1: {
    textAlign: "center",
    color: Color.darkslateblue,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
  },
  iconLayout2: {
    height: 19,
    width: 20,
  },
  historyIconLayout1: {
    width: 18,
    height: 20,
  },
  dashboardIcon: {
    marginLeft: 8,
    display: "none",
    width: 20,
    height: 20,
  },
  ikona: {
    backgroundColor: Color.darkslateblue,
    width: 40,
    height: 40,
  },
  dasboard: {
    fontWeight: "800",
    fontFamily: FontFamily.latoExtrabold,
  },
  meniuPunktas1: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  functionsWIcon: {
    width: 21,
    display: "none",
  },
  functionsIcon: {
    marginLeft: 8,
  },
  functions: {
    fontWeight: "700",
    fontFamily: FontFamily.solarAppHeading3,
    marginTop: -5,
  },
  historySIcon: {
    marginLeft: 8,
    display: "none",
  },
  profileSIcon: {
    display: "none",
  },
  footeris: {
    backgroundColor: Color.solarAppPapildoma1,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 393,
    height: 72,
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xl,
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Footeris;

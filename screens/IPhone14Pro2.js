import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone14Pro2 = () => {
  return (
    <View style={styles.iphone14Pro2}>
      <View style={[styles.electricityLentel, styles.electricityPosition]}>
        <View style={[styles.electricityLentel1, styles.electricityFlexBox]}>
          <Text
            style={[styles.monitorAndDecrease, styles.monitorAndDecreaseTypo]}
          >{`Monitor and decrease energy consumption
Turn off lights when not in use 
Manage air conditioning use`}</Text>
        </View>
        <View style={[styles.electricityLentel2, styles.electricityFlexBox]}>
          <Text
            style={[styles.monitorAndDecrease, styles.monitorAndDecreaseTypo]}
          >{`Switch to energy efficient appliances
Check the watt consumption of your refrigerator 
Refurbish old and exhaustive utilities`}</Text>
        </View>
      </View>
      <View style={[styles.pageHeaderis, styles.footerisFlexBox]}>
        <View style={[styles.kair, styles.electricityFlexBox]}>
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/icons2.png")}
          />
          <Text style={[styles.screenTitle, styles.textClr]}>Analytics</Text>
        </View>
        <View style={[styles.kair, styles.electricityFlexBox]}>
          <Image
            style={[styles.icons1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons3.png")}
          />
          <Image
            style={[styles.icons2, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons4.png")}
          />
        </View>
      </View>
      <View style={[styles.electricityLentel3, styles.electricityPosition]}>
        <View style={styles.amountGenerated}>
          <View style={[styles.kair, styles.electricityFlexBox]}>
            <Image
              style={styles.changeChild}
              contentFit="cover"
              source={require("../assets/polygon-22.png")}
            />
            <Text style={styles.wh14}> 2 131Wh (14%)</Text>
          </View>
        </View>
        <View style={styles.cathegories}>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.day, styles.dayTypo]}>Day</Text>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.day, styles.dayTypo]}>Week</Text>
          </View>
          <View style={[styles.button2, styles.button2Border]}>
            <Text style={[styles.month, styles.dayTypo]}>Month</Text>
          </View>
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.day, styles.dayTypo]}>All time</Text>
          </View>
        </View>
        <View style={styles.chart}>
          <View style={[styles.chartChild, styles.chartChildLayout1]} />
          <View style={[styles.chartItem, styles.chartChildBorder]} />
          <View style={[styles.chartInner, styles.chartChildBorder]} />
          <View style={[styles.lineView, styles.chartChildBorder]} />
          <View style={[styles.chartChild1, styles.chartChildBorder]} />
          <View style={[styles.chartChild2, styles.chartChildBorder]} />
          <View style={styles.chartChild3} />
          <View style={[styles.chartChild4, styles.chartChildLayout]} />
          <View style={[styles.chartChild5, styles.chartChildLayout]} />
          <View style={[styles.chartChild6, styles.chartChildLayout]} />
          <View style={[styles.chartChild7, styles.chartChildLayout]} />
          <View style={[styles.chartChild8, styles.chartChildLayout]} />
          <View style={[styles.chartChild9, styles.chartChildLayout]} />
          <Text style={[styles.apr, styles.aprTypo]}>Apr</Text>
          <Text style={[styles.may, styles.mayTypo]}>May</Text>
          <View style={[styles.junWrapper, styles.button2Border]}>
            <Text style={[styles.jun, styles.mayTypo]}>Jun</Text>
          </View>
          <Text style={[styles.mar, styles.aprTypo]}>Mar</Text>
          <Text style={[styles.feb, styles.aprTypo]}>{`Feb `}</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector-93.png")}
          />
          <Image
            style={[styles.chartChild10, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector-94.png")}
          />
        </View>
      </View>
      <Text style={[styles.assessmentRelativeIncrease, styles.dasboardTypo1]}>
        Assessment: Relative Increase in Energy Movement over the next month
      </Text>
      <View style={[styles.sectionTitle, styles.sectionFlexBox]}>
        <Text style={[styles.payment, styles.textClr]}>
          Energy Movement Prediction
        </Text>
        <View style={styles.addNewCard}>
          <Image
            style={[styles.icons1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons5.png")}
          />
          <Text style={[styles.addNewCard1, styles.dasboardTypo1]}>Edit</Text>
          <Image
            style={[styles.icons4, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons6.png")}
          />
        </View>
      </View>
      <View style={[styles.sectionTitle1, styles.sectionFlexBox]}>
        <Text style={[styles.payment, styles.textClr]}>Recommendations</Text>
        <View style={styles.addNewCard}>
          <Image
            style={[styles.icons1, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons5.png")}
          />
          <Text style={[styles.addNewCard1, styles.dasboardTypo1]}>Edit</Text>
        </View>
      </View>
      <View style={[styles.valandosBaterija, styles.footerisFlexBox]}>
        <Text style={[styles.text, styles.textClr]}>9:41</Text>
        <View style={styles.right}>
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.batteryIcon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  electricityPosition: {
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: 0,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_sm,
    left: "6.62%",
    right: "7.89%",
    width: "85.5%",
    alignItems: "center",
    position: "absolute",
  },
  electricityFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  monitorAndDecreaseTypo: {
    width: 286,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
  },
  footerisFlexBox: {
    justifyContent: "space-between",
    width: 393,
    flexDirection: "row",
  },
  textClr: {
    color: Color.gray,
    fontWeight: "700",
  },
  iconsLayout: {
    height: 24,
    width: 24,
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dayTypo: {
    fontFamily: FontFamily.exo2Bold,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.solarAppBodyHighlight_size,
  },
  button2Border: {
    borderBottomWidth: 2,
    borderColor: "#4057e3",
    borderStyle: "solid",
  },
  chartChildLayout1: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartChildBorder: {
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChildLayout: {
    height: 183,
    width: 1,
    borderRightWidth: 1,
    top: 0,
    borderColor: "rgba(169, 169, 169, 0.35)",
    position: "absolute",
  },
  aprTypo: {
    height: 28,
    display: "flex",
    top: 190,
    fontFamily: FontFamily.solarAppBodyHighlight,
    fontWeight: "900",
    lineHeight: 16,
    color: Color.solarAppPapildoma,
    textAlign: "left",
    fontSize: FontSize.solarAppBodyHighlight_size,
    alignItems: "center",
    position: "absolute",
  },
  mayTypo: {
    fontFamily: FontFamily.solarAppBodyHighlight,
    fontWeight: "900",
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.solarAppBodyHighlight_size,
  },
  vectorIconPosition: {
    left: 1,
    position: "absolute",
  },
  dasboardTypo1: {
    fontWeight: "700",
    fontFamily: FontFamily.solarAppHeading3,
  },
  sectionFlexBox: {
    width: 336,
    left: 26,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    width: 20,
  },
  dasboardTypo: {
    color: Color.darkslateblue,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    textAlign: "center",
  },
  ikonaFlexBox: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_11xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSpaceBlock: {
    marginLeft: 8.36,
    height: 13,
  },
  monitorAndDecrease: {
    lineHeight: 17,
    fontWeight: "500",
    fontFamily: FontFamily.latoMedium,
    color: Color.darkslategray,
  },
  electricityLentel1: {
    height: 78,
    width: 303,
    backgroundColor: Color.lightgray,
    justifyContent: "center",
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: 0,
    borderRadius: Border.br_sm,
  },
  electricityLentel2: {
    marginTop: 10,
    height: 78,
    width: 303,
    backgroundColor: Color.lightgray,
    justifyContent: "center",
    paddingVertical: Padding.p_5xl,
    paddingHorizontal: 0,
    borderRadius: Border.br_sm,
  },
  electricityLentel: {
    height: "21.4%",
    top: "74.59%",
    bottom: "4.01%",
    alignItems: "center",
  },
  screenTitle: {
    fontSize: FontSize.solarAppHeading5_size,
    marginLeft: 16,
    fontFamily: FontFamily.solarAppHeading3,
    lineHeight: 24,
    textAlign: "left",
    color: Color.gray,
  },
  kair: {
    flexDirection: "row",
  },
  icons1: {
    display: "none",
  },
  icons2: {
    marginLeft: 16,
  },
  pageHeaderis: {
    top: 40,
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_5xl,
    paddingBottom: 32,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  changeChild: {
    borderRadius: 2,
    height: 14,
    width: 20,
  },
  wh14: {
    fontSize: 20,
    lineHeight: 27,
    fontFamily: FontFamily.solarAppBodyRegural,
    color: Color.solarAppKlaidos,
    marginLeft: 1.66,
    textAlign: "center",
  },
  amountGenerated: {
    alignItems: "center",
  },
  day: {
    color: Color.solarAppPapildoma,
  },
  button: {
    borderRadius: Border.br_5xs,
  },
  month: {
    color: Color.mediumslateblue,
  },
  button2: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cathegories: {
    alignSelf: "stretch",
    paddingBottom: Padding.p_5xs,
    marginTop: 32,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  chartChild: {
    top: 182,
    borderStyle: "solid",
  },
  chartItem: {
    top: 150,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartInner: {
    top: 120,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  lineView: {
    top: 90,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartChild1: {
    top: 60,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartChild2: {
    top: 30,
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartChild3: {
    top: 0,
    borderRadius: 0.001,
    borderStyle: "dashed",
    height: 1,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    position: "absolute",
  },
  chartChild4: {
    left: 62,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChild5: {
    left: 124,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChild6: {
    left: 186,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChild7: {
    left: 249,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChild8: {
    left: 311,
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChild9: {
    borderStyle: "solid",
    left: 0,
  },
  apr: {
    left: 145,
    width: 23,
    height: 28,
    display: "flex",
    top: 190,
  },
  may: {
    top: 196,
    left: 206,
    color: Color.solarAppPapildoma,
    position: "absolute",
  },
  jun: {
    color: Color.mediumslateblue,
  },
  junWrapper: {
    top: 186,
    left: 260,
    padding: 10,
    position: "absolute",
  },
  mar: {
    left: 82,
    width: 23,
    height: 28,
    display: "flex",
    top: 190,
  },
  feb: {
    left: 22,
    height: 28,
    display: "flex",
    top: 190,
    width: 24,
  },
  vectorIcon: {
    top: 23,
    width: 311,
    height: 110,
  },
  chartChild10: {
    top: 24,
    width: 310,
    height: 157,
  },
  chart: {
    height: 222,
    width: 312,
    marginTop: 32,
  },
  electricityLentel3: {
    height: "50.31%",
    top: "16.56%",
    bottom: "33.13%",
    alignItems: "center",
  },
  assessmentRelativeIncrease: {
    top: 573,
    left: 47,
    color: "#9e9ea3",
    fontFamily: FontFamily.solarAppHeading3,
    lineHeight: 24,
    width: 286,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
    position: "absolute",
  },
  payment: {
    fontSize: FontSize.solarAppHeading3_size,
    lineHeight: 32,
    fontFamily: FontFamily.solarAppHeading3,
    textAlign: "left",
    color: Color.gray,
  },
  addNewCard1: {
    fontSize: FontSize.solarAppHeading6_size,
    textAlign: "right",
    marginLeft: 4,
    color: Color.mediumslateblue,
    display: "none",
    fontFamily: FontFamily.solarAppHeading3,
    lineHeight: 24,
  },
  icons4: {
    marginLeft: 4,
  },
  addNewCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    top: 112,
  },
  sectionTitle1: {
    top: 684,
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: FontFamily.robotoBold,
    width: 75,
    textAlign: "center",
  },
  mobileSignalIcon: {
    height: 12,
    width: 18,
  },
  wifiIcon: {
    width: 16,
  },
  batteryIcon: {
    width: 26,
  },
  right: {
    flexDirection: "row",
  },
  valandosBaterija: {
    top: -1,
    paddingHorizontal: 17,
    paddingTop: 17,
    left: 0,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.solarAppPapildoma1,
  },
  iphone14Pro2: {
    flex: 1,
    width: "100%",
    height: 972,
    backgroundColor: Color.solarAppPapildoma1,
  },
});

export default IPhone14Pro2;

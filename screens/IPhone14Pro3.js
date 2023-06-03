import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const IPhone14Pro3 = () => {
  return (
    <View style={styles.iphone14Pro3}>
      <View style={styles.meniuDropdown}>
        <View style={[styles.placeholderText, styles.cathegoriesFlexBox]}>
          <Text style={[styles.energyCommunitySummary, styles.textTypo1]}>
            Energy Community Summary
          </Text>
          <Image
            style={[styles.icons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons.png")}
          />
          <Image
            style={styles.iconsLayout}
            contentFit="cover"
            source={require("../assets/icons1.png")}
          />
        </View>
        <View style={styles.dropdownList}>
          <View style={[styles.item1, styles.itemLayout]}>
            <Text style={[styles.text, styles.textTypo1]}>Electrohive</Text>
          </View>
          <View style={[styles.item1, styles.itemLayout]}>
            <Text style={[styles.text, styles.textTypo1]}>
              Solar generation Puziniskis
            </Text>
          </View>
          <View style={[styles.item1, styles.itemLayout]}>
            <Text style={[styles.text, styles.textTypo1]}>
              Dreverna high park II
            </Text>
          </View>
          <View style={styles.itemLayout}>
            <Text
              style={[styles.text, styles.textTypo1]}
            >{`Rytas solar park `}</Text>
          </View>
        </View>
        <View style={styles.electricityLentel}>
          <View style={styles.amountGenerated}>
            <Text style={styles.whGeneratedToday}>Wh generated today</Text>
            <Text style={styles.text4}>11, 762</Text>
            <View style={[styles.change, styles.changeFlexBox]}>
              <Image
                style={styles.changeChild}
                contentFit="cover"
                source={require("../assets/polygon-2.png")}
              />
              <Text style={[styles.wh539, styles.wh539Typo]}>
                67 Wh (5,39%)
              </Text>
            </View>
          </View>
          <View style={styles.lentel}>
            <Image
              style={[styles.lentelChild, styles.lentelLayout]}
              contentFit="cover"
              source={require("../assets/vector-26.png")}
            />
            <Image
              style={[styles.lentelItem, styles.lentelLayout]}
              contentFit="cover"
              source={require("../assets/vector-33.png")}
            />
            <Image
              style={[styles.lentelInner, styles.lentelLayout]}
              contentFit="cover"
              source={require("../assets/vector-27.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.lentelLayout]}
              contentFit="cover"
              source={require("../assets/vector-27.png")}
            />
            <Image
              style={[styles.lentelChild1, styles.lentelChildLayout2]}
              contentFit="cover"
              source={require("../assets/vector-29.png")}
            />
            <Image
              style={[styles.lentelChild2, styles.lentelChildLayout2]}
              contentFit="cover"
              source={require("../assets/vector-29.png")}
            />
            <Image
              style={[styles.lentelChild3, styles.lentelChildLayout2]}
              contentFit="cover"
              source={require("../assets/vector-29.png")}
            />
            <Text style={[styles.text5, styles.textFlexBox]}>250</Text>
            <Text style={[styles.text6, styles.textFlexBox]}>500</Text>
            <Text style={[styles.text7, styles.textTypo]}>8:00</Text>
            <Text style={[styles.text8, styles.textTypo]}>12:00</Text>
            <Text style={[styles.text9, styles.textTypo]}>17:00</Text>
            <Image
              style={[styles.lentelChild4, styles.lentelChildLayout1]}
              contentFit="cover"
              source={require("../assets/vector-25.png")}
            />
            <Image
              style={[styles.lentelChild5, styles.lentelChildLayout]}
              contentFit="cover"
              source={require("../assets/vector-32.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.meniuPunktas4, styles.meniuFlexBox]}>
        <View style={[styles.ikona, styles.changeFlexBox]}>
          <Image
            style={styles.profileIconLayout}
            contentFit="cover"
            source={require("../assets/profile-s1.png")}
          />
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile1.png")}
          />
        </View>
      </View>
      <View style={[styles.sectionTitle, styles.cathegoriesFlexBox]}>
        <Text style={[styles.payment, styles.textTypo1]}>Ahoj!</Text>
      </View>
      <View style={[styles.electricityLentel1, styles.electricityPosition]}>
        <View style={styles.amountGenerated}>
          <Text style={styles.whGeneratedToday}>Wh consumed today</Text>
          <Text style={styles.text4}>10, 453</Text>
          <View style={[styles.change1, styles.changeFlexBox]}>
            <Image
              style={styles.changeChild}
              contentFit="cover"
              source={require("../assets/polygon-3.png")}
            />
            <Text style={[styles.wh3692, styles.wh539Typo]}>
              132Wh (36,92%)
            </Text>
          </View>
        </View>
        <View style={styles.lentel}>
          <Image
            style={[styles.lentelChild, styles.lentelLayout]}
            contentFit="cover"
            source={require("../assets/vector-26.png")}
          />
          <Image
            style={[styles.lentelItem, styles.lentelLayout]}
            contentFit="cover"
            source={require("../assets/vector-33.png")}
          />
          <Image
            style={[styles.lentelInner, styles.lentelLayout]}
            contentFit="cover"
            source={require("../assets/vector-27.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.lentelLayout]}
            contentFit="cover"
            source={require("../assets/vector-27.png")}
          />
          <Image
            style={[styles.lentelChild1, styles.lentelChildLayout2]}
            contentFit="cover"
            source={require("../assets/vector-29.png")}
          />
          <Image
            style={[styles.lentelChild2, styles.lentelChildLayout2]}
            contentFit="cover"
            source={require("../assets/vector-29.png")}
          />
          <Image
            style={[styles.lentelChild3, styles.lentelChildLayout2]}
            contentFit="cover"
            source={require("../assets/vector-29.png")}
          />
          <Text style={[styles.text11, styles.textFlexBox]}>25</Text>
          <Text style={[styles.text6, styles.textFlexBox]}>50</Text>
          <Text style={[styles.text7, styles.textTypo]}>8:00</Text>
          <Text style={[styles.text8, styles.textTypo]}>12:00</Text>
          <Text style={[styles.text9, styles.textTypo]}>17:00</Text>
          <Image
            style={[styles.lentelChild13, styles.lentelChildLayout1]}
            contentFit="cover"
            source={require("../assets/vector-251.png")}
          />
          <Image
            style={[styles.lentelChild14, styles.lentelChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-321.png")}
          />
        </View>
      </View>
      <View style={[styles.electricityLentel2, styles.electricityPosition]}>
        <View style={styles.amountGenerated2}>
          <Text style={styles.whGeneratedToday}>Wh generated</Text>
          <Text style={styles.energyOverview}>Energy Overview</Text>
          <View style={[styles.change1, styles.changeFlexBox]}>
            <Image
              style={styles.changeChild}
              contentFit="cover"
              source={require("../assets/polygon-21.png")}
            />
            <Text style={[styles.wh3692, styles.wh539Typo]}>2 131Wh (14%)</Text>
          </View>
        </View>
        <View style={styles.cathegoriesParent}>
          <View style={[styles.cathegories, styles.cathegoriesFlexBox]}>
            <View style={styles.button}>
              <Text style={styles.day}>Day</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.day}>Week</Text>
            </View>
            <View style={styles.button2}>
              <Text style={styles.month}>Month</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.day}>All time</Text>
            </View>
          </View>
          <View style={styles.chartWrapper}>
            <View style={styles.chart}>
              <View style={[styles.chartChild, styles.chartChildPosition1]} />
              <View style={[styles.chartItem, styles.chartChildBorder]} />
              <View style={[styles.chartInner, styles.chartChildBorder]} />
              <View style={[styles.lineView, styles.chartChildBorder]} />
              <View style={[styles.chartChild1, styles.chartChildBorder]} />
              <View style={[styles.chartChild2, styles.chartChildBorder]} />
              <View style={[styles.chartChild3, styles.chartChildBorder]} />
              <View style={[styles.chartChild4, styles.chartChildLayout]} />
              <View style={[styles.chartChild5, styles.chartChildLayout]} />
              <View style={[styles.chartChild6, styles.chartChildLayout]} />
              <View style={[styles.chartChild7, styles.chartChildLayout]} />
              <View style={[styles.chartChild8, styles.chartChildLayout]} />
              <View style={[styles.chartChild9, styles.chartChildLayout]} />
              <Text style={[styles.apr, styles.aprTypo]}>Apr</Text>
              <View style={styles.may}>
                <Text style={styles.may1}>May</Text>
              </View>
              <Text style={[styles.jun, styles.aprTypo]}>Jun</Text>
              <Text style={[styles.mar, styles.aprTypo]}>Mar</Text>
              <Text style={[styles.feb, styles.aprTypo]}>{`Feb `}</Text>
              <View style={styles.rectangleView} />
              <Image
                style={[styles.chartChild10, styles.chartChildPosition]}
                contentFit="cover"
                source={require("../assets/vector-921.png")}
              />
              <Image
                style={[styles.chartChild11, styles.chartChildPosition]}
                contentFit="cover"
                source={require("../assets/vector-951.png")}
              />
              <View style={styles.chartChild12} />
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-7.png")}
              />
              <Image
                style={styles.chartChild13}
                contentFit="cover"
                source={require("../assets/ellipse-8.png")}
              />
              <Text style={styles.text16}>649,8</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.valandosBaterija, styles.footerisFlexBox]}>
        <Text style={styles.text17}>9:41</Text>
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
  cathegoriesFlexBox: {
    justifyContent: "space-between",
    width: 336,
    flexDirection: "row",
  },
  textTypo1: {
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.solarAppHeading3,
    fontWeight: "700",
  },
  iconsLayout: {
    height: 24,
    width: 24,
  },
  itemLayout: {
    height: 44,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.solarAppPapildoma1,
  },
  changeFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
  },
  wh539Typo: {
    marginLeft: 1,
    textAlign: "center",
    fontFamily: FontFamily.solarAppBodyRegural,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
  },
  lentelLayout: {
    height: 1,
    width: 300,
    position: "absolute",
  },
  lentelChildLayout2: {
    height: 175,
    width: 1,
    top: 1,
    position: "absolute",
  },
  textFlexBox: {
    height: 14,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: Color.solarAppPapildoma,
    fontFamily: FontFamily.solarAppBodyRegural,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
    justifyContent: "center",
    position: "absolute",
  },
  textTypo: {
    top: 8,
    height: 14,
    display: "flex",
    alignItems: "flex-end",
    color: Color.solarAppPapildoma,
    fontFamily: FontFamily.solarAppBodyRegural,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
    position: "absolute",
  },
  lentelChildLayout1: {
    width: 263,
    borderRadius: Border.br_11xs,
    left: 0,
    position: "absolute",
  },
  lentelChildLayout: {
    width: 262,
    borderRadius: Border.br_11xs,
    left: 0,
    position: "absolute",
  },
  meniuFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileIconLayout: {
    height: 37,
    width: 39,
  },
  electricityPosition: {
    left: "6.62%",
    right: "7.89%",
    width: "85.5%",
    paddingHorizontal: 0,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_sm,
    alignItems: "center",
    position: "absolute",
  },
  chartChildPosition1: {
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
  },
  chartChildBorder: {
    borderRadius: 0.001,
    borderStyle: "dashed",
  },
  chartChildLayout: {
    height: 183,
    borderRightWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 1,
    top: 0,
    position: "absolute",
  },
  aprTypo: {
    height: 28,
    top: 190,
    fontFamily: FontFamily.solarAppBodyHighlight,
    fontWeight: "900",
    display: "flex",
    color: Color.solarAppPapildoma,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
    alignItems: "center",
    position: "absolute",
  },
  chartChildPosition: {
    width: 310,
    left: 1,
    position: "absolute",
  },
  footerisFlexBox: {
    width: 393,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Color.solarAppPapildoma1,
  },
  iconSpaceBlock: {
    marginLeft: 8.36,
    height: 13,
  },
  ikonaFlexBox: {
    borderRadius: Border.br_11xl,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dasboardTypo: {
    color: Color.darkslateblue,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    lineHeight: 16,
  },
  iconLayout: {
    height: 19,
    width: 20,
  },
  energyCommunitySummary: {
    lineHeight: 24,
    fontSize: FontSize.solarAppHeading6_size,
    textAlign: "left",
  },
  icons: {
    display: "none",
  },
  placeholderText: {
    alignItems: "center",
  },
  text: {
    top: 10,
    left: 16,
    lineHeight: 24,
    fontSize: FontSize.solarAppHeading6_size,
    textAlign: "left",
    position: "absolute",
  },
  item1: {
    borderColor: "rgba(169, 169, 169, 0.2)",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  dropdownList: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 14,
    elevation: 14,
    width: 200,
    marginTop: 16,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    display: "none",
    alignItems: "center",
  },
  whGeneratedToday: {
    textAlign: "center",
    color: Color.solarAppPapildoma,
    fontFamily: FontFamily.solarAppBodyRegural,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
  },
  text4: {
    lineHeight: 56,
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    color: Color.gray,
    fontFamily: FontFamily.solarAppHeading3,
    fontWeight: "700",
  },
  changeChild: {
    borderRadius: Border.br_12xs,
    height: 12,
    width: 16,
  },
  wh539: {
    color: Color.solarAppSkms,
  },
  change: {
    alignItems: "flex-end",
  },
  amountGenerated: {
    alignItems: "center",
  },
  lentelChild: {
    top: 106,
    left: 4,
  },
  lentelItem: {
    left: 0,
    top: 38,
  },
  lentelInner: {
    top: 0,
    left: 0,
  },
  vectorIcon: {
    top: 176,
    left: 0,
  },
  lentelChild1: {
    left: 52,
  },
  lentelChild2: {
    left: 157,
  },
  lentelChild3: {
    left: 262,
  },
  text5: {
    top: 114,
    left: 272,
    width: 23,
  },
  text6: {
    top: 46,
    left: 273,
    width: 21,
  },
  text7: {
    left: 20,
    width: 24,
  },
  text8: {
    left: 117,
    width: 32,
  },
  text9: {
    left: 223,
    width: 31,
  },
  lentelChild4: {
    top: 16,
    height: 128,
  },
  lentelChild5: {
    top: 18,
    height: 161,
  },
  lentel: {
    width: 304,
    height: 176,
    marginTop: 32,
  },
  electricityLentel: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_sm,
    marginTop: 16,
    alignItems: "center",
    width: 336,
  },
  meniuDropdown: {
    top: 748,
    left: 26,
    position: "absolute",
  },
  profileIcon: {
    marginLeft: 15.4,
    display: "none",
  },
  ikona: {
    borderRadius: 58,
    width: 77,
    height: 77,
    padding: 15,
    backgroundColor: Color.darkslateblue,
    alignItems: "center",
  },
  meniuPunktas4: {
    top: 54,
    left: 155,
    position: "absolute",
  },
  payment: {
    fontSize: FontSize.solarAppHeading3_size,
    lineHeight: 32,
  },
  sectionTitle: {
    top: 135,
    left: 29,
    alignItems: "center",
    position: "absolute",
  },
  wh3692: {
    color: Color.solarAppKlaidos,
  },
  change1: {
    alignItems: "center",
  },
  text11: {
    top: 113,
    left: 277,
    width: 14,
  },
  lentelChild13: {
    top: 58,
    height: 105,
  },
  lentelChild14: {
    height: 116,
    top: 60,
  },
  electricityLentel1: {
    height: "21.69%",
    top: "74.87%",
    bottom: "3.44%",
    paddingVertical: Padding.p_base,
  },
  energyOverview: {
    width: 303,
    display: "flex",
    lineHeight: 56,
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    justifyContent: "center",
    color: Color.gray,
    fontFamily: FontFamily.solarAppHeading3,
    fontWeight: "700",
    alignItems: "center",
  },
  amountGenerated2: {
    width: 306,
    alignItems: "center",
  },
  day: {
    fontFamily: FontFamily.exo2Bold,
    color: Color.solarAppPapildoma,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 24,
  },
  button: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  month: {
    color: Color.mediumslateblue,
    fontFamily: FontFamily.exo2Bold,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 24,
  },
  button2: {
    borderBottomWidth: 2,
    borderColor: "#4057e3",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cathegories: {
    paddingBottom: Padding.p_5xs,
  },
  chartChild: {
    top: 182,
    borderStyle: "solid",
  },
  chartItem: {
    top: 150,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
  },
  chartInner: {
    top: 120,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
  },
  lineView: {
    top: 90,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
  },
  chartChild1: {
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
    top: 60,
  },
  chartChild2: {
    top: 30,
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
  },
  chartChild3: {
    borderTopWidth: 1,
    borderColor: "rgba(169, 169, 169, 0.35)",
    width: 312,
    left: 0,
    height: 1,
    position: "absolute",
    top: 0,
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
    left: 0,
    borderStyle: "solid",
  },
  apr: {
    left: 145,
    width: 23,
  },
  may1: {
    fontFamily: FontFamily.solarAppBodyHighlight,
    fontWeight: "900",
    color: Color.mediumslateblue,
    lineHeight: 16,
    fontSize: FontSize.solarAppBodyHighlight_size,
    textAlign: "left",
  },
  may: {
    top: 188,
    left: 198,
    padding: Padding.p_5xs,
    borderBottomWidth: 2,
    borderColor: "#4057e3",
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
  },
  jun: {
    left: 270,
    width: 21,
  },
  mar: {
    left: 82,
    width: 23,
  },
  feb: {
    left: 22,
    width: 24,
  },
  rectangleView: {
    left: 182,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.mediumslateblue,
    shadowColor: "rgba(255, 255, 255, 0.15)",
    shadowRadius: 15,
    elevation: 15,
    width: 41,
    height: 25,
    top: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  chartChild10: {
    top: 37,
    height: 126,
  },
  chartChild11: {
    height: 143,
    top: 38,
  },
  chartChild12: {
    top: 43,
    left: 205,
    width: 0,
    height: 138,
    position: "absolute",
  },
  ellipseIcon: {
    top: 31,
    left: 199,
    width: 13,
    height: 13,
    position: "absolute",
  },
  chartChild13: {
    top: 32,
    left: 200,
    width: 11,
    height: 11,
    position: "absolute",
  },
  text16: {
    top: 6,
    left: 190,
    color: Color.solarAppPapildoma1,
    height: 15,
    width: 26,
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.solarAppHeading3,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  chart: {
    height: 220,
    width: 312,
  },
  chartWrapper: {
    marginTop: 32,
  },
  cathegoriesParent: {
    marginTop: 32,
    alignItems: "center",
  },
  electricityLentel2: {
    height: "34.66%",
    top: "12.76%",
    bottom: "52.58%",
    paddingVertical: Padding.p_5xl,
  },
  text17: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: FontFamily.robotoBold,
    width: 75,
    textAlign: "center",
    color: Color.gray,
    fontWeight: "700",
  },
  mobileSignalIcon: {
    width: 18,
    height: 12,
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
  },
  iphone14Pro3: {
    flex: 1,
    width: "100%",
    height: 1512,
    backgroundColor: Color.solarAppPapildoma1,
  },
});

export default IPhone14Pro3;

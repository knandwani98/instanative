import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        style={style.logo}
        source={require("../../assets/images/png/logo.png")}
        resizeMode="cover"
      />

      <Text style={style.logoText}>InstaNative</Text>

      <Image
        style={style.illustration}
        source={require("../../assets/images/screens/auth.png")}
        resizeMode="cover"
      />

      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: "white",
          paddingInline: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 32,
          paddingBlock: 12,
          borderRadius: 8,
        }}
        onPress={() => alert("Logged In")}
      >
        <Ionicons name="logo-google" size={18} color={"gray"} />
        <Text
          style={{
            color: "gray",
            fontSize: 16,
            fontWeight: 500,
            marginLeft: 20,
          }}
        >
          Continue with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 700,
    color: "white",
    marginBottom: 20,
  },
  illustration: { width: 240, height: 240 },
});

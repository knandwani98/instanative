import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "yellow",
        tabBarStyle: {
          elevation: 0,
          height: 48,
          backgroundColor: "black",
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Saved"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="bookmark" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="add-circle-sharp" size={size} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="heart" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="person-circle" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}

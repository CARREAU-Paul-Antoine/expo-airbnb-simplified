import React from "react";
import { View } from "react-native";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function ExoZustandScreen() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <AddTask />
      <TaskList />
    </View>
  );
}



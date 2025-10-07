import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useTaskStore } from "../store/useTaskStore";

export default function AddTask() {
  const [taskLabel, setTaskLabel] = useState("");
  const addTask = useTaskStore((s) => s.addTask);

  const handleAdd = () => {
    const label = taskLabel.trim();
    if (!label) return;
    addTask({ id: Date.now().toString(), label, done: false });
    setTaskLabel("");
  };

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      <TextInput
        value={taskLabel}
        onChangeText={setTaskLabel}
        placeholder="Nouvelle tâche"
        style={{ flex: 1, borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 6 }}
        returnKeyType="done"
        onSubmitEditing={handleAdd}
      />
      <Button title="Ajouter" onPress={handleAdd} />
    </View>
  );
}



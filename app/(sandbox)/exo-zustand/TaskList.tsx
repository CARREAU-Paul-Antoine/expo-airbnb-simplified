import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useTaskStore } from "../store/useTaskStore";

export default function TaskList() {
  const tasks = useTaskStore((s) => s.tasks);
  const toggleTask = useTaskStore((s) => s.toggleTask);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => toggleTask(item.id)}
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: item.done ? "#34c759" : "#ccc",
            borderRadius: 8,
            backgroundColor: item.done ? "#eaffea" : "#fff",
          }}
        >
          <Text style={{ fontSize: 16 }}>{item.done ? "✅ " : "⬜️ "}{item.label}</Text>
        </Pressable>
      )}
      ListEmptyComponent={() => (
        <View style={{ padding: 16 }}>
          <Text>Aucune tâche. Ajoutez-en une ci-dessus.</Text>
        </View>
      )}
      contentContainerStyle={{ paddingVertical: tasks.length ? 8 : 0 }}
    />
  );
}



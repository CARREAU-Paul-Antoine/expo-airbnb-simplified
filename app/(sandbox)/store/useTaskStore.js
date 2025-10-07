import { create } from "zustand";

export const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({
        tasks: [ ... state.tasks, task],
    }) ),
    toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map(t =>
            t.id === id ? { ... t, done: !t.done } : t

        ) ,
    })),
}) );
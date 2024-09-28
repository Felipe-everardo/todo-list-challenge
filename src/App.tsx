import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean
}

export function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);


  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: taskTitle,
        isCompleted: false
      }])
  }

  function deleteTaskById(taskId: number) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask)
  }

  function toggleTaskCompletedById(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted
        };
      }
      return task
    });
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

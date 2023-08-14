"use client"
import Formulary from "@/components/Formulary"
import List from "@/components/List"
import Stopwatch from "@/components/Stopwatch"
import { ITasks } from "@/types/task"
import { useState } from "react"

export default function Home() {

  const [tasks, setTasks] = useState<ITasks[]>([])

  const [selectioned, setSelectioned] = useState<ITasks>()

  function selectTask(taskSelectioned: ITasks) {
    setSelectioned(taskSelectioned)

    setTasks(oldTasks => oldTasks.map(task => ({ ...task, selectioned: task.id === taskSelectioned.id ? true : false })))
  }

  function doneTask() {
    if (selectioned) {
      setSelectioned(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selectioned.id) {
          return {
            ...task,
            selectioned: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <main className="bg-white text-black min-h-screen flex flex-col justify-center items-center gap-4 ">
      <Formulary setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selectioned={selectioned} doneTask={doneTask} />
    </main>
  )
}

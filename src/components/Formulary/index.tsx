import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { ITasks } from "@/types/task";
import { v4 as uuidv4} from "uuid";

interface FormularyProps {
    setTasks: Dispatch<SetStateAction<ITasks[]>>
}

export default function Formulary({ setTasks }: FormularyProps) {

    const [tasks, setTaskInternal] = useState("");

    const [time, setTime] = useState("00:00:00");

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();       

        const newTask: ITasks = {
            task: tasks,
            time,
            selectioned: false,
            completed: false,
            id: uuidv4()    
        };

        setTasks((oldTasks) => [...oldTasks, newTask]);
        
        setTaskInternal("");
        setTime("00:00:00");

    }

    return (
        <>
            <form onSubmit={addTask}>
                <div>
                    <label htmlFor="task">Add a new class</label>
                    <input type="text" value={tasks} onChange={(e) => { setTaskInternal(e.target.value) }} name="task" id="task" placeholder="What you wanna study ?" required />
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input type="time" step="1" value={time} onChange={(e) => { setTime(e.target.value) }} name="time" id="time" min="00:00:00" max="01:30:00" required />
                </div>
                <Button type="submit">Adicionar</Button>
            </form>
        </>
    )
}
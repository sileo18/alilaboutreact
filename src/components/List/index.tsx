import React, { useState } from "react";
import Item from "./Item";
import { ITasks } from "@/types/task";

interface Props {
    tasks: ITasks[],
    selectTask: (taskSelectioned: ITasks) => void
}

export default function List({tasks, selectTask}: Props) {

    return (
        <aside>
            <h2>Classes today</h2>
            <ul>
                {tasks.map((item) => (
                    <Item {...item} key={item.id} selectTask={selectTask}  />
                ))}
            </ul>
        </aside>
    )
}
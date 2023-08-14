import { ITasks } from "@/types/task";

interface Props extends ITasks {

    selectTask: (taskSelectioned: ITasks) => void
}

export default function Item({ task, time, selectioned, completed, id, selectTask }: Props) {



    return (
        <li className={selectioned == true ? 'bg-green-500' : 'cursor-pointer'} className={completed == true ? 'bg-slate-500' : ''}
            onClick={() => !completed && selectTask({
                task,
                time,
                selectioned,
                completed,
                id
            })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && <span aria-label="Task done">Completado</span>}
        </li>
    )
}
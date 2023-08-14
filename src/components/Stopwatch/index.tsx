import { ITasks } from "@/types/task";
import Button from "../Button";
import Clock from "./Clock";
import Date from "@/common/utils/date"
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

interface Props {
    selectioned: ITasks | undefined,
    doneTask: () => void

}

export default function Stopwatch({ selectioned, doneTask }: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {

        if (selectioned?.time) {
            setTime(Date(selectioned?.time))
        }
    }, [selectioned])

    function Regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTime(contador - 1)
                return Regressiva(contador - 1)
            }
            doneTask()
        }, 1000)
    }

    return (    
        <div>
            <p>Choose a card and start the Stopwatch</p>
            <div>
                <Clock time={time} />
            </div>
            <Button onClick={() => Regressiva(time)} type="submit">
                Start
            </Button>
        </div>
    )
}
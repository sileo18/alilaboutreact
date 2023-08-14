interface Props {
    time: number | undefined,
}

export default function Clock({ time = 0 }: Props) {

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteDezena, minuteUnity] = String(minutes).padStart(2, '0')

    const [secondsDezena, secondsUnity] = String(seconds).padStart(2, '0')


    return (
        <>
            <span>{minuteDezena}</span>
            <span>{minuteUnity}</span>
            <span>:</span>
            <span>{secondsDezena}</span>
            <span>{secondsUnity}</span>
            {/* <span>:</span>
            <span>0</span>
            <span>0</span> */}
        </>

    )
}
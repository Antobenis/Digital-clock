import React from 'react';
const Clock = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = React.useState(time)

    console.log(time);
    const autoTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(
        autoTime, 1000
    );
    return (
        <>
            <div className='clock'>
                {currentTime}
            </div>
        </>
    )
}
export default Clock;
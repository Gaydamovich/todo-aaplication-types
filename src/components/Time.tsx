import React, { useState } from 'react';
import { setTimeForClock } from '../utils/helpers';

interface IOptionsTime {
  hours: any,
  minutes: any,
  seconds: any,
}

export const Time = React.memo(() => {

  const timeOptions: IOptionsTime = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  };

  const [time, setTime] = useState<IOptionsTime>(timeOptions);

  setTimeForClock(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    setTime({
      hours: hours < 10 ? '0' + hours : hours,
      minutes: minutes < 10 ? '0' + minutes : minutes,
      seconds: seconds < 10 ? '0' + seconds : seconds,
    })
  });
  return (
    <div className="container wrapper-time">
      {time.hours} : {time.minutes} : {time.seconds}
    </div>
  )
});
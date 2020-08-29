import React, { useEffect, useRef, useState } from 'react';
import './style.css'

const Countdown = () => {
	const[days, setDays] = useState('00')
	const[hours, setHours] = useState('00')
	const[minutes, setMinutes] = useState('00')
	const[seconds, setSeconds] = useState('00')

	let interval = useRef();

	const Timer = () =>{
		const countDownFrom = new Date('October  2, 2020 00:00:00').getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countDownFrom - now;

			const timerDays = Math.floor(distance / (1000 * 60 * 60 * 24));
			const timerHours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
			const timerMinutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
			const timerSeconds = Math.floor((distance % (1000 * 60 )) / 1000);

			if (distance < 0 ) {
				clearInterval(interval.current);
			} else {
				setDays(timerDays);
				setHours(timerHours);
				setMinutes(timerMinutes);
				setSeconds(timerSeconds);
			}
		}, 1000)
	}; 

	useEffect(() => {
		Timer();
		return clearInterval(interval.current);
		
	})
    return (
        <div class = 'timer_contener'>
        <div className='time'>
        <span>{days}</span>
        <span>Days</span>
        </div>
        <div className='time'>
        <span>{hours}</span>
        <span>Hours</span>
        </div>
        <div className='time'>
        <span>{minutes}</span>
        <span>Minutes</span>
        </div>
        <div className='time'>
        <span>{seconds}</span>
        <span>Seconds</span>
        </div>

        </div>
    );
};



export default Countdown;

import { useEffect, useState } from 'react';

export default function ClockPage() {
  const [time, setTime] = useState(new Date());
  useEffect({}, []);
  const hours = time.getHours;
  const minutes = time.getMinutes;
  const seconds = time.getSeconds;

  return (
    <div>
      <p>
        {hours}
        {minutes}
        {seconds}
      </p>
    </div>
  );
}

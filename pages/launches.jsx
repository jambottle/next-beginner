import { useEffect, useState } from 'react';

export default function Launches() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchLaunches = async () => {
      const res = await fetch('https://api.spacexdata.com/v3/launches');
      const data = await res.json();

      setData(data);
    };

    fetchLaunches();
  }, []);

  return data ? (
    <ol>
      {data.map((launch, index) => (
        <li key={index}>{launch.mission_name}</li>
      ))}
    </ol>
  ) : null;
}

export default function Launches({ data }) {
  return data ? (
    <ol>
      {data.map((launch, index) => (
        <li key={index}>{launch.mission_name}</li>
      ))}
    </ol>
  ) : null;
}

export async function getServerSideProps() {
  const res = await fetch('https://api.spacexdata.com/v3/launches');
  const data = await res.json();

  return {
    props: { data },
  };
}

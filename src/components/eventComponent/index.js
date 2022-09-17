export default function EventComponent({ event }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div>{event.start?.getHours()}</div>
      <div>{event.name}</div>
    </div>
  );
}

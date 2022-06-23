export default function CounterButton(params) {
  return (
    <button className={params.cusClass} onClick={params.onClick}>
      {params.text}{" "}
    </button>
  );
}

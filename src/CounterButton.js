export default function CounterButton(params) {
  return (
    <button
      type={params.type}
      className={params.cusClass}
      onClick={params.onClick}
    >
      {params.text}{" "}
    </button>
  );
}

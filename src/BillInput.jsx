export default function BillInput({ inputBill, onSetInputBill, children }) {
  function handleInput(event) {
    const value = event.target.value;
    if (!isNaN(value)) {
      onSetInputBill(+event.target.value);
    }
    if (!value) {
      onSetInputBill("");
    }
  }

  return (
    <div>
      <p>{children}</p>
      <input
        type="text"
        placeholder="Bill value"
        value={inputBill}
        onChange={handleInput}
      />
    </div>
  );
}

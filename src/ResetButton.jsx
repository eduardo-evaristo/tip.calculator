export default function ResetButton({
  onSetInputBill,
  onSetSelectedValueService,
  onSetSelectedValueFriend,
  children,
}) {
  function handleReset() {
    onSetInputBill("");
    onSetSelectedValueService(0);
    onSetSelectedValueFriend(0);
  }
  return <button onClick={handleReset}>{children}</button>;
}

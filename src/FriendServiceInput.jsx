export default function FriendServiceInput({
  selectedValue,
  onSetSelectedValue,
  values,
  children,
}) {
  function handleChange(event) {
    onSetSelectedValue(+event.target.value);
  }
  return (
    <div>
      <p>{children}</p>
      <select value={selectedValue} onChange={handleChange}>
        {values.map((item) => (
          <option value={item.value} key={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}

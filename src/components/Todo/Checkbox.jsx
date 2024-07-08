export default function Checkbox({ isChecked, toggle }) {
  return (
    <input type="checkbox" checked={isChecked ? 1 : 0} onChange={toggle} />
  );
}

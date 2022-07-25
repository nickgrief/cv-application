export default function InputField({ label, type, id }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={label} id={id} />
    </div>
  );
}

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
}

export default function Input({
  placeholder = "",
  value = "",
  onChange = () => {},
}: InputProps) {
  return (
    <input
      className="py-1 px-2 border border-gray-300 rounded"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

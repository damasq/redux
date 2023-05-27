type Props = {
  name: string;
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
};

export const Input = (props: Props) => {
  const { name, labelText, value, onChange } = props;

  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

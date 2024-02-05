const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className,
  ...rest
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;

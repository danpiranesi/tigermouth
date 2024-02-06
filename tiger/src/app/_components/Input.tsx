import { FieldValues, UseFormRegister } from "react-hook-form";

const Input = ({
  type = "text",
  placeholder,

  error,
  className,
  register,
  inputId,
  isRequired = true,
  disabled,
}: {
  type?: string;
  placeholder: string;
  error: any;
  className: string;
  register: UseFormRegister<FieldValues>;
  inputId: string;
  isRequired?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(inputId, { required: isRequired })}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;

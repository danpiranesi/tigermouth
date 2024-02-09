import { FieldValues, UseFormRegister } from "react-hook-form";

const Input = ({
  type = "text",
  placeholder,

  error,
  className,
  containerClassName,
  register,
  inputId,
  isRequired = true,
  disabled,
}: {
  type?: string;
  placeholder: string;
  error: any;
  className?: string;
  containerClassName?: string;
  register: UseFormRegister<FieldValues>;
  inputId: string;
  isRequired?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className={containerClassName}>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        {...register(inputId, { required: isRequired })}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;

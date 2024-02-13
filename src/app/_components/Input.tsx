import { FieldValues, UseFormRegister } from "react-hook-form";
import Text from "./Text";

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
      {/* {error && <Text className="">{error}</Text>} */}
    </div>
  );
};

export default Input;

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  rows?: number;
}

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  className = "",
  value,
  onChange,
  options,
  rows = 4,
}: InputProps) {
  const baseInputStyles = "w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200";

  if (type === "textarea") {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium text-secondary mb-2">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          className={baseInputStyles}
        />
      </div>
    );
  }

  if (type === "select" && options) {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium text-secondary mb-2">
          {label} {required && <span className="text-primary">*</span>}
        </label>
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseInputStyles}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-secondary mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={baseInputStyles}
      />
    </div>
  );
}

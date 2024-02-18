import "./style.css";

type InputProps = {
	extraClassName?: string;
	disabled?: boolean;
	id: string;
	name: string;
	type: string;
	labelText: string;
	placeHolder?: string;
	value: string;
	onChange: (arg) => void;
};

const Input = ({ extraClassName, disabled, id, name, type, labelText, placeHolder = "", value, onChange }: InputProps) => {
	return (
		<>
			<label className={`label${disabled ? " label--disabled" : ""}`} htmlFor={id}>
				{labelText}
			</label>
			<input className={`input${extraClassName ? ` ${extraClassName}` : ""}`} disabled={disabled} type={type} name={name} id={id} value={value} placeholder={placeHolder} onChange={onChange} />
		</>
	);
};

export default Input;

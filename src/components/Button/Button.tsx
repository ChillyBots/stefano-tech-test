import "./style.css";

type ButtonProps = {
	extraClassName?: string;
	disabled: boolean;
	type: "submit" | "reset" | "button";
	children: string | JSX.Element;
};

const Button = ({ extraClassName, disabled, type, children }: ButtonProps) => {
	return (
		<button className={`btn${extraClassName ? ` ${extraClassName}` : ""}`} disabled={disabled} type={type}>
			{children}
		</button>
	);
};

export default Button;

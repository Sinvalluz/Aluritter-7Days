interface InputTypes {
	type: 'email' | 'password';
	placeholder: string;
}

export default function Input({ type, placeholder }: InputTypes) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='px-2 py-3 grow placeholder:text-placeholder text-base border-border border rounded'
		/>
	);
}

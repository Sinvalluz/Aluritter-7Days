interface ButtonTypes {
	children: string;
}

export default function Button({ children }: ButtonTypes) {
	return (
		<button className='grow text-btnColor text-base bg-btnBackground py-3 text-center rounded block mb-1'>
			{children}
		</button>
	);
}

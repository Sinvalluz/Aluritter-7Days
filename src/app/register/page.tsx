import Button from '@/components/Button';
import Input from '@/components/Input';
import Title from '@/components/Title';
import Link from 'next/link';

export default function Register() {
	return (
		<main className='w-full h-screen flex items-center justify-center'>
			<div className='xl:w-1/4 flex flex-col'>
				<Title />
				<form className='flex flex-col'>
					<div className='flex flex-col gap-3 mb-6'>
						<Input type={'email'} placeholder={'email@exemplo.com'} />
						<Input type={'password'} placeholder={'Senha'} />
					</div>

					<Button>Criar uma nova conta</Button>
					<span className='flex gap-1  itens-center justify-center w-full'>
						<p>Já possui uma conta?</p>
						<Link href={'/'} className='text-link'>
							Acesse agora!
						</Link>
					</span>
				</form>
			</div>
		</main>
	);
}

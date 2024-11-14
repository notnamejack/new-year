import clsx from 'clsx';
import s from './app.module.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Main, Python } from '../page';
import { Modal } from '../companent';

export const App = () => {
	const navigate = useNavigate();

	const handleModalClose = () => {
		navigate('/');
	};

	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/python' element={<Python />} />
					<Route
						path='/python/result'
						element={
							<Modal title='Результаты' onClose={handleModalClose}>
								<>Результаты</>
							</Modal>
						}
					/>
				</Routes>
			</main>
		</>
	);
};

import { useState } from 'react';
import './App.css';

function App() {
	const [currentActiveSide, setCurrentActiveSide] = useState(false);

	function handleChange() {
		setCurrentActiveSide(prevState => !prevState);
	}
	return (
		<>
			<div className='wrapper'>
				<div
					className={`${!currentActiveSide ? 'active' : 'unActive'}`}>
					{!currentActiveSide ? (
						<p className='textChanging'>Jesteś tutaj!</p>
					) : (
						<p className='textChanging'>tu Cię nie ma!</p>
					)}

					{!currentActiveSide && (
						<button
							className='buttonChanger'
							onClick={handleChange}>
							Zmień stronę
						</button>
					)}
				</div>

				<div className={`${currentActiveSide ? 'active' : 'unActive'}`}>
					{currentActiveSide ? (
						<p className='textChanging'>Jesteś tutaj!</p>
					) : (
						<p className='textChanging'>tu Cię nie ma!</p>
					)}

					{currentActiveSide && (
						<button
							className='buttonChanger'
							onClick={handleChange}>
							Zmień stronę
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
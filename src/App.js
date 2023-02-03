import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from './context/GlobalContext';
import Button from './components/button/Button';

function App() {
	const { isDarkmode, globalDispatch } = useContext(GlobalContext);

	const contentRef = useRef();

	useEffect(() => {
		if (contentRef.current !== undefined) {
			contentRef.current.style.backgroundColor = isDarkmode ? '#282c34' : '#ffffff';
			contentRef.current.style.color = isDarkmode ? 'white' : 'black';
		}
	}, [isDarkmode]);

	return (
		<div className='App'>
			<header ref={contentRef} className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>PropTypes & React Context</p>
				<a className='App-link' href='https://1998s.dev' target='_blank' rel='noopener noreferrer'>
					firmnardians
				</a>

				<div className='pt-15'>
					<Button title={`Change to ${isDarkmode ? 'Light' : 'Dark'}`} onClick={() => globalDispatch.setDarkmode(!isDarkmode)} />
				</div>
			</header>
		</div>
	);
}

export default App;

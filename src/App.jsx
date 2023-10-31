import Title from './components/Title/Title'
import Calculator from './pages/Calculator/Calculator'
import './App.css'

function App() {

	return (
		<div className='app'>
			<Title title={ 'Calculator' } />
			<Calculator />
		</div>
	)
}

export default App

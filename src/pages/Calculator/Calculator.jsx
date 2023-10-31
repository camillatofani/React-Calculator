import styles from './Calculator.module.css'
import Keyboard from './../../components/Keyboard/Keyboard'
import { useGlobalContext } from './../../GlobalContext'

function Calculator() {
	const { operation } = useGlobalContext()
	console.log(operation)

	return (
		<>
			<div className={ styles.result }>{ operation === '' ? '0' : operation}</div>
			<Keyboard />
		</>
	)
}

export default Calculator

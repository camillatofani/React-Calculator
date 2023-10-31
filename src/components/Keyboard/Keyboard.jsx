import styles from './Keyboard.module.css'
import Button from './../Button/Button'
import {useGlobalContext} from './../../GlobalContext'

function Keyboard() {
	const { key } = useGlobalContext()

	return (
		<>
			<div className={ styles.keyboard }>
				{ key.map((single)=>(
					<Button key={ single.id } style={ single.className } btn={single.id}>{ single.btn }</Button>
				))}
			</div>
		</>
	)
}

export default Keyboard

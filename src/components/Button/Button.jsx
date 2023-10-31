import PropTypes from 'prop-types'
import { useGlobalContext } from './../../GlobalContext'

function Button({ style, btn, children }) {
	const { getKey } = useGlobalContext()

	return (
		<div className={ style } data-id={ btn } onClick={ getKey }>{ children }</div>
	)
}

Button.propTypes = {
	style: PropTypes.string.isRequired,
	btn: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
}

export default Button

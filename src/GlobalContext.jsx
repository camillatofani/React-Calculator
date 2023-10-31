import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './components/Keyboard/Keyboard.module.css'

const GlobalContext = createContext()
const GlobalProvider = GlobalContext.Provider

export function useGlobalContext() {
	return useContext(GlobalContext)
}

export function GlobalProviderComponent({ children }) {
	// Key
	const key = [
		{ id: 'AC', btn: 'AC', className: `${ styles.btn } ${ styles.dark }` },
		{ id: '??', btn: '??', className: `${ styles.btn } ${ styles.dark }` },
		{ id: '%', btn: '%', className: `${ styles.btn } ${ styles.dark }` },
		{ id: '/', btn: '÷', className: `${ styles.btn } ${ styles.orange }` },
		{ id: '7', btn: '7', className: `${ styles.btn }` },
		{ id: '8', btn: '8', className: `${ styles.btn }` },
		{ id: '9', btn: '9', className: `${ styles.btn }` },
		{ id: '*', btn: 'x', className: `${ styles.btn } ${ styles.orange }` },
		{ id: '4', btn: '4', className: `${ styles.btn }` },
		{ id: '5', btn: '5', className: `${ styles.btn }` },
		{ id: '6', btn: '6', className: `${ styles.btn }` },
		{ id: '-', btn: '-', className: `${ styles.btn } ${ styles.orange }` },
		{ id: '1', btn: '1', className: `${ styles.btn }` },
		{ id: '2', btn: '2', className: `${ styles.btn }` },
		{ id: '3', btn: '3', className: `${ styles.btn }` },
		{ id: '+', btn: '+', className: `${ styles.btn } ${ styles.orange }` },
		{ id: '0', btn: '0', className: `${ styles.btn } ${ styles.wide } ${ styles.lastsx }` },
		{ id: '.', btn: ',', className: `${ styles.btn }` },
		{ id: '=', btn: '=', className: `${ styles.btn } ${ styles.orange } ${ styles.lastdx }` }
	]
	// Operation
	const [operation, setOperation] = useState('')

	function getKey(e) {
		if (e.target.dataset.id === '/' || e.target.dataset.id === '*' || e.target.dataset.id === '-' || e.target.dataset.id === '+' || e.target.dataset.id === '.') {
			if (operation.charAt(operation.length - 1) === '/'
				|| operation.charAt(operation.length - 1) === '*'
				|| operation.charAt(operation.length - 1) === '-'
				|| operation.charAt(operation.length - 1) === '+'
				|| operation.charAt(operation.length - 1) === '.') {
				setOperation(prev => prev.slice(0, -1))
			}
		}
		if (e.target.dataset.id === 'AC') {
			setOperation('')
		} else if (e.target.dataset.id === '=') {
			calculate()
		} else {
			setOperation(prev => prev + e.target.dataset.id)
		}
	}
	function calculate() {
		const result = eval(operation).toString()
		setOperation(result)
	}

	// Global Values
	const globalValues = {
		// Key
		key,
		getKey,
		operation
	}

	return <GlobalProvider value={ globalValues }>{ children }</GlobalProvider>
}

GlobalProviderComponent.propTypes = {
	children: PropTypes.any
}

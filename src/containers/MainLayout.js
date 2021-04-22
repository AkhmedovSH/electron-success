import React from 'react'
import Header from './header/Header'


function MainLayout({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default MainLayout


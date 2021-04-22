import React from 'react'
import Header from './header/Header'


function AdminLayout({ children }) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default AdminLayout

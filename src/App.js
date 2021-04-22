import React from 'react'
import Routers from "./router"
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify';
/* CSS */
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/bootstrap.css'
import './assets/css/styles.css'

function App() {
	const loader = useSelector(state => state.loader)
  return (
		<>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover={false}
			/>
			
			{	loader && 
				<div id="loading-bg">
					<div className="loading">
						<div className="effect-1 effects"></div>
						<div className="effect-2 effects"></div>
						<div className="effect-3 effects"></div>
					</div>
				</div>
			}
			<Routers />
		</>
  );
}

export default App;
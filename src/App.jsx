import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './page/home';


import Sidebar from './component/sidebar';

function App() {
	return (
		<>
			<Router>
				{/* Global Toast Container (Accessible in All Components) */}
				<ToastContainer
					position='top-right'
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={true}
					closeOnClick
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<Routes>
					
					<Route path='/' element={<Home />} />

				</Routes>
			</Router>
		</>
	);
}

export default App;

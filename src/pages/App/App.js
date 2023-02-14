import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../components/NavBar/NavBar';
import './App.css';
import Notes  from '../components/NotePage/NotePage';

import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [note, setNote]= useState(null)

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/orders/new' element={<NewOrderPage />} />
						<Route path='/orders' element={<OrderHistoryPage />} />
						<Route note={note} setNote={setNote} path='/notes/new' element={<Notes/>}/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {
	FaHome,
	FaBell,
	FaShoppingCart,
	FaComments,
	FaWallet,
	FaUser,
	FaCog,
	FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = () => {
		const navigate = useNavigate();
		// ✅ Logout Function
		const handleLogout = () => {
			localStorage.removeItem('token');
			localStorage.removeItem('user'); // ✅ Remove stored user data
			toast.success('Logged Out Successfully!', { position: 'top-right' });
	
			setTimeout(() => {
				navigate('/login');
			}, 1500);
		};

	return (
		<div className='w-64 flex flex-col justify-between rounded-lg h-screen '>
			{/* Logo */}
			<div>
				<h1 className='text-2xl font-bold mb-4 text-center p-4 bg-white rounded-lg'>
					LOGO
				</h1>
			</div>

			{/* Navigation Links */}
			<div className='flex flex-col flex-grow bg-white'>
				<ul className='mt-6'>
					{[
						{ name: 'Home', path: '/', icon: <FaHome /> },
						{ name: 'Notifications', path: '/notifications', icon: <FaBell /> },
						{ name: 'Shop', path: '/shop', icon: <FaShoppingCart /> },
						{ name: 'Conversation', path: '/conversation', icon: <FaComments /> },
						{ name: 'Wallet', path: '/wallet', icon: <FaWallet /> },
						{ name: 'My Profile', path: '/profile', icon: <FaUser /> },
						{ name: 'Settings', path: '/settings', icon: <FaCog /> },
					].map((item) => (
						<li key={item.name}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									`flex items-center space-x-3 text-lg p-2 pl-5 cursor-pointer transition ${
										isActive
											? 'text-black font-semibold border-l-4 border-green-500'
											: 'text-[#8D8D8D] hover:text-black'
									}`
								}>
								{item.icon} <span className='text-[16px] font-semibold'>{item.name}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</div>

			{/* Logout Button and Footer Section */}
			<div className='px-6 py-4 bg-white rounded-bl-lg rounded-br-lg'>
				<button  onClick={handleLogout} className='w-full flex items-center space-x-3 cursor-pointer text-[#88C2BB] text-[16px] text-lg font-semibold'>
					<FaSignOutAlt /> <span>Log Out</span>
				</button>
			</div>

			{/* Footer Section */}
			<div className='flex items-center justify-between text-gray-400 text-[11px] px-2 py-2 mb-4'>
				<p>2022 © logo name</p>
				<p>Developed by Infotech</p>
			</div>
		</div>
	);
};

export default Sidebar;

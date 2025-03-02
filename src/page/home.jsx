import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import Sidebar from '../component/sidebar.jsx';
import Feed from '../component/feed.jsx';
import RightSidebar from '../component/rightSidebar.jsx';

const home = () => {
	// const navigate = useNavigate();

	return (
		<section className='w-auto min-h-screen bg-[#f5f5f5] flex items-center justify-center relative  p-4'>
			<div className='flex min-h-screen'>
				{/* Sidebar */}
				<div className='fixed'>
					<Sidebar />
				</div>

				<main className='flex-1 p-4 pt-0 max-w-3xl'>
					<Feed />
				</main>

				{/* Right Sidebar */}
				<div className='relative'>
					<RightSidebar />
				</div>
			</div>
		</section>
	);
};

export default home;

import React from 'react';
import { FaStar } from 'react-icons/fa';
import {
	FaHeart,
	FaComment,
	FaShare,
	FaSearch,
	FaFilter,
} from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import postImage from '../assets/image/pexels-tobias-bjørkli-2236382.png';
import searcIcon from '../assets/image/search.svg'
import filterIcon from '../assets/image/filter.svg'
const posts = [
	{
		id: 1,
		username: 'Lara Leones',
		handle: '@thewallart',
		text: 'It is a long established fact that a reader will be distracted...',
		image: postImage,
		likes: '9.8k',
		comments: '8.6k',
		shares: '7.2k',
	},
	{
		id: 2,
		username: 'Thomas J.',
		handle: '@thecustomcreator',
		text: 'It is a long established fact that a reader will be distracted...',
		image: postImage,
		likes: '4.3k',
		comments: '3.2k',
		shares: '2.5k',
	},
];

// Dummy Product Data
const products = [
	{
		id: 1,
		image: postImage,
		title: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		rating: 5,
	},
	{
		id: 2,
		image: postImage,
		title: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		rating: 5,
	},
	{
		id: 3,
		image: postImage,
		title: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		rating: 5,
	},
	{
		id: 4,
		image: postImage,
		title: 'Modern Wall Decor Framed Painting',
		price: '$199.99',
		rating: 5,
	},
];

const Feed = () => {
	return (
		<div className='space-y-6 ml-64'>
			{/* Search & Filter Bar */}
			<div className='flex items-center justify-between bg-white p-5 rounded-lg w-full max-w-2xl mx-auto'>
				<div className='flex items-center space-x-2 text-gray-500 w-full'>
					<FaSearch />
					<input
						type='text'
						placeholder='Search here...'
						className='w-full outline-none bg-transparent placeholder-gray-400 placeholder:text-sm'
					/>
				</div>
				<button className='flex items-center space-x-2 text-[#303030] text-[14px] hover:text-gray-700'>
					<FaFilter />
					<span>Filters</span>
				</button>
			</div>

			{/* Dynamic Posts Rendering */}
			{posts.map((post) => (
				<div key={post.id} className=' bg-white rounded-lg'>
					{/* Post Header */}
					<div className='flex items-center justify-between px-4 pt-4'>
						<div className='flex items-center space-x-3'>
							<img
								src={`https://randomuser.me/api/portraits/men/${
									post.id + 30
								}.jpg`}
								alt='User'
								className='w-10 h-10 rounded'
							/>
							<div>
								<h3 className='font-semibold'>{post.username}</h3>
								<p className='text-gray-500 text-sm'>{post.handle}</p>
							</div>
						</div>
						<BsThreeDots className='text-gray-500 cursor-pointer' />
					</div>

					{/* Post Description */}
					<p className='text-gray-600 mt-3 text-sm px-4'>
						{post.text}{' '}
						<span className='text-[#FF5E8A] font-medium cursor-pointer'>
							Read More
						</span>
					</p>

					{/* Post Image */}
					<div className='relative mt-3 px-4'>
						<img
							src={post.image}
							alt='Post'
							className='rounded-lg w-full h-64'
						/>
						<button className='absolute top-3 right-3  p-2'>
							<FaRegHeart className='text-white text-lg' />
						</button>
					</div>

					{/* Footer (Likes, Comments, Shares) */}
					<div className='flex gap-5 items-center mt-4 border-t-1 pt-4 p-4 border-[#F3F3F3] text-gray-600'>
						<div className='flex items-center space-x-2'>
							<FaHeart />
							<span>{post.likes}</span>
						</div>
						<div className='flex items-center space-x-2'>
							<FaComment />
							<span>{post.comments}</span>
						</div>
						<div className='flex items-center space-x-2'>
							<FaShare />
							<span>{post.shares}</span>
						</div>
					</div>
				</div>
			))}

			<div className='w-full overflow-x-auto scrollBar'>
				<div className='flex space-x-4 mb-3'>
					{products.map((product) => (
						<div
							key={product.id}
							className='min-w-[252px] bg-white rounded-lg '>
							<img
								src={product.image}
								alt={product.title}
								className='w-full h-[180px] object-cover rounded-md'
							/>
							<h3 className='text-[13px] font-medium mt-2 px-3'>{product.title}</h3>
							<div className="flex items-center justify-between p-3">
							<p className='text-sm font-bold'>{product.price}</p>
							<div className='flex text-yellow-500 space-x-1'>
								{[...Array(product.rating)].map((_, i) => (
									<FaStar key={i} className='text-[10px]'/>
								))}
							</div>
							</div>
						 
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;

import React , {useState} from 'react';
import bgImage from '../assets/image/pexels-ekaterina-12203460.png';
import circleImage from '../assets/image/pexels-anastasia-shuraeva-4406721.png'
const artists = [
  { name: 'Thomas Edward', handle: '@thewildwithyou', image: circleImage, background: bgImage },
  { name: 'Chris Doe', handle: '@chrisdoe', image: circleImage, background: bgImage },
  { name: 'Emilie Jones', handle: '@emiliejones', image: circleImage, background: bgImage },
  { name: 'Jessica Williams', handle: '@jessicaw', image: circleImage, background: bgImage },
	{ name: 'Thomas Edward', handle: '@thewildwithyou', image: circleImage, background: bgImage },
  { name: 'Chris Doe', handle: '@chrisdoe', image: circleImage, background: bgImage },
  { name: 'Emilie Jones', handle: '@emiliejones', image: circleImage, background: bgImage },
  { name: 'Jessica Williams', handle: '@jessicaw', image: circleImage, background: bgImage },
];

const photographers = [
  { name: 'Daniel Craig', handle: '@danielc', image: circleImage, background: bgImage },
  { name: 'Sophia Lee', handle: '@sophialee', image: circleImage, background: bgImage },
  { name: 'Michael Smith', handle: '@michaelsmith', image: circleImage, background: bgImage },
  { name: 'Laura White', handle: '@laurawhite', image: circleImage, background: bgImage },
	{ name: 'Thomas Edward', handle: '@thewildwithyou', image: circleImage, background: bgImage },
  { name: 'Chris Doe', handle: '@chrisdoe', image: circleImage, background: bgImage },
  { name: 'Emilie Jones', handle: '@emiliejones', image: circleImage, background: bgImage },
  { name: 'Jessica Williams', handle: '@jessicaw', image: circleImage, background: bgImage },
];

const ArtistCard = () => {
	const [activeTab, setActiveTab] = useState('Artists');
	return (
		<div className='w-72 rounded-xl '>
		{/* Become a Seller Button */}
		<button className='w-full bg-[#88C2BB] text-white font-semibold p-5 rounded-lg transition'>
				Become a Seller
			</button>

		{/* Tabs */}
		<div className='flex justify-start space-x-4 mt-4 py-3 rounded px-3 bg-white'>
			<button
				onClick={() => setActiveTab('Artists')}
				className={`font-semibold text-[16px] ${activeTab === 'Artists' ? 'text-black border-b-2 border-black' : 'text-[#8D8D8D]'}`}
			>
				Artists
			</button>
			<button
				onClick={() => setActiveTab('Photographers')}
				className={`font-semibold text-[16px] ${activeTab === 'Photographers' ? 'text-black border-b-2 border-black' : 'text-[#8D8D8D]'}`}
			>
				Photographers
			</button>
		</div>

		{/* Scrollable List */}
		<div className='h-[74vh] rounded-lg  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 bg-white px-4 scrollBar'>
			{(activeTab === 'Artists' ? artists : photographers).map((person, index) => (
				<div key={index} className='relative mt-4 mb-4 rounded-lg overflow-hidden '>
					{/* Background Image */}
					<img src={person.background} alt='Background' className='w-full h-32 object-cover blur-sm' />
					{/* Overlay */}
					<div className='absolute inset-0 bg-black/30'></div>

					{/* Artist Info */}
					<div className='absolute bottom-4 left-4 flex items-center space-x-2'>
						<div className='relative'>
							{/* Profile Image */}
							<img src={person.image} alt={person.name} className='w-12 h-12 rounded-full border-2 border-white' />
							{/* Green Dot */}
							<span className='absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full'></span>
						</div>

						<div className='text-white'>
							<h3 className='font-semibold text-base'>{person.name}</h3>
							<p className='text-sm text-gray-200'>{person.handle}</p>
						</div>
					</div>
				</div>
			))}
		</div>

		<div className="w-full flex items-center justify-between text-[12px] text-[#8D8D8D] px-2 py-3">
			<p>Privacy</p>
			<p>Terms and Services</p>
			<p>Cookies Notice</p>
		</div>
	</div>
	);
};

export default ArtistCard;

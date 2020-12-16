import React from 'react';
import './Banner.css';

const Banner = () => {
	const background1 = {
		backgroundImage: 'url(./images/woman-banner.png',
	};

	const background2 = {
		backgroundImage: 'url(./images/woman-portrait.jpg',
	};

	console.log(window.screen.width);
	return (
		<div className='banner'>
			<svg className='shadow' width='1900' height='982.8158'>
				<path d='m 0,0 377.79468,763.34601 c 0,0 675.28512,280.60829 1095.05692,205.77946 0,0 354.0686,-87.60456 447.1484,-317.56653 v -651.55894 z' />
			</svg>
			<div
				className='banner-img'
				style={window.screen.width > 414 ? background1 : background2}
			></div>
			<svg className='overlay' width='1900' height='938'>
				<path d='m 0,0 v 652.01521 c 0,0 1090.8723,359.93509 1513.4466,275.3545 0,0 312.1831,-36.81504 405.2629,-266.77701 l 1.2905,-660.5927 z' />
			</svg>
			<svg className='mask' width='1920' height='938'>
				<path d='m 0,652.01521 c 0,0 932.62357,298.85931 1352.3954,287.90874 419.7719,-10.95057 -1352.3954,0 -1352.3954,0 v -287.90874' />
			</svg>
			<div className='content'>
				<div className='content-container'>
					<div className='description'>
						<h1>We Create Applications With Excellent Technology.</h1>
						<p>
							It Is A Long Established Fact That A Reader Will Be Distracted By
							The Readable Content Of A Page When Looking At Its Layout. The
							Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal
							Distribution Of Letters, As Opposed To Using 'Content
						</p>
						<button>Explore More →</button>
					</div>
					<img
						src={
							window.screen.width > 414
								? './images/desktop.png'
								: './images/iphone-x.png'
						}
						alt='banner'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;

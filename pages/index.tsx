import { Content, Menu, Social, Wrapper } from '../components/sharedstyles';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Logo from '../public/images/logo.svg';
import IconTwitter from '../public/images/icon-twitter.svg';
import IconYouTube from '../public/images/icon-youtube.svg';
import IconLaptop from '../public/images/icon-laptop.svg';

export default function Home() {
	return (
		<div>
			<Wrapper>
				<Spline
					className='spline'
					scene='https://prod.spline.design/FsqVuLHi4tLaJofK/scene.splinecode'
				/>
				<Content>
					<Menu>
						<li>
							<Image src={Logo} alt='logo' />
						</li>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/'>Download</a>
						</li>
						<li>
							<a href='/'>App</a>
						</li>
						<li>
							<a href='/'>Login</a>
						</li>
						<li>
							<button>Get Started</button>
						</li>
					</Menu>
					<h1>Collaborate with people</h1>
					<p>
						Bring your team together and build your community by using our cross-platform app that
						lets you collaborate via chat, voice and by sharing and storing unlimited media files. A
						world of topics is waiting for you. Join the private beta.
					</p>
					<button>
						<Image src={IconLaptop} alt='Download' />
						Download for Mac
					</button>
				</Content>
				<Social>
					<div />
					<Image src={IconTwitter} alt='twitter' />
					<Image src={IconYouTube} alt='Youtube' />
				</Social>
			</Wrapper>
		</div>
	);
}

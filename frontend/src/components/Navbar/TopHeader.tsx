import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const TopHeader = () => {
	return(
		<div className="header-top">
			<div className="container">
				<ul className="header-social-container">
					<li>
						<Link href=''>
							<AiFillFacebook />
						</Link>
					</li>
					<li>
						<Link href=''>
							<AiOutlineTwitter />
						</Link>
					</li>
					<li>
						<Link href=''>
							<AiOutlineInstagram />
						</Link>
					</li>
					<li>
						<Link href=''>
							<AiFillLinkedin />
						</Link>
					</li>
				</ul>
				
				<div className="header-alert-news">
					<p>
						<b>Free Shipping </b>
						This Week Order Over - $55
					</p>
				</div>

				<div className="header-top-actions">
					<select name="currency">
						<option value="usd">USD</option>
						<option value="tk">TK</option>
					</select>

					<select name="language">
						<option value="en-US">English</option>
						<option value="hindi">Hindi</option>
						<option value="bn">Bangla</option>
					</select>
				</div>
			</div>
		</div>
	)
}

export default TopHeader;
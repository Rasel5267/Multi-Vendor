import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { Mens, Womens, Jewelry, Perfume } from '../../utils/Data';
import { AiOutlineMenu, AiOutlineHeart, AiOutlineShopping, AiOutlineHome, AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsGrid } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

const MobileMenu = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [isMens, setIsMens] = useState(false);
	const [isWomen, setIsWomen] = useState(false);
	const [isJewelry, setIsJewelry] = useState(false);
	const [isPerfume, setIsPerfume] = useState(false);
	const [isLanguage, setIsLanguage] = useState(false);
	const [isCurrency, setIsCurrency] = useState(false);

	const menuRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setMobileMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
		  window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return(
		<div ref={menuRef}>
			<div className="mobile-bottom-navigation">
				<button className="action-btn">
					<AiOutlineMenu onClick={() => setMobileMenu(!mobileMenu)}/>
				</button>
				<Link href='/cart' className="action-btn">
					<AiOutlineShopping />
					<span className="count">0</span>
				</Link>
				<Link href='/' className="action-btn">
					<AiOutlineHome />
				</Link>
				<Link href='/wish' className="action-btn">
					<AiOutlineHeart />
					<span className="count">0</span>
				</Link>
				<button className="action-btn">
					<BsGrid />
				</button>
			</div>

			<nav className={mobileMenu ? 'mobile-navigation-menu has-scrollbar active' : 'mobile-navigation-menu has-scrollbar'}>
				<div className="menu-top">
					<h2 className="menu-title">Menu</h2>

					<button className="menu-close-btn">
						<AiOutlineClose onClick={() => setMobileMenu(!mobileMenu)}/>
					</button>
				</div>

				<ul className="mobile-menu-category-list">

					<li className="menu-category">
						<Link href='/' className='menu-title'>Home</Link>
					</li>

					<li className="menu-category">
						<button className="accordion-menu" onClick={() => setIsMens(!isMens)}>
							<p className="menu-title">Men&apos;s</p>

							<div>
								{
									isMens ? 
									<AiOutlineMinus className="remove-icon" />
									:
									<AiOutlinePlus className="add-icon" />
								}
							</div>
						</button>

						{
							Mens.map((men) => (
								<ul className={isMens ? "submenu-category-list active" : "submenu-category-list"} key={men.id}>
									<li className="submenu-category">
										<Link href='' className="submenu-title">{men.title}</Link>
									</li>
								</ul>
							))
						}
					</li>
					<li className="menu-category">
						<button className="accordion-menu"  onClick={() => setIsWomen(!isWomen)}>
							<p className="menu-title">Women&apos;s</p>

							<div>
								{
									isWomen ? 
									<AiOutlineMinus className="remove-icon" />
									:
									<AiOutlinePlus className="add-icon" />
									
								}
							</div>
						</button>

						{
							Womens.map((women) => (
								<ul className={isWomen ? "submenu-category-list active" : "submenu-category-list"} key={women.id}>
									<li className="submenu-category">
										<Link href='' className="submenu-title">{women.title}</Link>
									</li>
								</ul>
							))
						}
					</li>
					<li className="menu-category">
						<button className="accordion-menu"  onClick={() => setIsJewelry(!isJewelry)}>
							<p className="menu-title">Jewelry</p>

							<div>
								{
									isJewelry ? 
									<AiOutlineMinus className="remove-icon" />
									:
									<AiOutlinePlus className="add-icon" />
									
								}
							</div>
						</button>

						{
							Jewelry.map((jewelry) => (
								<ul className={isJewelry ? "submenu-category-list active" : "submenu-category-list"} key={jewelry.id}>
									<li className="submenu-category">
										<Link href='' className="submenu-title">{jewelry.title}</Link>
									</li>
								</ul>
							))
						}
					</li>
					<li className="menu-category">
						<button className="accordion-menu"  onClick={() => setIsPerfume(!isPerfume)}>
							<p className="menu-title">Perfume</p>

							<div>
								{
									isPerfume ? 
									<AiOutlineMinus className="remove-icon" />
									:
									<AiOutlinePlus className="add-icon" />
									
								}
							</div>
						</button>

						{
							Perfume.map((perfume) => (
								<ul className={isPerfume ? "submenu-category-list active" : "submenu-category-list"} key={perfume.id}>
									<li className="submenu-category">
										<Link href='' className="submenu-title">{perfume.title}</Link>
									</li>
								</ul>
							))
						}
					</li>

					<li className="menu-category">
						<Link href='' className='menu-title'>Blog</Link>
					</li>

					<li className="menu-category">
						<Link href='' className='menu-title'>Hot Offer</Link>
					</li>

				</ul>

				<div className="menu-bottom">
					<ul className="menu-category-list">
						<li className="menu-category">
							<button className="accordion-menu" onClick={() => setIsLanguage(!isLanguage)}>
								<p className="menu-title">Language</p>
								<IoMdArrowDropdown className='caret-back' />
							</button>

							<ul className={isLanguage ? "submenu-category-list active" : "submenu-category-list"}>
								<li className="submenu-category">
									<Link href='' className="submenu-title">English</Link>
								</li>

								<li className="submenu-category">
									<Link href='' className="submenu-title">Hindi</Link>
								</li>

								<li className="submenu-category">
									<Link href='' className="submenu-title">Bangla</Link>
								</li>
							</ul>
						</li>

						<li className="menu-category">
							<button className="accordion-menu" onClick={() => setIsCurrency(!isCurrency)}>
								<p className="menu-title">Currency</p>
								<IoMdArrowDropdown className='caret-back' />
							</button>

							<ul className={isCurrency ? "submenu-category-list active" : "submenu-category-list"}>
								<li className="submenu-category">
									<Link href='' className="submenu-title">USD $</Link>
								</li>

								<li className="submenu-category">
									<Link href='' className="submenu-title">TK &#2547;</Link>
								</li>
							</ul>
						</li>

						<ul className="menu-social-container">
							<li>
								<Link href='' className="social-link">
									<AiFillFacebook />
								</Link>
							</li>
							<li>
								<Link href='' className="social-link">
									<AiOutlineTwitter />
								</Link>
							</li>
							<li>
								<Link href='' className="social-link">
									<AiOutlineInstagram />
								</Link>
							</li>
							<li>
								<Link href='' className="social-link">
									<AiFillLinkedin />
								</Link>
							</li>
						</ul>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default MobileMenu;
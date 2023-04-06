import { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import Link from 'next/link';

interface NavbarProps {
	isLoggedIn: boolean;
}
  

const HeaderMain: React.FC<NavbarProps> = ({ isLoggedIn }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
  
	const handleDropdown = () => {
	  setIsDropdownOpen(!isDropdownOpen);
	};
  
	const handleClickOutside = (event: MouseEvent) => {
	  if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
		setIsDropdownOpen(false);
	  }
	};
  
	useEffect(() => {
	  window.addEventListener('click', handleClickOutside);
	  return () => {
		window.removeEventListener('click', handleClickOutside);
	  };
	}, []);
	return(
		<div className="header-main">
			<div className="container">
				<Link href='/' className='header-logo'>MultiVendor</Link>

				<div className="header-search-container">
					<input type="search" name='search' className='search-field' placeholder='Search Products Here...' />
					<button className='search-btn'>
						<AiOutlineSearch />
					</button>
				</div>

				<div className="header-user-actions">
					<div className="profile" ref={dropdownRef}>
						<button className='action-btn' onClick={handleDropdown}>
							<AiOutlineUser />
						</button>
						{isDropdownOpen && (
						<div className="dropdown">
							{isLoggedIn ? (
							<>
								<Link href="/profile">Profile</Link>
								<Link href="/logout">Logout</Link>
							</>
							) : (
							<>
								<Link href="/login">Login</Link>
								<Link href="/register">Register</Link>
							</>
							)}
						</div>
						)}
					</div>
					<Link href='/wish' className='action-btn'>
						<AiOutlineHeart />
						<span className="count">0</span>
					</Link>
					<Link href='/cart' className='action-btn'>
						<AiOutlineShopping />
						<span className="count">0</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeaderMain;
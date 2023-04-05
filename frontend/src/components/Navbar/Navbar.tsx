import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
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

  return (
    <nav>
		<div className="container navbar">
			<div className="logo">
				<Link href="/">MultiVendor</Link>
			</div>
			<div className="search">
				<input type="text" placeholder="Search" />
			</div>
			<div className="profile" ref={dropdownRef}>
				<button onClick={handleDropdown}>
				Profile
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
		</div>	
    </nav>
  );
};

export default Navbar;

import TopHeader from './TopHeader';
import HeaderMain from './HeaderMain';
import HeaderMenu from './HeaderMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
	<header>
		<TopHeader />
		<HeaderMain isLoggedIn={false} />
		<HeaderMenu />
		<div className='mobile'>
			<MobileMenu />
		</div>
	</header>
  );
};

export default Navbar;

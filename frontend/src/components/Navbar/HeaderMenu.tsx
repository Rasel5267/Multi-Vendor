import Link from "next/link";
import { Categories, Mens, Womens, Jewelry, Perfume } from '../../utils/Data';

const HeaderMenu = () => {
	return(
		<>
			<nav className="desktop-navigation-menu">
				<div className="container">
					<ul className="desktop-menu-category-list">
						<li className="menu-category">
							<Link href='/' className="menu-title">Home</Link>
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Category</Link>

							{
								Categories.map((category) => (
									<div className="dropdown-panel" key={category.id}>
										<ul className="dropdown-panel-list">
											<li className="menu-title">
												<Link href=''>{category.title}</Link>
											</li>
										</ul>
									</div>
								))
							}
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Men&apos;s</Link>

							{
								Mens.map((men) => (
									<ul className="dropdown-list" key={men.id}>
										<li className="dropdown-item">
											<Link href=''>{men.title}</Link>
										</li>
									</ul>
								))
							}
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Women&apos;s</Link>

							{
								Womens.map((women) => (
									<ul className="dropdown-list" key={women.id}>
										<li className="dropdown-item">
											<Link href=''>{women.title}</Link>
										</li>
									</ul>
								))
							}
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Jewelry</Link>

							{
								Jewelry.map((jewelry) => (
									<ul className="dropdown-list" key={jewelry.id}>
										<li className="dropdown-item">
											<Link href=''>{jewelry.title}</Link>
										</li>
									</ul>
								))
							}
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Perfume</Link>

							{
								Perfume.map((perfume) => (
									<ul className="dropdown-list" key={perfume.id}>
										<li className="dropdown-item">
											<Link href=''>{perfume.title}</Link>
										</li>
									</ul>
								))
							}
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Blog</Link>
						</li>

						<li className="menu-category">
							<Link href='' className="menu-title">Hot Offers</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default HeaderMenu;
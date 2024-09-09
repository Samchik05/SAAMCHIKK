import "./Module.header.scss"

const Header = () => {
	
  return (
    <>
    <header className="header" id="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Selvin</em>
					</strong>
					<br />a frontend developer
				</h1>

				<div className="arrow-7">
					<a href="#aboutme">
						<span></span>
						<span></span>
						<span></span>
					</a>
					
				</div>

			</div>
		</header>
    </>
  )
}

export default Header
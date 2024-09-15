import s from "./Header.module.scss"

const Header = () => {
	
  return (
    <>
    <header className={s.header} id="header">
			<div className={s.header__wrapper}>
				<h1 className={s.header__title}>
					<strong>
						Hi, my name is <em>Selvin</em>
					</strong>
					<br />a frontend developer
				</h1>

				<div className={s.arrow_7}>
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
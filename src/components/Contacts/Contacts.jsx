import "./Module.contacts.scss"


const Contacts = () => {
  return (
    <>
    <main className="section" id="contacts">
			<div className="container" >
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<a href="https://maps.app.goo.gl/6bNEnXJ2Qx6Qbiy56">
						Uzbekistan, Tashkent
						</a>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram / WhatsApp</h2>
						<p>
							<a href="tel:+998900270365">+998 (90) 027 03 65</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:neuderjimie699@gmail.com">
                                  neuderjimie699@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
    </>
  )
}

export default Contacts
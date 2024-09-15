import s from "./Footer.module.scss";
import vk from "../../../src/assets/images/vk.svg";
import instagram from "../../../src/assets/images/instagram.svg";
import twitter from "../../../src/assets/images/twitter.svg";
import gitHub from "../../../src/assets/images/gitHub.svg";


const Footer = () => {
  return (
    <>
    <footer className={s.footer}>
			<div className="container">
				<div className={s.footer__wrapper}>
					<ul className={s.social}>
						<li className={s.social__item}>
							<a href="https://vk.com/saamchikk">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className={s.social__item}>
							<a href="https://www.instagram.com/saamchikk/">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className={s.social__item}>
							<a href="https://x.com/Maksin_Robinson">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className={s.social__item}>
							<a href="https://github.com/Samchik05">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className={s.copyright}>
						<p>© 2024 SAAMCHIKK</p>
					</div>
				</div>
			</div>
		</footer>
    </>
  )
}

export default Footer
import '../App.css'

const GridItem5 = props => {
	return (
		<div data-unit-id="apple-card" data-analytics-section-engagement="name:promo-apple-card">
			<div className="module-content">

				<div className="unit-wrapper background">
					<a className="unit-link" href="https://www.apple.com/apple-card/" target="_self" rel="follow"
						data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
					<div className="unit-copy-wrapper">
						<h4 className="logo-image logo-image-apple-card-logo headline"><span
								className="visuallyhidden">Apple Card</span></h4>
						<h5 className="subhead" role="presentation">Get up to 3% Daily&nbsp;Cash back with every
							purchase.</h5>


						<div className="cta-links">
							<a className="icon icon-after" href="https://www.apple.com/apple-card/"
								target="_self" rel="follow" data-analytics-region="learn more"
								data-analytics-title="Learn more about Apple Card"
								aria-label="Learn more about Apple Card">Learn more<i className="fa-solid fa-chevron-right small ms-2"></i></a>

							<a className="icon icon-after default"
								href="https://card.apple.com/apply/application?referrer=cid%3Dapy-200-10000036&amp;start=false"
								data-rid-relay="{&quot;287&quot;:&quot;referrer&quot;}" data-analytics-exit-link=""
								target="_self" rel="follow" data-analytics-region="learn more"
								data-analytics-title="Apply now for Apple Card"
								aria-label="Apply now for Apple Card">Apply now<i className="fa-solid fa-chevron-right small ms-2"></i></a>
							<a className="icon icon-after ios"
								href="https://wallet.apple.com/apple-card/setup/feature/ccs?referrer=cid%3Dapy-200-10000036"
								data-rid-relay="{&quot;287&quot;:&quot;referrer&quot;}" data-analytics-exit-link=""
								target="_self" rel="follow" data-analytics-region="learn more"
								data-analytics-title="Apply now for Apple Card"
								aria-label="Apply now for Apple Card">Apply now<i className="fa-solid fa-chevron-right small ms-2"></i></a>
						</div>

					</div>
					<div className="unit-image-wrapper">
						<figure className="unit-image unit-image-apple-card-tile" 
						// data-anim-lazy-image=""
						>
						</figure>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GridItem5;
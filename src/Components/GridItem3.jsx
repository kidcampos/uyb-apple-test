import '../App.css'

const GridItem3 = props => {
	return (
		<div data-unit-id="ipad" data-analytics-section-engagement="name:promo-ipad">
			<div className="module-content">

				<div className="unit-wrapper">
					<a className="unit-link" href="https://www.apple.com/ipad-10.9/" target="_self" rel="follow"
						data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
					<div className="unit-copy-wrapper">
						<h4 className="headline">iPad</h4>
						<h5 className="subhead" role="presentation">Lovable. Drawable. Magical.</h5>


						<div className="cta-links">
							<a className="icon icon-after" href="https://www.apple.com/ipad-10.9/"
								target="_self" rel="follow" data-analytics-region="learn more"
								data-analytics-title="Learn more about iPad"
								aria-label="Learn more about iPad">Learn more<i className="fa-solid fa-chevron-right small ms-2"></i></a>
							<a className="icon icon-after"
								href="https://www.apple.com/us/shop/goto/buy_ipad/ipad" target="_self" rel="follow"
								data-analytics-region="buy" data-analytics-title="Buy iPad"
								aria-label="Buy iPad">Buy<i className="fa-solid fa-chevron-right small ms-2"></i></a>
						</div>

					</div>
					<div className="unit-image-wrapper">
						<figure className="unit-image unit-image-ipad-promo-ipad" 
						// data-anim-lazy-image=""
						>
						</figure>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GridItem3;
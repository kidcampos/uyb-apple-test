import '../App.css'

const GridItem1 = props => {
	return (
		<div data-unit-id="iphone-15" data-analytics-section-engagement="name:promo-iphone-15">
			<div className="module-content">

				<div className="unit-wrapper">
					<a className="unit-link" href="https://www.apple.com/iphone-15/" target="_self" rel="follow"
						data-analytics-region="learn more" aria-hidden="true" tabIndex="-1">&nbsp;</a>
					<div className="unit-copy-wrapper">

						<h4 className="headline">iPhone 15</h4>
						<h5 className="subhead" role="presentation">New camera. New design. Newphoria.</h5>



						<div className="cta-links">
							<a className="icon icon-after" href="https://www.apple.com/iphone-15/"
								target="_self" rel="follow" data-analytics-region="learn more"
								data-analytics-title="Learn more about iPhone 15"
								aria-label="Learn more about iPhone 15">Learn more<i className="fa-solid fa-chevron-right small ms-2"></i></a>



							<a className="icon icon-after"
								href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_15" target="_self"
								rel="follow" data-analytics-region="buy" data-analytics-title="Buy iPhone 15"
								aria-label="Buy iPhone 15">Buy<i className="fa-solid fa-chevron-right small ms-2"></i></a>
						</div>
					</div>
					<div className="unit-image-wrapper">
						<figure className="unit-image unit-image-iphone-15-promo-iphone15-announce"
							// data-anim-lazy-image=""
							>
						</figure>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GridItem1;
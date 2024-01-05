import '../App.css'

const Section1 = props => {
	return (
		<div data-unit-id="fitness-move-year" data-analytics-section-engagement="name:hero-fitness-move-year">
			<div className="module-content">
				<div className="unit-wrapper playing">
					<a className="unit-link" href="https://www.apple.com/apple-fitness-plus/" target="_self"
						rel="follow" aria-hidden="true" tabIndex="-1">&nbsp;</a>
					<a className="unit-link sm-show"
						href="https://fitness.apple.com/subscribe?itscg=10000&amp;itsct=fit-promo-hp_tile-apl-evg-201111"
						target="_self" rel="follow" aria-hidden="true" tabIndex="-1">&nbsp;</a>
					<div className="unit-copy-wrapper">
						<div className="logo-image-container">
							<h2 className="logo-image logo-image-fitness-move-year-logo-apple-fitness">
								<span className="visuallyhidden">Apple Fitness Plus</span>
							</h2>
						</div>
						<h2 className="headline">Happy Move Year</h2>
						<h3 className="subhead" role="presentation">From HIIT to Yoga, start the year moving anytime,
							anywhere.</h3>

						<div className="cta-links">
							<a className="learn-more btn" href="https://www.apple.com/apple-fitness-plus/"
								target="_self" rel="follow" data-analytics-title="learn more - apple fitness plus"
								aria-label="Learn more about Apple Fitness+">Learn more</a>
							<a className="try-free btn"
								href="https://fitness.apple.com/subscribe?itscg=10000&amp;itsct=fit-promo-hp_tile-apl-evg-201111"
								target="_self" rel="follow" data-analytics-title="try it free - apple fitness plus"
								data-rid-relay="{&quot;299&quot;:&quot;itsct&quot;}"
								aria-label="Try Apple Fitness+ for free - footnote 1"
								data-analytics-exit-link=""><span aria-hidden="true">Try it
									free<sup>1</sup></span></a>
						</div>
					</div>

					<div className="unit-image-wrapper video-wrapper" data-inline-media-container="">
						<div className="inline-video video-container">
							<div className="inline-video-media loaded ended">
								<video id="happy-move-year" autoPlay muted playsInline data-inline-media
									data-inline-media-pause-on-exit data-load-timeout="5000"
									data-inline-media-basepath="/105/media/us/home/2023/af2e8c6b-a909-400e-b459-557098d458d3/anim/enhanced-hero"
									aria-label="2024 animation" role="img"
									src="https://www.apple.com/105/media/us/home/2023/af2e8c6b-a909-400e-b459-557098d458d3/anim/enhanced-hero/largetall.mp4"></video>
								<figure className="inline-video-frame-start start-frame"></figure>
								<figure className="inline-video-frame-end end-frame"></figure>
								<figure className="inline-video-frame-static static-screen"></figure>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section1;
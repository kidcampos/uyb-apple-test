import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './Components/NavigationBar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import GridItem1 from './Components/GridItem1';
import GridItem2 from './Components/GridItem2';
import GridItem3 from './Components/GridItem3';
import GridItem4 from './Components/GridItem4';
import GridItem5 from './Components/GridItem5';
import GridItem6 from './Components/GridItem6';
import Carousel from './Components/Carousel';

function App() {

	return (
		<>
			<NavigationBar />
			{/* <main className='main'>
				<section className="homepage-section collection-module" data-module-template="heroes" data-analytics-region="hero">
					<Section1 />
					<Section2 />
					<Section3 />
				</section>
				<section className="homepage-section collection-module" data-module-template="promos" data-analytics-region="promo">
					<GridItem1 />
					<GridItem2 />
					<GridItem3 />
					<GridItem4 />
					<GridItem5 />
					<GridItem6 />
				</section>
				<Carousel />
			</main> */}
		</>
	)
}

export default App

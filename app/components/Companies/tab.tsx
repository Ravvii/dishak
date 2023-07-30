import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import People from '../People';
import Educational from '../Educational';
import Tech from '../Tech';
import Corporates from '../Corporates';
import Startup from '../Startup';

const tabsData = [
	{
		label: 'Product Companies',
		content: getProductcontent(),
		imgSrc: "/assets/carousel/Product-Development.png"
	},
	{
		label: 'Startups',
		content: getStartupscontent(),
		imgSrc: "/assets/carousel/Startup.png"
	},
	{
		label: 'Educational Institutions',
		content: getEducationalcontent(),
		imgSrc: "/assets/carousel/educational-institution.png"
	},
	{
		label: 'Tech Aspirants',
		content: getTechcontent(),
		imgSrc: "/assets/carousel/tech-aspirant.png"
	},
	{
		label: 'Corporates',
		content: getCorporatescontent(),
		imgSrc: "/assets/carousel/Corporates.png"
	}
];

function getProductcontent() {
	return (
		<People />
	)
}

function getTechcontent() {
	return (
		<Tech />
	)
}

function getEducationalcontent() {
	return (
		<Educational />
	)
}

function getCorporatescontent() {
	return (
		<Corporates />
	)
}


function getStartupscontent() {
	return (
		<Startup />
	)
}
export function Tabs() {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
	const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

	const tabsRef = useRef([]);

	useEffect(() => {
		function setTabPosition() {
			const currentTab = tabsRef.current[activeTabIndex];
			setTabUnderlineLeft((currentTab as any)?.offsetLeft ?? 0);
			setTabUnderlineWidth((currentTab as any)?.clientWidth ?? 0);
		}

		setTabPosition();
		window.addEventListener('resize', setTabPosition);

		return () => window.removeEventListener('resize', setTabPosition);
	}, [activeTabIndex]);

	return (
		<div className='tabComp'>
			<div className="relative">
				<div className="flex space-x-3 border-b">
					{tabsData.map((tab, idx) => {
						return (
							<div className='flex-col button-like' key={idx} onClick={() => setActiveTabIndex(idx)}>
								<Image src={tab.imgSrc} alt={tab.imgSrc} width={116} height={36} className='m-auto' />
								<button
									key={idx}
									ref={(el) => ((tabsRef as any).current[idx] = el)}
									className="pt-2 pb-3"
								>
									{tab.label}
								</button>
							</div>
						);
					})}
				</div>
				<span
					className="absolute bottom-0 block h-1 bg-orange-500 transition-all duration-300"
					style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
				/>
			</div>
			<div className="py-4">
				<div>{tabsData[activeTabIndex].content}</div>
			</div>
		</div>
	);
}

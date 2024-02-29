import data from "@/data/data.json";

export function generateStaticParams() {
	return data.map((planet) => ({
		id: planet.name.toString(),
	}));
}

const PlanetInfo = () => {
	return (
		<div>
			{data.map((planet) => (
				<div key={planet.name}>{planet.name}</div>
			))}
		</div>

		// <div>
		// 	<div>
		// 		<div>Planet Image Here</div>
		// 		<div>Planet Info Here</div>
		// 	</div>
		// 	<div>
		// 		<div>Rotation time</div>
		// 		<div>Revolution time</div>
		// 		<div>Radius</div>
		// 		<div>Average Temp</div>
		// 	</div>
		// </div>
	);
};
export default PlanetInfo;

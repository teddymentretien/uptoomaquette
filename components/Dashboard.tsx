import { FC } from 'react';
import UserCard from './UserCard';
import ProjectCarousel from './ProjectCarousel';
import GrowthTools from './GrowthTools';
import Studies from './Studies';

const Dashboard: FC = () => {
	return (
		<div className="p-5 h-full">
			<div className="grid grid-cols-1 md:grid-cols-10 gap-6 h-full">
				<div className="md:col-span-3 space-y-7">
					<UserCard />
					<ProjectCarousel />
				</div>
				<div className="md:col-span-7 flex flex-col justify-between h-full">
					<GrowthTools />
					<Studies />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

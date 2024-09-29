import { FC } from 'react';
import UserCard from './UserCard';
import ProjectCarousel from './ProjectCarousel';
import GrowthTools from './GrowthTools';
import Studies from './Studies';

const Dashboard: FC = () => {
	return (
		<div className="p-5 h-full">
			<div className="grid grid-cols-12 gap-6 h-full">
				<div className="col-span-4 space-y-6">
					<UserCard />
					<ProjectCarousel />
				</div>
				<div className="col-span-8 flex flex-col justify-between h-full">
						<GrowthTools />
						<Studies />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

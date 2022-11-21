import { gql } from '@apollo/client';

const GET_LAUNCHES = gql`
	query getLaunches($limit: Int, $offset: Int, $sort: String) {
		launchesPast(limit: $limit, offset: $offset, sort: $sort) {
			mission_name
			launch_date_local
			launch_year
			launch_site {
				site_name_long
			}
			links {
				article_link
				video_link
			}
			rocket {
				rocket_name
				rocket_type
			}
			ships {
				name
				home_port
				image
			}
		}
	}
`;

export { GET_LAUNCHES };

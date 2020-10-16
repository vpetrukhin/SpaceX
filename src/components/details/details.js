import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import useLaunches from '../useLaunches/useLaunches';
import { Link } from 'react-router-dom';
import Main from '../main/main';
import './details.css';
import YouTube from 'react-youtube';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);

	const {getLaunch} = useLaunches();

	useEffect(() => {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch])
	
	const history = useHistory();

	if (!launch) return null;

	return(
  <>
		<Main name={launch.name}/>
    <main classNameName="details">
		<div className="container">
			<div className="details-row">
				<div className="details-image">
					<img src={launch.links.patch.small} alt={launch.name}/>
				</div>
				<div className="details-content">
					<p className="details-description">{launch.details}</p>
				</div>
			</div>
			<div>
				<YouTube className='details-youtube' videoId={launch.links.youtube_id}/>
			</div>
		</div>
		<Link onClick={history.goBack} className="button button-back">go back</Link>
	</main>
  </>
)};

export default Details;
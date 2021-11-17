import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";
import {setProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 2
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setProfile(response.data)
			})
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
};

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithURLDataProfileContainer = withRouter(ProfileContainer);

export default connect(
	mapStateToProps,
	{setProfile})
(WithURLDataProfileContainer);
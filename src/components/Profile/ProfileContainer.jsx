import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";
import {setProfile} from "../../redux/profile-reducer";
import {profileApi} from "../../api/api";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 2
		profileApi.getUserProfile(userId).then(data => this.props.setProfile(data))
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
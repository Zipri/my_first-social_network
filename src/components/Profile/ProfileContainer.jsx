import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import Profile from "./Profile";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) userId = 2
		this.props.getUserProfileThunkCreator(userId)
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
	{getUserProfileThunkCreator})
(WithURLDataProfileContainer);
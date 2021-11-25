import React from "react";
import s from "./ProfileInfo.module.css";

class UserStatus extends React.Component {
	state = {
		editMode: false
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		return <div className={s.status}>
			{!this.state.editMode
				? <div onClick={this.activateEditMode}>{this.props.status}</div>
				: <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status} />
			}
		</div>
	}
}

export default UserStatus;
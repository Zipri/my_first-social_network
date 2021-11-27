import React from "react";
import s from "./ProfileInfo.module.css";

class UserStatus extends React.Component {
	state = {
		editMode: false,
		bufStatus: this.props.status
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status) {
			this.setState({bufStatus: this.props.status})
		}
	}

	activateEditMode = () => this.setState({editMode: true})
	deactivateEditMode = () => {
		this.setState({editMode: false})
		this.props.updateStatus(this.state.bufStatus)
	}
	onStatusChange = (e) => this.setState({bufStatus: e.currentTarget.value})

	render() {
		return <div className={s.status}>
			{!this.state.editMode
				? <div className={s.notActive}
							 onClick={this.activateEditMode}>{this.props.status || "..."}</div>
				: <input onChange={this.onStatusChange}
								 autoFocus
								 className={s.active}
								 onBlur={this.deactivateEditMode}
								 value={this.state.bufStatus}/>
			}
		</div>
	}
}

export default UserStatus;
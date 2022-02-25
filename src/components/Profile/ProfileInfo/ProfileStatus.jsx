import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

const UserStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => setStatus(props.status), [props.status])

    const onStatusChange = (e) => setStatus(e.currentTarget.value)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return <div className={s.status}>
        {!editMode
            ? <div className={s.notActive}
                   onClick={activateEditMode}>{props.status || "..."}</div>
            : <input onChange={onStatusChange}
                     autoFocus
                     onBlur={deactivateEditMode}
                     value={status}
                     className={s.active}/>
        }
    </div>
};

export default UserStatus;

/* // UserStatus based on classComponent
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
 */
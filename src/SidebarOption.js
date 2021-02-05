import React from "react"
import "./SidebarOption.css"
import Icon from '@material-ui/core/Icon';

function SidebarOption({ text, Icon }) {
    return (
        <div className="sidebarOption">
            < Icon />
            <h2>{text}</h2>       
        </div>
    );
}

export default SidebarOption;

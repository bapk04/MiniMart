import {memo} from "react"
import csgo from "assets/users/image/profile/csgo.jpg";

const balicsgo = () => {
    return <div className="container">
        <img src={csgo} alt="banner" />
    </div>
    
};

export default memo(balicsgo);
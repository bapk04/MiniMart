import {memo} from "react"
import pro from "assets/users/image/profile/pro.webp";

const profilePage = () => {
    return <div className="container">
    <img src={pro} alt="banner" />
</div>
};

export default memo(profilePage);
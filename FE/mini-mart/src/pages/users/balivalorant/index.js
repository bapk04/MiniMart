import {memo} from "react"
import valo from "assets/users/image/profile/valorant.jpg";

const balivalorant = () => {
    return <div className="container">
    <img src={valo} alt="banner" />
</div>
};

export default memo(balivalorant);
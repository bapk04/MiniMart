import {memo} from "react"
import mokhoa from "assets/users/image/profile/mockhoa.jpg";
const mockhoa = () => {
    return <div className="container"> 
    <img src={mokhoa} alt="banner" />
</div>;
};

export default memo(mockhoa);
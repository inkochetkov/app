import { NavLink } from "react-router-dom";


const Project = ({title, img, index}) => {
    return (
        <NavLink to={`/project/${index}`}>
        <p>{index}</p>
        </NavLink>
    )
}

export default Project;
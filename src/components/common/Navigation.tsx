import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

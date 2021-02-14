import {Link} from 'react-router-dom'
const Nav = ()=>{
    return(
        <div className="nav">
            <div className="nav_body container">
            <h2 className="heading">Xmeme</h2>
            <div className="middle"></div>
            <ul className="nav_links">
                <li className="nav_link"><Link to="/" className="link">Memes</Link></li>
                <li className="nav_link"><Link to="/addmeme" className="link">Addmeme</Link></li>
            </ul>
            </div>
        </div>
    );
}

export default Nav;
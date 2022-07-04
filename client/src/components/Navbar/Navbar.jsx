import { Link } from 'react-router-dom'
import './navbar.css'
export default () => {
    return (
    <nav className="navMenu">
      <Link className='link' to="Home">Home</Link>
      <Link className='link' to="#">Blog</Link>
      <Link className='link' to="#">Work</Link>
      <Link className='link' to="#">About</Link>
      <div className="dot"></div>
    </nav>
    )
}
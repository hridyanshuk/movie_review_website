import './auths.css'
import { Link } from 'react-router-dom'
export default () => {
    return (
        <div className="auth">
            <div className="auth_content">
                <div className="auth_title">Sign in to Movies Reviews</div>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button className="auth_button">Sign in</button>
                <Link to='/signup' className="auth_button">Not already a user?</Link>
            </div>
        </div>
    )
}
import './auths.css'
export default () => {
    return (
        <div className="auth">
            <div className="auth_content">
                <div className="auth_title">Sign up to Movies Reviews</div>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <input type="text" placeholder="confirm password" />
                <button className="auth_button">Sign up</button>
            </div>
        </div>
    )
}
import './auths.css'
export default () => {
    return (
        <div className="auth">
            <div className="auth_content">
                <div className="auth_title">Sign in to Movies Reviews</div>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button className="auth_button">Sign in</button>
            </div>
        </div>
    )
}
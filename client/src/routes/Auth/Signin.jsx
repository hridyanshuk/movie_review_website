import './auths.css'
export default () => {
    return (
        <div className="auth">
            <div className="auth_content">
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button className="auth_button">Sign in</button>
            </div>
        </div>
    )
}
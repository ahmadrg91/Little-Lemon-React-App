function Header({ children }){
    return (
        <header>
            <img src="images/logo.jpg" alt="logo"/>
            {children}
        </header>
    )
}

export default Header;
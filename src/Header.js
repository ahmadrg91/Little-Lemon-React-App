function Header({ children }){
    return (
        <header>
            <img src="images/logo.jpg" alt="logo" width={200}/>
            {children}
        </header>
    )
}

export default Header;
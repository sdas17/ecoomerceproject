const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3VD_fa55t-hJjEgasAu7xNfZOwyoV3Z2ow&s' alt='food-logo' style={{ width: '76px' }}></img>
                </div>
                <div className='nav-link'>
                    <ul style={{ listStyleType: "none", display: "flex" }}>
                        <li style={{ paddingLeft: '20px' }}>Home</li>
                        <li style={{ paddingLeft: '20px' }}>About us</li>
                        <li style={{ paddingLeft: '20px' }}>Contact</li>
                        <li style={{ paddingLeft: '20px' }}>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header
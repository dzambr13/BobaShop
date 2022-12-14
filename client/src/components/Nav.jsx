import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar">
            <h4>🧋 </h4>
        <div className="Navie">
            <Link to="/">Home</Link>
            <Link to="/Bobas">Boba Shops</Link>
            <Link to="/Login">Community Posts</Link>
        </div>
        </nav>
    )
}

// console.log('home linked to nav')
// console.log('boba shop linked to navbar')
// console.log('posts linked to navbar')

export default Nav
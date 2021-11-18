import Link from 'next/link'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Guillermo Marcano</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/github">
                            <a className="nav-link">GitHub</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default NavBar;
import Link from 'next/link'

export default function Navbar() {
    return <nav>
        <h1>
            <a href="https://ryanmontville.com">Ryan Montville</a>&nbsp;|&nbsp;
            <Link href="/"><span className="material-symbols-outlined">
                live_tv
            </span>
            MovieLogger</Link></h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li>Movies</li>
        </ul>
    </nav>
  }
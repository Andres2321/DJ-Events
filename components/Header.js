import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div>
                <Link href='/'>
                    <a>DJ Events</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

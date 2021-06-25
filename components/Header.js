import Link from 'next/link'
import Search from "./Search"

export default function Header() {
    return (
        <header>
            <div>
                <Link href='/'>
                    <a>DJ Events</a>
                </Link>
            </div>

            <Search />
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/events/add'>
                            <a>Add event</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

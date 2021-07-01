import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'


export default function DashboardEvent({evt, handleDelete}) {
    return (
        <div>
            <h4>
                <Link href={`/events/${evt.slug}`}>
                <a>{evt.name}</a>
                </Link>
            </h4>
            <Link href={`/events/edit/${evt.id}`}>
                <a>
                    <FaPencilAlt /> <span>Edit Event</span>
                </a>
            </Link>
            <a hre="#" onClick={() => handleDelete(evt.id)}>
                <FaTimes /> <span>Delete</span>
            </a>
        </div>
    )
}

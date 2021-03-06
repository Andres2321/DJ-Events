import Layout from '@/components/Layout'
import DashboardEvent from '@/components/DashboardEvent'
import { API_URL } from '@/config/index'
import { parseCookies } from "@/helpers/index"


export default function DashboardPage({events}) {
    const deleteEvent = (id) => {
        console.log(id)
    }
    return (
        <Layout title="User Dashboard">
            <div>
                <h1>Dashboard</h1>            
                <h3>My Events</h3>
                {events.map((evt) => (
                    <DashboardEvent key={evt.id} evt={evt}
                    handleDelete={deleteEvent}/>
                ))}
            </div>
        </Layout>
    )
}

export async function getServerSideProps({req}) {
    const {token} = parseCookies(req)

    const res = await fetch(`${API_URL}/events/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    const events = await res.json()

    return {
        props: {
            events
        }
    }
}
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "components/EventItem";

export default function SearchPage({ events }) {

  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({query: {term}}) {

    const query = qs.stringify({
        _where:{
            _or: [
                {name_contains: term},
                {performers_contains: term},
                {description_contains: term},
                {venue_contains: term},
            ]
        }
    })
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
  };
}

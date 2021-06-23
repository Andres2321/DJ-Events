import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function EventPage({ evt }) {
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div>
        <div>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {new Date(evt.date).toLocaleDateString("en-US")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div>
            <Image
              src={evt.image[0].formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Performers</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);

  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}

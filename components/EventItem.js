import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {

  // console.log(evt.image[0].formats.thumbnail.url)

  return (
    <div>
      <div>
        <Image
          src={ evt.image ? evt.image.formats.thumbnail.url : "/images/event-default.png" }
          width={170}
          height={100}
        />
      </div>
      <div>
        <span>
          { new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}</span>
        <h3>{evt.name}</h3>
      </div>
      <div>
          <Link href={`/events/${evt.slug}`}>
              <a>Details</a>
          </Link>
      </div>
    </div>
  );
}

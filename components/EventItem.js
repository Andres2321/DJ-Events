import Link from "next/link";
import Image from "next/image";

export default function EventItem({ evt }) {
  return (
    <div>
      <div>
        <Image
          src={evt.image ? evt.image : "/images/event-default.png"}
          width={170}
          height={100}
        />
      </div>
      <div>
        <span>{evt.date} at {evt.time}</span>
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

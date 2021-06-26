import Layout from "@/components/Layout";
import moment from 'moment'
import { API_URL } from "@/config/index";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/reactToastify.css";
import { formatWithValidation } from "next/dist/next-server/lib/utils";
import Image from 'next/image'
import {FaImage} from "react-icons/fa"

export default function EditEventPage({evt}){
  const [values, setValues] = useState({
    name: evt.name,
    performers: evt.performers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description,
  });

  const[imagePreview, setImagePreview] = useState(evt.image ? evt.image.formats.thumbnail.url : null)

  const router = useRouter()

  const handleSubmit = async (e) => {
      e.preventDefault()
    
      // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
        )

    if (hasEmptyFields) {
        toast.error('Please fill in all fields')
    }
    const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
    })
    if (!res.ok) {
      console.log(res)
        toast.error('Something Went Wrong')    
    } else {
        const evt = await res.json()  
        console.log(evt)    
        router.push(`/events/${evt.slug}`)
    }  
}


  const handleInputChange = (e) => {    
      const { name, value } = e.target    
      setValues({ ...values, [name]: value })  
    }

  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Performers</label>
            <input
              type="text"
              id="performers"
              name="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Venue</label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={moment(values.date).format('yyy-MM-DD')}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Time</label>
            <input
              type="text"
              id="time"
              name="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input type="submit" value="Update Event" />
      </form>

      <h2>Event Image</h2>
      {imagePreview ? (
          <Image 
          src={imagePreview}
          height={100}
          width={170}
          />
      ):
      <div>
          <p>No Image uploaded</p>
      </div>
      }

      <div>
          <button>
                <FaImage /> Set Image
          </button>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({params: {id}}) {
    const res = await fetch(`${API_URL}/events/${id}`)
    const evt = await res.json()

    return{
        props: {
            evt
        }
    }
}
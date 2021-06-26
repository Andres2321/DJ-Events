import { useState } from 'react'
import {API_URL} from '@/config/index'


export default function ImageUpload({evtId, imageUploaded}) {

    const [image, setImage] = useState(null)

    const handleSubmit= async (e) => {
        e.preventDefault()

        // const formData = new FormData()
        // formData.append('files', image)
        // formData.append('ref', 'events')
        // formData.append('refid', evtId)
        // formData.append('field', 'image')

        const formData = {
            'files': image,
            'ref': 'events',
            'refid': evtId,
            'field': 'image'
        }

        console.log(formData)

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData
        })

        if(res.ok) {
            // imageUploaded()
        }
    }

    const handleFileChange = (e) => {
        setImage(e.target.files[0])
    }
    

    return (
        <div>
            <h1>Upload Event Image</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="file" onChange={handleFileChange}/>
                </div>
                <input type="submit" value="Upload"/>
            </form>
        </div>
    )
}

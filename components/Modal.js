import {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import {FaTimes} from 'react-icons/fa'

export default function Modal({show, onCLose, children, title}) {

    const [isBrowser, setIsbrowser] = useState(false)

    useEffect(() => setIsbrowser(true))

    const handleClose = (e) => {
        e.preventDefault()
        onCLose()
    }

    const modalContent = show ? (
        <div>
            <div>
                <div>
                    <a href="#">
                        <FaTimes />
                    </a>
                </div>
                {title && <div>{title}</div>}
                <div>{children}</div>
            </div>
        </div>
    ) : null


        if(isBrowser){
            return ReactDom.createPortal(modalContent, document.getElementById('modal-root'))
        } else {
            return null
        }


}

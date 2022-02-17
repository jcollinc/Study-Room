import React, { useState } from 'react';


function Footer() {

    const [modal, setModal] = useState(false)

    return (
        <footer>
            <button onClick={e => setModal(true)} id="contact" to="">Customer Service</button>

            <div className={modal ? 'modal-active' : 'modal'} id='modal'>
                <div className='modal-header'>
                    <div className='title'>Feedback received!</div>
                    <button onClick={() => setModal(false)}className='close-button'>x</button>
                </div>
                <div className='modal-body'>
                    Thank you for helping us build a better Flatbucks! Goodbye!
                </div>
		    </div>
		    <div id={modal ? 'overlay-active' : 'overlay'}> </div>
        </footer>
    )
}

export default Footer
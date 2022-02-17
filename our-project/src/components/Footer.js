import React, { useState } from 'react';


function Footer() {

    const [modal, setModal] = useState(false)

    return (
        <footer>
            <button onClick={e => setModal(true)} id="contact" to="">Contact Us</button>

            <div className={modal ? 'modal-active' : 'modal'} id='modal'>
                <div className='modal-header'>
                    <div className='title'></div>
                    <button onClick={() => setModal(false)}className='close-button'>x</button>
                </div>
                <div className='modal-body'>
                    Thank you for helping us build a better Flatbucks!
                </div>
		    </div>
		    <div id={modal ? 'overlay-active' : 'overlay'}> </div>
        </footer>
    )
}

export default Footer
import React from 'react'

function Popup(props) {

    return (
        <React.StrictMode>
            <section className={props.class} id={props.id}>
                <div className="popup__content">
                    <div id="close">
                    </div>
                    {props.message}
                </div>
            </section>
        </React.StrictMode>
    )
}

export default Popup;
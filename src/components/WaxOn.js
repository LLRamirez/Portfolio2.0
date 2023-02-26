import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image'


export default function WaxOn(){
    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <div>
            
<div>

<Image
className="object-cover object-center rounded"
alt="jp-temple-nagoya"
src="./japantemple.jpg"
onClick={openModal}
/>
{/* <button
onClick={openModal}>SpeakEasy in Japan</button> */}
<Modal
isOpen={modalIsOpen}
onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
// style={customStyles}
contentLabel="onRequestClose Example"
>
<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Nagoya</h2>

<div>sdaskdjaslkjdhakljshd Bunch of stories and stuff I write</div>

<div>
<Image
className="object-cover object-center rounded"
alt="jp-temple-nagoya"
src="./japantemple.jpg"
/>

<button onClick={closeModal}>close</button>
</div>

</Modal>

</div>
        </div>
    )
}
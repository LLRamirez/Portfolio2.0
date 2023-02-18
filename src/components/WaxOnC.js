import React, { useState } from 'react';
import Modal from 'react-modal';

export default function WaxOnC(){
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

<button onClick={openModal}>Ecudaor</button>
<Modal
isOpen={modalIsOpen}
onAfterOpen={afterOpenModal}
onRequestClose={closeModal}
// style={customStyles}
contentLabel="onRequestClose Example"
>
<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

<div>sdaskdjaslkjdhakljshd Bunch of stories and stuff I write</div>

<div>
<img
className="object-cover object-center rounded"
alt="me-laying-down"
src="./sideeye.png"
/>

<button onClick={closeModal}>close</button>
</div>

</Modal>

</div>
        </div>
    )
}
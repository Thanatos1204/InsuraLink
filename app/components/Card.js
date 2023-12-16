import React from 'react';
import './Card.css'
import Image from 'next/image';

const Card = (props) => {
  return (
    <div>
      <div class="card">
        <Image src={props.imageURL} width={200} height={200}></Image>
        <div class="card__content">
            <p class="card__title">{props.cardTitle}</p>
            <p class="card__description">{props.cardDescription}</p>
        </div>
        </div>
    </div>
  )
}

export default Card

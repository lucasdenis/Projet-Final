import React from 'react'
import styles from './contact-items.module.css';

export default function ContactItem(props) {
    
    return (
        <div className={styles.container}>
            <h1>Contact Item</h1>
             { <img src={props.data.image} />
            <div className={styles.info}>
                <span className={styles.label}>{props.data.wine}, {props.data.winery}</span>
                <span className={styles.rating}>Rating: {props.data.rating.average}</span>
    </div> }
        </div> 
    )
}

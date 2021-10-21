import React from 'react'
import './List.css'

export default function List(props){
  return (
    <ul>
      {props.items.map((item) => (
        <li className='list-item' key={item.id}>
          <span 
            className='list-item-span'
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{textDecoration: item.complete ? 'line-through' : 'none'}}  
          >
              {item.name}
          </span>
          <button className='list-item-remove' onClick={() => props.remove(item)}>
            X
          </button>
        </li>
      ))}
    </ul>
  )
}
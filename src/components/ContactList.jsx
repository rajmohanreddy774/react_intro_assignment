import React, { useState } from 'react'
import { ContactCard } from './Contactcard'
import "./contact.css"

const conData=[
    {
        Id:1,
        Name:"Nrupul Dev",
        Email:"nrupul@gmail.com",
        Phone:"8967901467",
        img:"https://unitus.vc/wp-content/uploads/2020/08/nrupul.jpeg"
    },
    {
        Id:2,
        Name:"Yogesh",
        Email:"yogesh@gmail.com",
        Phone:"0942877644",
        img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg"

    },
    {
        Id:3,
        Name:"Arjun",
        Email:"arjun@gmail.com",
        Phone:"98263576987",
        img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Arjun_3848ab5fe7.jpg"

    },
    {
        Id:4,
        Name:"Albert Sebastian",
        Email:"albert@gmail.com",
        Phone:"98250892798",
        img:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg"

    }
]

export const ContactList = () => {
    const [data, setData]=useState(conData)
  return (
    <div >
    { data.map(items=>
    <ContactCard 
    key={items.Id}
    Name={items.Name}
    Email={items.Email} 
    Phone={items.Phone}
    img={items.img}
    />)
}
    </div>
  )
}


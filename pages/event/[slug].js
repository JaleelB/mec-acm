import axios from 'axios';
import React from 'react'

//tell next js how many pages there are
export async function getStaticPaths(){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/events`)
    const events = await res.data.data;

    const paths = events.map( event => {
        params: { slug: event.attributes.Slug }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

  const { slug } = params;
  console.log(slug)

  
};

const Event = () => {
  return (
    <div>Event</div>
  )
}

export default Event
import React from 'react'
import SectionTitle from './SectionTitle';
import servicedata from '../data/servicedata';
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <div className='py-12'>
        <SectionTitle>Our Services</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
          {
            servicedata.map((service) => {
                return(
                    <ServiceItem 
                    key={service.title}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    ></ServiceItem>
                    
                )
            })
          }
        </div>
    </div>
  )
}

export default Services
import React, { useState } from 'react';
import AccordionLayout from './layout';

const Accordion = ({
    section=[]
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const datum = section.length > 0 ? section : [{
        title: "Accordion1",
        value: "Lorem Ipsum dolor sit amet"
    }, {
        title: "Accordion2",
        value: "Lorem Ipsum dolor sit amet"
    }]
  return (
      <div className='flex flex-col justify-center items-center'>
        {
            datum.map((item, index) => (
                <AccordionLayout 
                    title={item.title}
                    index={index}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    {item.type===2?
                        item.value.map(item=>(
                            <div>
                                <b>{item.title}</b>
                                {item.steps.map(i=><li>{i}</li>)}
                            </div>
                        ))
                    :item.value}  
                </AccordionLayout>
            ))
        }
      </div>
  );
};

export default Accordion;
import React from 'react';
import tw from "twin.macro";

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
  const Container = tw.div `flex w-full justify-between p-2 mt-2 bg-gray-400`
  const Title = tw.div `flex`
  const Icons = tw.div `flex items-center justify-center`
  const ChildConteiner = tw.div `shadow-lg bg-gray-200 p-4 mb-6`

  return (
    <>
        <Container onClick={() => handleSetIndex(index)}>
            <Title>
                <div className='text-white font-bold'>{title}</div>
            </Title>
            <Icons>
                {
                (activeIndex === index) 
                ? <BsFillArrowDownCircleFill className='w-8 h-8' />
                : <BsFillArrowUpCircleFill className='w-8 h-8' />
                }
            </Icons>
        </Container>

        {(activeIndex === index) && (
            <ChildConteiner>
              {children}
            </ChildConteiner>
        )}
    </>
  );
};

export default AccordionLayout;

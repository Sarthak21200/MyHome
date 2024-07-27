import React from 'react';
import  BlogPart from '../component/MainSection/BlogPart/BlogPart'; 
import House from '../component/MainSection/House/House1'; 
import { SubHeading } from "../component/SubHeading/SubHeading";
import { CommonHeading } from "../component/Heading/CommonHeading";
import { HeroSection } from '../component/MainSection/HeroSection';
import Projects from '../component/MainSection/Projects/Projects';
import Projects1 from '../component/MainSection/Projects/Projects1';


const howitwork = () => {
    return (
        <div className='bg-white'>
            <House />
            <div className="lg:max-w-[1290px] w-full mx-auto lg:px-[18px] mt-[60px] mb-[40px]">
      <CommonHeading className="text-left">Our Projects</CommonHeading>
      <SubHeading className="text-left w-[630px] lg:px-0 px-[10px] text-[14px]">
        From a couple to a large Indian family, we have houses built with emotions for everyone.
      </SubHeading>
      </div>
            <Projects/>
            <Projects />
            <Projects />
        </div>
    );
}

export default howitwork;
"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import constructionimage01 from "../../../../../public/assets/images/Constructionimage01.png";
import constructionimage02 from "../../../../../public/assets/images/Constructionimage02.png";
import constructionimage03 from "../../../../../public/assets/images/Constructionimage03.png";
import constructionimage04 from "../../../../../public/assets/images/Constructionimage04.png";
import { CommonSlider } from "../../Utils/CommonSlider/CommonSlider";

// import constructionimage01 from "@/public/assets/images/ConstructionImage01.png";
// import constructionimage02 from "@/public/assets/images/ConstructionImage02.png";
// import constructionimage03 from "@/public/assets/images/ConstructionImage03.png";
// import constructionimage04 from "@/public/assets/images/ConstructionImage04.png";

export const ConstructionSection = () => {
  const data = [
    {
      icon: constructionimage01,
      title: "Modular kitchen",
      subHeading: "Functional kitchen, wardrobe and storage",
    },
    {
      icon: constructionimage02,
      title: "Full home interior",
      subHeading: "Latest interior solutions for your home",
    },
    {
      icon: constructionimage03,
      title: "End-to-end construction",
      subHeading: "Latest Home solutions",
    },
    {
      icon: constructionimage04,
      title: "Luxury interiors",
      subHeading: "Latest Home solutions",
    },
  ];

  return (
    <div
      id="services"
      className="lg:max-w-[1290px] w-full mx-auto lg:px-[18px] mt-[60px] mb-[40px]"
    >
      <CommonHeading className="text-center">
        One-stop shop for all construction and interiors
      </CommonHeading>
      <div className="w-full flex justify-center items-center my-[10px]">
        <p className="text-center w-[630px] lg:px-0 px-[10px] text-[14px]">
          Be it end-to-end construction, interior or modular solutions, we
          have it all for your home or office. With a wide range of furniture
          & decor, we have your back from start to finish.
        </p>
      </div>

      <div className="relative lg:max-w-[1290px] w-full mx-auto min-h-[510px] h-[500px] overflow-hidden">
        <CommonSlider slidesShow={3} autoPlay={true} className="py-6 lg:mx-auto">
          {data.map((item, index) => (
            <div
              className="flex flex-col border-[2px] h-auto shadow-lg rounded-[15px] mb-[20px] w-[calc(100% / 3 - 20px)]"
              key={index}
            >
              <Image
                src={item.icon}
                alt={item.subHeading}
                className="h-[200px] rounded-t-[15px] object-cover"
              />
              <div className="bg-blue-100 p-[20px] flex h-[200px] flex-col items-center gap-[20px] rounded-b-[15px]">
                <p className="text-[#575757] text-[20px] font-semibold">
                  {item.title}
                </p>
                <p className="w-[267px] text-[#575757] text-[16px] text-center">
                  {item.subHeading}
                </p>
                <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-[10px]"
                    />
              </div>
            </div>
          ))}
        </CommonSlider>
      </div>
    </div>
  );
};
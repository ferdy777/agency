import React from "react";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import SupportTeamImg from "@/public/images/supportteam.jpg";
import Image from "next/image";
const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
        <div>
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Do you need help? our support Team ready to help{" "}
          </h1>
          <p className="text-gray-900 opacity-80 trxt-[17px] mt-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            facere est nam eius sunt rem fugiat velit assumenda sit, sed eveniet
            aspernatur blanditiis hic dolores dolorum incidunt rerum a
            distinctio.
          </p>
          <div className="flex items-center space-x-6 mt-[2rem] ">
            <Image src={Icon1} alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Email client support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sint eos unde tempora quos consequatur voluptatibus ut
                consequuntur molestiae culpa. Hic mollitia, a quisquam sed alias
                doloribus ipsam corrupti nesciunt?
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem] ">
            <Image src={Icon2} alt="icon" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">
                Live Ticket support
              </h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus sint eos unde tempora quos consequatur voluptatibus ut
                consequuntur molestiae culpa. Hic mollitia, a quisquam sed alias
                doloribus ipsam corrupti nesciunt?
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <Image src={SupportTeamImg} alt="support" />
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;

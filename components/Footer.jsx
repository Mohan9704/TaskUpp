import React from "react";
import Logo from "./Logo";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const FooterStyles = {
  container:
    " flex flex-col pb-20 md:pt-4 md:pb-6 space-y-6 md:space-y-20 bg-gray-900",
  leftFooter:
    "flex flex-col md:flex-row md:justify-between p-12 space-y-16 md:space-y-0",
  logo: "flex flex-col space-y-16 py-6 md:py-0 px-12 ",
  rightFooter:
    "grid w-full h-72 max-w-7xl grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 justify-between md:px-6",
  links:
    "flex flex-col items-start space-y-4 sm:text-sm mb-6 ml-6 font-urbanist font-semibold text-2xl text-gray-50",
  links__h4: "text-xl font-semibold text-md font-inter text-gray-50 uppercase",
  links__p:
    "text-sm md:text-[15px]  font-inter font-normal text-white cursor-pointer hover:text-indigo-400 pt-2",
  bottomFooter: "flex items-center px-20",
  bottomFooter__p: "text-md md:text-lg font-urbanist font-normal text-gray-50",
};

const Footer = () => {
  return (
    <footer className="relative flex  w-full fancy-border  bg-gradient-to-r from-[#b179ee] via-[#8a85f0] to-[#8bb4f5] space-y-10 z-20 pt-52 pb-4 -mt-24">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className={FooterStyles.rightFooter}>
          <div className={FooterStyles.links}>
            <h4 className={FooterStyles.links__h4}>Products</h4>
            <p className={FooterStyles.links__p}>Features</p>
            <p className={FooterStyles.links__p}>Why Kerjho</p>
            <p className={FooterStyles.links__p}>Technology</p>
            <p className={FooterStyles.links__p}>Security</p>
          </div>
          <div className={FooterStyles.links}>
            <h4 className={FooterStyles.links__h4}>Solution</h4>
            <p className={FooterStyles.links__p}>Procurement</p>
            <p className={FooterStyles.links__p}>Update</p>
            <p className={FooterStyles.links__p}>Workflow</p>
            <p className={FooterStyles.links__p}>Data Entry</p>
          </div>
          <div className={FooterStyles.links}>
            <h4 className={FooterStyles.links__h4}>Company</h4>
            <p className={FooterStyles.links__p}>Career</p>
            <p className={FooterStyles.links__p}>Case Study</p>
          </div>
          <div className={FooterStyles.links}>
            <h4 className={FooterStyles.links__h4}>Socials</h4>
            <p className={FooterStyles.links__p}>Facebook</p>
            <p className={FooterStyles.links__p}>LinkedIn </p>
            <p className={FooterStyles.links__p}>Twitter</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-t-[1px] border-gray-100 mt-4 mx-12 py-4">
          <div className="flex flex-col space-y-2 ">
            <Logo isFooter={true} />
            <p className="text-sm pl-4 font-medium font-inter text-gray-100">
              © 2022 TaskUpp | Made by
              <span className="pl-1 text-md font-bold font-inter text-violet-100">
                @raivikas200
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4 ">
            <a href="https://github.com/raiv200" target="_blank">
              <AiFillGithub className="text-gray-100" size="2rem" />
            </a>
            <a href="https://www.linkedin.com/in/raivikas200/" target="_blank">
              <AiFillLinkedin className="text-gray-100" size="2rem" />
            </a>
            <a href="https://twitter.com/raivikas200" target="_blank">
              <AiOutlineTwitter className="text-gray-100" size="2rem" />
            </a>
            <a href="https://nextjsdev.hashnode.dev/raivikas200" target="_blank">
              <SiHashnode className="text-gray-100" size="2rem" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

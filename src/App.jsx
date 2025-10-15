import React from "react";
import Header from "./components/Header";

import screen from "./assets/Rectangle 385.png";
import banner from "./assets/background.png";
import bg from "./assets/bg.png";
import time from "./assets/24.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";
import bg2 from "./assets/bg2.png";
import bell from "./assets/bell.png";
import man from "./assets/man.png";
import footer from "./assets/footer.png";

const card = [
  {
    head: "Reliable ransomware safeguard,ensuring quick recovery",
    para: "Dont let criminals hold your data hostage. With Aif Firewall, data recovery is straightfonivard-eliminate the malware, delete attacker-encnyipted iflles, and restore a secure copy of Your Valuable data",
  },
  {
    head: "Affordable and user-friendly data protection",
    para: "Flex repi Simple to configure and manage, Asif Firewall Backup is a secure, all-in-one solution that with< provides total peace of mind. With a capacity- based, all-inclusive subscription model, you pay only for the protection you need today, avoiding large upfront hardware costs-all essentials included.",
  },
  {
    head: "Flexible on-premises and cloud replication for any environment",
    para: "Wih cloud-based subscriptions, Asif Firewall Bockup securely backs up and recovers data across virtual and physical environments",
  },
];

const dot = [
  { name: "Irreversible Data Backups" },
  { name: "Multi-Layered Login Protection" },
  { name: "End-to-End Data Protection" },
  { name: "Role-Defined Access Security" },
  { name: "Block Unauthorized Network Sharing" },
];
const cards = [
  {
    img: card1,
  },
  {
    img: card2,
  },
  {
    img: card3,
  },
  {
    img: card4,
  },
];

const footers  = [
  {
    name: "Privacy Policy"
  },
  {
    name: "Terms and Conditions"
  },
  {
    name: "Website Terms & Conditions"
  },
  {
    name: "Accessibility Statement"
  },
  {
    name: "Cookie Preferences"
  },
]

const App = () => {
  return (
    <>
      <Header />
      <section className="w-full lg:h-[65vh] max-sm:h-auto">
        <img
          src={banner}
          className="w-full lg:h-[542px] object-cover"
          alt=""
          srcset=""
        />
        <div className="h-20 bg-[#171717] lg:px-6 flex flex-col text-white ">
          <p className="max-sm:text-[12px] font-Inter">Asif Firewall Data Protection</p>

          <div className="flex gap-x-5 lg:mt-4 font-Inter">
            <p className="hover:underline hover:text-[#6DDCFF]">overview</p>
            <p className="hover:underline hover:text-[#6DDCFF]">Features</p>
            <p className="hover:underline hover:text-[#6DDCFF]">Modals</p>
            <p className="hover:underline hover:text-[#6DDCFF]">Faqs</p>
          </div>
        </div>
      </section>

      <section
        className=" h-auto  lg:mt-[5rem] text-white lg:px-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full lg:h-48 justify-center items-center flex">
          <p className="text-center lg:w-[1286px] lg:text-[24px]  font-medium font-Inter">
            AoIfFioml Baclup Provides Businesses With A Flexible, Reliable, And
            Cost-Effective Salution Far Data Backup And Reloration. Depibjable
            As A Physical Or Virtual Appliance On-Premises, Asif Firewall
            BackupSenves As A Backup Tayat FarData From Various Sources,
            Including Servers, Virtual Machines, Databases, And Appfications
          </p>
        </div>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 font-Inter">
          {card.map((item) => (
            <div className="lg:px-3">
              <p className="font-bold text-2xl">{item.head}</p>
              <p className=" mt-10">{item.para}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 max-sm:grid-cols-1 lg:h-auto  pt-10 lg:px-10 bg-black text-white">
        <div className="font-Inter">
          <p className="text-2xl">
            Secure Your Data with Advanced Ransomware Defense
          </p>
          <p className="mt-10">
            Most cybersecurity experts agree that the top priority in ransomware
            protection is the ability to recover from an attack with a secure
            backup. Asif Firewall Backup's ransomware protection
            features include:
          </p>
          <div>
            <ul className="list-disc ml-5 mt-1">
              {dot.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={screen} alt="" srcset="" />
          <p className="text-center">
            Streamlined Interface for Quick and Simple Data Restoration
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 max-sm:grid-cols-1 lg:h-auto pt-20 lg:px-10 bg-black text-white font-Inter">
        <div className="flex flex-col justify-start items-center">
          <img src={screen} alt="" srcset="" />
          <p className="text-center">
            Streamlined Interface for Quick and Simple Data Restoration
          </p>
        </div>

        <div>
          <p className="font-semibold text-[24px]">
            Efficient, Cost-Effective Data Protection Made Easy
          </p>
          <p className="mt-10 lg:w-[646px] font-normal text-[20px]">
            Asif Firewall offers flexible backup options, including physical and
            virtual solutions, with no hidden fees. Each Asif Firewall Backup
            subscription includes the appliance with local storage, software,
            and support, along with optional cloud storage, a 4-year hardware
            refresh, and our Instant Replacement service Choose the deployment
            that works best for your environment
          </p>

          <ul className="list-disc ml-5 mt-10 font-normal text-[24px">
            <li>Reliable Backup Appliance from Asif Firewall</li>
            <li>Virtual Backup Solution from Asif Firewall</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 max-sm:grid-cols-1 lg:h-auto  lg:px-10 bg-black text-white pt-20">
        <div>
          <p className="font-semibold text-[24px]">
            Effortless Data Replication in the Cloud or On-Premises
          </p>

          <p className="mt-10 text-[20px] font-normal">
            User error, malicious deletion, natural disasters, and cyberattacks
            can all threaten your data and, ultimately, your business. Asif
            Firewall can securely back up and recover data, including files
            located in both physical and virtual environments, such as:
          </p>

          <ul className="list-disc ml-5 mt-10 font-normal text-[24px w-[653px]">
            <li>VMware vSphere and Microsoft Hyper-V</li>
            <li>
              Microsoft Windows, Linux, MacOS, Microsoft Windows, <br /> SQL
              data, and Microsoft Exchange
            </li>
            <li>Network-attached storage</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img src={screen} alt="" srcset="" />
          <p className="text-center">
            Streamlined Interface for Quick and Simple Data Restoration
          </p>
        </div>
      </section>

      <section className="grid grid-cols-2 max-sm:grid-cols-1 lg:h-auto bg-black text-white lg:pt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={time} alt="" srcset="" />
          <p className="text-center w-[515px]">
            Get uninterrupted, expert support from our in-house engineers, with
            no phone trees, around the clock
          </p>
        </div>

        <div>
          <p className="font-semibold text-[24px]">
            Asif Firewall: The Trusted Choice for Cyber Protection
          </p>

          <p className="mt-10 text-[19px] font-normal">
            User error, malicious deletion, natural disasters, and cyberattacks
            can all threaten your data and, ultimately, your business. Asif
            Firewall can securely back up and recover data, including files
            located in both physical and virtual environments, such as:
          </p>

          <ul className="list-disc ml-5 mt-10 font-normal text-[20px] lh:w-[653px]">
            <li>
              Asif Firewall Cloud-to-Cloud Backup. Safeguard your Microsoft 365
              environment, including emails, attachments, calendars, contacts,
              tasks, as well as Teams, SharePoint Online, OneDrive, OneNote, and
              Entra ID
            </li>
          </ul>
        </div>
      </section>
      <section className="h-screen bg-black text-white  lg:pt-40 lg:px-5 font-Inter">
        <p className="font-bold text-[50px] font-Cairo">Related Articles</p>

        <div className="grid grid-cols-4 max-sm:grid-cols-1 lg:mt-10 text-white gap-x-5 font-Inter">
          {cards.map((item) => (
            <div className="lg:h-[503px] max-sm:h-auto bg-gradient-to-tl from-[#171717] to-[#5A5A5A00] rounded-md font-Inter">
              <div className="flex flex-col  items-center">
                <div className="lg:w-[271px] lg:h-[198px] rounded-[15px] bg-black mt-5">
                  <img src={item.img} alt="" />
                </div>

                <div className="mt-3">
                  <p className="lg:w-[320px] lg:text-[30px] text-center leading-none font-bold capitalize">
                    How to Protect threats from hackers
                  </p>
                </div>
                <div className="lg:mt-10">
                  <p className="w-[350px] font-normal text-[20px] text-center leading-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-start ps-10 lg:mt-10">
                <p className="px-3 py-2 cursor-pointer rounded-md bg-gradient-to-tr from-[#6DDCFF] to-[#7F60F9] text-white">
                  Learn More
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="w-full h-96  text-white grid grid-cols-12 max-sm:grid-cols-1 justify-center font-Inter"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className=" col-span-9 items-center justify-center flex">
          <div className=" flex-col">
            <p className="font-bold text-[35px]">
              Join Us for Security Insights, Threat Spotlights, and More.
            </p>
            <div className="flex justify-start items-start">
              <p className="flex text-[25px] font-normal ">
                Get the newest insights, research, and news sent directly to
                you.
              </p>
            </div>

            <div className="mt-10">
              <p>Email Address *</p>
              <div className="flex gap-x-2">
                <input
                  type="text"
                  placeholder="exapmle@frsharmail.com"
                  className="border w-[586px] py-2 ps-1 rounded-md outline-none"
                />
                <button className="border flex px-5  items-center gap-x-3 cursor-pointer">
                  <img src={bell} className="w-[22px] h-[22px]" alt="" />
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center mt-3">
          <img src={man} alt="" />
        </div>
      </section>

      <section>
        <img src={footer} className="w-full" alt="" />
      </section>

      <footer className="grid grid-cols-6 max-sm:grid-cols-1 h-80 max-sm:h-auto bg-[#141415] lg:px-5 gap-x-8 text-white font-Inter max-sm:hidden">
        <div className="h-full">
          <p className="font-normal lg:text-[32px] ">Company name</p>
          <p className="text-[20px] font-normal mt-2">
            Subscribe to Our Newsletter:
          </p>
          <p className="text-[14px] font-normal">
            Receive Updates on Asif firewall and Special Promotions!
          </p>
          <div className="flex mt-10">
            <input type="text" className="border placeholder:text-gray-400" placeholder="Email" />
            <p className="px-2 py-1 border rounded-br-[10px] rounded-tr-[10px] ">
              Submit
            </p>
          </div>
        </div>

        <div className="h-full  pt-4">
          <p className="font-normal text-[18px]">Product</p>
          <div className="mt-2">
            <p className="text-[16px] font-normal">Email Protection</p>
            <p className="text-[16px] font-normal">Data Protection</p>
            <p className="text-[16px] font-normal">Cloud Security</p>
            <p className="text-[16px] font-normal">Network Security</p>
            <p className="text-[16px] font-normal">Application Protection</p>
          </div>
        </div>
        <div className="h-full  pt-4">
          <p className="font-normal text-[18px] ">Services</p>
        </div>

        <div className="h-full  pt-4">
          <p className="font-normal text-[18px] ">Solution</p>
          <div className="mt-2">
            <p className="text-[16px] font-normal">AI in Cybersecurity</p>
          </div>
        </div>
        <div className="h-full  pt-4">
          <p className="font-normal text-[18px] ">Support</p>
          <div className="mt-2">
            <p className="text-[16px] font-normal">Get Help</p>
          </div>
        </div>
        <div className="h-full  pt-4">
          <p className="font-normal text-[18px] ">About us</p>
          <div className="mt-2">
            <p className="text-[16px] font-normal">Company</p>
            <p className="text-[16px] font-normal">Blog</p>
            <p className="text-[16px] font-normal">News</p>
          </div>
        </div>
      </footer>
      <div className="h-32 bg-[#141415] text-white flex justify-between  items-center px-3 font-Inter max-sm:hidden">
       <div className="text-white">
         <p>©2024 Asif Firewall Ltd. All Rights Reserved.</p>
       </div>
       <div className="text-white flex gap-x-7">
        {
          footers.map((item) =>(
            <p>{item.name}</p>
          ))
        }

       </div>

      </div>
    </>
  );
};

export default App;

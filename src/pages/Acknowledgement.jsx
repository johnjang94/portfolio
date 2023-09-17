import React from "react";
import { Link } from "react-router-dom";

export default function Acknowledgement() {
  return (
    <div className="bg-[black] mt-[-30px] mr-[-30px] ml-[-30px] mb-[-30px] pt-[2px] pb-10 px-10">
      <section className="bg-[#efeeee] rounded-[30px] p-5 mx-auto xl:h-[64vh] lg:h-[55vh] md:h-[71vh] h-[64vh] xl:mt-[120px] lg:mt-[150px] md:mt-[30px] mt-[76px] mb-20 overflow-scroll">
        <h1 className="text-[red] text-center xl:text-5xl text-4xl mt-5 xl:mb-8">
          View-Only License
        </h1>
        <p className="px-12 pt-12">
          1. WEB SITE TERMS AND CONDITIONS:
          <br />
          The materials on{" "}
          <span className="italic underline">John Jang's Portfolio</span> Web
          site (the "Site"), which may include text, images, audio clips, video
          clips, software and other materials the "Content", are provided by the
          website owner, John Jang, for informational purposes only. By
          accessing the Site or downloading any Content, you agree to be bound
          by the terms and conditions set out below ("Terms and Conditions"). If
          you do not agree to these terms and conditions, do not access the Site
          or download any Content.
        </p>
        <p className="px-12 pt-12">
          2. General Disclaimers: <br />
          intends for the Content on the Site to be accurate and reliable as it
          is provided to you "as is" and "as available".
        </p>
        <p className="px-12 pt-12">
          3. Use of the Site:
          <br />
          You may{" "}
          <span className="text-[red]">
            not post, upload, publish, reproduce, transmit or otherwise
            distribute information or other material
          </span>{" "}
          on this Site: constituting or encouraging conduct that would
          constitute a criminal offence or give rise to civil liability, which
          is protected by copyright, or other intellectual property right, or
          derivative works thereof, without obtaining permission of the
          copyright holder or otherwise use this Site in a manner which is
          contrary to law or Netiquette, or which would adversely impact use of
          the Site or the Internet by other users, including the posting or
          transmitting of information or software containing viruses or other
          disruptive components.
        </p>
        <p className="px-12 pt-12">
          4. Copyright:
          <br />
          All Content published on or otherwise accessible through this Site is
          protected by copyright. The Content, and the copyright in the Content,
          are owned or controlled by John Jang or its content supplier. You may
          only use or reproduce the information in the Content for your own
          personal, non-commercial or educational use. The Content may not be
          otherwise used, reproduced, broadcast, published or retransmitted
          without the prior written permission of the copyright holder. You must
          abide by all copyright notices, information and restrictions contained
          in any Content on or accessed through the Site, and maintain such
          notices in the Content.
        </p>
        <p className="px-12 pt-12">
          5. Territory:
          <br />
          This portfolio website originates in Canada.
        </p>
        <p className="px-12 pt-12">
          6. Changes:
          <br />
          The website owner, John Jang, reserves the right to change or remove
          any content from the Site, in whole or in part, at its sole
          discretion, at any time, without notice.
        </p>
        <ul className="px-12 pt-12">
          Therefore, you have understood that...
          <li>
            it is a violation of any of the above terms and conditions to post,
            upload, publish, reproduce, transmit or otherwise distribute
            information or other material from the Site
          </li>
          <li>
            it is not granted to use the Site without the owner's written
            permission
          </li>
        </ul>
      </section>
      <section className="flex justify-between px-3 xl:px-[400px] md:px-5 xl:mt-[-40px] items-center">
        <button className="text-2xl text-[white] underline decoration-red-300">
          <Link to="/">Go back</Link>
        </button>
        <button className="text-2xl border bg-[#dcf3fb] px-5 py-2 rounded-[20px] hover:text-[white] hover:shadow-[4px_5px_7px_-1px_rgba(0,0,0,0.85)]">
          <Link to="/home">Continue</Link>
        </button>
      </section>
    </div>
  );
}

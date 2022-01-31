import ContactItem from "./Contactitem";

export default function Contact() {
  return (
    <>
      <section className="bg-primary pt-20 px-4 md:px-0" id="contact">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col-reverse items-center">
            <div className="md:w-6/12">
              <span className="text-oren tracking-widest font-regular">
                CONTACT
              </span>
              <h1 className="lg:text-4xl text-3xl xl:text-6xl font-extrabold text-white mt-6">
                Contact Me
              </h1>
              <div className="w-9/12 my-4">
                <p className="text-white text-opacity-60">
                  if have interest with me please lemme know by contact me with
                  the link below
                </p>
              </div>
              {/* contact items */}
              <div>
                <ContactItem image="icon-phone.png" value="+6281343951305" />
                <ContactItem
                  image="icon-mail.png"
                  value="irfhan025@gmail.com"
                />
                <ContactItem image="icon-fb.png" value="irfhan33" />
                <ContactItem image="icon-twitter.png" value="@ctrsis" />
                <ContactItem image="icon-ig.png" value="@faannnnnnnn" />
              </div>
            </div>
            <div className="md:w-6/12">
              <img src="/contact.png" className="w-[80%] mx-auto" />
            </div>
          </div>
        </div>
        <div className="border-t w-[95%] mx-auto border-gray-500">
          <div className="text-center py-10">
            <h1 className="text-white text-opacity-60">
              Copyright © 2022 Muhamad Irfan. All Rights Reserved.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

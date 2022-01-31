export default function Experience() {
  return (
    <>
      <section className="bg-primary py-20 px-4 md:px-0" id="experience">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-oren tracking-widest font-regular">
              EXPERIENCE
            </span>
          </div>
          <div className="w-full lg:w-10/12 mx-auto mt-8">
            <div className="flex md:flex-row flex-col-reverse bg-white rounded-md p-10 items-center">
              <div className="md:w-8/12 border-t md:border-t-0  md:border-r md:pr-20 border-stroke">
                <h1 className="font-bold text-2xl text-brownn mt-4 md:mt-0">
                  <span className="text-oren">Intern</span> at DPRD of South
                  Sulawesi Province
                </h1>
                <span className="text-brownn font-semibold mt-1 mb-2 block text-md">
                  AUGUST 2020
                </span>
                <p className="text-brownn text-opacity-60 leading-loose">
                  When i was in college had an internship at the DPRD of South
                  Sulawesi Province and helped create a website project called
                  Pohon Kebaikan and E-Canteen
                </p>
              </div>
              <div className="md:w-4/12 pl-20">
                <img src="/exp1.png" className="w-[70%] mb-6 md:mb-0" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-10/12 mx-auto mt-8">
            <div className="flex md:flex-row flex-col-reverse bg-white rounded-md p-10 items-center">
              <div className="md:w-8/12 border-t md:border-t-0 md:border-r md:pr-20 border-stroke">
                <h1 className="font-bold text-2xl text-brownn mt-4 md:mt-0">
                  <span className="text-oren">Programmer</span> at South
                  Sulawesi Chamber of Commerce and Industry
                </h1>
                <span className="text-brownn font-semibold mt-1 mb-2 block text-md">
                  April - agustus 2021
                </span>
                <p className="text-brownn text-opacity-60 leading-loose">
                  Right before graduating from college I got my first full time
                  job as a programmer at the South Sulawesi Chamber of Commerce
                  and Industry, there I created the website kadinsulsel.id and
                  also mms.kadinsulsel.id which served as the companys main
                  media.
                </p>
              </div>
              <div className="md:w-4/12 pl-20">
                <img src="/exp2.png" className="w-[70%] mb-6 md:mb-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

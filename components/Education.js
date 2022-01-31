export default function Education() {
  return (
    <>
      <section className="bg-pinkk py-20" id="education">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <span className="text-oren tracking-widest font-regular">
              EDUCATIONS
            </span>
          </div>
          <div className="mx-auto mt-6">
            <h1 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-brownn text-center">
              Latest Educations
            </h1>
          </div>
          <div className="flex lg:flex-row flex-col border border-stroke rounded-md bg-white mt-8">
            <div className="lg:w-4/12 lg:border-r border-b border-stroke p-6 sm:p-10">
              <div className="flex items-center mb-4">
                <img src="/edu1.png" className="mr-6" />
                <div>
                  <h1 className="text-brownn font-bold text-xl">
                    SMA Negeri 1 Unaaha
                  </h1>
                  <p className="text-brownn font-regular text-md">Makassar</p>
                </div>
              </div>
              <p className="text-brownn text-opacity-60 text-md font-regular leading-loose">
                Graduated from state high school 1 unaaha one of the best public
                high schools in my area
              </p>
            </div>
            <div className="lg:w-4/12 lg:border-r border-b border-stroke p-6 sm:p-10">
              <div className="flex items-center mb-4">
                <img src="/edu2.png" className="mr-6" />
                <div>
                  <h1 className="text-brownn font-bold text-xl">
                    Universitas Dipa
                  </h1>
                  <p className="text-brownn font-regular text-md">Makassar</p>
                </div>
              </div>
              <p className="text-brownn text-opacity-60 text-md font-regular leading-loose">
                Majored in information systems in 2017 and graduated in 2021
                with a GPA of 3.67
              </p>
            </div>
            <div className="lg:w-4/12 p-6 sm:p-10">
              <div className="flex items-center mb-4">
                <img src="/edu3.png" className="mr-6" />
                <div>
                  <h1 className="text-brownn font-bold text-xl">
                    Briton English
                  </h1>
                  <p className="text-brownn font-regular text-md">Makassar</p>
                </div>
              </div>
              <p className="text-brownn text-opacity-60 text-md font-regular leading-loose">
                Improve my English speaking skills by taking Briton English
                Education lessons in 2018
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

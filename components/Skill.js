export default function Skill() {
  return (
    <>
      <section className="bg-pinkk py-20" id="skills">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <span className="text-oren tracking-widest font-regular">
              SKILLS
            </span>
          </div>
          <div className="md:w-8/12 xl:w-5/12 mx-auto mt-6">
            <h1 className="text-3xl sm:text-4xl xl:text-6xl font-extrabold text-brownn text-center">
              How I Can Help You With
            </h1>
          </div>
          <div className="border border-stroke rounded-md mt-10">
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-6/12 sm:border-r border-b border-stroke py-10 px-10">
                <div className="flex items-center mb-6">
                  <img src="/icon design.png" className="h-12 sm:h-20 mr-6" />
                  <h2 className="font-bold text-2xl text-brownn">Design</h2>
                </div>
                <p className="text-lightbrown text-opacity-60">
                  I am committed to make high quality App UI / UX Design for
                  your project in{" "}
                  <span className="font-bold">Adobe XD or Figma.</span>
                </p>
              </div>
              <div className="sm:w-6/12 py-10 px-10">
                <div className="flex items-center mb-6">
                  <img src="/icon develop.png" className="h-12 sm:h-20 mr-6" />
                  <h2 className="font-bold text-2xl text-brownn">Design</h2>
                </div>
                <p className="text-lightbrown text-opacity-60">
                  I convert UI Design into a Website using react framework which
                  is <span className="font-bold">Next js</span> and{" "}
                  <span className="font-bold">Tailwind</span> as CSS framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

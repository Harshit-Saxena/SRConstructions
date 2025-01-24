import animation from "../animation"
import properitor_img from "../assets/Properitor.png"

const Proprietor = () => {
  return (
    <section className="min-h-screen">
      <div
        className="relative bg-[url('https://images.unsplash.com/photo-1723107638858-331404b1a09a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center"
        style={{
          paddingTop: "500px",
        }}
      >
        <div className="w-[90%] lg:w-[60%] flex flex-col gap-6 text-center absolute -bottom-8 lg:-bottom-12 left-[50%] -translate-x-[50%] bg-white mx-auto px-6 py-4 lg:py-8 shadow-lg rounded-xl">
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase">
              our <span className="text-boldClr italic">proprietor</span>.
            </h3>
            <p className="font-light text-xs md:text-lg lg:max-w-[85ch] tracking-wide text-gray-500">
              <span className="text-boldClr font-semibold">The Man </span>behind
              it all
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-md overflow-hidden flex flex-col self-center items-center lg:justify-center lg:items-stretch lg:flex-row gap-6 lg:gap-12 px-4 xl:px-0 py-6 lg:h-[37rem]">
        <img
          className="mt-12 md:mt-16 lg:mt-20 max-w-xs border-2 border-black"
          src={properitor_img}
          alt="Founder (Rajbeer)"
        />

        <div className="mt-12 md:mt-16 lg:mt-20 text-neutral-900 flex flex-col items-center lg:items-start gap-4">
          <p className="text-md lg:text-lg lg:max-w-[65ch] font-light text-neutral-700">
            <span className="text-highlight font-semibold text-xl">
              Mr. Rajbeer Singh (Founder)
            </span>{" "}
            started his engineering career way back in 1992 as a field engineer
            in Jaypee industries, a leading industrial giant at that time where
            he worked for three years on various projects, including the{" "}
            <span className="text-highlight">LAKYA DAM in Karnataka</span>,
            which is one of the largest earth dams in Asia.
          </p>

          <p className="text-md lg:text-lg lg:max-w-[65ch] font-light text-neutral-700">
            He then joined{" "}
            <span className="text-highlight">Naiyyer Construction</span> Company
            in 1996, where he excelled at the execution of industrial
            engineering projects, such as factories, warehouses and power
            plants.
          </p>

          <p className="text-md lg:text-lg lg:max-w-[65ch] font-light text-neutral-700">
            He moved to{" "}
            <span className="text-highlight">Singla Construction</span> Company
            in 1997 and worked there until 2000, where he mastered his skills in
            the residential sector and was involved in the execution of several
            projects related to complexes, societies and flats.
          </p>

          <p className="text-md lg:text-lg lg:max-w-[65ch] font-light text-neutral-700">
            It was in 2001, when he founded{" "}
            <span className="text-highlight font-semibold">
              S.R CONSTRUCTIONS
            </span>
            , a company that reflects his vision and values of quality,
            innovation and customer satisfaction. Since then, he has been
            leading the company with dedication and passion, delivering
            outstanding results for the clients. Under his leadership, the
            company has grown to become one of the most reputed and trusted
            names in the construction industry
          </p>
        </div>
      </div>

      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-30 transform hover:scale-110 hover:bg-highlight hover:text-white hover:shadow-2xl transition-all"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </section>
  )
}

export default animation(Proprietor)

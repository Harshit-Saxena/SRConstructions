import animation from "../animation"
import founder_img from "../assets/Founder.png"

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

      <div className="mt-12 md:mt-16 lg:mt-20 bg-gray-100 rounded-md overflow-hidden flex flex-col self-center items-center lg:justify-center lg:items-stretch lg:flex-row gap-6 lg:gap-12 px-4 xl:px-0 py-6 lg:h-[30rem]">
        <img className="max-w-xs border-4 border-black" src={founder_img} alt="Founder (Rajbeer)" />

        <div className="text-neutral-900 flex flex-col items-center lg:items-start gap-4 lg:mt-12">
          <h4 className="text-3xl lg:text-4xl font-semibold uppercase">
            Rajbeer Singh
          </h4>
          <p className="text-xl lg:text-2xl lg:tracking-wider">Founder</p>
          <p className="text-md lg:text-xl lg:max-w-[45ch] font-light lg:tracking-wider">
            In 2001, he founded S.R. Constructions, a company embodying his
            vision and core values of quality, innovation, and customer
            satisfaction. Since its inception, he has led the company with
            unwavering dedication and passion, consistently delivering
            exceptional results for clients
          </p>
        </div>
      </div>
    </section>
  )
}

export default animation(Proprietor)

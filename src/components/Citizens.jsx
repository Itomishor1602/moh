
const GetStarted = () => {
  const actions = [
    {
      title: "Practice Good Hygiene",
      description:
        "Wash your hands regularly with soap and clean water, maintain personal hygiene, and keep your surroundings clean to help prevent the spread of infections.",
    },
    {
      title: "Eat Healthy",
      description:
        "Choose a balanced diet with a variety of nutritious foods, including fruits, vegetables, whole grains, and healthy sources of protein.",
    },
    {
      title: "Get Regular Health Checks",
      description:
        "Make use of available health services and seek medical attention when you notice unusual symptoms or changes in your health.",
    },
    {
      title: "Protect Against Malaria",
      description:
        "Sleep under insecticide-treated mosquito nets, keep your surroundings free of stagnant water, and seek appropriate care when experiencing malaria symptoms.",
    },
    {
      title: "Support Maternal and Child Health",
      description:
        "Encourage expectant mothers to attend antenatal care and ensure that children receive recommended immunizations and appropriate healthcare.",
    },
    {
      title: "Keep Your Environment Clean",
      description:
        "Dispose of waste properly, keep water sources protected, and work with your community to maintain a clean and healthy environment.",
    },
    {
      title: "Get Tested and Know Your Status",
      description:
        "Take advantage of appropriate health screening and testing services. Early detection can help people receive timely care and support.",
    },
    {
      title: "Share Reliable Health Information",
      description:
        "Help your community by sharing health information from trusted sources and avoiding the spread of unverified medical claims.",
    },
  ];

  return (
    <section
      id="citizens"
      aria-labelledby="get-started-heading"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Take Action
          </p>

          <h2
            id="get-started-heading"
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Let's Build a Healthier Cross River
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            Everyone has a role to play in creating a healthier community.
            Simple actions taken by individuals, families, and communities can
            help prevent illness and promote better health.
          </p>
        </div>

        {/* Action Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, index) => (
            <article
              key={action.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {action.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {action.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-12 rounded-xl bg-blue-600 px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-bold">
            Your Health Matters
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">
            Take an active role in protecting your health, supporting your
            family, and building healthier communities across Cross River
            State.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;


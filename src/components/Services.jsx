
const Services = () => {
  const services = [
    {
      title: "Hospital Services",
      description:
        "Provides essential medical care, diagnosis, treatment, and support services through healthcare facilities across Cross River State.",
    },
    {
      title: "Malaria Prevention and Control",
      description:
        "Supports malaria prevention, early diagnosis, effective treatment, and community awareness to reduce the impact of malaria.",
    },
    {
      title: "Maternal Reproductive Health Services",
      description:
        "Provides reproductive health services, education, and support to promote the health and wellbeing of women and families.",
    },
    {
      title: "Antenatal and Postnatal Services",
      description:
        "Provides care and guidance for mothers before and after childbirth, supporting healthy pregnancies, safe deliveries, and maternal wellbeing.",
    },
    {
      title: "HIV/AIDS Services",
      description:
        "Provides HIV prevention, testing, counselling, treatment, and support services while promoting awareness and reducing stigma.",
    },
    {
      title: "Pharmaceutical Services",
      description:
        "Supports the safe and effective procurement, distribution, management, and use of medicines and pharmaceutical products.",
    },
    {
      title: "Cancer Screening",
      description:
        "Promotes early detection and screening for selected cancers, helping individuals identify potential health concerns and seek appropriate care.",
    },
    {
      title: "Renal Dialysis Services",
      description:
        "Provides dialysis support for patients with kidney conditions who require renal replacement therapy and ongoing medical care.",
    },
    {
      title: "Tuberculosis Prevention and Treatment",
      description:
        "Supports tuberculosis prevention, screening, diagnosis, treatment, and community awareness to help control the spread of TB.",
    },
    {
      title: "Food Safety",
      description:
        "Promotes food safety practices and standards to help protect the public from foodborne illnesses and unsafe food products.",
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Healthcare Services
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            The Cross River State Ministry of Health provides a range of
            healthcare services designed to promote, protect, and improve the
            health and wellbeing of Cross Riverians.
          </p>
        </div>

        {/* Services Grid */}
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number */}
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;


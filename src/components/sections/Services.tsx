import Text from "../ui/Text";

const servicesData = {
  services: [
    {
      title: "SEO – Get Found. Stay Ahead. Dominate.",
      description: [
        "Data-driven strategies for sustainable rankings.",
        "Custom keyword research & technical SEO optimization.",
        "Local SEO to attract high-intent customers.",
      ],
    },
    {
      title: "Email Marketing – Engage. Convert. Grow.",
      description: [
        "High-converting, personalized email campaigns.",
        "Smart automation & A/B testing for better engagement.",
        "100% compliance – No spam, just results.",
      ],
    },
    {
      title: "Website Design – Your Digital Storefront, Built to Impress.",
      description: [
        "Custom, responsive, and high-performing website designs.",
        "Speed-optimized for SEO & better user experience.",
        "UI/UX strategies to maximize conversions.",
      ],
    },
    {
      title: "Logo Design – Make Your Brand Unforgettable.",
      description: [
        "Custom-designed logos tailored to brand identity.",
        "Strategic color psychology for recognition.",
        "Versatile designs optimized for all platforms.",
      ],
    },
  ],
};

const Services = () => {
  return (
    <div id="services" className="w-full bg-[radial-gradient(circle_at_92.93%_96.60%,#F3A78F_0%,20%,rgba(243,167,143,0)_40%),radial-gradient(circle_at_4.59%_100%,rgba(181,181,181,0.99)_0%,25%,rgba(181,181,181,0)_50%),radial-gradient(circle_at_6.19%_12.98%,#F0F0F0_0%,42%,rgba(240,240,240,0)_70%),radial-gradient(circle_at_91.55%_11.93%,rgba(128,21,232,0.35)_0%,42%,rgba(128,21,232,0)_70%),radial-gradient(circle_at_48.90%_49.52%,#FFFFFF_0%,100%,rgba(255,255,255,0)_100%)] bg-cover bg-center py-20 px-6 md:px-20">
      {/* <h2 className="text-5xl md:text-7xl font-serif font-bold text-black mb-10">
        My Services
      </h2> */}
      <Text text="My Services" className="mb-5"></Text>
      <hr className="border-black mb-10" />
      <div className="flex justify-end">
        <div className="grid md:grid-cols-2 gap-12 w-[40vw]">
          {servicesData.services.map((service, index) => (
            <div key={index} className="text-black">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">[ 0{index + 1} ]</p>
              <ul className="text-lg text-gray-600 space-y-2">
                {service.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

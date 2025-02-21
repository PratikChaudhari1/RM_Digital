
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `radial-gradient(circle at 2.15% 0%, #B5B5B5 0%, 26.5%, rgba(181,181,181,0) 53%),
                          radial-gradient(circle at 100% 0%, #823FFD 0%, 18%, rgba(130,63,253,0) 40%),
                          radial-gradient(circle at 92.25% 92.9%, #F0F0F0 0%, 32.5%, rgba(240,240,240,0) 65%),
                          radial-gradient(circle at 50.68% 100%, #B5B5B5 0%, 42%, rgba(181,181,181,0) 60%),
                          radial-gradient(circle at 49.3% 4.74%, #F0F0F0 0%, 28.5%, rgba(240,240,240,0) 34%),
                          radial-gradient(circle at 6.5% 89.87%, #EC89FF 0%, 35%, rgba(236,137,255,0) 50%),
                          radial-gradient(circle at 48.9% 49.52%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-6xl  font-medium text-black mb-6 text-center">
        Get in Touch
      </h1>

      <div className="bg-purple-600 rounded-2xl p-8 w-full max-w-2xl shadow-lg">
        <form className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium">
                First name *
              </label>
              <input
                type="text"
                className="w-full bg-transparent p-2 rounded-md border border-gray-300"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-white font-medium">
                Last name *
              </label>
              <input
                type="text"
                className="w-full bg-transparent p-2 rounded-md border border-gray-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email & Phone Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent p-2 rounded-md border border-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white font-medium">Phone</label>
              <input
                type="tel"
                className="w-full bg-transparent p-2 rounded-md border border-gray-300"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea
              className="w-full p-2 rounded-md border bg-transparent border-gray-300"
              rows={4}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-medium flex-1 hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

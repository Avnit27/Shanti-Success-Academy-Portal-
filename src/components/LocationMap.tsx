import { Button } from "./ui/button";

const FindUsHere = () => {
  const handleGetDirections = () => {
    // Open Google Maps directions in a new tab
    window.open(
      "https://maps.app.goo.gl/FnM71zK784qeowS98",
      "_blank"
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.042965412895!2d72.8690247!3d19.367292199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af000320c699%3A0xd8e9502020f4a944!2sShanti%20Success%20Academy!5e0!3m2!1sen!2sin!4v1749038895519!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleGetDirections}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md"
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsHere; 
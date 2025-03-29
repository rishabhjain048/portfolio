import React from "react";

const Contact = () => {
  return (
    <div className="p-6 max-w-md mt-4 mx-auto bg-white rounded-2xl shadow-md space-y-4 text-center">
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p>
        Email: <a href="mailto:rishabhjain88712@gmail.com" className="text-blue-600 hover:underline">rishabhjain88712@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:8871266742" className="text-blue-600 hover:underline">8871266742</a>
      </p>
      <p className="text-gray-600">Feel free to connect.</p>
    </div>
  );
};

export default Contact;

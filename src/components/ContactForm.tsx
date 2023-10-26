import React, { useState, ChangeEvent, FormEvent } from "react";
import submitForm from "../api_requests/submitForm";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    clearForm();
    submitForm(formData.email, formData.name, formData.message);
  };

  return (
    <div>
      <form className="mx-auto max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-white "
          >
            Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 white"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-8">
          <label
            htmlFor="message"
            className="block text-sm font-semibold leading-6 text-white"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="px-4 py-2 rounded-lg text-md bg-white text-slate-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

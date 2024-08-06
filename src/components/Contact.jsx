import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify"; // Make sure to install and import this
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_jde4e2e",
          "template_3dd30kg",
          formData,
          "UYRZA2MsakBHgl4VE"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...", error);
          toast.error("Failed to send message, please try again later");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between border-b border-neutral-900 pb-4" id="contact">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-4 lg:border-r border-neutral-900">
        <motion.h2 
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: -100 }}
           transition={{ duration: 1 }}
        className="my-10 text-center text-4xl">Contact Info</motion.h2>
        <motion.div 
           whileInView={{ opacity: 1, y: 0 }}
           initial={{ opacity: 0, y: 100 }}
           transition={{ duration: 1.50 }}
        className="text-center lg:text-left">
          <p className="mb-4 text-lg">
            <a href="mailto:raviraj.bvcoe@gmail.com" className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> raviraj.bvcoe@gmail.com
            </a>
          </p>
          <p className="mb-4 text-lg">
            <a href="https://www.linkedin.com/in/ravi-raj-596135216/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" /> LinkedIn Profile
            </a>
          </p>
          <p className="mb-4 text-lg">
            <a href="https://github.com/rv1830" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub Profile
            </a>
            
            
          
          </p>
          <p className="mb-4 text-lg"><strong>Contact Number:</strong> (+91) 9693877411 </p>
          <p className="mb-4 text-lg"><strong>Location:</strong> Delhi, INDIA - 110043</p>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-4">
        <motion.h2 
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1.50 }}
        className="my-10 text-center text-4xl">Get In Touch</motion.h2>
        <form onSubmit={handleSubmit} className="px-4 sm:px-8 md:px-16 lg:px-8">
          <div className="mb-4 flex flex-col lg:flex-row lg:space-x-4">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.25 }}
              className="w-full lg:w-1/2"
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-700 focus:outline-none"
              />
              {errors.name && <p className="text-sm text-rose-600">{errors.name}</p>}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-700 focus:outline-none"
              />
              {errors.email && <p className="text-sm text-rose-600">{errors.email}</p>}
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="mb-4"
          >
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleChange}
              className="mb-4 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-purple-700 focus:outline-none"
              rows="6"
            />
            {errors.message && <p className="text-sm text-rose-600">{errors.message}</p>}
          </motion.div>
          <motion.button
            type="submit"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.25 }}
            className={`mb-4 w-full rounded border border-stone-50/30 bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-400 hover:text-black ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-2">
              {isSending ? "Sending..." : "Send"}
            </div>
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

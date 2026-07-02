import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function InvestorForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    organizationName: "",
    organizationRole: "",
    sectors: [],
    ticketSize: "",
    startupInvestment: "",
    aboutUs: "",
    description: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.linkedin) {
      newErrors.linkedin = "LinkedIn profile is required";
    } else if (!formData.linkedin.includes("linkedin.com")) {
      newErrors.linkedin = "Enter a valid LinkedIn URL";
    }
    if (!formData.organizationName)
      newErrors.organizationName = "organization or fund name is required";
    if (!formData.organizationRole)
      newErrors.organizationRole = "Your Role is required";
    if (formData.sectors.length === 0) {
      newErrors.sectors = "Please select at least one sector";
    }
    if (!formData.ticketSize)
      newErrors.ticketSize = "Please select a ticket size";

    if (!formData.startupInvestment)
      newErrors.startupInvestment = "Please select your focus on investment";

    if (!formData.aboutUs) newErrors.aboutUs = "Please tell us about yourself";

    // Confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    //password requirement
    if (!formData.password) {
      newErrors.password = "Please create your password";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain an uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain a number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      //create account in firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      //save founder details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        role: "investor",

        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        organizationName: formData.organizationName,
        organizationRole: formData.organizationRole,
        sectors: formData.sectors,
        ticketSize: formData.ticketSize,
        startupInvestment: formData.startupInvestment,
        aboutUs: formData.aboutUs,
        description: formData.description,

        approved: false,

        createdAt: new Date(),
      });
      alert("Application submitted Successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        organizationName: "",
        organizationRole: "",
        sectors: [],
        ticketSize: "",
        startupInvestment: "",
        aboutUs: "",
        description: "",
        password: "",
        confirmPassword: "",
      });
      setSelected([]);
      setErrors([]);

      console.log(user);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const sectors = [
    "Fintech",
    "Healthtech",
    "Edtech",
    "Agritech",
    "Logistics",
    "SaaS",
    "E-commerce",
    "Climate",
    "Real Estate",
    "General",
  ];

  const toggleOption = (sector) => {
    let updated;

    if (selected.includes(sector)) {
      updated = selected.filter((item) => item !== sector);
    } else {
      updated = [...selected, sector];
    }

    setSelected(updated);

    setFormData((prev) => ({
      ...prev,
      sectors: updated,
    }));
  };

  const ticketing = [
    "Under $25k",
    "$25k - $100k",
    "$100k - $500k",
    "$500k - $2M",
    "2M+",
  ];

  const investments = ["None yet", "1 - 3", "4 - 10", "10+"];

  const aboutUs = ["Referral", "Linkedin", "Event", "Google", "Other"];

  return (
    <div className="p-5 flex justify-center w-full items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#032774] w-full max-w-2xl space-y-6 p-8 rounded-xl text-[#98abd1] border-t-3 border-amber-300"
      >
        {/** fullname */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-sm">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            type="text"
            onChange={handleChange}
            placeholder="Enter your full name"
            className="input"
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/** email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            Email Address*
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
            placeholder="Enter your email address"
            className="input"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        {/**phone number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            type="tel"
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="input"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>

        {/**linkedin */}
        <div className="flex flex-col gap-2">
          <label htmlFor="linkedin" className="text-sm">
            LinkedIn Profile URL *
          </label>
          <input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            type="url"
            onChange={handleChange}
            placeholder="https://linkedin.com/in/your-profile"
            className="input"
          />
          {errors.linkedin && (
            <p className="text-red-400 text-sm">{errors.linkedin}</p>
          )}
        </div>

        {/** organisation */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="organizationName"
            className="text-sm text-[13px] scale-y-110"
          >
            Organization / Fund Name *
          </label>
          <input
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            type="text"
            onChange={handleChange}
            placeholder="Organization or fund name"
            className="input"
          />
          {errors.organizationName && (
            <p className="text-red-400 text-sm">{errors.organizationName}</p>
          )}
        </div>

        {/** role */}
        <div className="flex flex-col gap-2">
          <label htmlFor="organizationRole" className="text-sm">
            Your Role / Title *
          </label>
          <input
            id="organizationRole"
            name="organizationRole"
            value={formData.organizationRole}
            type="text"
            onChange={handleChange}
            placeholder="e.g Managing Director"
            className="input"
          />
          {errors.organizationRole && (
            <p className="text-red-400 text-sm">{errors.organizationRole}</p>
          )}
        </div>

        {/** password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Create password *
          </label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            placeholder="************"
          />
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Confirm password*
          </label>
          <input
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            placeholder="************"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-[13px]">Investment Focus - Sector</h2>

          <div className="flex flex-wrap gap-3">
            {sectors.map((sector) => {
              const isSelected = selected.includes(sector);

              return (
                <button
                  name="option"
                  type="button"
                  key={sector}
                  onClick={() => toggleOption(sector)}
                  value={formData.sectors}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 text-[13px] text-sm 
                ${
                  isSelected
                    ? "bg-amber-300 text-[#061a3a] border-amber-300"
                    : "bg-transparent text-amber-300 border-amber-300"
                }
              `}
                >
                  {sector}
                </button>
              );
            })}
          </div>
          {errors.sectors && (
            <p className="text-red-400 text-sm">{errors.sectors}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Typical Ticket Size *
          </label>
          <select
            name="ticketSize"
            value={formData.ticketSize}
            onChange={handleChange}
            className="input text-white bg-[#032774]"
          >
            <option value="" className="text-white bg-[#032774]">
              Select Ticket
            </option>
            {ticketing.map((ticket) => (
              <option
                key={ticket}
                value={ticket}
                className="text-white bg-[#032774]"
              >
                {ticket}
              </option>
            ))}
          </select>

          {errors.ticketSize && (
            <p className="text-red-400 text-sm">{errors.ticketSize}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            African startup invested in to date *
          </label>
          <select
            name="startupInvestment"
            value={formData.startupInvestment}
            onChange={handleChange}
            className="input text-white bg-[#032774]"
          >
            <option value="" className="text-white bg-[#032774]">
              Select
            </option>
            {investments.map((invest) => (
              <option
                key={invest}
                value={invest}
                className="text-white bg-[#032774]"
              >
                {invest}
              </option>
            ))}
          </select>

          {errors.startupInvestment && (
            <p className="text-red-400 text-sm">{errors.startupInvestment}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            How did you hear about us?
          </label>
          <select
            name="aboutUs"
            value={formData.aboutUs}
            onChange={handleChange}
            className="input text-white bg-[#032774]"
          >
            <option value="" className="text-white bg-[#032774]">
              Select
            </option>
            {aboutUs.map((about) => (
              <option
                key={about}
                value={about}
                className="text-white bg-[#032774]"
              >
                {about}
              </option>
            ))}
          </select>

          <div className="flex flex-col gap-4">
            <label className="text-sm text-[13px] scale-y-110">
              investment philosophy (optional) ({formData.description.length}
              /300)
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={300}
              className="input h-30"
              placeholder="Brief statement on your approach to Investing"
            />
          </div>

          {errors.aboutUs && (
            <p className="text-red-400 text-sm">{errors.aboutUs}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-amber-400 text-black px-4 py-3 rounded-lg w-full"
        >
          Submit Application
        </button>

        <p className="text-sm text-[13px] scale-y-110">
          Investor applications are verified for eligibility. Verification
          involves a brief call with the ATC team before account activation.
        </p>
      </form>
    </div>
  );
}

export default InvestorForm;

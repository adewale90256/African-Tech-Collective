import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import validatePassword from "../../utils/validatePassword";
import firebaseErrorHandler from "../../utils/firebaseErrorHandler";
import signupService from "../../servcies/signupService";
import validateFounder from "../../utils/founderValidation";
import useMultiSelect from "../../hooks/useMultiSelect";
import {
  founderSectors,
  founderStages,
  founderGoals,
} from "../../constants/founderOptions";
import { aboutUsOptions } from "../../constants/aboutUsOptions";

function FounderForm({ selectedPlan }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    companyName: "",
    companyWebsite: "",
    country: "",
    sector: "",
    stage: "",
    description: "",
    options: [],
    aboutUs: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // const sectors = [
  //   "FinTech",
  //   "HealthTech",
  //   "EdTech",
  //   "AgriTech",
  //   "Logistics",
  //   "Enterprise SaaS",
  //   "E-commerce",
  //   "Climate Tech",
  //   "AI",
  //   "Others",
  // ];

  // const stages = [
  //   "Idea/Pre-product",
  //   "Pre-seed",
  //   "Seed",
  //   "Series A",
  //   "Growth Stage",
  // ];

  // const options = [
  //   "Investor access",
  //   "Mentorship",
  //   "Community & peer learning",
  //   "Corporate partnership",
  //   "Event networking",
  // ];

  // const aboutUs = ["Referral", "Linkedin", "Event", "Google", "Other"];

  const { selected, toggleItem } = useMultiSelect();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = validateFounder(formData);

    Object.assign(
      newErrors,
      validatePassword(formData.password, formData.confirmPassword),
    );

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (!selectedPlan) {
      alert("Please select a membership plan.");
      return;
    }
    setLoading(true);

    try {
      //create account in firebase Authentication
      const user = await signupService(
        formData.email,
        formData.password,

        {
          role: "founder",

          membership: {
            id: selectedPlan.id,
            name: selectedPlan.name,
            price: selectedPlan.price,
            duration: selectedPlan.duration,
          },

          status: "pending",

          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          linkedin: formData.linkedin,
          companyName: formData.companyName,
          companyWebsite: formData.companyWebsite,
          country: formData.country,
          sector: formData.sector,
          stage: formData.stage,
          description: formData.description,
          options: formData.options,
          aboutUs: formData.aboutUs,
          approved: false,
          createdAt: serverTimestamp(),
        },
      );

      navigate("/login", {
        state: {
          success: "Application submitted successfully.",
        },
      });
      console.log(user);
    } catch (error) {
      console.log(error);
      firebaseErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 flex justify-center w-full items-center  ">
      <form
        onSubmit={handleSubmit}
        className="bg-[#032774] w-full max-w-2xl space-y-6 p-8 rounded-xl text-[#98abd1] border-t-3 border-amber-300"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">Full Name *</label>
          <input
            name="fullName"
            type="text"
            placeholder="Your full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="input"
            disabled={loading}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">Phone *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+234..."
            value={formData.phone}
            onChange={handleChange}
            className="input"
            disabled={loading}
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
            disabled={loading}
          />
          {errors.linkedin && (
            <p className="text-red-400 text-sm">{errors.linkedin}</p>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Company Name *
          </label>
          <input
            name="companyName"
            placeholder="Your startup Name"
            value={formData.companyName}
            onChange={handleChange}
            className="input"
            disabled={loading}
          />
          {errors.companyName && (
            <p className="text-red-400 text-sm">{errors.companyName}</p>
          )}
        </div>

        {/* Companywebsite */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Company Website *
          </label>
          <input
            name="companyWebsite"
            type="url"
            placeholder="https//"
            value={formData.companyWebsite}
            onChange={handleChange}
            className="input"
            disabled={loading}
          />
          {errors.companyWebsite && (
            <p className="text-red-400 text-sm">{errors.companyWebsite}</p>
          )}
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">Country *</label>
          <input
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            className="input"
            placeholder="Nigeria"
            disabled={loading}
          />
          {errors.country && (
            <p className="text-red-400 text-sm">{errors.country}</p>
          )}
        </div>

        {/** password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Create passwor *
          </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            placeholder="************"
            autoComplete="new-password"
            disabled={loading}
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
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input"
            placeholder="************"
            autoComplete="new-password"
            disabled={loading}
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Sector Dropdown */}
        <div className="flex items-center w-full justify-between ">
          <div className="flex flex-col gap-2 w-[45%]">
            <label className="text-sm text-[13px] scale-y-110">Sector *</label>
            <select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="input text-white bg-[#032774]"
              disabled={loading}
            >
              <option value="" className="text-white bg-[#032774]">
                Select sector
              </option>
              {founderSectors.map((sector) => (
                <option
                  key={sector}
                  value={sector}
                  className="text-white bg-[#032774]"
                >
                  {sector}
                </option>
              ))}
            </select>

            {errors.sector && (
              <p className="text-red-400 text-sm">{errors.sector}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-[45%]">
            <label className="text-sm text-[13px] scale-y-110">Stage *</label>
            <select
              name="stage"
              value={formData.stage}
              onChange={handleChange}
              className="input text-white bg-[#032774]"
              disabled={loading}
            >
              <option value="" className="text-white bg-[#032774]">
                Select stage
              </option>
              {founderStages.map((stage) => (
                <option
                  key={stage}
                  value={stage}
                  className="text-white bg-[#032774]"
                >
                  {stage}
                </option>
              ))}
            </select>

            {errors.stage && (
              <p className="text-red-400 text-sm">{errors.stage}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[13px] scale-y-110">
            Brief description of your startup * ({formData.description.length}
            /300)
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength={300}
            className="input h-40"
            placeholder="Describe your Startup"
            disabled={loading}
          />
          {errors.description && (
            <p className="text-red-400 text-sm">{errors.description}</p>
          )}
        </div>

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-[13px]">What are you seeking from ATC?</h2>

          <div className="flex flex-wrap gap-3">
            {founderGoals.map((option) => {
              const isSelected = selected.includes(option);

              return (
                <button
                  type="button"
                  key={option}
                  onClick={() => {
                    const updated = toggleItem(option);

                    setFormData((prev) => ({
                      ...prev,
                      options: updated,
                    }));
                  }}
                  disabled={loading}
                  className={`px-4 py-2 rounded-full border transition-all duration-200 text-[13px] text-sm 
                ${
                  isSelected
                    ? "bg-amber-300 text-[#061a3a] border-amber-300"
                    : "bg-transparent text-amber-300 border-amber-300"
                }
              `}
                >
                  {option}
                </button>
              );
            })}
            {errors.options && (
              <p className="text-red-400 text-sm">{errors.options}</p>
            )}
          </div>
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
            disabled={loading}
          >
            <option value="" className="text-white bg-[#032774]">
              Select
            </option>
            {aboutUsOptions.map((about) => (
              <option
                key={about}
                value={about}
                className="text-white bg-[#032774]"
              >
                {about}
              </option>
            ))}
          </select>

          {errors.aboutUs && (
            <p className="text-red-400 text-sm">{errors.aboutUs}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded-lg px-4 py-3 text-black
                ${
                  loading
                    ? "bg-amber-200 cursor-not-allowed"
                    : "bg-amber-400 hover:bg-amber-300"
                }`}
        >
          {loading ? "Creating account..." : "Submit Application"}
        </button>

        <p className="text-sm text-[13px] scale-y-110">
          All applications are reviewed with 5 Business days. only approved
          founders are admitted to the platform.
        </p>
      </form>
    </div>
  );
}

export default FounderForm;

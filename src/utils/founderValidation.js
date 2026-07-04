function validateFounder(formData) {
  const newErrors = {};

  if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
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
  if (!formData.companyName.trim())
    newErrors.companyName = "Company name is required";

  if (!formData.linkedin.trim()) {
    newErrors.linkedin = "LinkedIn profile is required";
  } else {
    try {
      const url = new URL(formData.linkedin);

      if (!url.hostname.includes("linkedin.com")) {
        newErrors.linkedin = "Enter a valid LinkedIn URL";
      }
    } catch {
      newErrors.linkedin = "Enter a valid LinkedIn URL";
    }
  }

  if (!formData.companyWebsite.trim()) {
    newErrors.companyWebsite = "Company website is required";
  } else {
    try {
      new URL(formData.companyWebsite);
    } catch {
      newErrors.companyWebsite = "Enter a valid website";
    }
  }

  if (!formData.country.trim()) newErrors.country = "Country is required";

  if (!formData.sector) newErrors.sector = "Please select a sector";
  if (!formData.stage) newErrors.stage = "Please select your stage";
  if (!formData.description.trim())
    newErrors.description = "Please tell us about your Company";
  if (formData.options.length === 0) {
    newErrors.options = "Select at least one option";
  }
  if (!formData.aboutUs) {
    newErrors.aboutUs = "Please tell us how you heard about us";
  }

  return newErrors;
}

export default validateFounder;

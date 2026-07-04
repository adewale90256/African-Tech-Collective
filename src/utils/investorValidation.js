function validateInvestor(formData) {
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

  if (!formData.organizationName.trim())
    newErrors.organizationName = "organization or fund name is required";
  if (!formData.organizationRole.trim())
    newErrors.organizationRole = "Your Role is required";
  if (formData.sectors.length === 0) {
    newErrors.sectors = "Please select at least one sector";
  }
  if (!formData.ticketSize)
    newErrors.ticketSize = "Please select a ticket size";

  if (!formData.startupInvestment)
    newErrors.startupInvestment = "Please select your focus on investment";

  if (!formData.aboutUs) newErrors.aboutUs = "Please tell us about yourself";

  return newErrors;
}

export default validateInvestor;

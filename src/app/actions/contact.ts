"use server";

export interface FormResponse {
  success: boolean;
  errors?: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    message?: string;
  };
  message?: string;
}

export async function submitContactForm(prevState: FormResponse, formData: FormData): Promise<FormResponse> {
  // Artificial delay to simulate network latency for luxury premium feedback UI
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  const errors: FormResponse["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = "Full name must be at least 2 characters long.";
  }

  if (!phone || !/^\+?[1-9]\d{1,14}$/.test(phone.replace(/[\s()-]/g, ""))) {
    errors.phone = "Please enter a valid phone number (e.g. +91 88922 36442).";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!service) {
    errors.service = "Please select a service of interest.";
  }

  if (!message || message.length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
      message: "Please correct the errors in the form.",
    };
  }

  // Log contact details securely on the server
  console.log("=== Premium Contact Request Received ===");
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email}`);
  console.log(`Service: ${service}`);
  console.log(`Message: ${message}`);
  console.log("=========================================");

  return {
    success: true,
    message: "Thank you. Your inquiry has been received. Our clinical coordinators will contact you shortly.",
  };
}

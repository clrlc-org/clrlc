import emailjs from '@emailjs/browser';

// Service ID, Template ID, and Public Key should be in environment variables
// But for now, we'll accept them as arguments or fallback to env vars

export const sendEmail = async (form: HTMLFormElement) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  if (!serviceId || !templateId || !publicKey) {
    console.error('EmailJS environment variables are missing.');
    throw new Error('EmailJS configuration is missing.');
  }

  try {
    const result = await emailjs.sendForm(serviceId, templateId, form, publicKey);
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};

import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;

  if (!serviceId || !templateId || !publicKey) {
    console.error("EmailJS environment variables missing:", {
      serviceId: !!serviceId,
      templateId: !!templateId,
      publicKey: !!publicKey,
    });
    return Promise.reject(
      new Error("EmailJS configuration is missing environment variables")
    );
  }

  return emailjs.send(
    serviceId,
    templateId,
    { name, email, message },
    {
      publicKey: publicKey,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );
};

export default mail;

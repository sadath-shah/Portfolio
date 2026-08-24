import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;

  console.log("EmailJS Configuration Check:", {
    hasServiceId: !!serviceId,
    hasTemplateId: !!templateId,
    hasPublicKey: !!publicKey,
  });

  if (!serviceId || !templateId || !publicKey) {
    console.error("❌ EmailJS environment variables missing:", {
      serviceId: !!serviceId,
      templateId: !!templateId,
      publicKey: !!publicKey,
    });
    return Promise.reject(
      new Error("EmailJS configuration is missing environment variables")
    );
  }

  const templateParams = { name, email, message };
  console.log("📧 Sending EmailJS request with parameters:", {
    service: serviceId,
    template: templateId,
    params: Object.keys(templateParams),
  });

  return emailjs.send(
    serviceId,
    templateId,
    templateParams,
    {
      publicKey: publicKey,
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );
};

export default mail;

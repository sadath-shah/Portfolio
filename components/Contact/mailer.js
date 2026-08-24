import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  if (!serviceId || !templateId) {
    console.error("❌ EmailJS configuration missing:", {
      serviceId: !!serviceId,
      templateId: !!templateId,
    });
    return Promise.reject(
      new Error("EmailJS configuration is incomplete")
    );
  }

  const templateParams = { name, email, message };
  console.log("📧 Sending email via EmailJS:", {
    service: serviceId,
    template: templateId,
    paramNames: Object.keys(templateParams),
  });

  return emailjs.send(serviceId, templateId, templateParams);
};

export default mail;

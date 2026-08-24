export default function handler(req, res) {
  const hasServiceId = !!process.env.NEXT_PUBLIC_SERVICE_ID;
  const hasTemplateId = !!process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const hasPublicKey = !!process.env.NEXT_PUBLIC_USER_ID;

  res.status(200).json({
    environment: process.env.NODE_ENV,
    config: {
      NEXT_PUBLIC_SERVICE_ID: hasServiceId ? "✓ SET" : "✗ MISSING",
      NEXT_PUBLIC_TEMPLATE_ID: hasTemplateId ? "✓ SET" : "✗ MISSING",
      NEXT_PUBLIC_USER_ID: hasPublicKey ? "✓ SET" : "✗ MISSING",
    },
    allConfigured: hasServiceId && hasTemplateId && hasPublicKey,
  });
}

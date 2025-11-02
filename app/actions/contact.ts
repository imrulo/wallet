'use server';

// Server action to handle contact form submissions
// In production, you would integrate with an email service (Resend, SendGrid, etc.)
// or save to a database. For now, this is a placeholder that simulates success.

export async function submitContact(formData: {
  name: string;
  email: string;
  message: string;
}) {
  // Validate input
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error('All fields are required');
  }

  // In production, add email sending logic here:
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'contact@yourdomain.com',
  //   to: 'imrulo.eth@proton.me',
  //   subject: `Domain Inquiry: ${formData.name}`,
  //   html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
  // });

  // For now, just log and return success
  console.log('Contact form submission:', formData);

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}


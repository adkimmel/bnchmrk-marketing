// app/api/contact/route.js

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
	try {
		const { name, email, message } = await req.json();

		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ error: "All fields are required." }),
				{ status: 400 }
			);
		}

		// SendGrid email setup
		const mailOptions = {
			to: "support@bnchmrk.com",
			from: "noreply@bnchmrk.com",
			subject: "New Message from Contact Form",
			text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
			html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
		};

		// Send the email
		await sendgrid.send(mailOptions);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(JSON.stringify({ error: "Failed to send message." }), {
			status: 500,
		});
	}
}

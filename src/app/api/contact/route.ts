// Import the NextRequest type so we can type our request parameter.
// This helps with TypeScript autocompletion and catching errors.
import type { NextRequest } from 'next/server';

// Import nodemailer, a popular Node.js library for sending emails from the server.
import nodemailer from 'nodemailer';

// Export a POST function: in the App Router, exporting `POST` makes this file handle POST requests.
export async function POST(req: NextRequest) {
    // Parse the JSON body of the request into a JS object.
    // This contains the submitted form data.
    const data = await req.json();

    // Simple validation: check that required fields aren't missing.
    // Important to prevent empty emails and reduce spam.
    if (!data.name || !data.email || !data.message) {
        return new Response(
            JSON.stringify({ success: false, error: 'Missing fields' }),
            { status: 400 } // Return HTTP 400 Bad Request
        );
    }

    try {
        // Create an SMTP transporter using nodemailer.
        // This config tells nodemailer how to connect to your email service.
        // Use environment variables so you never hardcode credentials into your code.
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You could change this to another service
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail/SMTP username
                pass: process.env.EMAIL_PASS, // Your Gmail/SMTP password or app password
            },
        });

        // Send the email: pass details like from, to, subject, and body text.
        await transporter.sendMail({
            from: data.email, // Use the user's email as the "from" address
            to: 'you@example.com', // Replace with your destination email address
            subject: 'New Contact Form Submission', // Email subject line
            text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.message}`, // Email body text
        });

        // If sending succeeds, return a JSON response indicating success.
        return new Response(JSON.stringify({ success: true }));
    } catch (error) {
        // If sending fails (e.g., wrong SMTP config), log the error so you can debug.
        console.error(error);
        // Return a JSON response indicating failure, with HTTP 500 Internal Server Error.
        return new Response(
            JSON.stringify({ success: false, error: 'Failed to send email' }),
            { status: 500 }
        );
    }
}

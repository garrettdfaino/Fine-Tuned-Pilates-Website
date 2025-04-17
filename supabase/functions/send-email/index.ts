import { Resend } from 'npm:resend@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface EmailPayload {
  name: string;
  studio_name: string;
  city: string;
  state: string;
  email: string;
  service: string;
  message: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    const resend = new Resend(RESEND_API_KEY);
    const payload: EmailPayload = await req.json();
    
    const { name, studio_name, city, state, email, service, message } = payload;

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Studio Name:</strong> ${studio_name}</p>
      <p><strong>Location:</strong> ${city}, ${state}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Interest:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const { data, error: sendError } = await resend.emails.send({
      from: 'noreply@finetunedpilates.com',
      to: ['garrett@finetunedpilates.com'],
      subject: `New Contact Form Submission from ${studio_name}`,
      html: emailHtml,
      reply_to: email
    });

    if (sendError) {
      console.error('Resend API Error:', sendError);
      throw new Error(`Failed to send email: ${sendError.message}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Email sending error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
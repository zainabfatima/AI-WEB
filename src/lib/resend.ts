export async function formSubmission(formData) {
    const { name, email, message } = formData;

    let emailTo : string | string[] = `${import.meta.env.VITE_CLIENT_EMAIL}`;
    if (emailTo.includes(",")) {
        emailTo = emailTo.split(","); // sent to all emails in the list
    }
 
    const data = {
        to: emailTo,
        subject: `New Consultation Request from ${name}`,
        html: `
            <h1>New Consultation Request</h1>
            <p>You have received a new consultation request:</p>
            <hr />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
        `,
    }

    return fetch(import.meta.env.VITE_SUPABASE_EMAIL_URL, 
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Email sent successfully:", data);
            return data;
        })
        .catch(error => {
            console.error("Error sending email:", error);
            return { error: "Failed to send email" , errorMessage: error.message };
        });
}


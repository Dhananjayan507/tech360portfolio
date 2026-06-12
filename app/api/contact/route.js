import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (!email.includes('@') || !email.includes('.')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Add to CRM
        console.log('Contact form submission:', { name, email, message });

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            message: 'Thank you for your message! We will get back to you soon.',
            data: { name, email }
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
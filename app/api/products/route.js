import products from '@/data/products.json';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // Simulate slight delay to show loading states
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(products);
}
import { NextResponse } from "next/server";
import { z } from "zod";

// Shared schema (could be in lib/validators)
const quoteSchema = z.object({
  productSlug: z.string().optional(),
  startDate: z.string(),
  endDate: z.string(),
  location: z.string().min(2),
  delivery: z.boolean(),
  driver: z.boolean(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  company: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate
    const data = quoteSchema.parse(body);

    // TODO: Send email (placeholder)
    console.log("ZOOM ON NEW QUOTE REQUEST:", data);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Demande reçue" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }
}

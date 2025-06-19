import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(_: Request) {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const fileName = "Emmanuel Taiwo's resume.pdf";

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return NextResponse.json(
            { error: "File not found" },
            { status: 404 }
        );
    }

    // Read the file as buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Set headers to display in browser
    const headers = new Headers();
    headers.set("Content-Disposition", `inline; filename="${fileName}"`);
    headers.set("Content-Type", "application/pdf");

    return new NextResponse(fileBuffer, {
        headers,
    });
}
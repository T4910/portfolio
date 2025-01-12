import fs from "fs";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(_: Request) {
    const filePath = path.join(process.cwd(), "public", "resume.pdf"); 
    const fileName = "Emmanuel Taiwo's resume.pdf";

    let url = new URL(_.url);
    const redirectUrl = url.searchParams.get("r") as string

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return NextResponse.json(
            { error: "File not found"}, 
            { status: 404 }
        );
    }

    // Define a mapping of file extensions to content types
    const contentTypeMap = {
        svg: "image/svg+xml",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        pdf: "application/pdf",
    };

    // Get the file extension
    const fileExtension = fileName.split(".")[1].toLowerCase();

    // Determine the content type based on the file extension
    const contentType = contentTypeMap[fileExtension] || "application/octet-stream";

    // Set headers to force download
    const headers = new Headers();
    headers.set("Content-Disposition", `attachment; filename="${fileName}"`);
    headers.set("Content-Type", contentType);

    const fileBuffer = fs.readFileSync(filePath);
    const res = new NextResponse(fileBuffer, {
        headers,
        
    });
    return res;

    // redirect(redirectUrl);
}
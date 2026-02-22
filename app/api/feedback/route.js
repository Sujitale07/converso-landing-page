import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    try {
        const data = await request.json();
        const { type, slug, timestamp } = data;

        // Ensure data directory exists
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        const filePath = path.join(dataDir, 'feedback.json');
        
        let existingData = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            try {
                existingData = JSON.parse(fileContent);
            } catch (e) {
                existingData = [];
            }
        }

        const newFeedback = {
            id: Date.now(),
            type,
            slug,
            timestamp: timestamp || new Date().toISOString(),
            userAgent: request.headers.get('user-agent') || 'unknown',
        };

        existingData.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Feedback saving error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

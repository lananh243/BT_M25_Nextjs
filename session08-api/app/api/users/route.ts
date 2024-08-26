import { NextResponse } from "next/server";
const users = [
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Nguyen Thi B" },
]
export async function GET(req: any, res: any) {
    // req : những yêu cầu
    // res : phản ứng lại
    return NextResponse.json({ data: users })
}
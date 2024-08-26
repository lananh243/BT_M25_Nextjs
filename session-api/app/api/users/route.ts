import { NextResponse } from "next/server";
const users = [
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Nguyen Thi B" },
]
export async function GET() {
    return NextResponse.json({ data: users })
}

export async function POST(req: NextResponse) {
    // console.log("Request", await req.json());
    // B1 : Lay du lieu tu client
    const dataClient = await req.json();
    // B2 : Push du lieu lay dc tu client vao trong mang
    users.push(dataClient);
    // B3 : Tra ve mang moi vua duoc them vao
    return NextResponse.json({ newUsers: users })
}
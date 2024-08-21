import { NextResponse } from 'next/server'
import React from 'react'
let users = [
    { id: 1, name: "Linda", age: 22, address: "Nha Trang" },
    { id: 2, name: "David", age: 25, address: "Hà Nội" },
    { id: 3, name: "Mary", age: 23, address: "Hà Nam" },
]
export async function GET(req: any, res: any) {
    return NextResponse.json({
        message: "Danh sách user",
        data: users
    })
}

export async function POST(req: any) {
    const data = await req.json();
    return NextResponse.json({
        message: "Thêm user thành công",
        user: data
    })
}

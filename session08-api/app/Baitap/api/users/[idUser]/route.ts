import { NextResponse } from 'next/server';
import React from 'react';
let users = [
    { id: 1, name: "Linda", age: 22, address: "Nha Trang" },
    { id: 2, name: "David", age: 25, address: "Hà Nội" },
    { id: 3, name: "Mary", age: 23, address: "Hà Nam" },
];

export async function GET(req: any, res: any) {
    let find = users.find((item) => {
        return item.id === +res.params.idUser;
    });
    const { params } = res;
    return NextResponse.json({ message: find ? find : "Không tìm thấy " })
}
// PUT 
export async function PUT(req: any) {
    const data = await req.json();
    return NextResponse.json({
        message: "Cập nhật user thành công",
        user: data
    })
}
// DELETE 

export async function DELETE(req: any) {
    const data = await req.json();
    return NextResponse.json({
        message: "Xóa user thành công",
        user: data
    })
}

import { NextResponse } from "next/server"
let products = [
    { id: 1, name: "iphone5", price: 5000 },
    { id: 2, name: "iphone13", price: 6000 },
    { id: 3, name: "iphone15", price: 9000 },
]
export async function GET() {

    return NextResponse.json({
        message: "Lấy danh sách sản phẩm thành công !!",
        data: products,
    })
}

export async function POST(req: any, res: any) {
    let data = await req.json()
    return NextResponse.json({
        message: "Thêm dữ liệu thành công !!",
        data: data,
    })
}


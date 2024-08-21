import { NextResponse } from "next/server"
let products = [
    { id: 1, name: "iphone5", price: 5000 },
    { id: 2, name: "iphone13", price: 6000 },
    { id: 3, name: "iphone15", price: 9000 },
]
export async function GET(req: any, res: any) {
    let findItem = products.find((item) => {
        return item.id == +res.params.id
    })
    return NextResponse.json({
        message: "Lấy danh sách sản phẩm thành công !!",
        data: findItem,
    })
}
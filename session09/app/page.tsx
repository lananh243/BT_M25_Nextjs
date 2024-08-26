"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <h1>Bài tập 1 : </h1>
      <div className="p-6 flex gap-4">
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="large">Size large</Button>
        <Button variant="small">Size small</Button>
      </div>
      <h1>Bài tập 2 : </h1>
      <div className="p-6">
        <Input type="text" className="my-3" placeholder="Rikkei Academy" />
        <Input type="number" className="my-3" placeholder="10" />
        <Input type="file" className="my-3" placeholder="10" />
      </div>
      <h1>Bài tập 3 : </h1>
      <Breadcrumb className="p-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/listProduct">
              List product
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/order">Order</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/orderDetail">
              Order detail
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>Bài tập 4 : </h1>
      <div className="p-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Môn học" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Môn học</SelectLabel>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="javaScript">JavaScript</SelectItem>
              <SelectItem value="reactJS">ReactJS</SelectItem>
              <SelectItem value="nextjs">Next.js</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <h1>Bài tập 5 : </h1>
      <div className="p-6">
        <b>Mã xác nhận</b>
        <InputOTP maxLength={8}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="p-6">
        <b>Mã xác nhận</b>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <h1>Bài tập 6 : </h1>
      <div className="p-6">
        <Slider defaultValue={[60]} max={100} step={1} className="w-64" />
        <p>Value : 60</p>
      </div>
      <div className="p-6">
        <Slider defaultValue={[82]} max={100} step={1} className="w-64" />
        <p>Value : 82</p>
      </div>
      <h1>Bài tập 7 : </h1>
      <div className="p-6">
        <div className="w-96 h-80 border-2 border-solid border-gray-400 p-6 rounded-lg">
          <p className="text-lg font-bold">Tạo dự án</p>
          <p className="text-sm font-medium my-3">Tên</p>
          <Input type="text" placeholder="Rikkei Academy" />
          <p className="text-sm font-medium my-3">Công nghệ</p>
          <Select>
            <SelectTrigger className="w-72">
              <SelectValue placeholder="HTML" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Môn học</SelectLabel>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="javaScript">JavaScript</SelectItem>
                <SelectItem value="reactJS">ReactJS</SelectItem>
                <SelectItem value="nextjs">Next.js</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="w-72 flex justify-between my-6">
            <Button variant="outline">Đóng</Button>
            <Button variant="default">Tạo</Button>
          </div>
        </div>
      </div>
      <h1>Bài tập 8 : </h1>
      <div className="p-6">
        <div className="w-96 h-1/2 border-2 border-solid border-gray-400 p-6 rounded-lg">
          <p className="text-2xl font-bold">Create an account</p>
          <p className="text-sm font-medium my-3 text-gray-400">
            Enter your email below to create your account
          </p>
          <br />
          <div className="w-72 flex justify-between">
            <div>
              <Button variant="outline" className="w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                  alt=""
                  className="w-7 h-7"
                />
                <span className="m-3">Github</span>
              </Button>
            </div>
            <div>
              <Button variant="outline" className="w-32">
                <img
                  src="https://banner2.cleanpng.com/20181108/bow/kisspng-google-logo-google-search-search-engine-optimizati-5be4b4e62f2cf8.5260885315417151741932.jpg"
                  alt=""
                  className="w-7 h-7"
                />
                <span className="m-3">Google</span>
              </Button>
            </div>
          </div>
          <br />
          <div className="flex items-center space-x-4">
            <span className="w-12 border-t"></span>
            <span className="text-gray-400">OR CONTINUE WITH</span>
            <span className="w-12 border-t"></span>
          </div>
          <p className="text-sm font-medium my-3">Email</p>
          <Input type="text" />
          <p className="text-sm font-medium my-3">Password</p>
          <Input type="text" />
          <br />
          <Button variant="default" className="w-72">
            Create account
          </Button>
        </div>
      </div>
      <h1>Bài tập 10 : </h1>
      <Accordion type="single" collapsible className="w-96 p-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>HTML cơ bản</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>CSS</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>JavaScript</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      /> */}
    </div>
  );
}

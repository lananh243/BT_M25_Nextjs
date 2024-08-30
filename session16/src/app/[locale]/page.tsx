"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function HomePage() {
  const [select, setSelect] = useState(false);
  const route = useRouter();
  const t = useTranslations("HomePage");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // setSelect(e.target.value);
    if (e.target.value == "en") {
      route.push("/en");
      setSelect(true);
    } else {
      route.push("/vi");
      setSelect(false);
    }
  };
  return (
    <div className="p-10">
      <select
        name=""
        id=""
        onChange={handleChange}
        className="border-2 border-solid border-gray-200 w-28 h-8 rounded-sm"
      >
        <option selected={select} value="en">
          Tiếng Anh
        </option>
        <option selected={select} value="vi">
          Tiếng Việt
        </option>
      </select>
      <p className="text-3xl font-bold">{t("title")}</p>
      <p className="text-3xl font-bold">{t("description")}</p>
    </div>
  );
}

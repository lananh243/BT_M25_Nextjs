import Link from "next/link";
import React from "react";

export default function Details(props: any) {
  const employee = [
    {
      name: "David",
      age: 20,
      id: 1,
    },
    {
      name: "Linda",
      age: 22,
      id: 2,
    },
    {
      name: "Kavin",
      age: 18,
      id: 3,
    },
  ];
  const { params } = props;
  let employeeFilter = employee.filter((item) => {
    return item.id == params.idEmployee;
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <Link href={""}>Employee detail</Link>
        <Link href={""}>Employee's project</Link>
      </div>

      <h3>Chi tiết nhân viên</h3>
      {employeeFilter.map((item) => {
        return (
          <div>
            <p>Id : {item.id}</p>
            <p>Name : {item.name}</p>
            <p>Age : {item.age}</p>
          </div>
        );
      })}
    </div>
  );
}

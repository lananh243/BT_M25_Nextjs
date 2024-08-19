import React from "react";

export default function Project(props: any) {
  const employee = [
    {
      name: "David",
      age: 20,
      id: 1,
      projects: ["Lazada", "Shopee"],
    },
    {
      name: "Linda",
      age: 22,
      id: 2,
      projects: ["Facebook", "Tiktok"],
    },
    {
      name: "Kavin",
      age: 18,
      id: 3,
      projects: ["Lazada", "Shopee"],
    },
  ];
  const { params } = props;
  const employeeData = employee.find((item) => item.id == params.idEmployee);
  return (
    <div>
      <h3>The employee project list has id = {params.idEmployee}</h3>
      {employeeData && employeeData.projects ? (
        <ul>
          {employeeData.projects.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

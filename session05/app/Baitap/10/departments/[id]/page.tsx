import React from "react";

export default function IdDepartment(props: any) {
  const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Sales" },
    { id: 4, name: "IT" },
  ];
  const { params } = props;
  let departmentFilter = departments.filter((item) => {
    return item.id == params.id;
  });
  return (
    <div>
      {departmentFilter.map((item) => {
        return (
          <div>
            <p>Department Id : {item.id}</p>
            <p>Department Name : {item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

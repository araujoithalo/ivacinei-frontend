import { Table, Checkbox } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "../../services/api";

const Consult = () => {
  /* 
  Remove this comment as soon as connect with API
  useEffect(() => {
    axios.get("/consult").then((response) => setUsers(response.data));
   }, [] */

  //temp DB
  const [users, setUsers] = useState([
    {
      name: "Maria",
      vdate: "25/04/2022",
      vtimer: "8:00",
      vbutton: "X",
      status: "Finalized",
    },

    {
      name: "João",
      vdate: "26/04/2022",
      vtimer: "9:00",
      vbutton: "X",
      status: "Pendent",
    },

    ,
    {
      name: "Telma",
      vdate: "27/04/2022",
      vtimer: "10:00",
      vbutton: "X",
      status: "Pendent",
    },
  ]);

  return (
    <>
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Button</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.vdate}</td>
              <td>{user.vtimer}</td>
              <td><Checkbox label="Finalized"/></td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Consult;

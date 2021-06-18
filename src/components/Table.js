import React from "react";
import TableList from "./TableList";

const Table = (props) => (
  <section>
    <div className="TableList">
      <div className="container">
        <table className="responsive-table">
          <caption>Countries List</caption>
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Region</th>
              <th scope="col">Calling Codes</th>
              <th scope="col">Time Zones</th>
              <th scope="col">Flag</th>
            </tr>
          </thead>
          {props.items.map((country, id) => (
            <TableList {...country} key={id} />
          ))}
        </table>
      </div>
    </div>
  </section>
);

export default Table;

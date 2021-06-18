import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const TableList = ({
  alpha3Code,
  flag,
  name,
  region,
  capital,
  timezones,
  callingCodes,
}) => (
  <Fade bottom duration={700}>
    <tbody key={alpha3Code}>
      <tr>
        <th scope="row">
          <Link to={`/details/${alpha3Code}`}>{alpha3Code}</Link>
        </th>
        <th scope="row">{name}</th>
        <th scope="row">{capital}</th>
        <th scope="row">{region}</th>
        <th scope="row">{callingCodes}</th>
        <th scope="row">{timezones[0]}</th>
        <th scope="row">
          <img className="flag-img" src={`${flag}`} alt="dummy" />
        </th>
      </tr>
    </tbody>
  </Fade>
);

export default TableList;

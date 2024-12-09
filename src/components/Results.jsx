import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Results.css";
//https://www.bacancytechnology.com/qanda/react/react-table-sort

export default function Results() {
  const [listFighters, setListFighters] = useState([]);

  function getListFightersAPI() {
    axios.get("https://api.octagon-api.com/fighters").then((res) => {
      setListFighters(Object.values(res.data));
    });
  }

  useEffect(() => {
    getListFightersAPI();
  }, []);

  function ascendingEvent() {
    const data = [...listFighters];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.name.localeCompare(b.name));
      setListFighters(result);
    }
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col" onClick={ascendingEvent}>
            Name
          </th>
          <th scope="col">Category</th>
          <th scope="col">Place Of Birth</th>
          <th scope="col">Age</th>
          <th scope="col">Wins</th>
          <th scope="col">Losses</th>
        </tr>
      </thead>
      <tbody>
        {listFighters.map((fighter) => (
          <tr key={fighter.name}>
            <td>{fighter.name}</td>
            <td>{fighter.category}</td>
            <td>{fighter.placeOfBirth}</td>
            <td>{fighter.age}</td>
            <td>{fighter.wins}</td>
            <td>{fighter.losses}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

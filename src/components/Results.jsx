import { useState } from "react";
import "../components/Results.css";

//https://www.bacancytechnology.com/qanda/react/react-table-sort

export default function Results({ dataFighters }) {
  const [sortedList, setSortedList] = useState([dataFighters]);

  console.log(dataFighters);

  function handleSortList() {
    const sorted = [...dataFighters].sort(
      (a, b) => b["name"] - a["name"]
    );
    setSortedList(sorted);
    //console.log(sorted);
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col" onClick={handleSortList}>
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
        {dataFighters.map((fighter) => (
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

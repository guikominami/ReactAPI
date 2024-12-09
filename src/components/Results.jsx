import axios from "axios";
import { useEffect, useState } from "react";
import iconAscending from "../assets/ascending.png";
import iconDescending from "../assets/descending.png";
import "../components/Results.css";

export default function Results() {
  const [listFighters, setListFighters] = useState([]);
  const [nameAscending, setNameAscending] = useState(true);

  function getListFightersAPI() {
    axios.get("https://api.octagon-api.com/fighters").then((res) => {
      setListFighters(
        Object.values(res.data).sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      );
    });
  }

  useEffect(() => {
    getListFightersAPI();
  }, []);

  function sortList(sortDataField) {
    const data = [...listFighters];

    let sortResult = data.sort((a, b) =>
      a[sortDataField].localeCompare(b[sortDataField])
    );

    if (nameAscending) {
      sortResult = data.sort((a, b) =>
        b[sortDataField].localeCompare(a[sortDataField])
      );
    }

    if (data.length > 0) {
      setListFighters(sortResult);
      //não pode alterar o valor direto do resultado anterior
      setNameAscending((editing) => !editing);
    }
  }

  function sortListInteger(sortDataField) {
    const data = [...listFighters];

    let sortResult = data.sort(
      (a, b) => a[sortDataField] - b[sortDataField]
    );
    if (nameAscending) {
      sortResult = data.sort(
        (a, b) => b[sortDataField] - a[sortDataField]
      );
    }

    if (data.length > 0) {
      setListFighters(sortResult);
      //não pode alterar o valor direto do resultado anterior
      setNameAscending((editing) => !editing);
    }
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col" onClick={() => sortList("name")}>
            Name
            <img
              src={nameAscending ? iconAscending : iconDescending}
              alt=""
            />
          </th>
          <th scope="col">Category</th>
          <th scope="col">Place Of Birth</th>
          <th scope="col">Age</th>
          <th scope="col" onClick={() => sortListInteger("wins")}>
            Wins
            <img
              src={nameAscending ? iconAscending : iconDescending}
              alt=""
            />
          </th>
          <th scope="col" onClick={() => sortListInteger("losses")}>
            Losses
            <img
              src={nameAscending ? iconAscending : iconDescending}
              alt=""
            />
          </th>
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

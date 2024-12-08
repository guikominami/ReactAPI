import { useEffect, useState } from "react";

export default function fightersList() {
  let url = "https://api.octagon-api.com/fighters";
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFighters(Object.values(data)))
      .catch((error) =>
        console.log("Error fetching fighters: ", error)
      );
  }, []);

  //console.log(fighters);

  return fighters;
}

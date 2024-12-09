import axios from "axios";

export default function fightersList() {
  let url = "https://api.octagon-api.com/fighters";
  //const [fighters, setFighters] = useState([]);

  axios.get(url).then((res) => {
    console.log("api", Object.values(res.data));
    return res.data;
  });

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     //.then((data) => setFighters(Object.values(data)))
  //     .then((data) => Object.values(data))
  //     .catch((error) =>
  //       console.log("Error fetching fighters: ", error)
  //     );
  // }, []);
}

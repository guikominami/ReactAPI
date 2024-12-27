import axios from "axios";

export default function fightersList() {
  let url = "https://api.octagon-api.com/fighters";

  axios.get(url).then((res) => {
    console.log("api", Object.values(res.data));
    return res.data;
  });
}

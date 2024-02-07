import axios from "axios"

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID J-4iSHnl7bQZ1vNYZBKUnFomCB_csM6lytj6sCJl2RY",
    },
    params: {
      query: term,
    },
  })

  return response.data.results
}
export default searchImages

import axios from "axios"
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  }
}

// USER

function signIn(obj, login, success, failure) {
  axios
    .post("/signin", obj)
    .then((res) => {
      login(res)
      success(res.data)
    })
    .catch((error) => {
      alert(error)
      failure()
    })
}

function signUp(obj, success, failure) {
  axios
    .post("/signup", obj)
    .then(() => {
      success()
    })
    .catch((error) => {
      console.error(error)
      failure()
    })
}

function getSession(auth) {}

function signOut(auth, success) {
  axios
    .delete("/signin", tokenProvider(auth))
    .then(() => {
      success()
    })
    .catch((error) => {
      console.log(error.response.data)
    })
}

// ANIMALS

async function getAnimalList() {
  try {
    const response = await axios.get("/animals")
    return response.data
  } catch (error) {
    throw error
  }
}
async function getAnimalById(id) {
  try {
    const response = await axios.get(`/animals/${id}`)
    // console.log("Response data: " + response.data)
    return response.data
  } catch (error) {
    throw error
  }
}

export { signIn, signUp, signOut, getAnimalList, getAnimalById }

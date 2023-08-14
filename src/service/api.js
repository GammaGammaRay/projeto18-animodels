import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

//User

function signIn(obj, success, failure) {
  axios
    .post("/signin", obj)
    .then((res) => {
      success(res.data);
    })
    .catch((error) => {
      alert(error);
      failure();
    });
}

function signUp(obj, success, failure) {
  axios
    .post("/signup", obj)
    .then(() => {
      success();
    })
    .catch((error) => {
      console.error(error);
      failure();
    });
}

function signOut(auth, success) {
  axios
  .delete("/signout", tokenProvider(auth))
  .then(() => {
    success();
  })
  .catch((error) => {
    console.log(error.response.data);
  });
}

function getAnimalList(success, failure) {
  axios
    .get("/animals")
    .then(() => {
      success();
    })
    .catch((error) => {
      console.error(error);
      failure();
    });
}

export { signIn, signUp, signOut, getAnimalList };

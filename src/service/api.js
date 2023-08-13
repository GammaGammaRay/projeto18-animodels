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
      alert(error.response.data);
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
      alert(error.response.data);
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

export { signIn, signUp, signOut };

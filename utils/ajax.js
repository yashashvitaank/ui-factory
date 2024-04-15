
const headers = { cache: "no-cache" };

const getRequest = async (url = "") => {
  const response = await fetch(url, { method: "get", headers }).then(
    (response) => response.json()
  );
  return response;
};

const postRequest = async (url, data) => {
  try{
    const response = await fetch(url, {body: data, method: "post", headers}).then(
      (response) => response.json()
    );
    return response;
  }
  catch(error)
  {
    console.log("ERROR API POST ERROR");
    throw(error);
  }
}

export const ApiRequest = { get: getRequest, post: postRequest };

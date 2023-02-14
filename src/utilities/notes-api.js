import { getToken } from "./users-service";
const BASE_URL = "/api/notes";

export async function createNotes(data) {
    const token = getToken()
  console.log(data);
  // pausing code to wait for a response back from the server
  const res = await fetch(BASE_URL, {
    // I want to make a user
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token} `,
    },
    body: JSON.stringify(data),
  });

  // if success
  // we get a true here when the status is 200
  if (res.ok) {
    return res.json();
  } else {
    // if error throw new error
    throw new Error("You've Encountered An Error :(");
  }
}

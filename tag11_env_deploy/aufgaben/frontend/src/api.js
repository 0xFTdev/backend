const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


export const getBirds = () =>
  fetch(`${BACKEND_URL}/birds`).then((response) => response.json());

export const postBird = (newBirdData) =>
  fetch(`${BACKEND_URL}/birds`, {
    method: "POST",
    body: newBirdData
  }).then((response) => response.json());

export const patchBird = (id, patchData) =>
  fetch(`${BACKEND_URL}/birds/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patchData),
  })

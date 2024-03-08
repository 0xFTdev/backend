export const getBirds = () =>
  fetch("http://localhost:3000/birds").then((response) => response.json());

export const postBird = (newBirdData) =>
  fetch("http://localhost:3000/birds", {
    method: "POST",
    body: newBirdData
  }).then((response) => response.json());

export const patchBird = (id, patchData) =>
  fetch(`http://localhost:3000/birds/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patchData),
  })

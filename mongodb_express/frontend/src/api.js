const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getExpenses = () =>
  fetch(`${BACKEND_URL}/expenses`).then((response) => response.json());

export const postExpenses = (newExpenseData) =>
  fetch(`${BACKEND_URL}/expenses`, {
    method: "POST",
    body: newExpenseData,
  }).then((response) => response.json());

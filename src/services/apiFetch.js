// The api is here: https://logotypes.dev/

const apiFetch = async () => {
  const res = await fetch("https://logotypes.dev/all");
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
};

export default apiFetch;

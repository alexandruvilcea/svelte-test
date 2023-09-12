import type { JobsList } from "../data/models";

export const load = async () => {
  const response = await fetch("https://api.videowise.com/sites/61f02a75d4d5f20029ad21e6/pages?limit=50&skip=0&pageType=Product", {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWYwMmE3NWQ0ZDVmMjAwMjlhZDIxZTUiLCJpYXQiOjE2OTQ1MTQ3NTgsImV4cCI6MTY5NDYwMTE1OH0.8W9KwMCV_LmfPhYvVj77b9QMsLikxkeWOz7HElyJrd4'}
  });
  const data = await response.json();
  return {
    product_list: data.items as JobsList,
  };
};

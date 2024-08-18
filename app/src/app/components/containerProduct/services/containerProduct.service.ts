const endPoint = "http://localhost:3000";

export const getProducts = async () => {
  try {
    const response = await fetch(`${endPoint}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

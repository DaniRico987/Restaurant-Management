const endPoint = "http://localhost:3000";

export const getCategories = async () => {
  try {
    const response = await fetch(`${endPoint}/category`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

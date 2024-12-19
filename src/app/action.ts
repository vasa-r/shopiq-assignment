"use server";

export const fetchProducts = async (page: number, limit: number = 12) => {
  const skip = (page - 1) * limit;
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail,rating`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return JSON.parse(JSON.stringify(data.products));
  } catch (error) {
    console.log(error);
    return;
  }
};

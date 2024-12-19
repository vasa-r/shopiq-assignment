"use server";

export const fetchProduct = async (id: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return;
  }
};

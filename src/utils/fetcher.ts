
export const fetcher = async (url: string, delay: number = 200) => {
  const res = await fetch(url);
  await new Promise((resolve) => setTimeout(resolve, delay));
  return res.json();
};

export async function fetchContent(endpoint: string, params: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/${endpoint}${
      params && `?${params}`
    }` as string
  );
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

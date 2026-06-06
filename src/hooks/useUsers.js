import { useQuery } from "@tanstack/react-query";

// Define UseQuery and using async Fn
export default function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      // console.log(data);
      return res.json();
    },
  });
}

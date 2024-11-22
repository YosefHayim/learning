import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Learned about useMutation,useQuery, useQueryClient, isLoading,isError,onSuccess, disable re fetch etc.

const POSTS = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
];

function BasicQuery() {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      await wait(1000);
      return [...POSTS];
    },
  });

  const newPostMutation = useMutation({
    mutationFn: async (title) => {
      await wait(1000);
      POSTS.push({ id: crypto.randomUUID(), title });
      return;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <h1>Error...</h1>;

  return (
    <div>
      <h1>15 minutes TanStack Query</h1>
      {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("new post")}
      >
        Add new
      </button>
    </div>
  );
}

const wait = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export default BasicQuery;

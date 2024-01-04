"use client";

import { useEffect, useState } from "react";

import Loading from "./loading";
import { PostListCard } from "@/components/post/postListCard";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostListCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
    </>
  );
}

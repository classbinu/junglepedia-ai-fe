"use client";

import { useEffect, useRef, useState } from "react";

import { PostListCard } from "@/components/post/postListCard";

export default function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const limit = 10;

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts?offset=${offset}&limit=${limit}`
      );
      const newPosts = await response.json();

      if (newPosts.length < limit) {
        setAllDataLoaded(true);
        console.log(`allDataLoaded: ${allDataLoaded}`);
      }

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error(error);
    }
  };

  const lastInvocation = useRef(0); // invacation = 발동
  const throttleInterval = 100;

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();

      if (now - lastInvocation.current > throttleInterval) {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 100 &&
          !allDataLoaded
        ) {
          setOffset((prevOffset) => prevOffset + limit);
        }
        lastInvocation.current = now;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allDataLoaded]);

  useEffect(() => {
    fetchPosts();
  }, [offset]);

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

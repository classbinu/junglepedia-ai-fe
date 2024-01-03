"use client";

import { useEffect, useState } from "react";

import { CommentInput } from "@/components/comment/commentInput";
import { CommentListCard } from "@/components/comment/commentListCard";
import { PostDetailCard } from "@/components/post/postDetailCard";

export default function PostPage({ params }: { params: { uuid: string } }) {
  const [post, setPost] = useState({
    id: "",
    title: "Loading...",
    content: "Loading...",
  });

  const [commnets, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${params.uuid}`
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${params.uuid}/comments`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  };

  const submitComment = async (event) => {
    event.preventDefault();
    let content = event.target.content.value;

    const newComment = { content };
    newComment["postId"] = params.uuid;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
      setComment("");
      await fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, []);

  return (
    <>
      <PostDetailCard
        id={post.id}
        title={post.title}
        content={post.content}
        onSubmit={submitComment}
      />
      {commnets.map((comment) => (
        <CommentListCard
          key={comment.id}
          id={comment.id}
          content={comment.content}
        />
      ))}
    </>
  );
}

"use client";

import { useEffect, useState } from "react";

import { CommentInput } from "@/components/comment/commentInput";
import { CommentListCard } from "@/components/comment/commentListCard";
import { PostDetailCard } from "@/components/post/postDetailCard";
import { useRouter } from "next/navigation";

export default function PostPage({ params }: { params: { uuid: string } }) {
  const router = useRouter();

  const [post, setPost] = useState({
    id: "",
    title: "Loading...",
    content: "Loading...",
  });

  const [commnets, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    let content = comment;

    if (content === "") {
      return alert("댓글을 입력해주세요.");
    }

    setIsLoading(true);

    const newComment = { content };
    newComment["postId"] = params.uuid;

    try {
      setComment("");
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
        body: JSON.stringify(newComment),
      });
      setIsLoading(false);
      await fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostDelete = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
      router.push("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCommentDelete = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      });
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
        comment={comment}
        setComment={setComment}
        handleDelete={handlePostDelete}
        disabled={isLoading}
      />
      {commnets.map((comment) => (
        <CommentListCard
          key={comment.id}
          id={comment.id}
          content={comment.content}
          handleCommentDelete={handleCommentDelete}
        />
      ))}
    </>
  );
}

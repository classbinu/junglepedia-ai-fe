"use client";

import { decodeToken, getAccessTokenAndValidate } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

import { CommentListCard } from "@/components/comment/commentListCard";
import { PostDetailCard } from "@/components/post/postDetailCard";
import { useRouter } from "next/navigation";

export default function PostPage({ params }: { params: { uuid: string } }) {
  const router = useRouter();

  const [post, setPost] = useState({
    id: "",
    title: "Loading...",
    content: "Loading...",
    author: {
      id: "",
      nickname: "Loading...",
      avatar: "",
      type: 1,
    },
  });

  const [commnets, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const [commentPostLoading, setCommnetPostLoading] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const fetchTokenAndDecode = async () => {
      const accessToken = await getAccessTokenAndValidate();
      if (accessToken) {
        const tokenData = decodeToken(accessToken);
        setDecodedToken(tokenData);
      }
    };

    fetchTokenAndDecode();
  }, []);

  const fetchPost = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${params.uuid}`
      );
      const post = await response.json();
      setPost(post);
    } catch (error) {
      console.error(error);
    }
  }, [params.uuid]); // 여기에 의존성을 추가합니다.

  const fetchComments = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/posts/${params.uuid}/comments`
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
  }, [params.uuid]); // 여기에 의존성을 추가합니다.

  const submitComment = async (event) => {
    event.preventDefault();
    let content = comment;

    if (content === "") {
      return alert("댓글을 입력해주세요.");
    }

    setCommnetPostLoading(true);

    const newComment = { content };
    newComment["postId"] = params.uuid;

    try {
      const accessToken = await getAccessTokenAndValidate();
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(newComment),
      });
      setComment("");
      setCommnetPostLoading(false);
      await fetchComments();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [fetchComments, fetchPost]);

  return (
    <>
      <PostDetailCard
        id={post.id}
        post={post}
        onSubmit={submitComment}
        comment={comment}
        setComment={setComment}
        commentPostLoading={commentPostLoading}
        decodedToken={decodedToken}
      />
      {commnets.map((comment) => (
        <CommentListCard
          key={comment.id}
          uuid={comment.id}
          comment={comment}
          decodedToken={decodedToken}
        />
      ))}
    </>
  );
}

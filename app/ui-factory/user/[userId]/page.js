"use client";
import Loader from "@/components/Loader";
import { ajax } from "@/utils/ajax";
import { useParams } from "next/navigation";
import { Children, useEffect, useState } from "react";

function User() {
  const params = useParams();
  const { userId } = params;
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false)
  const fetchData = async () => {
    setLoading(true);
  const data = await ajax(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);
  return isLoading ? <Loader /> :
  <div>
    {Children.toArray(posts.map((post)=>{
      return <div>{post.userId} {post.title}</div>
    }))}
  </div>;
}

export default User;

import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            console.log(
                window.scrollY,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight
            );
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </AppLayout>
    );
};

export default Home;

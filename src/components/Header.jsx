import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const { posts,likeCount } = useSelector(state=>state.postState);
    console.log(likeCount);
    console.log(posts?.title);
    // const likes = posts.reduce((total,post)=>total+post.likes, 0)
    return (
        <div className="bg-indigo-900 p-5 h-20">
            <div className="max-w-6xl mx-auto flex items-center text-white justify-between">
                <h3 className="font-bold text-xl  uppercase">Post App</h3>
                <span className="bg-white h-6  flex justify-center text-black p-1 items-center rounded-full">Total Posts:  {posts?.length} - Total Likes: {likeCount}</span>
                {/* Likes: {posts?.likes} */}
            </div>
        </div>
    );
};



export default Header;

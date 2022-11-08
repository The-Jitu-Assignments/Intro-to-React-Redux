import { ADD_LIKE, COUNT_LIKES, CREATE_POST_ACTION, DELETE_POST_ACTION } from "../types";

const initialState = {
	posts: [],
	name:"Awesome App",
    likeCount: 0
};

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_POST_ACTION:
			return { ...state, posts: [...state.posts, action.post]};
		case DELETE_POST_ACTION:
			const newPosts = state.posts.filter(post => post.id !== action.id);
			return { ...state, posts: newPosts };
        case ADD_LIKE: 
            const updatedPosts = state.posts.map((post) => { 
                if(post.id === action.id){
                    post.likes = post.likes + 1;
                }
                return post
            });

            return {...state, posts: updatedPosts};
        case COUNT_LIKES:
            let total = 0;
            state.posts.forEach((post) => {
                total += post.likes
            })
            // let total = state.posts.reduce((acc, post) => acc + post.likes, 0);
            return { ...state, likeCount: total }
        default:
            return state;
    }
};

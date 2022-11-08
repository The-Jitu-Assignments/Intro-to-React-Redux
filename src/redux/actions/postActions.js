import { CREATE_POST_ACTION, DELETE_POST_ACTION, ADD_LIKE, COUNT_LIKES } from "../types"

export const createPostAction = (newPost) => {
	return {
		type: CREATE_POST_ACTION,
		post: newPost
	}
}

export const deletePostAction = (id) => {
	return {
		type: DELETE_POST_ACTION,
		id
	}
}

export const addLike = (id) => {
	return {
		type: ADD_LIKE,
		id
	}
}

export const countLikes = () => {
	return {
		type: COUNT_LIKES
	}
}
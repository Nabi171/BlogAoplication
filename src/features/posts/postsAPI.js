import axios from "../../../src/components/utilitis/axios";

export const getPosts = async () => {
    const response = await axios.get("/blogs");

    return response.data;
};
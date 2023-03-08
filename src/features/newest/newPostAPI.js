import axios from "../../components/utilitis/axios";

export const getnewPosts = async () => {
    const response = await axios.get("/blogs");

    return response.data;
};
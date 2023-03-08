import axios from "../../components/utilitis/axios";

export const getlikes = async () => {
    const response = await axios.get("/blogs");

    return response.data;
};
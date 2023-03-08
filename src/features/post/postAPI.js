import axios from "../../components/utilitis/axios";

// import axios from "../../utils/axios";

export const getPost = async (id) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
};

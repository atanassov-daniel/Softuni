import request from "./request";

const baseUrl = 'http://localhost:5000/pets';

export const getOne = async (id) => {
    return await request(`${baseUrl}/${id}`);
};

export const getAll = async () => {
    return await request(`${baseUrl}`);
};

export const updateOne = async (id, body) => {
    return await request(`${baseUrl}/${id}`, 'PATCH', body);
};

export const like = async (id) => {
    //! should I check for the creator here, or on the eventhnalder and if invalid not even run this current function, or even the like button shouldn't be availabale at the first place for people that have already liked, or should it act as an unlike

    const oldInfo = await getOne(id);

    oldInfo.likes += 1;

    return await updateOne(id, oldInfo);
};
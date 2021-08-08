import axios from 'axios';

const link = 'https://cutomize.herokuapp.com/material';

export const post = async (obj) => {
  const res = await axios.post(link, obj);
  return res.data;
};

export const patch = async (obj) => {
  await axios.patch(link, obj);
};

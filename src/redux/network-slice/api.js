import axiosInstance from '../../security/axiosInstance';

export const commonApi = {
  get: async (url, params) => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  },
  post: async (url, data) => {
    const response = await axiosInstance.post(url, data);
    return response.data;
  },
  put: async (url, data) => {
    const response = await axiosInstance.put(url, data);
    return response.data;
  },
  patch: async (url, data) => {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  },
  delete: async (url, params) => {
    const response = await axiosInstance.delete(url, { params });
    return response.data;
  },
  postMultipart: async (url, data) => {
    // const formData = new FormData();

    // // Append data to the formData
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }
    const response = await axiosInstance.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return response.data;
  },
};

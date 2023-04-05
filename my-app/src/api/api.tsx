import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://hahow-recruit.herokuapp.com/",
  timeout: 5000,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiRequest = async (config: AxiosRequestConfig) => {
  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// hero list api

export type GetHeroResponseData = {
  id: number;
  name: string;
  image: string;
}[];

export const getHeroes = async (): Promise<GetHeroResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/heroes",
  };
  return await apiRequest(config);
};

// hero profile api

export type GetHeroProfileResponseData = {
  str: number;
  int: number;
  agi: number;
  luk: number;
};


export const getHeroProfile = async (id: string): Promise<GetHeroProfileResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/heroes/${id}/profile`,
  };
  return await apiRequest(config);
}

export const updateHeroProfile = async (id: string, data: GetHeroProfileResponseData): Promise<GetHeroProfileResponseData> => {
  const config: AxiosRequestConfig = {
    method: "PATCH",
    url: `/heroes/${id}/profile`,
    data,
  };
  return await apiRequest(config);
}
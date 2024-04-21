import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxios from './useAxios';


const useGetAllNews = () => {
    const instance = useAxios()
    const { data: allNewsData = [] } = useQuery({
        queryKey: ["allNewsData"],
        queryFn: async () => {
            const res = await instance.get("/news")
            return res.data
        }
    })
    return [allNewsData]
};

export default useGetAllNews;
import axios from "axios";
import { 
  useQuery,
  useMutation, 
  useQueryClient
 } from "@tanstack/react-query"


export const useApiGet = (key, fn, options) => useQuery({
    queryKey: key,
    queryFn: fn,
    ...options
})

export const useApiSend = (fn, success, error, invalidateKey, options) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: fn,
        onSuccess: (data) => {
            invalidateKey &&
                invalidateKey.forEach((key) => {
                    queryClient.invalidateQueries(key);
                });
            success && success(data);
        },
        onError: error,
        retry: 2,
        ...options, 
    });
};

const API_BASE_URL = "https://api.rawg.io/api/game";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getFeeds = () =>
    request({
        url: `/feed`,
        method: "GET",
    })

const {
        data,
        isLoading,
        error,
        isError,
        isLoadingError,
        refetch } = useApiGet(
            ["feeds"],
            getFeeds,
            {
                enabled: true,
                refetchOnWindowFocus: true,
                retry: 1
            }
        );


    if (isLoading)
        return <ScreenLoader />;

    if (isError || isLoadingError)
        return <ErrorPage
            error={error?.message}
return (
  <div>
    {data?.map((item,index))=> <PostCard item={item} key={index}/>}
  </div>
)
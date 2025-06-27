import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/rpc";
import { LoginRequest, LoginResponse } from "@/lib/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type RequestType = LoginRequest;
type ResponseType = LoginResponse;

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json: RequestType) => {
      const response = await client.login(json.email, json.password);
      
      if (response.accessToken) {
        // Сохраняем токены
        client.setToken(response.accessToken);
        if (typeof window !== 'undefined') {
          localStorage.setItem('refresh_token', response.refreshToken);
        }
      }
      
      return response as ResponseType;
    },
    onSuccess: () => {
      toast.success("Успешный вход в систему");
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["current"] });
    },
    onError: (error: Error) => {
      toast.error(error.message || "Ошибка входа");
    },
  });

  return mutation;
};

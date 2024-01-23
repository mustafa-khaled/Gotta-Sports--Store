import { useMutation } from "react-query";
import { loginUser } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLoginUser() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isLoading,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      toast.success(`Logged in successfully.`);
      navigate("/");
    },
  });

  return { login, isLoading, error };
}

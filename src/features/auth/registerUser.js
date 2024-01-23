import { useMutation } from "react-query";
import { registerUser } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      toast.success(`Account created successfully.`);
      navigate("/");
    },
  });

  return { register, isLoading, error };
}

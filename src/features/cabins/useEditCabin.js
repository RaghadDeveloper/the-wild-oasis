import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCbinData, id }) => createEditCabin(newCbinData, id),
    onSuccess: () => {
      toast.success("Cabin successfuly edited");
      QueryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}

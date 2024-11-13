// components/ui/use-toast.ts
import { toast } from "sonner"

export function useToast() {
  return {
    toast: (props: { title?: string; description?: string; variant?: "default" | "destructive" }) => {
      toast(props.title, {
        description: props.description,
      })
    },
  }
}
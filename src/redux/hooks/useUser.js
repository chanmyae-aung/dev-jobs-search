import { useMutation } from "@tanstack/react-query"
import { register } from "../api/authApi"

export const useUserRegisterMutation = () => {
    useMutation({
        mutationKey: ['post', 'register'],
        mutationFn: register
    })
}
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCalls = () => {
    const [calls, setCalls] = useState<Call[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const client = useStreamVideoClient();
    const { user } = useUser();
    useEffect(() => {
        const loadCallls = async () => {
            if (!client || !user) { return } 
            setIsLoading(true); 
            try {

            } catch (error) {

            }
        }; loadCallls()
    }, [client, user?.id])
}
import { Loader2 } from "lucide-react"

export const CustomError = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <Loader2 className="w-10 h-10 animate-spin text-testPrimary" />
        </div>
    )
}
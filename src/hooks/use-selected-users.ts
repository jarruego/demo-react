
import { useState } from "react";

export function useSelectedUsers() {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const handleCheckboxChange = (userId: number) => {
        setSelectedUsers(prevSelected =>
            prevSelected.includes(userId)
                ? prevSelected.filter(id => id !== userId)
                : [...prevSelected, userId]
        );
    };

    return {
        selectedUsers,
        handleCheckboxChange
    };
}
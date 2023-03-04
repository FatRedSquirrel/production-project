
import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

export const BugButton = () => {
    const [error, setError] = useState(false)

    const throwError = () => {
        setError(prev => !prev)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button
            onClick={throwError}
        >
            throw error
        </Button>
    )
}

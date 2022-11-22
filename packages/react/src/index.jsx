import { useState } from 'react';

export function MyComponent() {
    const [score, setScore] = useState(0);

    return (
        <button onClick={() => setScore(score + 1)}>{score}</button>
    )
}

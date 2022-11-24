import React, { useState } from 'react';

export function MyComponent({ name }) {
    const [score, setScore] = useState(0);

    return (
        <div>
            <p>Hello, {name}!</p>
            <button onClick={() => setScore(score + 1)}>{score}</button>
        </div>
    )
}

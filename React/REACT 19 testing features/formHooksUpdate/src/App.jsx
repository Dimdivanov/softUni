'use client';
import { useActionState } from 'react';
import { registerUser } from './actions';

function App() {
    const [state, formAction, isPending] = useActionState(registerUser, {});

    return (
        <>
            <form action={formAction}>
                <input name="username" type="text" placeholder="Username" />
                <button type="submit" disabled={isPending}>
                    {isPending ? 'Registering...' : 'Register'}
                </button>

                {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
                {state?.success && (
                    <p style={{ color: 'green' }}>Welcome, {state.username}!</p>
                )}
            </form>
        </>
    );
}

export default App;

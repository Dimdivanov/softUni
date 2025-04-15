'use server';

export async function registerUser(prevState, formData) {
    const username = formData.get('username');
    // Simulate saving to DB
    await new Promise((res) => setTimeout(res, 5000));
    console.log(prevState, username);

    return { success: true, username };
}

export default function Register() {
    return (
        <>
            <section id="register-page" className="content auth">
                <form id="register">
                    <div className="container">
                        <div className="brand-logo"></div>
                        <h1>Register</h1>

                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="maria@email.com"
                        />

                        <label for="pass">Password:</label>
                        <input type="password" name="password" id="register-password" />

                        <label for="con-pass">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                        />

                        <input className="btn submit" type="submit" value="Register" />

                        <p className="field">
                            <span>
                                If you already have profile click <a href="#">here</a>
                            </span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
}

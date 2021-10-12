const cartForm = () => {
    return (
        <form>
            <div>
                <label>Nombre Completo:</label>
                <input type="text" required data-validation-required-message="Please enter your name." />
                <p></p>
            </div>
            <div>
                <div>
                    <label>Telefono:</label>
                    <input type="tel" required data-validation-required-message="Please enter your phone number." />
                </div>
            </div>
            <div>
                <div>
                    <label>Email:</label>
                    <input type="email" required data-validation-required-message="Please enter your email address." />
                </div>
            </div>
            <div></div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default cartForm;
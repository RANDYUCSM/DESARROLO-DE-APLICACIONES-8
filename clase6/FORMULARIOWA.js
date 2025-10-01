function Formulario() {
    return (
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Escribe tu nombre" />

            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" placeholder="ejemplo@mail.com" />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje"></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
}

ReactDOM.render(<Formulario />, document.getElementById('registro-react'));

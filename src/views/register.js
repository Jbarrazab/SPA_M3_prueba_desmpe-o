import { registerUser } from '../js/auth.js';

export function showRegister() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <section class="register">
      <h2>Registro de Usuarios</h2>
      <form id="register-form">
        <label>Nombre:</label>
        <input type="text" id="name" required />

        <label>Email:</label>
        <input type="email" id="email" required />

        <label>Contraseña:</label>
        <input type="password" id="password" required />

        <button type="submit">Registrarse</button>
      </form>
      <p>Inicia sesion con tu cuenta.<a href="#/login">Inicia sesión</a></p>
    </section>
  `;

    const form = document.getElementById('register-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const newUser = {
            name,
            email,
            password,
            role: "user"
        };

        try {
            await registerUser(newUser);
            alert("Registrado exitosamente");
            window.location.hash = '#/login';
        } catch (error) {
            alert(error.message || "Registro fallido, intenta nuevamente");
            console.error(error);
        }
    });
}

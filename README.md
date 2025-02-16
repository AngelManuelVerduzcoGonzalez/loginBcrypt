# Proyecto de Login

Este proyecto es una aplicación web simple que permite a los usuarios registrarse, iniciar sesión y ver una lista de usuarios. Utiliza Node.js con Express para el backend y HTML, CSS y JavaScript para el frontend.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navega al directorio del proyecto:

    ```sh
    cd login
    ```

3. Instala las dependencias del proyecto:

    ```sh
    npm install
    ```

4. Crea un archivo [.env](http://_vscodecontentref_/2) en la raíz del proyecto y agrega tu clave secreta (recuerda añadirlo a tu [`.gitignore`](.gitignore )):

    ```env
    SECRET_KEY=your_secret_key
    ```

## Ejecución del Servidor

1. Inicia el servidor:

    ```sh
    node src/server.js
    ```

2. El servidor se ejecutará en `http://localhost:3000`.

## Ejecución de la Aplicación Web

1. Abre el archivo [`src/pages/index.html`](src/pages/index.html ) en tu navegador web.

## Estructura del Proyecto

- [`src/css/styles.css`](src/css/styles.css ): Archivo de estilos CSS.
- [`src/logic/login.js`](src/logic/login.js ): Lógica de la página de inicio de sesión.
- [`src/logic/signUp.js`](src/logic/signUp.js ): Lógica de la página de registro.
- [`src/logic/users.js`](src/logic/users.js ): Lógica de la página de usuarios.
- [`src/pages/index.html`](src/pages/index.html ): Página de inicio de sesión.
- [`src/pages/sign-up.html`](src/pages/sign-up.html ): Página de registro.
- [`src/pages/users.html`](src/pages/users.html ): Página de usuarios.
- [`src/pages/home.html`](src/pages/home.html ): Página principal.
- [`src/pages/denied.html`](src/pages/denied.html ): Página de acceso denegado.
- [`src/server.js`](src/server.js ): Servidor Express.
- [`usuarios.json`](usuarios.json ): Archivo JSON que almacena los usuarios registrados.
- [`src/controllers/loginController.js`](src/controllers/loginController.js ): Controlador de inicio de sesión.
- [`src/controllers/signUpController.js`](src/controllers/signUpController.js ): Controlador de registro.
- [`src/controllers/usersController.js`](src/controllers/usersController.js ): Controlador de usuarios.
- [`src/middleware/usuarios.js`](src/middleware/usuarios.js ): Middleware de autenticación y autorización.

## Endpoints del Servidor

- `POST /login`: Inicia sesión de un usuario.
- `POST /sign-up`: Guarda un nuevo usuario.
- `GET /users`: Obtiene la lista de usuarios.
- `PUT /users/:username`: Cambia el estado de un usuario (activo/inactivo).

## Notas

- Asegúrate de que el archivo [`usuarios.json`](usuarios.json ) esté en la raíz del proyecto y esté incluido en [`.gitignore`](.gitignore ) para evitar subir datos sensibles al repositorio.
- La aplicación web debe ser servida desde un servidor web (por ejemplo, usando la extensión Live Server de Visual Studio Code) para evitar problemas de CORS.

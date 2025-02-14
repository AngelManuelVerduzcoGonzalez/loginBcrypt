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

## Ejecución del Servidor

1. Inicia el servidor:

    ```sh
    node src/server.js
    ```

2. El servidor se ejecutará en `http://localhost:3000`.

## Ejecución de la Aplicación Web

1. Abre el archivo [index.html](http://_vscodecontentref_/0) en tu navegador web.

## Estructura del Proyecto

- [styles.css](http://_vscodecontentref_/1): Archivo de estilos CSS.
- [login.js](http://_vscodecontentref_/2): Lógica de la página de inicio de sesión.
- [sign-up.js](http://_vscodecontentref_/3): Lógica de la página de registro.
- [users.js](http://_vscodecontentref_/4): Lógica de la página de usuarios.
- [index.html](http://_vscodecontentref_/5): Página de inicio de sesión.
- [sign-up.html](http://_vscodecontentref_/6): Página de registro.
- [users.html](http://_vscodecontentref_/7): Página de usuarios.
- [server.js](http://_vscodecontentref_/8): Servidor Express.
- [usuarios.json](http://_vscodecontentref_/9): Archivo JSON que almacena los usuarios registrados.

## Endpoints del Servidor

- `POST /save-user`: Guarda un nuevo usuario.
- `GET /users`: Obtiene la lista de usuarios.
- `GET /users/:username`: Obtiene un usuario por su nombre de usuario.
- `POST /users/:username`: Cambia el estado de un usuario (activo/inactivo).

## Notas

- Asegúrate de que el archivo [usuarios.json](http://_vscodecontentref_/10) esté en la raíz del proyecto y esté incluido en [.gitignore](http://_vscodecontentref_/11) para evitar subir datos sensibles al repositorio.
- La aplicación web debe ser servida desde un servidor web (por ejemplo, usando la extensión Live Server de Visual Studio Code) para evitar problemas de CORS.

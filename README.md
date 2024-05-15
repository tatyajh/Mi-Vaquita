# Arquitectura de 3 Capas para APIs

Este proyecto sigue una arquitectura de 3 capas, que es una forma de estructurar una aplicación donde se separa la lógica de negocio en tres capas distintas: presentación, lógica de negocio y acceso a datos. En este caso, la presentación se maneja a través de la capa de rutas y controladores, la lógica de negocio se encuentra en los servicios, y el acceso a datos se realiza a través de los servicios.

## Estructura de archivos

- **app.js**: Configura y ejecuta la aplicación.
- **routes/groups.router.js**: Define los endpoints y los asocia a las funciones del controlador.
- **controllers/groups.controller.js**: Contiene la lógica de control de las peticiones HTTP relacionadas con grupos.
- **service/groups.service.js**: Contiene la lógica de negocio y las operaciones de datos.

## Métodos comunes en Express.js

### Métodos de req (Request)

- **req.body**: Contiene los datos enviados en el cuerpo de la solicitud POST o PUT.
- **req.params**: Un objeto que contiene propiedades mapeadas a los parámetros nombrados en la ruta.
- **req.query**: Un objeto que contiene la cadena de consulta de la solicitud.
- **req.method**: Una cadena que contiene el método HTTP de la solicitud.
- **req.url** o **req.path**: Contiene la URL o el camino de la solicitud.
- **req.headers**: Un objeto que contiene los encabezados de la solicitud.

### Métodos de res (Response)

- **res.send(body)**: Envía una respuesta HTTP con el cuerpo especificado.
- **res.json(json)**: Envía una respuesta JSON.
- **res.status(code)**: Establece el código de estado HTTP de la respuesta.
- **res.end()**: Finaliza el proceso de respuesta sin enviar ningún dato.
- **res.sendFile(path)**: Envía el archivo ubicado en path al cliente.
- **res.render(view, locals)**: Renderiza una vista con el motor de plantillas configurado.
- **res.redirect(path)**: Redirige al cliente a la URL especificada.
- **res.header(field, value)**: Establece un encabezado de respuesta.

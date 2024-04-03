 patrón de diseño MVC (Modelo-Vista-Controlador),adaptado para APIs donde se tiene Modelo-Controlador-Servicio, 
 ya que las vistas no son manejadas directamente en el backend.


app.js: Configura y ejecuta la aplicación.
routes/index.js: Define los endpoints y los asocia a las funciones del controlador.
controllers/groups.controller.js: Contiene la lógica de control de las peticiones HTTP relacionadas con grupos.
service/groups.service.js: Contiene la lógica de negocio y las operaciones de datos.

En Express.js, los objetos req (request) y res (response) tienen varios métodos y propiedades que puedes utilizar para manejar las solicitudes y respuestas HTTP. Aquí te detallo algunos de los más comunes:

Métodos de req (Request)
req.body: Contiene los datos enviados en el cuerpo de la solicitud POST o PUT, que son parseados por middlewares como express.json() para solicitudes JSON o express.urlencoded() para datos de formulario.
req.params: Un objeto que contiene propiedades mapeadas a los parámetros nombrados en la ruta. Por ejemplo, en la ruta /users/:userId, req.params.userId tendría el valor del identificador de usuario.
req.query: Un objeto que contiene la cadena de consulta de la solicitud, donde las claves son los nombres de los parámetros de la consulta.
req.method: Una cadena que contiene el método HTTP de la solicitud (por ejemplo, 'GET', 'POST').
req.url o req.path: Contiene la URL o el camino de la solicitud.
req.headers: Un objeto que contiene los encabezados de la solicitud.
Métodos de res (Response)
res.send(body): Envía una respuesta HTTP con el cuerpo especificado. Puede ser un String, un Buffer, un objeto, o un Array.
res.json(json): Envía una respuesta JSON. Este método convierte el argumento pasado en JSON si es necesario.
res.status(code): Establece el código de estado HTTP de la respuesta. Debe ser un número válido de código de estado HTTP.
res.end(): Finaliza el proceso de respuesta sin enviar ningún dato. Útil cuando solo quieres enviar el código de estado HTTP.
res.sendFile(path): Envía el archivo ubicado en path al cliente, estableciendo automáticamente el tipo de contenido basado en el archivo.
res.render(view, locals): Renderiza una vista con el motor de plantillas configurado, donde view es el nombre de la vista y locals un objeto con variables locales para la vista.
res.redirect(path): Redirige al cliente a la URL especificada en path.
res.header(field, value): Establece un encabezado de respuesta con el campo y valor especificados.
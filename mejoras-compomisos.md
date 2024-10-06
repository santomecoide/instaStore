### Mejoras y compromisos

1. ¿Qué mejorarías de tu código? ¿Por qué? 
    - Más tests unitarios, para tener una cobertura mayor al 90%.
    - Unificar los valores constantes en enums; por ahora, los que utilizo (por lo que son pocos) los tengo en el mismo código. Es mejor organizar estos valores en un archivo separado.
    - Implementar una capa linter para mejorar y conservar la estética del código.
    - Cambiar el comportamiento del logging para que se guarde en un recurso de la nube y no en la memoria.
    - Implementar una capa de seguridad con un enfoque de autenticación con JWT y autorización basada en cuotas.

2. ¿Qué compromisos harías para cumplir con el tiempo? ¿Qué harías la próxima vez para entregar más y sacrificar menos?
    - Para este caso, implementé una arquitectura DDD, la cual es muy robusta porque exige mayores configuraciones, lo que toma más tiempo. Si la aplicación no necesita ese nivel de robustez, por ser un MVP o una prueba de concepto, omitiría utilizar este tipo de enfoques y utilizaría otro más simple como MVC (modelo vista controlador) para agilizar la entrega.

    - Un compromiso que realizaría es enfocar el tiempo 100% en el desarrollo. Para este caso, tenía que cumplir con otros compromisos laborales; por lo tanto, mi dedicación diaria no fue del 100%. Esto claramente mejoraría los tiempos de entrega.

3. ¿Crees que tu aplicación es segura? ¿Por qué?
    - La aplicación no es nada segura; no tiene ninguna capa de seguridad y si se despliega en un ambiente productivo, estaría expuesta.

4. ¿Qué harías para medir el comportamiento de tu producto en un entorno de producción?
    - Monitoreo de rendimiento: utilizar herramientas de monitoreo como Datadog o Prometheus para obtener métricas como tiempo de respuesta, tasa de errores y uso de recursos.

    - Logging más detallado: utilizar más niveles de logging en diferentes partes del código.

    - Pruebas de carga: tener una capa de pruebas de carga para evaluar los límites y el rendimiento de la API.


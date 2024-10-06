### Preguntas y Respuestas Juan Felipe
1. Hay alguna base de datos donde esté la información de las tiendas a la que me pueda conectar? Si es así me podrían compartir las credenciales de acceso
  - Esperamos que la resuelvas por tu lado, puedes usar la estrategia que te parezca mejor para el challenge

2. Cuando dice "convenience" se refiere a que la tienda este abierta (isOpen) y la próxima fecha de de entrega (nextDeliveryTime) sea la más cercana? podría ampliar la explicación de lo que se refiere con "convenience"
  - Esos dos parámetros logísticos ayudan a que una tienda sea conveniente. También la distancia parece importante, plantear la solución que te parezca mejor para el caso.

3. Hay alguna convención espacial para manejar las coordenadas o simplemente utilizar longitud y latitud
  - Con latitud y longitud está bien.

### Arquitectura
El enfoque arquitectonico a utilizar será DDD. Amplio la explicación de este en el archivo de README

### Boceto de funcionamiento aplicación
La aplicación tendrá un endpoint GET, el cual responda con la tienda mas cercana. Para esto las coordenadas del usuario serán compartidas mediante query params

### Feha de entrega estimada
6 de octubre 2024 
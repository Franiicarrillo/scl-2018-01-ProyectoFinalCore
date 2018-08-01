# Sistema de Registro de visitas

## Introducción

Actualmente el sistema de registro de visitas de espacio IF Blanco consiste en un excel y una coordinación interna por whatsapp entre administración, recepcionista y encargados de las empresas del espacio. Esto resulta ser un proceso poco eficiente para los usuarios y la administración.

Es por esto, que presentamos una aplicación que ayudará al visitante de IF a ingresar sus datos de forma rápida y sencilla en tan solo 3 pasos. Y al mismo tiempo, también ayudará a la administradora de espacio if, ya que tendrá acceso a una base de datos ordenada y completa en tiempo real de estos registros.

[Enlace a la aplicación](https://valeriacossio.github.io/scl-2018-01-ProyectoFinalCore/assets/html/bienvenida.html)

## Investigación

Para la realización de esta aplicación, se hicieron entrevistas a los trabajadores de IF Blanco, con el objetivo de entender el funcionamiento del sistema de registro de visita e identificar los principales problemas que tiene el actual sistema de registro. [ver anexo para más detalles](https://docs.google.com/document/d/1_vKxt6RkvePqrdIW02hymERu9JQm1Df-DNXSCinvoeY/edit?usp=sharing) 
En paralelo, también se hizo un [mapa de usuario](https://docs.google.com/document/d/1FXBEQzjznU85llF_xh61bDeHdEB6hO9osCf-X8cCmFI/edit?usp=sharing) para entender el comportamiento del visitante frente al actual sistema de registro de visitas. 

### Datos más relevantes
En primer lugar, los datos que se obtuvieron en recepción nos permitió conocer el actual sistema de registro de visitas, el cual consiste en un excel que la recepcionista va completando a medida que van llegando visitas. 

Los datos que obligatoriamente debe ingresar el recepcionista en el registro son los siguientes:
 * Nombre
 * Apellido
 * Rut
 * Motivo 
 * Hora de ingreso 
 * Hacia dónde se dirige
 * ¿Viene con compañía?
 * ¿Viene en auto/moto?

(En el caso de que venga en un vehículo, la patente es otro dato obligatorio).
(Lo mismo pasa en el caso de que venga con compañía. El usuario deberá escribir el nombre de su acompañante obligatoriamente).

Una de las complicaciones que nos comentaron en las entrevistas es la duplicación de información que se produce cuando una persona viene a IF Blanco con frecuencia. Además se vuelve una situación engorrosa para el visitante el hecho de estar dando los mismos datos cada vez que viene de visita. 

Otra complicación que se producen en recepción al momento de registrar la visita, es que existen personas que no les gusta dar sus datos o son muy impacientes.

Un dato que nos proporcionó la administradora es la importancia de obtener el correo electrónico o alguna otra información para ponerse en contacto con los posibles clientes de  IF Blanco. Además, algo que le parece relevante de incorporar en el formulario de registro es la comuna de procedencia de la visita y el tipo de institución que ingresará (publicidad, educación, tecnología, etc) para tener una idea de cuál es el público que más llega a IF. Y finalmente, sería útil tener acceso a esa base de datos para tener mayor control y conocimiento de la gente que ingresa a IF Blanco.

Dentro de los tipos de visita que llegan a IF, se pueden resumir en tres:
1. Clientes que vienen a observar y/o arrendar un espacio en IF.
2. Proveedores que vienen a dejar entregas dentro de IF.
3. Visitantes a empresas que se encuentra dentro de IF. 

### Conclusiones: 
En base a las entrevistas, podemos sacar en limpio la información más relevante para implementarla en nuestro producto mínimo viable, como lo es la diferenciación del tipo de visita, la cual ayudará a tener un registro con información dirigido al tipo de visita. También se creará una base de datos en tiempo real, la cual solo tendrá acceso la administradora. Y otra de las funcionalidades a considerar para la aplicación, será añadir la opción de “visita frecuente” para evitar la duplicación de información y agilizar el proceso de registro de visitas.

### Sesiones de testing con sketch
En base a lo observado en la primera dos sesiones de testing realizadas con sketch, existen cambios que se discutirán dentro del equipo para un posible cambio y/o mejora del producto. 

[Ver anexo para más detalles](https://docs.google.com/document/d/1KjwnXKIDFQJsWDixKZ2HQx8K1KnVxpc1bk6198jJkEE/edit?usp=sharing) 

Dentro de los posibles cambios se encuentran:

1. Poner la opción para devolverse al paso anterior y para regresar al menú principal.
2. Resaltar el botón en la vista de “Seleccione el tipo de visita.”
3. En la vista de “Registro de datos”, poner un input  a la respuesta “¿a quién visita?” para que el usuario decida si poner o no el nombre de la persona que viene a visitar. Este dato NO debe ser obligatorio. 
4. En la vista de “Registro de datos”, se debe indicar si viene en auto o en bicicleta. Si marca auto, deberá obligatoriamente poner la patente del vehículo. 
5. Mejorar mensaje de registro exitoso para que el usuario sepa que debe esperar en recepción hasta que le den autorización a la entrada al espacio. 
6. Añadir botón donde se informe al usuario que sus datos serán utilizados solo con el fin de tener un registro de las personas que ingresan a Espacio IF. 

### Historias de usuario:
Las historias de usuario se formularon después de realizar las entrevistas y los test de usabilidad. 

* Historia de usuario:
Como Administradora de IF quiero tener acceso a los registros de los visitantes para tener un control de la gente que ingresa al espacio.

* Pruebas:
La administradora deberá ingresar con una contraseña a la base de datos.
Debe existir una base de datos en tiempo real que vaya creciendo a medida que los visitante se registran exitosamente.

* Historia de usuario: Como recepcionista de IF quiero tener una base de datos de los visitantes frecuentes para que no se duplique la información y el visitante no tenga que estar dando sus datos cada vez que viene.

* Pruebas:
El visitante debe ingresar al registro de visita y completar todos los pasos.
Cuando ingrese en otra ocasión, deberá escribir su RUT y aparecerá su nombre y datos en el registro.
Deberá confirmar sus datos para poder ingresar.

* Historia de usuario: Como visita de IF quiero tener certeza que mis datos no serán utilizados con fines comerciales para tener mayor confianza con el espacio.

* Pruebas:
La única persona que tendrá acceso a la base de datos es la administradora del lugar.
Existirá un mensaje en el formulario de registro que informará al usuario que sus datos no tendrá fines comerciales. Solo de registro.

## Proceso de Diseño

![solo vistas](https://user-images.githubusercontent.com/39053734/43492292-4c8cf034-94f6-11e8-8306-cfb3489631df.jpg)


[Ir al prototipo de baja fidelidad](https://docs.google.com/document/d/1TGjB8LnUxzNR2nyhny94shq71AW7ibaCDC2DBaEBqLo/edit?usp=sharing)

[Ir a prototipo de alta fidelidad](https://www.figma.com/file/IRUHWHV0mNStMOQxQ8FlQiNC/Untitled?node-id=0%3A1)


## Planificación del proyecto

Para la planificación de este proyecto, se utilizó la herramienta trello.

[Ir a planificación](https://trello.com/b/WiEWhekW/proyecto-final-common-core)


## Tecnologías usadas

La aplicación está estructurada utilizando javascript, html, css, bootstrap y firebase.


## Autoras
- Valeria Cossio
- Francisca Carrillo
- Karina Smoje








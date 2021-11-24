## Tercer parcial Frontend (Instagram)

Entrega final para la materia de Frontend, Universidad de San Buenaventura Cali
- **Jhon Robert Uribe 30000026618**
- **Javier Mauricio Rodriguez Villamil 30000036934**

## Distribucion de componentes

Principalmente dividimos la aplicacion en dos componentes macro, que son Login y feed, dentro de estos dos componentes principales ira la informacion o los demas componentes
necesarios para servir a la aplicacion

# LoginLayout

Dentro de este macro componente se encuentran todos los componentes que sirven para dar vida a la seccion. visualmente se veria de esta forma: 

![Login](https://user-images.githubusercontent.com/89543370/143326035-42f030be-f16a-4452-9d5a-582547b49ceb.png)

La carpeta HeaderDesktop es utilizada para crear el Header del pagina con los siguientes componentes:
- HeaderDesk.jsx
- HeaderImage.jsx
- IconHeader.jsx
- SearchFiel.jsx 


La carpeta history tiene los siguientes componentes
- Historypin.jsx 
- PincardHistory.jsx
- PinHistoryImage.jsx
Se Agrega una imagen, se genera un circulo trasero y se le agrega el nombre de usuario a la historia 

La carpeta ImagePin tiene los siguientes elementos
- PinCard.jsx
- PinImage.jsx (Imagen)
Se Agrega una imagen y se utiliza un grid con el llamado de varios Pincard.


UserDataPin
- Coments.jsx         (comentarios)
- IconPinCard.jsx    (Iconos)
- PinUserinfor.jsx    (Usuario que publica)
- SearchBarPin.jsx    (Barra de busqueda)

Es el complemento del contenedor donde se agrega Los iconos,la barra de busqueda,los comentarios y el usuario que mando la publicacion.

UserAdd
- AddeUsers.jsx
- OtherUsers.jsx
Es un carpeta donde se usa para colocar el usario que inicio seccion y sus seguidores con la informacion.

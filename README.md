# Deploy Angular App

# Deploy to GitHub Pages.

GitHub Pages es una opcion para desplegar contenido estatico, es decir HTML,CSS o JS, es decir solo para front-end aplicacion.

Para poder desplegar nuestra aplicacion angular en github Pages deberemos seguir los siguientes pasos.

1. Instalar dependencia de github Pages 
        
        npm i -g angular-cli-ghpages

2. Construir nuestro proyecto y enlazarlo con nuestro usuario github.

        ng build --pro --base-href="https://username.github.io/name-repository/"     

3. Publicar la aplicacion construida en github pages, podemos usar dos comandos

        3.1 ngh
        3.2 ngh --no-silent        


## Custom Script

Todos estos pasos pueden ser adicionados en un custom script, para esto seguiremos los siguientes pasos.

1. Abriremos package.json

2. Escribiremos lo siguiente en la seccion de "scripts"

        "deploy:gh": "ng build --pro --base-href='https://andresmontoyab.github.io/DeployingAngularApp/'"


# FireBase

Otra opcion para desplegar aplicaciones es Firebase, firebase es una plataforma que nos permite desplegar nuestro contenido y ademas nos brinda servicios para almacenamiento de informacion en bases de datos no relacionales, ademas cuenta con un sistema de mensajeria.

1. Instalar dependencia firebase

        npm i -g firebase-tools

2. Loguearse en FireBase

        firebase login

3. Iniciar firebase

        firebase init

4. En las opciones que aparecieron luego de firebase init elegiremos hosting     

5. Seleccionamos el proyecto que deseamos desplegar, una vez los seleccionamos este nos creará dos archivos.

6. Abriremos el archivo firebase.json y pondremos en el lo siguiente, con lo cual le estaremos diciendo a firebase que busque la informacion a desplegar en el directorio dist y que siempre que tratemos de acceder a la aplicacion por cual url diferentes a la base nos direccione a nuestro index.html.   

        {
            "hosting": {
                "public": "dist",
                "rewrites": [
                    {
                        "source":"**",
                        "destination": "/index.html"
                    }
                ]
            }
        }


7. Construimos nuestro proyecto

        ng -build --prod (depende que instancia queramos desplegar.)

8. Desplegamos en firebase.

        firebase deploy

Este nos desplegará nuestra aplicacion y nos brindará un link en el cual estará. 

## Custom Script Firebase

        "deploy:firebase": "ng build --prod && firebase deploy" 

# Heroku

Heroku es una plataforma en la nube que te permite construir, monitorear y escalar tus aplicaciones.

1. Instalar Heroku Cli.

2. Loguearse en heroku

        heroku login

3. Crear app heroku

        heroku create [name]

El nombre que se le asigna a la aplicacion debe ser unico, si no ponemos nombres, heroku nos creará un name automaticamente para nuestra aplicacion.

Con el paso anterior ya tendremos una ulr desponible para desplegar nuestra aplicacion, para visualizarla podemos utilizar la opcion.

        heroku open

4. Configurar package.json

Debido a que heroku necesitará instalar angular/cli, angular/compiler-cli, y typescript para poder correr nuestra aplicacion deberemos mover estas dependencias de devDependencies a dependencies en nuestro archivo package.json.

Para angular/cli y angular/compiler-cli  es de elemental importacia que sean las primeras dependencias

Adicionalmente en la seccion de scripts deberemos añadir la siguiente linea que indicará la construccion de la aplicacion.

        "postinstall": "ng build --prod"

Debido a que estamos usando la libreria express en el archivo server.js deberemos instalarla 

        npm i express --save

Ahora deberemos modificar de nuevo nuestro archivo package.json en la seccion de script y editar el script start

            "start": "node server.js"         

5. Actualizar cambios

        git add .
        git commit -m ""
        git push heroku master                                                    


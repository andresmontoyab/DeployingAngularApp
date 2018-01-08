# Deploy Angular App

## Deploy to GitHub Pages.

GitHub Pages es una opcion para desplegar contenido estatico, es decir HTML,CSS o JS, es decir solo para front-end aplicacion.

Para poder desplegar nuestra aplicacion angular en github Pages deberemos seguir los siguientes pasos.

1. Instalar dependencia de github Pages 
        
        npm i -g angular-cli-ghpages

2. Construir nuestro proyecto y enlazarlo con nuestro usuario github.

        ng build --pro --base-href="https://username.github.io/name-repository/"     

3. Publicar la aplicacion construida en github pages, podemos usar dos comandos

        3.1 ngh
        3.2 ngh --no-silent           
# Ventas-Gamer
Venta de productos tecnológicos usando HTML, CSS y JavaScript

--------------------------EJECUTAR EN VISUAL STUDIO CODE-----------------------------

OPCION 1:
- Instalar la extension: Live server
- Seleccionar Index.html, click derecho, abrir con LiveServer 

OPCION 2:
- Abrir la terminal (Ctrl + ñ)
- Ejecutar: python -m http.server
- En el navegador: http://localhost:8000/index.html

------------------------GITHUB-------------------------------------------------------

GUARDAR EN UNA CUENTA DE GITHUB:
- git init
- git remote add origin <URL_DEL_REPOSITORIO>
- git add .
- git commit -m "Primer commit"
- git push -u origin main


CLONAR DE UNA CUENTA DE GIHUB:
- git clone <URL_DEL_REPOSITORIO>
- cd CARPETA
- Realizar cambios
- git add .
- git commit -m ""
- git push -u origin main 

ERRORES MÁS COMUNES
- error: src refspec main does not match:: NO HAY RAMAS, CREAR RAMAS
  git branch
  git checkout -b main

- Repositrio remoto no tiene cambios que no tiene local
  git pull origin main --rebase

# Usa una imagen de Node.js como base
FROM node:lts-alpine3.19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /inxait_project

# Copia el archivo package.json e instala las dependencias
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el proyecto de Next.js
RUN yarn build

# Exponer el puerto en el que Next.js sirve la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicia
CMD ["yarn", "start"]
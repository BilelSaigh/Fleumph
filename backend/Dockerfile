# Utilisation de l'image Node.js officielle
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY ./ /app

# Compiler le projet TypeScript
RUN npm run build

# Exposer le port sur lequel l'application backend va tourner
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "start"]

# Utiliser l'image Node.js de base
FROM node:18

# Définir le répertoire de travail à /app
WORKDIR /app

# Copier les fichiers package.json et package-lock.json du projet Angular
COPY fleumph/package*.json ./

# Installer les dépendances Angular
RUN npm install

# Copier tout le contenu du dossier fleumph dans /app/fleumph/
COPY fleumph /app/fleumph/

# Exposer le port 4200
EXPOSE 4200

# Lancer le serveur Angular avec l'option --host correctement définie
CMD ["npm", "start", "--prefix", "fleumph", "--", "--host", "0.0.0.0"]

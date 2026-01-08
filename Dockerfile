# --- Build Stage ---
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# --- Production Stage ---
FROM nginx:alpine

# Static files in nginx Webroot
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

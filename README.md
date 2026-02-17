# Docker Setup

---

## Docker Compose

```
services:
  frontend:
    image: thecore07/kurssystem_frontend:latest
    ports:
      - "5173:80"
    environment:
      VITE_BACKEND_URL: https://<BACKENDURL>:<PORT>
    depends_on:
      - backend
```


---


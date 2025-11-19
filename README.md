## Project layout (recommended repo structure)

dhakacart/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  ├─ auth.controller.js
│  │  │  ├─ product.controller.js
│  │  │  ├─ order.controller.js
│  │  │  ├─ admin.controller.js
│  │  │  └─ payment.controller.js
│  │  ├─ middlewares/
│  │  │  ├─ auth.middleware.js
│  │  │  ├─ rbac.middleware.js
│  │  │  └─ cache.middleware.js
│  │  ├─ models/
│  │  │  ├─ index.js
│  │  │  ├─ user.model.js
│  │  │  ├─ product.model.js
│  │  │  ├─ order.model.js
│  │  │  └─ payment.model.js
│  │  ├─ routes/
│  │  │  ├─ auth.routes.js
│  │  │  ├─ product.routes.js
│  │  │  ├─ order.routes.js
│  │  │  ├─ admin.routes.js
│  │  │  └─ payment.routes.js
│  │  ├─ services/
│  │  │  └─ bkash.service.js
│  │  ├─ utils/
│  │  │  └─ logger.js
│  │  └─ app.js
│  ├─ Dockerfile
│  ├─ package.json
│  └─ .env.example
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ Home.jsx
│  │  │  ├─ ProductDetail.jsx
│  │  │  ├─ Cart.jsx
│  │  │  ├─ Checkout.jsx
│  │  │  ├─ Profile.jsx
│  │  │  └─ admin/
│  │  │     ├─ AdminDashboard.jsx
│  │  │     └─ ProductManager.jsx
│  │  ├─ context/
│  │  │  └─ AppContext.jsx
│  │  ├─ api/
│  │  │  └─ api.js
│  │  └─ main.jsx
│  ├─ Dockerfile
│  └─ package.json
├─ k8s/
│  ├─ backend-deployment.yaml
│  ├─ frontend-deployment.yaml
│  ├─ postgres-deployment.yaml
│  ├─ redis-deployment.yaml
│  └─ hpa-backend.yaml
├─ docker-compose.yml
├─ terraform/   (optional skeleton)
├─ README.md
└─ .github/
   └─ workflows/
      └─ ci-cd.yml
#############################

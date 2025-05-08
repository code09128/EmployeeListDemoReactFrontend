# EmployeeListDemoReactFrontend
Employees Frontend View uses React language to create

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## System Requirements
- VS Code IDE
- Vite JS
- Bootstrap CSS
- JavaScipt
- NPM
- Axios

## User should able to perform the below CRUD operation
- Add New Employees
- List Employees
- Update Employees
- Delete Employees

## Build the project and add the third-party lib
Configuration and Installation
```
npm create vite (npm init vite@latest my-vue-app)
cd 'your project name dir'
npm install
npm run dev
```
add bootstrap、axio、react-router-dom
```
npm install bootstrap --save
npm install axio --save
npm install react-router-dom --save
```

## package.json
```json
{
  "name": "ems-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.8",
    "bootstrap": "^5.3.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.1.6"
  }
}
```
## ViteConfig
```js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000
  }
})
```


## EmployeeManagement Page
![employeelist](https://github.com/code09128/EmployeeListDemoReactFrontend/assets/32324308/25ae3d2a-7351-4a6d-8d53-b72e34d559e4)

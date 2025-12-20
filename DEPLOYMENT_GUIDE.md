# Deployment Guide: DigitalOcean

This guide explains how to deploy the **Java DSA Learning App** (React Frontend + Node.js Backend) to DigitalOcean.

## Option 1: DigitalOcean App Platform (Recommended)
The App Platform is the easiest way to deploy. It automatically builds and serves your app.

### Prerequisites
1.  Push your code to a GitHub repository.
2.  Ensure your project structure is:
    ```
    / (root)
      /client (React)
      /server (Node.js)
    ```

### Step 1: Create App
1.  Log in to DigitalOcean and go to **Apps** -> **Create App**.
2.  Choose **GitHub** and select your repository.
3.  **Source Directory**: Leave as `/` (root).

### Step 2: Configure Components
DigitalOcean should detect two components. If not, add them manually:

#### Component 1: Backend (Web Service)
- **Name**: `server` (or `api`)
- **Source Directory**: `server`
- **Type**: Web Service
- **Build Command**: `npm install` (or leave default)
- **Run Command**: `npm start`
- **HTTP Port**: `5000`
- **Environment Variables**:
    - `GEMINI_API_KEY`: [Your Gemini API Key]
    - `MONGO_URI`: [Your MongoDB Connection String] (You can use DigitalOcean Managed MongoDB or a free Atlas cluster)

#### Component 2: Frontend (Static Site)
- **Name**: `client`
- **Source Directory**: `client`
- **Type**: Static Site
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
    - `VITE_API_URL`: `${APP_URL}/api` (Use the magic variable `${APP_URL}` or the actual backend URL if deployed separately)

### Step 3: Deploy
1.  Click **Next** and review the plan (Basic or Pro).
2.  Click **Create Resources**.
3.  Wait for the build to finish.

---

## Option 2: Droplet (Virtual Machine)
Use this if you want full control or a cheaper fixed price ($4-6/mo).

### Step 1: Create Droplet
1.  Create a Droplet with **Ubuntu 22.04** or **NodeJS** One-Click App.
2.  SSH into your droplet: `ssh root@your_ip`.

### Step 2: Setup Environment
```bash
# Install Node.js & Nginx
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs nginx git

# Install PM2 (Process Manager)
sudo npm install -g pm2
```

### Step 3: Deploy Backend
```bash
# Clone repo
git clone https://github.com/your-username/your-repo.git
cd your-repo/server

# Install & Start
npm install
echo "GEMINI_API_KEY=your_key" > .env
pm2 start index.js --name "dsa-api"
```

### Step 4: Deploy Frontend
```bash
cd ../client
npm install
npm run build

# Move build to Nginx web folder
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```

### Step 5: Configure Nginx (Reverse Proxy)
Edit default config: `sudo nano /etc/nginx/sites-available/default`

```nginx
server {
    listen 80;
    server_name your_domain_or_ip;

    root /var/www/html;
    index index.html;

    # Frontend (React Router support)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API Proxy
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Restart Nginx:
```bash
sudo systemctl restart nginx
```

## Important Notes
- **Database**: For the Droplet method, you need to install MongoDB locally (`sudo apt install mongodb`) or use a cloud database like MongoDB Atlas.
- **CORS**: In `server/index.js`, ensure `cors` allows your production domain.

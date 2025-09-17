# ⚡ XOps Microchallenge #7 – Secrets Management with Kubernetes Secrets ⚡

## 🎯 Objective

Securely store and inject fake database credentials (`DB_USER`, `DB_PASSWORD`) into a pod using Kubernetes Secrets, and verify they are accessible inside the container.

---

## 🔧 Step-by-Step Challenge

### 1. Create a Kubernetes Secret

- Store a fake DB username and password in a Kubernetes Secret named `db-credentials`.
- Verify the secret is created successfully.

Example:
```sh
kubectl create secret generic db-credentials \
  --from-literal=DB_USER=fakeuser \
  --from-literal=DB_PASSWORD=fakepass
kubectl get secret db-credentials
```

---

### 2. Inject Secret as Environment Variables

- Create a pod (e.g., NGINX or your web app) that loads the `DB_USER` and `DB_PASSWORD` values from the Secret as environment variables.
- Use `kubectl exec` to confirm the pod has the secret values available.

---

### 3. Inject Secret as Mounted Files (Optional)

- Create another pod that mounts the secret into `/etc/secrets`.
- Verify you can read the secret values from files inside the pod.

---

### 4. Document Use Cases

#### Environment Variables vs Mounted Files

- **Environment Variables:**  
  Use when your app natively reads secrets from environment variables. Simple for most 12-factor apps.
- **Mounted Files:**  
  Use when your app expects secrets as files, or when you want to rotate secrets without restarting pods (Kubernetes updates mounted secrets automatically).

---

## 📂 Expected Repo Structure

```
/infra-repo
└── k8s/
    ├── k8s-secret.yaml           # (Optional: define Secret via YAML)
    ├── secret-env-pod.yaml       # Pod using secrets as env vars
    ├── secret-vol-pod.yaml       # Pod mounting secrets as volumes (optional)
    └── README.md                 # Steps + screenshots
```

---

## ✅ Submission Format

- ✅ Link to your repo with YAML files
- ✅ Screenshot of pod env showing secrets injected as env vars
- ✅ Screenshot of pod showing secrets mounted as files (optional)
- ✅ Short note explaining env vars vs mounted files

---

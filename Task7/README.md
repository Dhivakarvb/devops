# 🚀 XOps Microchallenge #7 – Secrets Management with Kubernetes Secrets

📌 **Objective**  
Learn how to securely manage sensitive data (like database credentials) in Kubernetes using **Secrets**. You will store fake DB credentials, inject them into pods, and verify access inside containers.

---

⚙️ **1. Prerequisites**  
- Docker  
- kind (Kubernetes-in-Docker)  
- kubectl  
- GitHub Account  

Check installations:  
```bash
docker --version
kind --version
kubectl version --client
🏗️ 2. Create a Kubernetes Secret
Create a secret with fake DB credentials:

bash
Copy code
kubectl create secret generic db-credentials \
  --from-literal=DB_USER=fakeuser \
  --from-literal=DB_PASSWORD=fakepassword
Verify:

bash
Copy code
kubectl get secrets
kubectl describe secret db-credentials
🌐 3. Inject Secret into Pods

a) As Environment Variables
Define pod in secret-env-pod.yaml.
Check values inside pod:

bash
Copy code
kubectl exec -it secret-env-pod -- printenv | grep DB_
b) As Mounted Files (Optional)
Define pod in secret-vol-pod.yaml.
Check values inside pod:

bash
Copy code
kubectl exec -it secret-vol-pod -- ls /etc/secrets
kubectl exec -it secret-vol-pod -- cat /etc/secrets/DB_USER
kubectl exec -it secret-vol-pod -- cat /etc/secrets/DB_PASSWORD
🔍 4. Use Cases – Env Vars vs Mounted Files

Environment Variables

Simple to use for credentials like DB_USER, API keys

Automatically available at runtime

⚠️ Visible in kubectl describe pod → less secure

Mounted Files

Better for large/structured data (TLS certs, config files)

Secrets can be updated without restarting pods

More secure (not exposed in pod spec)

Recommended for production

🧹 5. Clean Up

bash
Copy code
kubectl delete pod secret-env-pod
kubectl delete pod secret-vol-pod
kubectl delete secret db-credentials
📂 Repo Structure

bash
Copy code
/infra-repo
└── k8s/
    ├── k8s-secret.yaml          # Secret definition (optional if using kubectl create)
    ├── secret-env-pod.yaml      # Pod using secrets as env vars
    ├── secret-vol-pod.yaml      # Pod mounting secrets as volumes

---

## 📸 Screenshots

Below is a screenshot showing secret values accessed inside the pod:
<img width="969" height="165" alt="Screenshot 2025-09-16 163650" src="https://github.com/user-attachments/assets/6f5d865d-90e9-45c8-bf9d-f48cdd4bdc6d" />




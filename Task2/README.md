# 🚀 XOps Microchallenge #2 – Terraform Web Server

This project deploys a simple Apache web server on AWS using Terraform.

## 📦 Resources Created
- VPC
- Public Subnet
- Internet Gateway + Route Table
- Security Group (HTTP + SSH)
- Key Pair
- EC2 Instance (Amazon Linux 2, t2.micro)

## 🔧 How to Run
```bash
# Initialize project
terraform init

# Validate configuration
terraform validate

# Apply changes
terraform apply -auto-approve

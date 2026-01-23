# PERN Stack DevOps Journey 🚀

This repository documents the transformation of a full-stack **PERN (Postgres, Express, React, Node.js)** application into a production-grade, cloud-native architecture.

The project demonstrates a complete DevOps lifecycle, moving from manual deployments to fully automated CI/CD pipelines, container orchestration, and Infrastructure as Code (IaC) on AWS.

## 📌 Project Overview

The primary goal is to implement industry-standard DevOps practices, including:

* **Containerization** (Docker)
* **Orchestration** (ECS Fargate)
* **CI/CD Automation** (GitHub Actions)
* **Infrastructure as Code** (Terraform)
* **Observability** (CloudWatch, Logging)

## 🛠️ DevOps Implementation Roadmap

Below is the breakdown of the 9 core infrastructure projects implemented in this repository.

| # | Project / Milestone | Implementation Details | Key Technologies |
| :--- | :--- | :--- | :--- |
| **01** | **Manual AWS Deployment** | Deploying the monolithic application on an AWS EC2 instance. Configuring **Nginx** as a reverse proxy and managing application processes with **PM2**. | AWS EC2, Nginx, Linux CLI, PM2 |
| **02** | **Containerization** | Creating optimized Dockerfiles for the Node.js backend and React frontend. Orchestrating the local development environment using **Docker Compose**. | Docker, Docker Compose, Multi-stage Builds |
| **03** | **CI/CD Automation** | Building automated pipelines to test, build, and push code changes. Implementing workflows to ensure code quality before integration. | GitHub Actions, YAML, Linting |
| **04** | **Image Management** | Configuring **AWS ECR** (Elastic Container Registry) to store and version control the Docker images for secure production deployment. | AWS ECR, AWS CLI, IAM Permissions |
| **05** | **Cloud Database Migration** | Migrating the local PostgreSQL database to a managed **AWS RDS** instance. Configuring Security Groups and VPC peering for secure connectivity. | AWS RDS (Postgres), VPC Security Groups |
| **06** | **Container Orchestration** | Deploying the backend microservice on **AWS ECS (Fargate)**. configuring an **Application Load Balancer (ALB)** to manage traffic and auto-scaling. | AWS ECS Fargate, ALB, Target Groups |
| **07** | **Frontend CDN Hosting** | Hosting the static React frontend on **AWS S3** and distributing it globally using **CloudFront** (CDN) with custom SSL configuration. | AWS S3, CloudFront, Route53, ACM |
| **08** | **Infrastructure as Code** | Provisioning the entire AWS infrastructure (VPC, Subnets, ECS, RDS) programmatically using **Terraform** state management. | Terraform, HCL, AWS Provider |
| **09** | **Observability & Security** | Implementing centralized logging, metrics monitoring, and security scanning (DevSecOps) to ensure system reliability. | CloudWatch, SonarQube, Trivy |
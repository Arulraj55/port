pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"
        ECR_REPO = "244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Arulraj55/port.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontend-app .'
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION \
                | docker login --username AWS --password-stdin $ECR_REPO
                '''
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag frontend-app:latest $ECR_REPO:latest'
            }
        }

        stage('Push to ECR') {
            steps {
                sh 'docker push $ECR_REPO:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop frontend || true
                docker rm frontend || true
                docker pull 244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app:latest
                docker run -d -p 8082:80 --name frontend 244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app:latest
                '''
            }
        }
    }
}
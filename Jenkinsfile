pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REPO = '244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app'
        IMAGE_TAG = 'latest'
        CONTAINER_NAME = 'frontend'
        PORT = '8082'
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

        stage('Tag Image') {
            steps {
                sh 'docker tag frontend-app:latest $ECR_REPO:$IMAGE_TAG'
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REPO
                '''
            }
        }

        stage('Push to ECR') {
            steps {
                sh 'docker push $ECR_REPO:$IMAGE_TAG'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker pull $ECR_REPO:$IMAGE_TAG

                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true

                docker run -d -p $PORT:80 --name $CONTAINER_NAME $ECR_REPO:$IMAGE_TAG
                '''
            }
        }
    }
}
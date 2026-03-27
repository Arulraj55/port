pipeline {
    agent any

    environment {
        ECR_REPO = "244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app"
    }

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t frontend-app .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag frontend-app:latest $ECR_REPO:latest'
            }
        }

        stage('Push to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region ap-south-1 | \
                docker login --username AWS --password-stdin 244005320152.dkr.ecr.ap-south-1.amazonaws.com
                docker push $ECR_REPO:latest
                '''
            }
        }
    }
}
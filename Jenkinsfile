pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t frontend-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f frontend || true
                docker run -d -p 8082:80 --name frontend frontend-app
                '''
            }
        }
    }
}
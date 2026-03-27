pipeline {
    agent any

    environment {
        AWS_ACCOUNT_ID = "244005320152"
        REGION = "ap-south-1"
        REPO_NAME = "frontend-app"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Build Image') {
            steps {
                sh '''
                docker build -t $REPO_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Tag Image') {
            steps {
                sh '''
                docker tag $REPO_NAME:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Push to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
                docker push $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker pull $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:$IMAGE_TAG

                docker stop frontend || true
                docker rm frontend || true

                docker run -d -p 8082:80 --restart always --name frontend \
                $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker system prune -f'
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                sleep 5
                curl -f http://localhost || exit 1
                '''
            }
        }

        stage('Rollback') {
            when {
                expression { currentBuild.currentResult == 'FAILURE' }
            }
            steps {
                sh '''
                echo "Rolling back..."
                docker stop frontend || true
                docker rm frontend || true
                docker run -d -p 8082:80 244005320152.dkr.ecr.ap-south-1.amazonaws.com/frontend-app:7
                '''
            }
        }
    }
}
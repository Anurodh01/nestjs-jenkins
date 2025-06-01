pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/Anurodh01/nestjs-jenkins',
                credentialsId: 'github-creds'
            }
        }

        stage('Build') {
            steps {
                sh 'echo Building the project...'
                // Add your build commands here
            }
        }

        stage('Test') {
            steps {
                sh 'echo Running tests...'
                // Add test commands here
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deploying...'
                // Deploy or Docker build/push logic here
            }
        }
    }
}

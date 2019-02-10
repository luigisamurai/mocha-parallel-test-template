pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install --unsafe-perm=true --allow-root'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
    }
}

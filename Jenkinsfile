pipeline {
    agent {
        docker {
            image 'node' 
        }
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

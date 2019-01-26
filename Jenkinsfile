pipeline {
    agent {
        docker {
            image 'node:8-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh "printf '//registry.npmjs.org/:_authToken=${LABS_NPM_TOKEN}' > ~/.npmrc"
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test' 
            }
        }
    }
}

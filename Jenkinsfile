pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
    }
    parameters {
        string(
            name: 'DEPLOY_TO',
            defaultValue: 'Mr Jenkins',
            description: 'Who should I say hello to?'
        )
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Check') {
            when {
                environment name: 'DEPLOY_TO', value: 'production'
            }
            steps {
                echo "Hello ${params.DEPLOY_TO}"
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
    }
}

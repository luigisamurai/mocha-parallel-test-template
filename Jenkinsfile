def httpRequestTo = httpRequest url: 'https://www.openenglish.com/', validResponseCodes: '200:404'

pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
        DEPLOY = "${httpRequestTo.status}"
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Check') {
            steps {
                echo "Hello ${params.DEPLOY_TO}"
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            when {
                environment name: 'DEPLOY', value: '200'
            }
            steps {
                echo "Deploying .......... ${DEPLOY}"
            }
        }
    }
}

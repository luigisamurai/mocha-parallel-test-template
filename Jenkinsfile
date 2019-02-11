def httpRequestTo = httpRequest url: 'https://www.openenglish.com/', validResponseCodes: '200:404'

pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
        STATUS_APP = "${httpRequestTo.status}"
    }
    parameters {
        password(
            name: 'PASSWORD',
            defaultValue: '',
            description: 'Enter a password to deploy to production'
        )
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
                 allOf {
                    environment name: 'STATUS_APP', value: '200'
                    environment name: 'PASSWORD', value: "${DEPLOY_PWD}"
                 }
            }
            steps {
                echo "Deploying .......... ${DEPLOY}"
            }
        }
    }
}

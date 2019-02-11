def response = httpRequest 'https://www.openenglish.com/'

pipeline {
    agent {
        docker {
            image 'node' 
        }
    }
    environment {
        HOME = '.'
        DEPLOY = response.status
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
            }
        }
        stage('Check') {
            def response = httpRequest 'http://localhost:8080/jenkins/api/json?pretty=true'
        println("Status: "+response.status)
        println("Content: "+response.content)
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
                environment name: 'DEPLOY_TO', value: '200'
            }
            steps {
                echo "Deploying .......... ${DEPLOY}"
            }
        }
    }
}

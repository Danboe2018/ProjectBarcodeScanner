pipeline {
    agent {
        label 'android'
    }
    options {
        timeout(time: 15, unit: 'MINUTES') 
    }
    stages {
        stage("Clean"){
            steps {
                echo 'Cleaning...'
                sh 'git reset --hard HEAD'
                sh 'cd android ; ./gradlew clean'
                sh 'rm -rf node_modules'
                sh 'yarn cache clean'
            }
        }
        stage("Project Install") {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build Android') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building Android..'
                    sh 'npm install'
                    sh 'react-native run-android --verbose'
                    sh 'rm -rf node_modules && npm install'
                    sh 'cd android ; ./gradlew build'
                }
            }
        }
        stage('Build iOS') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building iOS..'
                    sh 'npm install'
                    sh 'cd ios ; pod install'
                    sh 'react-native run-ios --verbose'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                archiveArtifacts '**/*.apk'
            }
        }
    }
}

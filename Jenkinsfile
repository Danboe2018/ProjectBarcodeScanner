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
                sh 'yarn install'
                sh 'cd android ; ./gradlew clean'
            }
        }
        stage("Run Android") {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Running Android..'
                    sh 'react-native run-android --verbose'
                }
            }
        }
        stage('Build Android') {
            steps {
                 wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Building Android..'
                    sh 'cd android ; ./gradlew clean'
                    sh 'cd android ; ./gradlew build'
                }
            }
        }
        stage('Run iOS') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                    echo 'Running iOS..'
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

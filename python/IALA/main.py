# Arquivo Principal

import speech_recognition as sr

# Criar reconhecedor
r=sr.Recognizer()

# Abrir microfone para captura
with sr.Microphone() as source:
    while True:
        audio = r.listen(source) #Definir Microfone como fonte de audio
        print(r.recognize_google(audio, language='pt'))

#Importando Bibliotecas necessários
import pyautogui
import speech_recognition as sr
import sounddevice as sd
import wavio as wv
import pyttsx3
import webbrowser
import random
import os
import time


# Voz IALA
def iafala(fala):
    engine = pyttsx3.init() #iniciar
    engine.say(fala) #Conteúdo de fla
    engine.runAndWait()

iafala("Olá mozão, eu sou a inteligência artificial criada pelo meu mestre denominado Diego. Minha função é te dar amor e carinho quando o meu mestre bater as botas.")

def gravarVoz():
    freq = 48000
    duration = 5
    gravacao = sd.rec(int(duration*freq),
                        samplerate=freq, channels=2)
    print("Comece a falar!")
    sd.wait()
    wv.write('minhavoz.mp3', gravacao, freq, sampwith=2)
    print('Ok, processando...')

while True:
    def pesquisaggl():
        frase = fala
        search = frase.replace('Pesquisar', '')
        search2 = search.replace('pesquisar', '')
        webbrowser.open(f'https://www.google.com/search?q= {search2}')
    gravarVoz()
    r = sr.Recognizer
    filename = 'minhavoz.mp3'
    with sr.AudioFile(filename) as source:
        audio_data = r.record(source)
        text = r.recognize_google(audio_data, language='pt-br')
        print('Você disse: {text}')
    fala = text

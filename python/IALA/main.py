#Importando Bibliotecas necessários
import pyautogui
import sounddevice as sd #Gravador Voz
import wavio as wv # Leitura e gravação de arquivo .WAV
import speech_recognition as sr #Conversor de audio em texto
import pyttsx3 # Fala IALA
import webbrowser # Navegação Web
import random
import os
import time



# Funções ----------------------------------------------------------

# Gravação voz usuário
def gravarVoz():
    #Definindo configurações padrão de audio (Sound Device)
    frequenciaAudio = 48000
    sd.default.samplerate = frequenciaAudio
    sd.default.channels = 2
    # sd.default.sampwidth = 2
    duration = 5
    
    gravacao = sd.rec(int(duration*frequenciaAudio),)
    print("Comece a falar!")
    sd.wait()
    wv.write('minhavoz.wav', gravacao, frequenciaAudio, sampwidth=2)
    print('Ok, processando...')

# Voz IALA
def vozIA(fala):
    engine = pyttsx3.init() #iniciar
    engine.say(fala) #Conteúdo de fla
    engine.runAndWait()

# Navegação Web
def navegacaoWeb(fala):
    frase = fala
    print(f'debug {fala}')
    search = frase.replace('Ir para', '')
    webbrowser.open(f'https://www.google.com/search?q= {search}')

def ConverterAudioEmTexto():
    # Este Bloco irá Converter Voz em Texto
    r = sr.Recognizer()
    filename = 'minhavoz.wav'
    with sr.AudioFile(filename) as source:
        global fraseConvertida 
        audio_data = r.record(source)
        text = r.recognize_google(audio_data, language='pt-br')
        print(f'Você disse: {text}')
        fraseConvertida = text
        # return fraseConvertida

def respostaIA(fala):
  
    if fala == 'Bom dia':
        vozIA('Bom dia para você também!')
    
    elif 'Ir para' in fala:
        navegacaoWeb(fala)
    
    elif fala == 'Obrigado':
        vozIA('De nada, é sempre um prazer em poder te ajudar macho!')
    
    elif fala == 'obrigado':
        vozIA('De nada, é sempre um prazer em poder te ajudar macho!')
      
    elif fala == 'Obrigada':
        vozIA('De nada, é sempre um prazer em poder te ajudar femea!')
    
    elif fala == 'obrigada':
        vozIA('De nada, é sempre um prazer em poder te ajudar femea!')
    
    elif fala == 'Test':
        vozIA('deu bom')

#Iniciar ----------------------------------------------------------
while True:
    modoConversa = input(str('Deseja conversar por texto ou voz? \n'))

    if modoConversa == 'voz':
        # Iniciar Voz
        gravarVoz()
        ConverterAudioEmTexto()
        respostaIA(fraseConvertida)

    elif modoConversa == 'texto':
        perguntaUsuario = input(str('Digite sua dúvida \n'))
        respostaIA(perguntaUsuario)

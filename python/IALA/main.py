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
    print(f'debug {fala}')
    
    if 'Ir para' in fala:
        pesquisa = fala.replace('Ir para', '')
        webbrowser.open(f'https://www.google.com/search?q= {pesquisa}')

    else:
        pesquisa = fala.replace('ir para', '')
        webbrowser.open(f'https://www.google.com/search?q= {pesquisa}')

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
    print(f'debug {fala}')
    if fala == 'Bom dia' or fala == 'bom dia':
        resposta = 'Bom dia para você também!'
        print(resposta)
        vozIA(resposta)
    
    elif 'Ir para' in fala or 'ir para' in fala:
        navegacaoWeb(fala)
    
    elif fala == 'Obrigado' or fala == 'obrigado' or fala == 'Obrigada' or fala == 'obrigada':
        resposta = 'De nada, é sempre um prazer em poder te ajudar!'
        print(resposta)
        vozIA(resposta)
    
    elif fala == 'parar' or fala == 'Parar':
        resposta = 'Tudo bem, se precisar de novo é só me chamar!'
        print(resposta)
        vozIA(resposta)
        exit()

    elif fala == 'tudo bem' or fala == 'Tudo bem':
        resposta = 'Estou sim'
        print(resposta)
        vozIA(resposta)

#Iniciar ----------------------------------------------------------
while True:
    
    # Escolha do modo da conversa (texto ou voz)
    modoConversa = input(str('Deseja conversar por texto ou voz? Digite `parar` para fechar o programa\n'))
    
    if modoConversa == 'parar' or modoConversa == 'Parar': print('Tudo bem, se precisar de novo é só me chamar!'), exit()
    
    elif modoConversa == 'voz' or modoConversa == 'Voz':
        # Iniciar Voz
        gravarVoz()
        ConverterAudioEmTexto()
        respostaIA(fraseConvertida)

    elif modoConversa == 'texto' or modoConversa == 'Texto':
        perguntaTextoUsuario = input(str('Digite sua dúvida \n'))
        respostaIA(perguntaTextoUsuario)
        
        if perguntaTextoUsuario == 'parar' or perguntaTextoUsuario == 'Parar':
            respostaIA(perguntaTextoUsuario)
            exit()

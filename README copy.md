
## **Curso de An�lise e Desenvolvimento de Sistemas - UNISENAC - 2024/1**
## **Integrantes**
Jennifer Schwanz Torchelsen e Jessica Gasque
## **Orientador**
�ngelo Luz

## **Projeto de Desenvolvimento Wise Share**
## **Motiva��o**
Atualmente existem v�rias plataformas de cursos online que oferecem conhecimentos nas mais diversas �reas, por�m notamos falta de um suporte adequado para esclarecimento de d�vidas quanto aos cursos ofertados. Pensando nessa dor (n�o ter com quem tirar nossas d�vidas relacionadas a campos espec�ficos de conhecimentos), pensamos em desenvolver uma plataforma em que profissionais das mais diversas �reas possam ofertar mentorias a pessoas que precisam de aux�lio ou instru��o.

## **Justificativa**
Pode-se justificar esse ponto citando exemplos de plataformas j� estabelecidas no mercado, onde os usu�rios frequentemente compram cursos, completam todas as aulas propostas, por�m, enfrentam uma falta de intera��o direta com o profissional respons�vel pelo curso. Isso muitas vezes resulta em d�vidas n�o esclarecidas ao final do curso.

## **Evid�ncias**

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<table style="width: 100%; border-collapse: collapse; border: 2px solid black;">
    <thead>
        <tr>
            <th style="background-color: #FF6A16; border: 1px solid black; padding: 8px;">Evidencias</th>
            <th style="background-color: #FF6A16; border: 1px solid black; padding: 8px;">Wise Share</th>
            <th style="background-color: #FF6A16; border: 1px solid black; padding: 8px;">Udemy</th>
            <th style="background-color: #FF6A16; border: 1px solid black; padding: 8px;">TreinaWeb</th>
            <th style="background-color: #FF6A16; border: 1px solid black; padding: 8px;">Awari</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid black; padding: 8px;">Mentorias</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
        </tr>
        <tr>
            <td>Gratuidade de Material</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 8px;">Formato de video um a um</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
        </tr>
        <tr>
            <td style="border: 1px solid black; padding: 8px;">WorkShop</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
        </tr>
        <tr>
            <td>Aluno como prioridade no agendamento</td>
            <td style="border: 1px solid black; padding: 8px;">v</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
            <td style="border: 1px solid black; padding: 8px;">x</td>
        </tr>
    </tbody>
</table>

</body>
</html>


## **Requisitos Funcionais**

- RF01 - P�gina Inicial Descritiva:
	- O sistema deve fornecer uma p�gina inicial acess�vel que apresente uma explica��o concisa sobre suas funcionalidades e prop�sito.
- RF02 - Cadastro de Alunos:
	- Na p�gina inicial, os usu�rios novos identificados como alunos devem ter acesso a um bot�o de cadastro que lhes permita registrar informa��es b�sicas para ingresso no sistema.
- RF03 - Cadastro de Mentores:
	- Na p�gina inicial, os usu�rios novos identificados como mentores devem ter acesso a um bot�o de cadastro que lhes permita registrar informa��es necess�rias para atuar como mentores no sistema.
- RF04 - Informa��es de Cadastro para Alunos:
	- Durante o processo de cadastro, os alunos devem fornecer nome, foto, CPF, email, n�mero de telefone (WhatsApp), �rea de interesse, profiss�o, descri��o de objetivos profissionais e expectativa da plataforma e criar uma senha de acesso.
- RF05 - Informa��es de Cadastro para Mentores:
	- Durante o processo de cadastro, os mentores devem fornecer nome, foto, CPF, email, n�mero de telefone (WhatsApp), �rea de interesse, perfil do LinkedIn ou comprova��o de experi�ncia profissional, breve descri��o de experi�ncia profissional e criar uma senha de acesso.
- RF06 - Login de Alunos:
	- O sistema deve fornecer campos de entrada de email e senha para permitir que os alunos acessem suas contas.
- RF07 - Login de Mentores:
	- O sistema deve fornecer campos de entrada de email e senha para permitir que os mentores acessem suas contas.
- RF08 - Agendamento de Mentoria por Alunos:
	- Alunos autenticados no sistema devem ter a capacidade de visualizar os perfis dos mentores e agendar sess�es de mentoria atrav�s de um bot�o de agendamento ou informa��es dispon�vel nos cards de listagem de mentores.
- RF09 - Agendamento de Hor�rio por Alunos:
	- Alunos autenticados no sistema devem poder selecionar hor�rios dispon�veis na agenda dos mentores para agendar sess�es de mentoria.

## **Requisitos N�o Funcionais**

- RN01 - Usabilidade f�cil e entend�vel
- RN02 - Desempenho seja eficiente e r�pido
- RN03 - Confiabilidade de o software n�o gerar falhas
- RN04 - Utiliza��o de banco de dados relacional
- RN05 - Utiliza��o de Tecnol�gias atualizadas

## **Prototipa��o**

**Aqui voc� encontra informa��es de como est� sendo feito a prototipa��o do sistema**

Clique aqui: [Figma do Projeto](https://www.figma.com/file/4Uma6eCfZvT1jb520UpXxY/Untitled?type=design&node-id=0-1&mode=design&t=LJuWDpqvhQIMUvum-0)

## Gest�o de Projeto

**Aqui voc� encontra informa��es sobre o gerenciamento do projeto**

Clique aqui: [Gest�o de Projeto - Trello](https://trello.com/b/4ovTkcPF/projeto-de-desenvolvimento)

## Apresenta��o

**Aqui voc� encontra informa��es sobre a apresenta��o do projeto**

Clique aqui: [Apresenta��o - Canva](https://www.canva.com/design/DAGByI8_ZXo/4qMNh22r-GaEJxK4qXYf3w/edit?utm_content=DAGByI8_ZXo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
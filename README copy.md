
## **Curso de Análise e Desenvolvimento de Sistemas - UNISENAC - 2024/1**
## **Integrantes**
Jennifer Schwanz Torchelsen e Jessica Gasque
## **Orientador**
Ângelo Luz

## **Projeto de Desenvolvimento Wise Share**
## **Motivação**
Atualmente existem várias plataformas de cursos online que oferecem conhecimentos nas mais diversas áreas, porém notamos falta de um suporte adequado para esclarecimento de dúvidas quanto aos cursos ofertados. Pensando nessa dor (não ter com quem tirar nossas dúvidas relacionadas a campos específicos de conhecimentos), pensamos em desenvolver uma plataforma em que profissionais das mais diversas áreas possam ofertar mentorias a pessoas que precisam de auxílio ou instrução.

## **Justificativa**
Pode-se justificar esse ponto citando exemplos de plataformas já estabelecidas no mercado, onde os usuários frequentemente compram cursos, completam todas as aulas propostas, porém, enfrentam uma falta de interação direta com o profissional responsável pelo curso. Isso muitas vezes resulta em dúvidas não esclarecidas ao final do curso.

## **Evidências**

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

- RF01 - Página Inicial Descritiva:
	- O sistema deve fornecer uma página inicial acessível que apresente uma explicação concisa sobre suas funcionalidades e propósito.
- RF02 - Cadastro de Alunos:
	- Na página inicial, os usuários novos identificados como alunos devem ter acesso a um botão de cadastro que lhes permita registrar informações básicas para ingresso no sistema.
- RF03 - Cadastro de Mentores:
	- Na página inicial, os usuários novos identificados como mentores devem ter acesso a um botão de cadastro que lhes permita registrar informações necessárias para atuar como mentores no sistema.
- RF04 - Informações de Cadastro para Alunos:
	- Durante o processo de cadastro, os alunos devem fornecer nome, foto, CPF, email, número de telefone (WhatsApp), área de interesse, profissão, descrição de objetivos profissionais e expectativa da plataforma e criar uma senha de acesso.
- RF05 - Informações de Cadastro para Mentores:
	- Durante o processo de cadastro, os mentores devem fornecer nome, foto, CPF, email, número de telefone (WhatsApp), área de interesse, perfil do LinkedIn ou comprovação de experiência profissional, breve descrição de experiência profissional e criar uma senha de acesso.
- RF06 - Login de Alunos:
	- O sistema deve fornecer campos de entrada de email e senha para permitir que os alunos acessem suas contas.
- RF07 - Login de Mentores:
	- O sistema deve fornecer campos de entrada de email e senha para permitir que os mentores acessem suas contas.
- RF08 - Agendamento de Mentoria por Alunos:
	- Alunos autenticados no sistema devem ter a capacidade de visualizar os perfis dos mentores e agendar sessões de mentoria através de um botão de agendamento ou informações disponível nos cards de listagem de mentores.
- RF09 - Agendamento de Horário por Alunos:
	- Alunos autenticados no sistema devem poder selecionar horários disponíveis na agenda dos mentores para agendar sessões de mentoria.

## **Requisitos Não Funcionais**

- RN01 - Usabilidade fácil e entendível
- RN02 - Desempenho seja eficiente e rápido
- RN03 - Confiabilidade de o software não gerar falhas
- RN04 - Utilização de banco de dados relacional
- RN05 - Utilização de Tecnológias atualizadas

## **Prototipação**

**Aqui você encontra informações de como está sendo feito a prototipação do sistema**

Clique aqui: [Figma do Projeto](https://www.figma.com/file/4Uma6eCfZvT1jb520UpXxY/Untitled?type=design&node-id=0-1&mode=design&t=LJuWDpqvhQIMUvum-0)

## Gestão de Projeto

**Aqui você encontra informações sobre o gerenciamento do projeto**

Clique aqui: [Gestão de Projeto - Trello](https://trello.com/b/4ovTkcPF/projeto-de-desenvolvimento)

## Apresentação

**Aqui você encontra informações sobre a apresentação do projeto**

Clique aqui: [Apresentação - Canva](https://www.canva.com/design/DAGByI8_ZXo/4qMNh22r-GaEJxK4qXYf3w/edit?utm_content=DAGByI8_ZXo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
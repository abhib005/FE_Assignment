# FE_Assignment

Created a react poll widget app which can be configured within a Web Page
Can either add a question and options via the widget or can pass a questions & options object as props to App component, eg :
```
<App
      {...{
        question: "How you feel today?",
        options: [
          "Brilliant! I have so much energy",
          "Always can be worse.",
          "Please, end my misery.",
        ],
      }}
    />
```

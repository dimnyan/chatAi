/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import Markdown from "react-markdown";
import styles from "./Chat.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatComponent = () => {
  const chatTitle = "The First Chat";
  const chats = [
    { id: 1, sender: "prompt", message: "hi", timestamp: "11:32" },

    {
      id: 2,
      sender: "response",
      message: "Hello there! I am your AI assistant! what can i help you with?",
      timestamp: "11:32",
    },
    {
      id: 3,
      sender: "prompt",
      message: "Make me a simple Java code",
      timestamp: "11:32",
    },

    {
      id: 4,
      sender: "response",
      message: `Sure! Here a simple Java code:

~~~java
System.out.println("Hello, world!");
~~~
`,
      timestamp: "11:32",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>{chatTitle}</h2>
      <div className={styles.chatContainer}>
        {chats.map((i) =>
          i.sender === "response" ? (
            <div key={i.id} className={styles.response}>
              <Markdown
                children={i.message}
                components={{
                  code(props) {
                    const { children, className, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter
                        {...rest}
                        PreTag="div"
                        language={match[1]}
                        style={dracula}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...rest} className={className}>
                        {i.message}
                      </code>
                    );
                  },
                }}
              />
              <p className={styles.chatResponseDate}>{i.timestamp}</p>
            </div>
          ) : i.sender === "prompt" ? (
            <div key={i.id} className={styles.prompt}>
              <p className={styles.chatPromptText}>{i.message}</p>
              <p className={styles.chatPromptDate}>{i.timestamp}</p>
            </div>
          ) : null
        )}
        <textarea type="text" className={styles.inputChat} />
      </div>
    </div>
  );
};

export default ChatComponent;

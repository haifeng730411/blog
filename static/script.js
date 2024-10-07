const questions = [
    {
        "title": "如何创建免费版本的ABP分离模块?",
        "content": "由于ABP最近官方大改革，我们打开ABPIO 官方会发现通过CLI创建模板的时候不能创建Tiered类型的了 就是创建一个分离的解决方案，其中Web和Http API层是在物理上是分开的。如果不分离，则创建一个分层的解决方案，它不那么复杂。这合理吗？",
        "author": "tokengo",
        "date": "2024-10-07 01:21",
        "views": 16
    },
    {
        "title": "全网最适合入门的面向对象编程教程：56 Python字符串与序列化-正则表达式和re模块应用",
        "content": "Python 的 re 模块提供了强大的正则表达式操作功能，用于在字符串中搜索、匹配、替换等操作。正则表达式是一种用于匹配字符串的模式，通过正则表达式，可以轻松地查找指定模式的字符串片段。",
        "author": "FreakStudio",
        "date": "2024-10-07 00:29",
        "views": 17
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();

    document.getElementById('questionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuestion();
    });
});

function loadQuestions() {
    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';
    questions.forEach(question => {
        const questionElement = createQuestionElement(question);
        questionsContainer.appendChild(questionElement);
    });
}

function createQuestionElement(question) {
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `
        <h2>${question.title}</h2>
        <p>${question.content}</p>
        <div class="meta">
            <span>${question.author}</span> - 
            <span>${question.date}</span> - 
            <span>浏览: ${question.views}</span>
        </div>
    `;
    return questionElement;
}

function submitQuestion() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newQuestion = {
        title: title,
        content: content,
        author: "匿名用户",
        date: new Date().toLocaleString(),
        views: 0
    };

    questions.unshift(newQuestion);
    loadQuestions();
    document.getElementById('questionForm').reset();
    alert('问题提交成功！');
}
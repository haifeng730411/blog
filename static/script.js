const questions = [
    {
        "title": "上海内环高架“年轻化”工程三期启动",
        "content": "上海于2024年7月27日启动内环高架“年轻化”工程三期，涉及沪太路至中山北二路段，总长约4.72公里。此次工程旨在提升设施服务功能、运营安全和智能化水平，同时优化交通组织，减少施工对交通的影响。施工将分两个阶段进行，预计年底完成。",
        "author": "tokengo",
        "date": "2024-10-07 01:21",
        "views": 16
    },
    {
        "title": "工程范围:",
        "content": "上海内环高架“年轻化”工程三期于2024年7月27日启动，涉及沪太路至中山北二路段，总长约4.72公里。",
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
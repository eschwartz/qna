let model;

(async function() {
    document.getElementById('billTextContainer').textContent = billText;

    // load the model
    console.log('loading model....');
    model = await qna.load();
    console.log('loading model.... done.');


    // Handle form submit
    document.getElementById('questionForm').onsubmit = async (e) => {
        e.preventDefault();

        const questionText = document.getElementById('question').value;
        const answers = await ask(questionText);
        console.log(answers);

        renderAnswers(answers);
    }

})()
    .catch(err => {
        console.error(err);
        document.getElementById('errorMsg').textContent = err.stack; 
    });

function renderAnswers(answers) {
    // Render results
    document.getElementById('results').innerHTML = `
        <ul>
            ${answers.map(ans => `
                <li>
                    <pre>
                    ...${ans.beforeText}<strong>${ans.text}</strong>${ans.afterText}... 
                    </pre>
                    <i>score: ${ans.score.toFixed(2)}</i>
                </li>
            `).join('\n')}
        </ul>
    `;
}

async function ask(question) {
    console.log(`asking: ${question}`);
    let answers = await model.findAnswers(question, billText);
    console.log('asking complete', answers);

    // get context from the bill
    const buffer = 300;
    return answers.map(ans => ({
        ...ans,
        beforeText: billText.slice(ans.startIndex - buffer, ans.startIndex + 1),
        afterText: billText.slice(ans.endIndex + 1, ans.startIndex + buffer),
    }));
}
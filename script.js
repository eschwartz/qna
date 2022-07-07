let model;
let promptEl = document.getElementById('prompt');

(async function() {
    document.getElementById('billTextContainer').textContent = billText;

    // Disable submit until model loaded
    document.getElementById('submitBtn').disabled = true;

    // load the model
    promptEl.textContent = 'loading model....';
    model = await qna.load();
    promptEl.textContent = 'loading model.... done.';

    // Disable submit until model loaded
    document.getElementById('submitBtn').disabled = false;


    // Handle form submit
    document.getElementById('questionForm').onsubmit = async (e) => {
        e.preventDefault();

        promptEl.textContent = 'asking question....';
        const questionText = document.getElementById('question').value;
        // give it a moment to render the prompt
        // before maxing out the CPU
        await new Promise(res => setTimeout(res, 10));
        const answers = await ask(questionText);
        console.log(answers);
        promptEl.textContent = `
            asking question.... complete! 
            Found ${answers.length} answers
        `;

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
                    <details>
                        <summary>
                            <strong>${ans.text} </strong> 
                            <div>score: ${ans.score.toFixed(2)}</div>
                        </summary>
                        <pre>
                        ...${ans.beforeText}<strong>${ans.text}</strong>${ans.afterText}...
                        </pre>
                    </details>
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
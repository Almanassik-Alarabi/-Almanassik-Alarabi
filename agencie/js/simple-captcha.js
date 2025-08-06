// كابتشا بسيطة: سؤال رياضي عشوائي
function createSimpleCaptcha(containerId, inputId, lang) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // توليد رقمين عشوائيين
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    // حفظ النتيجة في خاصية على العنصر
    container.dataset.captchaAnswer = (a + b).toString();
    // نص السؤال
    let question = lang === 'ar' ? `ما نتيجة ${a} + ${b} ؟` : `What is ${a} + ${b}?`;
    // بناء الكابتشا
    container.innerHTML = `
        <label style="font-size:15px;color:#333;">${question}</label>
        <input type="text" id="${inputId}" class="form-style" style="width:90px;display:inline-block;margin-right:8px;" placeholder="..." autocomplete="off">
    `;
}

function validateSimpleCaptcha(containerId, inputId) {
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    if (!container || !input) return false;
    const answer = container.dataset.captchaAnswer;
    return input.value.trim() === answer;
}

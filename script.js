function abrirFormulario() {
    // COLE AQUI O URL QUE VOCÊ COPIOU NO PASSO 2
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwdj9T7oh7ODkBRLUL5ZbBSd8jXsyizmTmze4lCotx82MTVXTJXQvl21SDIBQO8wO4/exec'; 
    
    const htmlForm = `
        <html>
        <body style="font-family: sans-serif; background-color: white; padding: 40px; color: #db7093;">
            <h2 style="color: #ff69b4;">Cadastro Solar</h2>
            <form id="meuForm" style="display: flex; flex-direction: column; gap: 15px;">
                <label><b>Nome:</b></label>
                <input type="text" name="nome" required style="padding: 10px; border-radius: 8px; border: 1px solid #ffb6c1;">
                
                <label><b>Idade:</b></label>
                <input type="number" name="idade" required style="padding: 10px; border-radius: 8px; border: 1px solid #ffb6c1;">
                
                <label><b>Telefone:</b></label>
                <input type="tel" name="telefone" required style="padding: 10px; border-radius: 8px; border: 1px solid #ffb6c1;">
                
                <button type="submit" id="btnEnviar" style="background-color: #ff69b4; color: white; border: none; padding: 12px; border-radius: 10px; font-weight: bold; cursor: pointer;">Enviar para a Planilha</button>
            </form>

            <script>
                const form = document.getElementById('meuForm');
                form.addEventListener('submit', e => {
                    e.preventDefault();
                    const btn = document.getElementById('btnEnviar');
                    btn.disabled = true;
                    btn.innerText = 'Gravando...';

                    fetch('${scriptURL}', { 
                        method: 'POST', 
                        body: new FormData(form),
                        mode: 'no-cors' 
                    })
                    .then(() => {
                        alert('Dados enviados com sucesso para a planilha!');
                        form.reset();
                        btn.disabled = false;
                        btn.innerText = 'Enviar para a Planilha';
                    })
                    .catch(error => {
                        alert('Erro ao enviar!');
                        console.error(error);
                        btn.disabled = false;
                    });
                });
            <\/script>
        </body>
        </html>
    `;
    const blob = new Blob([htmlForm], { type: 'text/html' });
    document.getElementById('visor').src = URL.createObjectURL(blob);
}